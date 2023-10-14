const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 4000;

//Middleware
app.use(express.static('public'));
app.use(express.json())


app.get('/',(req,res)=> {
    res.sendFile(__dirname + '/public/contact.html')
})

app.post('/' , (req,res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",   
    port: 587,
    secure: true,
        service:'gmail',
        auth: {
            user: 'arpit01149@gmail.com',
            pass: 'qqxu ndsi uzop tpsd'
        }
    })

    const mailOptions ={
        from:req.body.email,
        to:'dwivedirudra63@gmail.com',
        subject:`Message from ${req.body.email}: ${req.body.description}`,
        text: req.body.description
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            connsole.log(error);
            res.send('error');
        }else{
            console.log('Email sent: ' + info.response);
            res.send('Success');
        }
    })

})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})