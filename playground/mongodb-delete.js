//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
     return console.log('Unable to connect to MongoDB server');  
    } 
    console.log('Connected to MongoDB server');
    
    //deletemany
    //db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //  console.log(result);  
   // });
    
    
     //deleteone
    //db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>   //{
    //     console.log(result);
   // });
    
    //find one and delete
   // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //    console.log(result);  
  //  });
    
    //db.collection('Users').deleteMany({name:'Andrew'});
    
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5899a7e112d91a22a8dd2621")}).then((results)=>{
     console.log(JSON.stringify(results,undefined,2));   
    });
    

    //db.close();
});