import { HttpFunction } from '@google-cloud/functions-framework';

export const hello: HttpFunction = async (req, res) => {
  const timeStamp = new Date().toISOString();
  const message = `Hello from GCP function ${timeStamp}`;
  res.send(message);
};
