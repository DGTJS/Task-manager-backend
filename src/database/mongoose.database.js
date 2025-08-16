import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://Task-manager:${process.env.DATABASE_PASSWORD}@task-manager.omjicff.mongodb.net/?retryWrites=true&w=majority&appName=Task-manager`
        );
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectToDatabase;
