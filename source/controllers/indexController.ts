import express from "express"
import bscrypt from "bcryptjs"
import {connection} from "../config/db"
class IndexController{
    index(req:express.Request, res:express.Response){
        return res.json({"timestamp" : Date.now()})
    }

    async registrations(req:express.Request, res:express.Response){
        if (req.method === "POST"){
            var username:string = req.body["username"]
            var displayed_name:string = req.body["displayed_name"]
            var password:string = req.body["password"]

            //hash password
            var salt:string = await bscrypt.genSalt(10);
            var hash:string = await bscrypt.hash(password, salt);

            var data = {
                "username":username,
                "displayed_name":displayed_name,
                "password":hash
            }
            await connection.insert(data).into("examinee")
            return res.json({"error" : 0})
        }
        var list_examinee = await connection.select().table("examinee")
        var ouput_list = []
        for (var x of list_examinee){
            ouput_list.push({
                "username" : x["username"],
                "displayed_name" : x["displayed_name"],
                "hashed_password" : x["password"]
            })
        }
        return res.json({
            "error" : 0,
            "data" : ouput_list
        })
    }
}

const indexController = new IndexController
export {
    indexController
}
