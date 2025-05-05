require("dotenv").config({ path: "backend/config/config.env" })
const DB = process.env.DB_LINK

console.log(DB);
