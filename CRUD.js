const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
const PORT = 5000;

const uri =
  "mongodb+srv://aliamir:12345@tasknow.m5256qt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

// Connect to the MongoDB database when the server starts
client.connect().then(() => {
  console.log("Connected to MongoDB");
});

// Example endpoint to fetch data from MongoDB
app.get("/api/modules", async (req, res) => {
  try {
    const database = client.db("Solarz");
    const collection = database.collection("modules");
    const data1 = await collection.find({}).toArray();
    console.log(data1[0]);
    res.json(data1);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Example endpoint to fetch data from MongoDB
app.get("/api/MetricsPlant1", async (req, res) => {
  try {
    const database = client.db("Solarz");
    const collection = database.collection("MetricsPlant1");
    const data2 = await collection.find({}).toArray();
    console.log(data2[0]);
    res.json(data2);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/DailyPlant1Generation", async (req, res) => {
  try {
    const database = client.db("Solarz");
    const collection = database.collection("DailyPlant1Generation");
    const data3 = await collection.find({}).toArray();
    console.log(data3[0]);
    res.json(data3);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Example endpoint to fetch data from MongoDB
app.get("/api/modules2", async (req, res) => {
  try {
    const database = client.db("Solarz");
    const collection = database.collection("modules2");
    const data4 = await collection.find({}).toArray();
    console.log(data4[0]);
    res.json(data4);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Example endpoint to fetch data from MongoDB
app.get("/api/MetricsPlant2", async (req, res) => {
  try {
    const database = client.db("Solarz");
    const collection = database.collection("MetricsPlant2");
    const data5 = await collection.find({}).toArray();
    console.log(data5[0]);
    res.json(data5);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/DailyPlant2Generation", async (req, res) => {
  try {
    const database = client.db("Solarz");
    const collection = database.collection("DailyPlant2Generation");
    const data6 = await collection.find({}).toArray();
    console.log(data6[0]);
    res.json(data6);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/FutureEstimations", async (req, res) => {
  try {
    const database = client.db("Solarz");
    const collection = database.collection("FutureEstimations");
    const data7 = await collection.find({}).toArray();
    console.log(data7[0]);
    res.json(data7);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/Plant1_Cleaning", async (req, res) => {
  try {
    const database = client.db("Solarz");
    const collection = database.collection("Plant1_Cleaning");
    const data8 = await collection.find({}).toArray();
    res.json(data8);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/Plant1_Maintainance", async (req, res) => {
  try {
    const database = client.db("Solarz");
    const collection = database.collection("Plant1_Maintainance");
    const data9 = await collection.find({}).toArray();
    res.json(data9);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/Plant2_Cleaning", async (req, res) => {
  try {
    const database = client.db("Solarz");
    const collection = database.collection("Plant2_Cleaning");
    const data10 = await collection.find({}).toArray();
    res.json(data10);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/Plant2_Maintainance", async (req, res) => {
  try {
    const database = client.db("Solarz");
    const collection = database.collection("Plant2_Maintainance");
    const data11 = await collection.find({}).toArray();
    res.json(data11);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Handle the root path with a simple message
app.get("/", (req, res) => {
  res.send("Welcome to your Express server!");
});

// Close the MongoDB connection when the server stops
process.on("SIGINT", () => {
  client.close().then(() => {
    console.log("Disconnected from MongoDB");
    process.exit(0);
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
