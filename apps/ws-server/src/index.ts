import { WebSocketServer } from "ws";
import {client} from "@repo/db/client";

const server = new WebSocketServer({port: 8080})
if(server){
    console.log("socket server running on 8080")
}

server.on('connection', async(socket)=>{
    await client.user.create({
        data:{
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    socket.send("Hi there, you are connected to the server!")
})