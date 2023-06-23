const express = require('express');

const mongoose = require ('mongoose')
const Etudient = require('./models/etudient')
const bodyParser = require('body-parser');
const req = require('express/lib/request');
const app = express();
// use bodyParser to enable express to read the content of the object Etudient
//and use it
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

//implement the CRUD
app.get('/etudients', async (req, res)=>{
    try{
        await Etudient.find({}).then((result)=>{
            res.send(result);
        });

    }
    catch(err){
        console.log(err);
    }

});

app.put('/maj/:id',async (req, res)=>{
    try{
        await Etudient.findOneAndUpdate(
            {_id:req.params.id},

            //the field that i want to change(in this case only change the email)
            {email:req.body.email,
            }
            );
            
            res.send('Data updated with success')

    }
    catch(err){
        res.send(err);
    }
})

app.post('/ajouteretudient', async(req, res)=>{

    try{
        let new_etudient = new Etudient({
                cin: req.body.cin,
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.email,
            });
            await new_etudient.save()
            res.send('Student Data saved with success')
    }
    catch(err){
        console.log(err);

    }
    
});

app.delete('/delete/:id', async (req, res)=>{
    try{
        await Etudient.findOneAndDelete({_id: req.params.id})
        res.send('The data is deleted with success')
    }
    catch(err){
        res.send(err)
    }
});
//connect to the database Mongodb
mongoose.connect('mongodb+srv://3333333:222222@cluster0.kqxhta9.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connected Successfully'))
.catch((err) => { console.error(err); });
//

app.listen(5000, ()=>{
    console.log('Server is now listening on the port 5000 and Runnibg with success')
    
});





