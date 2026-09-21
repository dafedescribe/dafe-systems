import { randomBytes } from 'node:crypto';
import { REDIRECT_URI, STATE_COOKIE, missingEnvHtml, sendHtml } from './_oauth.js';

export default async function handler(req, res) {
  const CLIENT_ID = process.env.GITHUB_CLIENT_ID;

  if (!CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
    return sendHtml(res, 500, missingEnvHtml());
  }

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
}
