import mongoose from "mongoose";

export async function connect() {
  try {
    const mongodbUrl = process.env.MONGODB_URL; 

    if (!mongodbUrl) {
      throw new Error("MongoDB connection string is not defined in environment variables.");
    }

    // Connect to MongoDB Atlas
    await mongoose.connect(mongodbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: true,
      w: "majority", 
    });

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully to Atlas");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connection error:", err);
      process.exit(1); 
    });
  } catch (error) {
    console.log("Something went wrong while connecting to MongoDB Atlas!");
    console.error(error);
    process.exit(1); 
  }
}
