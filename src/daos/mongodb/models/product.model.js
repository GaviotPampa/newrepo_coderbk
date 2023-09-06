import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
//schema
const ProductSchema = new Schema({
  title: { type: String, 
           required: true, 
           index: true
          },
  description: { type: String },
  price: { type: Number, required: true },
  code: { type: String, 
          required: true,
          unique: true 
         },
  status: { type: Boolean, 
            required: true, 
            default: true 
          },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
});

ProductSchema.plugin(mongoosePaginate);

//modelo de product, recibe dos parametros la coleccion y el modelo
export const ProductModel = model("products", ProductSchema);
