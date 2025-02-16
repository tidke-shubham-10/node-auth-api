const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  if (!user || !user.id || !user.email || !user.role) {
    throw new Error("Invalid user object");
  }

  const secretKey = process.env.JWT_SECRET;
  if (!secretKey) {
    throw new Error("Missing JWT_SECRET in environment variables");
  }

  const now = Math.floor(Date.now() / 1000); // Current timestamp in seconds

  const payload = {
    sub: user.id, 
    iss: process.env.CLIENT_ISSUER,
    aud: process.env.CLIENT_ID, 
    iat: now, 
    exp: now + 3600,
    
    // Custom claims
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(payload, secretKey, { algorithm: "HS256" });

  return {
    access_token: token,
    expires_in: 3600, // Always keep a static value for API consumers
    token_type: "Bearer",
    message: "SUCCESS",
    refresh_token: "", // Implement refresh token logic if needed
  };
};

module.exports = { generateToken };
