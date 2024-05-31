const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.user}:${process.env.pass}@cluster0.i8uts9o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const productDb = client.db("productDb"); // 1) specific db creation
    const shoesCollection = productDb.collection("shoesCollection"); // 2) specific collection creation

    // *************** product routes

    app.post("/shoes", async (req, res) => {
      const shoesData = req.body; // 1) client bodyr vetore data pathay.
      const result = await shoesCollection.insertOne(shoesData); // 2) collection e insert hbe
      res.send(result); // 3) acknowledge holo kina check krlam
    });

    app.get("/shoes", async (req, res) => {
      const shoesData = shoesCollection.find(); // 1) collection thk find() krlam
      const result = await shoesData.toArray(); // 2) collected data gulak array te convert krlam
      res.send(result); // 3) response send kre dilam array data gula
    });

    app.get("/shoes/:id", async (req, res) => {
      const id = req.params.id;
      const result = await shoesCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    app.patch("/shoes/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      const result = await shoesCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: data }
      );
      res.send(result);
    });

    app.delete("/shoes/:id", async (req, res) => {
      const id = req.params.id;
      const result = await shoesCollection.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    console.log("You successfully connected to MongoDB!");
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

app.listen(port, (req, res) => {
  console.log("App is listening on port: ", port);
});
