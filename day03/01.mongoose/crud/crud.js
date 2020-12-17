const db = require("../db/db")


const stuModel = require("../model/model")

;(async () => {
    await db
    console.log(1112);

    stuModel.find({name: "小黄"}, (err,data)=>{
        console.log(err);
        console.log("======");
        console.log(data);
    })
})()