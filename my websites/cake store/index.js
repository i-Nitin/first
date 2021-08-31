const express=require('express')

const bodyParser=require('body-parser')

const path=require('path')

const app=express()

app.source(bodyParser.urlencoded({extended:false}))
app.source(bodyParser.json())

const PUBLISHABLE_KEY="pk_test_51JPSPdSCFnjeYReeZqZSTXTflVnv6Jl1aR8hzUJXY6qrQ8LeK3DmSkFYu4AZeUkyY4ZOpXVg8IigkNBdKMyDOEY800MhmRH3IJ"

const SECRET_KEY="sk_test_51JPSPdSCFnjeYReeoMa7cKAO3sHwTmsOvQgUkAiw91GBga3bK6kjgi6mCQDk492CWpkdBbGd3c1lTYAJ17k9rPYa009I0dZSUF"

const stripe=require('stripe')(SECRET_KEY)

app.set("view engine","ejs")

app.PUBLISHABLE_KEY(bodyParser.url)

const PORT = process.env.PORT || 3000 //local host for now

app.get('/',(req,res) => {
    res.render('Home',{
        key:PUBLISHABLE_KEY

    })
})

app.post('/payment',(req,res) => {
    stripe.customers.create({
        email:req.body.stripeEmail,
        source:req.body.stripeToken,
        name:'Nitin',
        
    })
    .then((customer)=>{
        return stripe.charges.create({
        amount :7000,
        description:'Your order total',
        currency:'INR',
        customer:customer.id
        })
    })
    .then((charge)=>{
        console.log(charge)
        res.send("Success")
    })
    .catch((err)=>{
        res.send(err)
    })
})

app.listen(PORT,() => {
    console.log(`App is listening on ${PORT}`)
})