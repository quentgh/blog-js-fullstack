import { Users } from "../models/users.js";
import jToken from "../libs/tokens.js";
import bcrypt from "bcrypt";

export async function subscribe(request, response) {
  const newUser = request.body;
  const emailChk = await Users.findOne({ email: newUser.email });
  const usernameChk = await Users.findOne({ username: newUser.username });

  const hashedPassword = await bcrypt.hash(newUser.password, 10);

  if (!newUser.email) {
    response
      .status(401)
      .json({ message: "Email is required." });
    return;
  }

  if (!newUser.username) {
    response
      .status(401)
      .json({ message: "Username is required." });
    return;
  }

  if (emailChk) {
    response
      .status(401)
      .json({ message: "Email already exist, please choose another one." });
    return;
  }

  if (usernameChk) {
    response
      .status(401)
      .json({ message: "Username already exist, please choose another one." });
    return;
  }

  await Users.create({
    email: newUser.email,
    username: newUser.username,
    password: hashedPassword,
    // article: newUser.article,
  });

  response.status(200).json({
    user: { email: newUser.email, username: newUser.username },
    message: "Subscription succeed, thx.",
  });
}

export async function login(request, response) {
  const { email, password } = request.body;

  const user = await Users.findOne({ email: email });

  if (!user) {
    response.status(404).json({ message: "User not found" });
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    response.status(401).json({ message: "Invalid password" });
    return;
  }

  const userToken = jToken.signToken({ id: user._id });
  response.status(200).json({
    user: { email: user.email, username: user.username },
    token: userToken,
  });
}

export async function getUser(request, response) {
  const headerToken = request.headers.authorization;

  jToken.verifyToken(headerToken, async (err, payload) => {
    if (err) {
      response.status(401).json({ message: "Invalid token" });
      return;
    }
    const user = await Users.findById(payload.id);
    response
      .status(200)
      .json({ data: { email: user.email, username: user.username } });
  });
}