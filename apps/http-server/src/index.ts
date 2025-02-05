import express from "express"
import {client} from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hi, there!")
})

app.post("/signup",async (req,res)=>{
    const {username,password} = req.body;
    const user = await client.user.create({
        data:{
            username: username,
            password: password
        }
    })

    res.json({
        message:"Signup successfull!",
        id: user?.id
    })

})

app.listen(3001,()=>{
    console.log("Server is running on port 3001")
})