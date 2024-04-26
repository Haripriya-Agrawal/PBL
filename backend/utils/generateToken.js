// import  jwt  from "jsonwebtoken";

// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, {
//         expiresIn: '30d'
//     })
// }

// export default generateToken

// utils/generateToken.js
// utils/generateToken.js

import jwt from 'jsonwebtoken';

const JWT_SECRET_KEY = 'your-default-secret-key';

const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET_KEY, { expiresIn: '30d' }); // Example expiration time of 30 days
};

export default generateToken;
