const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const foodmodel = require('./models/food')


app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Food',{
    useNewUrlParser: true,
});

app.post('/insert' , async (req , res) => {
    const foodname = req.body.foodname
    const days = req.body.days

    const foodd = new foodmodel({foodname: foodname , daysSinceIAte: days })
    try{
        await foodd.save();
    }catch(err){
        console.log(err)
    }
    
})


app.get('/read',async (req , res) => {
    foodmodel.find({},(err,resultat) =>{
        if(err){
            res.send(err)
        }
        res.send(resultat)
    })
})


app.put('/update' , async (req , res) => {
    const newfoodname = req.body.newfoodname
    const id = req.body.id


    try{
        await foodmodel.findById(id, (err , updatedfood) => {
            updatedfood.foodname = newfoodname
            updatedfood.save()
            res.send('update')
        })
    }catch(err){
        console.log(err)
    }
    
})



app.delete('/delete/:id' , async (req , res) => {
    const id = req.params.id
    await foodmodel.findByIdAndRemove(id).exec()
    res.send("deleted")
    
})


app.listen(4000, () => {
    console.log("server running on port 4000...")
})