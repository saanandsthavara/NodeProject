import express from 'express';

export const register = async (req: express.Request, res: express.Response) => {
  try {
  } catch (error) {
    console.log('err', error);
    return res.sendStatus(400);
  }
};
