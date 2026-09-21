import { chmod, readFile, writeFile } from 'node:fs/promises';
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const keys = ['GMAIL_USER', 'GMAIL_APP_PASSWORD', 'CONTACT_TO_EMAIL'];
const readline = createInterface({ input, output });

try {
  console.log('Gmail contact form setup');
  console.log('Create an app password at https://myaccount.google.com/apppasswords first.');
  console.log('Your normal Gmail password will not work here.\n');

  const gmailUser = (await readline.question('Gmail address that sends messages: ')).trim();
  const appPassword = (await readline.question('16-character Gmail app password: ')).replace(/\s/g, '');
  const contactToEmail = (await readline.question('Inbox that should receive inquiries: ')).trim();

  if (!gmailUser || !appPassword || !contactToEmail) {
    throw new Error('All three values are required. Nothing was written.');
  }

  const envValues = {
    GMAIL_USER: gmailUser,
    GMAIL_APP_PASSWORD: appPassword,
    CONTACT_TO_EMAIL: contactToEmail,
  };
  const envPath = `${process.cwd()}/.env.local`;
  let existing = '';
  try {
    existing = await readFile(envPath, 'utf8');
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }

  const remainingLines = existing
    .split(/\r?\n/)
    .filter((line) => line && !keys.some((key) => line.startsWith(`${key}=`)));
  const managedLines = keys.map((key) => `${key}=${JSON.stringify(envValues[key])}`);
  await writeFile(envPath, [...remainingLines, ...managedLines, ''].join('\n'), { mode: 0o600 });
  await chmod(envPath, 0o600);

  console.log('\nSaved .env.local. The local contact form is configured.');
  console.log('For production, add the same three variables in Vercel Project Settings → Environment Variables.');
} finally {
  readline.close();
}
