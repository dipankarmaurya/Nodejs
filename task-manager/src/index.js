const express = require("express");
require("./db/mongoose");
const cors = require('cors')
const userRouter = require('./router/user');
const taskRouter = require('./router/task');
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(taskRouter);

app.listen(5000, () => {
  console.log(`server is running on port ${port}`);
});
// const bcryptjs = require('bcryptjs') 
// let demo = async () => {
//   try {
//     let password="Dipu@123";
//     let newpas = await bcryptjs.hash(password,10);
//     console.log(await bcryptjs.compare(password,newpas));
//     console.log(newpas);
//   } catch (e) {
//     throw e;
//   }
 
// demo();
