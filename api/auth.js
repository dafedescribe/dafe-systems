import { randomBytes } from 'node:crypto';

const SITE = 'https://www.dafe.name.ng';
const REDIRECT_URI = `${SITE}/api/auth/callback`;
const STATE_COOKIE = 'gh_oauth_state';

function providerHtml(status, payload) {
  const safe = JSON.stringify(payload).replace(/</g, '\\u003c');
  return `<!doctype html><html><body><script>
    window.opener.postMessage('authorization:github:${status}:${safe}', '${SITE}');
    window.close();
  </script></body></html>`;
}

function sendHtml(res, code, html) {
  res.writeHead(code, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
}

function readCookie(req, name) {
  const header = req.headers?.cookie ?? '';
  const found = header.split(';').find((c) => c.trim().startsWith(`${name}=`));
  return found ? decodeURIComponent(found.split('=').slice(1).join('=')) : undefined;
}

export default async function handler(req, res) {
  const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
  const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
  const url = new URL(req.url, SITE);

  if (!CLIENT_ID || !CLIENT_SECRET) {
    return sendHtml(res, 500, '<!doctype html><html><body>OAuth not configured (missing GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET).</body></html>');
  }

  if (url.pathname === '/api/auth') {
    const state = randomBytes(16).toString('hex');
    const authorize = new URL('https://github.com/login/oauth/authorize');
    authorize.searchParams.set('client_id', CLIENT_ID);
    authorize.searchParams.set('redirect_uri', REDIRECT_URI);
    authorize.searchParams.set('scope', 'public_repo');
    authorize.searchParams.set('state', state);
    res.writeHead(302, {
      Location: authorize.toString(),
      'Set-Cookie': `${STATE_COOKIE}=${state}; HttpOnly; Secure; SameSite=Lax; Max-Age=600; Path=/api/auth`,
    });
    res.end();
    return;
  }

  if (url.pathname === '/api/auth/callback') {
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    if (!code) return sendHtml(res, 400, providerHtml('error', { message: 'missing code' }));
    if (!state || state !== readCookie(req, STATE_COOKIE)) {
      return sendHtml(res, 400, providerHtml('error', { message: 'state mismatch' }));
    }
    let data;
    try {
      const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code,
          redirect_uri: REDIRECT_URI,
        }),
      });
      data = await tokenRes.json();
    } catch {
      return sendHtml(res, 502, providerHtml('error', { message: 'token exchange failed' }));
    }
    if (!data.access_token) {
      return sendHtml(res, 400, providerHtml('error', { message: 'token exchange failed' }));
    }
    return sendHtml(res, 200, providerHtml('success', { token: data.access_token, provider: 'github' }));
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('not found');
}
