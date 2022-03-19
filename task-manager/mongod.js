// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
const { MongoClient, ObjectId } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";

const databaseName = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("error in connecting database", error);
    } else {
      console.log("database connected");
      const db = client.db(databaseName);
      const collection = db.collection("users");

        // updating one document
    //   collection
    //     .updateOne(
    //       { _id: new ObjectId("61c45409f358c89e4c39b4d7") },
    //       {
    //           $set: {
    //               age: "40",
    //               name:"raghu"
    //           },
    //       }
    //     )
    //     .then((result) => {
    //       console.log("updated : ", result);
    //     })
    //     .catch((err) => {
    //       throw err;
    //     });
        
        
        // updating many document
        // collection.updateMany({
        //     age:22
        // }, {
        //     $set: {
        //         name:"Ankita"
        //     }
        // }).then((result) => {
        //     console.log(result);
        //  }).catch((err) => {
        //      console.log(err);
        // })
        // deleting many document
        // collection.deleteMany({age:22}).then((result) => {
        //         console.log(result);
        //      }).catch((err) => {
        //          console.log(err);
        //     })
    }
  }
);
