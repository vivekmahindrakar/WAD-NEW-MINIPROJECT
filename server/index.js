const express = require('express');
const mongoose =  require('mongoose');
const app = express()  ;

const bodyParser = require("body-parser");
const path = require('path');
const razorpay = require('razorpay');
const crypto = require('crypto');

// Making Build Folder as Public 
// app.use(express.static(path.join(__dirname,"./client/build")));

// app.get("*",(req,res)=>
// {
//     res.sendFile(path.resolve(__dirname,"./client/build/index.html"))
// })

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()) //this line suckssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

mongoose.connect(`mongodb+srv://ValueWealth:Vivek_2021@cluster0.hxv9z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

const schema = mongoose.Schema({
    FirstName : String,
    LastName : String,
    Type_of_event :String,
    Email : String,
});

const Participants = mongoose.model('Participant',schema);


app.get('/users',function (req,res) {
    Participants.find({},function (err,foundItems) {
        if (err) {
            console.log(err);
        } else {
            res.send(foundItems)
            return foundItems;
        }
    })
    
})

app.post('/payment',async(req,res)=>
{
    try {
        const instance = new razorpay({
            key_id:"rzp_test_m7slwOIqmjEw0K",
            key_secret:"G9WOcRztApX7N1LX815evvlh"

        });
        const options = {amount:req.body.amount * 100,currency:'INR'};
        instance.orders.create(options,(err,order)=>
        {
            if(err)
            console.log(err);
            
        })
    } catch (error) {
        console.log(error);
    }
}
)

app.post('/verify',async(req,res)=>
{
    try {
        const{razorpay_order_id,razorpay_payment_id,razorpay_signature} = req.body;
        const sign = razorpay_order_id + '|'+razorpay_payment_id;
        const expectedSign = crypto.createHmac('sha256',"G9WOcRztApX7N1LX815evvlh").update(sign.toString()).digest('hex');
        if(razorpay_signature === expectedSign)
        {
            console.log('Payment verified successfully');
        }
        else console.log('Invalid');
    } catch (error) {
        console.log(error);
    }
})

app.post('/registerme',async(req,res)=>
{


    try {
        const instance = new razorpay({
            key_id:"rzp_test_m7slwOIqmjEw0K",
            key_secret:"G9WOcRztApX7N1LX815evvlh"

        });
        const options = {amount:req.body.amount * 100,currency:'INR'};
        const orders = await instance.orders.create(options)
        if(!orders)
        res.status(500).send('some error occured!');
        res.send(order);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

    const member = new Participants(
        {
            FirstName : req.body.fname,
        LastName : req.body.lname,
        Type_of_event :req.body.event,
        Email : req.body.email,
        }
    )
    member.save(function(err,result)
    {
        if(err)
        console.log(err);
        else
        {
            return result;
        }
       
    })   
})


app.post('/deleteUser',(req,res)=>
{
    const id = req.body.key;
    console.log(id);
    Participants.findOneAndDelete({_id:id},(err,docs)=>
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
               
                console.log(docs);
            }
        })


})

app.post('/updateUser',(req,res)=>
{
    id = req.body.key;
    fname = req.body.fname;
    email = req.body.email;
    lname = req.body.lname;

    // console.log(id+fname+email+lname);
    Participants.findByIdAndUpdate({_id:id},{FirstName:fname,LastName:lname,Email:email},{upsert:true},(err,doc)=>
    {
        if(err)
        res.status(500).send(err);
        else
        res.send(doc);
    });
    
    //res.send(doc)
})

app.post('/get-specific-user',(req,res)=>
{
    // Participants.find({_id:req.body.id},(err,doc)=>
    // {
    //     if(err)
    //     res.status(500).send(err);
    //     else
    //     res.send(doc);
    // })
    console.log(req.body.id);
})

const port = process.env.PORT||4000;

app.listen(port,function (req,res) {
    console.log("listening on port 4000");
    
})