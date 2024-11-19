import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Use the same MongoDB URI from your .env file
const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/taxidb";

// Define a schema and model
const TestSchema = new mongoose.Schema({ name: String });
const TestModel = mongoose.model("Test", TestSchema);

const testInsertion = async () => {
  try {
    // Connect to the database
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB for testing...");

    // Insert a test document
    const testDocument = new TestModel({ name: "Sample Document" });
    await testDocument.save();
    console.log("Test document inserted successfully!");

    // Close the connection
    await mongoose.connection.close();
    console.log("Connection closed.");
  } catch (error) {
    console.error("Error during test insertion:", error.message);
  }
};

testInsertion();
