const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

function createToken(user) {
  const token = jwt.sign(
    {
      email: user?.email,
    },
    "secret",
    { expiresIn: "1h" }
  );
  return token;
}

function verifyToken(req, res, next) {
  const authToken = req.headers.authorization.split(" ")[1];
  const verify = jwt.verify(authToken, "secret");
  if (!verify?.email) return res.send({ message: "You are not authorized" });
  req.user = verify.email;
  next();
}

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
    const userDB = client.db("userDB"); // 1) specific db creation
    const userCollection = userDB.collection("userCollection"); // 2) specific collection creation

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

    app.patch("/shoes/:id", verifyToken, async (req, res) => {
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

    // *********** user routes

    app.post("/user", async (req, res) => {
      const data = req.body;
      const token = createToken(data);
      const isExist = await userCollection.findOne({ email: data.email });
      if (isExist) return res.send({ message: "Login Successfull", token });
      await userCollection.insertOne(data);
      res.send({ token });
    });

    // /user/get age rakhte hbe
    app.get("/user/get/:id", async (req, res) => {
      const id = req.params.id;
      const result = await userCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // /user/:email pore rakhte hbe
    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      const result = await userCollection.findOne({ email: email });
      res.send(result);
    });

    app.patch("/user/:email", async (req, res) => {
      const email = req.params.email;
      const userData = req.body;
      const result = await userCollection.updateOne(
        { email },
        { $set: userData },
        { upsert: true }
      );
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
