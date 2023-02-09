import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:123@alura.hf1ikro.mongodb.net/alura-node")
// mongoose.set('strictQuery', false)
let db = mongoose.connection

export default db
