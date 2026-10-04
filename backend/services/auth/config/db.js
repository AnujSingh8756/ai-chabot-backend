import mongoose from "mongoose";
const connectDB =async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB in auth service");
    
}
catch(error){
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with an error code
}
}

export default connectDB;