const dotenv = require('dotenv');
const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

dotenv.config();

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
