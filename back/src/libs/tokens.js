import jwt from "jsonwebtoken";

const secretKey = "secret_key";

function signToken(payload) {
  const token = jwt.sign(payload, secretKey, { expiresIn: "7d" });
  return token;
}

function verifyToken(headerToken, callback) {
  const token = headerToken.replace("Bearer ", "");

  jwt.verify(token, secretKey, (err, payload) => {
    callback(err, payload);
  });
}

const jToken = {
    signToken: signToken,
    verifyToken: verifyToken
};

export default jToken;