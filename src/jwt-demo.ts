import jwt from 'jsonwebtoken';

// Secret keys
const ACCESS_SECRET = 'access-secret-key';
const REFRESH_SECRET = 'refresh-secret-key';

// Payload example
const payload = {
  userId: 1,
  username: 'notiUser',
};

// Generate Access Token (short-lived)
const accessToken = jwt.sign(payload, ACCESS_SECRET, { expiresIn: '15m' });

// Generate Refresh Token (long-lived)
const refreshToken = jwt.sign(payload, REFRESH_SECRET, { expiresIn: '7d' });

console.log('Access Token:', accessToken);
console.log('Refresh Token:', refreshToken);

// Decode without verifying (for testing on JWT.IO)
const decoded = jwt.decode(accessToken);
console.log('Decoded Payload:', decoded);
