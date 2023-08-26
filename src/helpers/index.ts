import crypto from 'crypto';

// this file is used for authenticated purposes, which will help us in encrypt the password or generate random token.

const SECRET = 'SD-REST-API';

// creating a random token
export const random = () => crypto.randomBytes(128).toString('base64');

// creating an auth token
export const authentication = (salt: string, password: string) => {
  return crypto
    .createHmac('sha256', [salt, password].join('/'))
    .update(SECRET)
    .digest('hex');
};
