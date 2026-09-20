const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const REDIRECT_URI = 'https://www.dafe.name.ng/api/auth/callback';

function providerHtml(status, payload) {
  const safe = JSON.stringify(payload).replace(/</g, '\\u003c');
  return `<!doctype html><html><body><script>
    window.opener.postMessage('authorization:github:${status}:${safe}', '*');
    window.close();
  </script></body></html>`;
}

export default async function handler(req, res) {
  const url = new URL(req.url, 'https://www.dafe.name.ng');
  if (url.pathname === '/api/auth') {
    const authorize = new URL('https://github.com/login/oauth/authorize');
    authorize.searchParams.set('client_id', CLIENT_ID);
    authorize.searchParams.set('redirect_uri', REDIRECT_URI);
    authorize.searchParams.set('scope', 'repo');
    res.writeHead(302, { Location: authorize.toString() });
    res.end();
    return;
  }
  if (url.pathname === '/api/auth/callback') {
    const code = url.searchParams.get('code');
    if (!code) {
      res.status(400).send(providerHtml('error', { message: 'missing code' }));
      return;
    }
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
    const data = await tokenRes.json();
    if (!data.access_token) {
      res.status(400).send(providerHtml('error', { message: 'token exchange failed' }));
      return;
    }
    res.send(providerHtml('success', { token: data.access_token, provider: 'github' }));
    return;
  }
  res.status(404).end();
}
