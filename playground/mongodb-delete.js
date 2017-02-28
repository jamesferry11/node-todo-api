//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Tacos'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne

    // db.collection('Todos').deleteOne({text: 'Eat tacos'}).then((result) => {
    //     console.log(result);
    // });


    //fineOneAndDelete

    //  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    //
    //
    // db.close();

    // db.collection('Users').deleteMany({name: 'James'});

    // db.collection('User').findOneAndDelete({ id:new ObjectID("58b3d79b24b6f4027890e344")
    // }).then((results) => {
    //     console.log(JSON.stringify(results, undefined, 2));
    // });

});