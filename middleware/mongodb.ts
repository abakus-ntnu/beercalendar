// import mongoose from 'mongoose';

// const connectionString = process.env.CONNECTION_STRING;

// const connectDB = handler => async (req, res) => {
//   if (mongoose.connections[0].readyState) {
//     return handler(req, res);
//   }
//   await mongoose.connect(connectionString, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
//   });
//   return handler(req, res);
// };

const connectDB = () => console.log("NEI");

export default connectDB;
