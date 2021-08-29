const { MongoClient } = require('mongodb');
const fs = require('fs');
const url = `mongodb+srv://nihalmaddela:Ecom_127@cluster0.3ticg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(url);

const connect = async () => {
  // connect
  await client.connect();
  console.log('Connected successfully to server');

  // let db = client.db('insurance');
  // const data = fs.readFileSync('clients.json');
  //   const docs = JSON.parse(data.toString());
  //   db.collection('client').insertMany(docs, (err, result) => {
  //     if (err) throw err;
  //     console.log('Inserted docs:', result.insertedCount);
  //   });
}

module.exports = {
    connect,
    client
}