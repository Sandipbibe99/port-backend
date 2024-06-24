import dotenv from "dotenv"
import nodemailer from 'nodemailer'
import userModel from "../models/userModel.js";

dotenv.config();


dotenv.config();

export const sendEmail = async ({ email, userId, emailType }) => {
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      console.log(`User with ID ${userId} not found.`);
      return;
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const maildata = {
      from: process.env.EMAIL_USER,
      to: emailType === 'toMe' ? process.env.EMAIL_USER : email,
      
      subject: emailType === 'toMe' ? "Message From Portfolio" : 'Thanks for Contacting',
      html: emailType === 'toMe'
        ? `<p style="color: blue;">${user.name}</p> send the request to connect you, Here are details:<br><br> <h2>Name: ${user.name}</h2><br><h2>Contact No: ${user.contact}</h2><br><h2>Message: ${user.message}</h2>`
        : `Hey ${user.name}, thanks for contacting Sandip. We will get back to you shortly.`,
    };

    const mailresponse = await transporter.sendMail(maildata);
    console.log(`Email sent successfully to ${maildata.to}`);
    return mailresponse;
  } catch (error) {
    console.log('Error sending email:', error);
  }
};
