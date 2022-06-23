var MongoClient = require("mongodb").MongoClient

MongoClient.connect("mongodb://localhost:27017", function(err,db){
    if(err) throw err
    var collection = db.collection("heroes")
    collection.insertOne({name:"RTX3090"},function(err,result){
        db.close()
    })
})
