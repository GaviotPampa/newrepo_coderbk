import {connect} from "mongoose";
import 'dotenv/config';
//connection local
/* const connectionString = 'mongodb://localhost:27017/ecommerce'; */

/* export const connectionString = ""; */

try {
  await connect(/* connectionString */
    process.env.MONGO_ATLAS_URL
  );
  console.log("🪁Connected to MongoDB");
} catch (error) {
  console.log("🚫Cannot connect to database:"+ error);
}
