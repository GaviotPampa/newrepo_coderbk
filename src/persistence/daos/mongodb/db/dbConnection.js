import {connect} from "mongoose";
import config from '../../../../config/config.js';

//connection local
/* const connectionString = 'mongodb://localhost:27017/ecommerce'; */

/* export const connectionString = ""; */

try {
  await connect(/* connectionString */
    config.MONGO_ATLAS_URL
  );
  console.log("🪁Connected to MongoDB");
} catch (error) {
  console.log("🚫Cannot connect to database dbConnection" +  error);
}
