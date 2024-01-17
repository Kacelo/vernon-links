import { Document, MongoClient, OptionalId } from "mongodb";

const handler = async (
  req: { method: string; body: OptionalId<Document> },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      send: { (arg0: { Message: string }): void; new (): any };
    };
  }
) => {
  const DATABASE_NAME = "FoodApp";
  const DATABASE_PASSWORD = "xQlRwl28ldaYe7Yy";

  if (req.method === "POST") {
    const client = await MongoClient.connect(
      `mongodb+srv://vernonkachelo:${DATABASE_PASSWORD}@linkedlistapp.vrbko4q.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db();
    const usersCollection = db.collection("users");
    await usersCollection.insertOne(req.body);

    client.close();

    res.status(201).send({ Message: "User inserted" });
  }
};

export default handler;
