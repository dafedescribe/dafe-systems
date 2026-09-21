export const SITE = 'https://www.dafe.name.ng';
export const REDIRECT_URI = `${SITE}/api/auth/callback`;
export const STATE_COOKIE = 'gh_oauth_state';

export function providerHtml(status, payload) {
  const safe = JSON.stringify(payload).replace(/</g, '\\u003c');
  return `<!doctype html><html><body><script>
    window.opener.postMessage('authorization:github:${status}:${safe}', '${SITE}');
    window.close();
  </script></body></html>`;
}

export function sendHtml(res, code, html) {
  res.writeHead(code, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
}

export function missingEnvHtml() {
  return '<!doctype html><html><body>OAuth not configured (missing GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET).</body></html>';
}

export function readCookie(req, name) {
  const header = req.headers?.cookie ?? '';
  const found = header
    .split(';')
    .find((c) => c.trim().startsWith(`${name}=`));
  return found ? decodeURIComponent(found.split('=').slice(1).join('=')) : undefined;
}
