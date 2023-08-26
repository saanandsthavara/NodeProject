import express from 'express';
import { getUserByEmail, creteUser } from 'db/users';
import { authentication, random } from 'helpers';
export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      return res.status(400);
    }
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.sendStatus(400);
    }
    const salt = random();
    const user = await creteUser({
      email,
      username,
      authentication: { salt, password: authentication(salt, password) },
    });
    return res.status(200).json(user).end();
  } catch (error) {
    console.log('err', error);
    return res.sendStatus(400);
  }
};
