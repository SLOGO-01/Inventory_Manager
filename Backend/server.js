
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const port = 4000;

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
