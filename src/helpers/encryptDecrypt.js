var crypto = require("crypto");
const bcrypt = require("bcrypt-nodejs");

const algorithm = "aes-256-ctr";
const ENCRYPTION_KEY = Buffer.from(
  "FoCKvdLslUuB4y3EZlKate7XGottHski1LmyqJHvUhs=",
  "base64"
);
const IV_LENGTH = 16;

// crypto Encryption
const encryptString = (text) => {
  let iv = crypto.randomBytes(IV_LENGTH);
  let cipher = crypto.createCipheriv(
    algorithm,
    Buffer.from(ENCRYPTION_KEY, "hex"),
    iv
  );
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString("hex") + ":" + encrypted.toString("hex");
};

// crypto Decryption
const decryptString = (text) => {
  let textParts = text.split(":");
  let iv = Buffer.from(textParts.shift(), "hex");
  let encryptedText = Buffer.from(textParts.join(":"), "hex");
  let decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(ENCRYPTION_KEY, "hex"),
    iv
  );
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};
const createHash = (data) => {
  return bcrypt.hashSync(data, bcrypt.genSaltSync(10));
};

const compareHash = (data) => {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = {
  encryptString,
  decryptString,
  createHash,
  compareHash,
};
