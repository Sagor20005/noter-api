const express = require('express');
const router = new express.Router();
const db = require("./Firebase");
const users = db.users;
const notes = db.notes;


//SIGNUP API 
router.post("/signup",async (req,resp)=>{
  let body = await req.body;
  let data = {
    name:body.name,
    email:body.email,
    password:body.password
  };
  await users.add(data)
  resp.send({status:"added"})
})

// LOGIN API
router.post("/login",async (req,resp)=>{
  const email =await req.body.email;
  const pass =await req.body.password;
  await console.log(`Searching : ${req.body}`)
  let result = await users.where("email","==",email).get();
  let user =await result.docs.map((doc)=>({id:doc.id,...doc.data()}));
  resp.send(user);
})

//ADD NOTE API
router.post("/add",async (req,resp)=>{
  let note =await req.body;
  console.log("adding",req.body)
  await notes.add(note)
  resp.send({msg:"added note"})
})

//UPDATE USER API
router.put("/update/user/:id",async (req,resp)=>{
  const id =await req.params.id;
  const data =await req.body;
  await users.doc(id).update(data)
  resp.send({msg:"updated"})
})
// UPDATE NOTE API
router.put("/update/note/:id",async (req,resp)=>{
  let data = await req.body;
  const id = await req.params.id;
  await notes.doc(id).update(data);
  resp.send({msg:"updated"})
})

// DELETE NOTE API
router.delete("/delete/note/:id",async (req,resp)=>{
  let id = await req.params.id;
  await notes.doc(id).delete()
  resp.send({msg:"deleted"})
})
// GET ALL NOTES
router.get("/notes/:id",async (req,resp)=>{
  let id = req.params.id;
  let snupshot = await notes.where("userId","==",id).get();
  let list = snupshot.docs.map((doc)=>({id:doc.id,...doc.data()}))
  resp.send(list)
})

//GET ALL USERS DATA
router.get("/users",async (req,resp)=>{
  const snupshot = await users.get()
  const list = snupshot.docs.map((doc)=>({id:doc.id,...doc.data()}))
  resp.send(list)
})
module.exports = router;