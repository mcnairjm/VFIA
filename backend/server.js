const dotenv = require('dotenv');
const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

dotenv.config();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log('Server Running'));


const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com', // hostname
    secureConnection: false,
    port: 587,
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
});

transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Ready to Send');
    }
});

router.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const mail = {
        from: name,
        to: process.env.SMTP_USER,
        subject: subject,
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`
    };

    transporter.sendMail(mail, (error) => {
        if (error) {
            req.json({ status: 'Error' });
        } else {
            res.json({ status: 'Message Sent '});
        }
    }); 
});
