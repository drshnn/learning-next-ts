// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = req.body;
  const client = await MongoClient.connect(
    "mongodb+srv://drshnn:drshnn@donestack.2qik3.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const blogCollection = db.collection("blog");
  const result = await blogCollection.insertOne(data);
  console.log(result);
  client.close();
}
