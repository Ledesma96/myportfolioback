import nodemailer from "nodemailer";
import 'dotenv/config'

const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
      user: process.env.USER_MAILING,
      pass: process.env.PASSWORD_MAILING,
    },
  });
  
  export default transport;