import { REDIRECT_URI, SITE, STATE_COOKIE, missingEnvHtml, providerHtml, readCookie, sendHtml } from '../_oauth.js';

export default async function handler(req, res) {
  const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
  const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

  if (!CLIENT_ID || !CLIENT_SECRET) {
    return sendHtml(res, 500, missingEnvHtml());
  }

  const url = new URL(req.url, SITE);
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
