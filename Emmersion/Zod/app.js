const express = require('express');
const app = express();
const port = 8080;
const zod = require('zod')// validates the data 

const mySchema = zod.array(zod.number()) // check array of number (all are methods in zod)

const userSchema =zod.object({
    email:zod.string().email(),
    password: zod.string().min(6),
    country: zod.literal("IN").or(zod.literal("US"))
})
app.use(express.json())

app.post('/person',(req,res)=>{
    const user = req.body.user;
    let resp = userSchema.safeParse(user);
    console.log(resp);
    if (!resp.success) {
        res.status(411).json({msg:resp.error.issues[0].message})
    }
    else {
        res.status(200).json({msg:resp.data})
    }
})
app.post('/ankit', (req, res) => {
    const arr = req.body.arr;
    let resp = mySchema.safeParse(arr);
    console.log(resp);
    if (!resp.success) {
        res.status(411).json({msg:resp.error.issues[0].message})
    }
    else {
        res.status(200).json({msg:resp.data})
    }

})
app.listen(port, () => {
    console.log('server is running', port)
})