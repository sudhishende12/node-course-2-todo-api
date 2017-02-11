//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
     return console.log('Unable to connect to MongoDB server');  
    } 
    console.log('Connected to MongoDB server');
    
    //db.collection('Todos').findOneAndUpdate({
    //    _id: new ObjectID('589db5afeec39acc20f4fdbb')
    //},{
    //   $set:{
    //     completed:true
    //   } 
    //},{
    // returnOriginal:false  
    //}).then((result) =>{
    //    console.log(result);
    //});
    
    
    
        db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5899b370114eb1217c9cc487')
    },{
       $set:{
         name: 'Andrew'
       },
       $inc:{
         age:1  
       }
    },{
     returnOriginal:false  
    }).then((result) =>{
        console.log(result);
    });
    

    //db.close();
});