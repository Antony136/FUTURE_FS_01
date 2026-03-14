const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const nodemailer = require('nodemailer');

// @desc    Submit contact form and send email notification
// @route   POST /api/contact
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }

        const newMessage = new Message({
            name,
            email,
            subject,
            message
        });

        await newMessage.save();

        // Optional: Send email notification via Nodemailer
        // To use this, configure EMAIL_USER and EMAIL_PASS in your .env file
        try {
            if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
                const transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true, // Use SSL/TLS
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS
                    },
                    tls: {
                        rejectUnauthorized: false
                    },
                    family: 4, // FORCE IPv4 to avoid ENETUNREACH/Timeout bugs on Render/Vercel
                    connectionTimeout: 20000,
                    greetingTimeout: 20000,
                    socketTimeout: 20000
                });

                const mailOptions = {
                    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
                    to: process.env.EMAIL_USER,
                    subject: `New Portfolio Message: ${subject}`,
                    text: `You have a new message from ${name} (${email}):\n\n${message}`,
                    replyTo: email
                };

                const info = await transporter.sendMail(mailOptions);
                console.log('Email notification sent successfully:', info.messageId);
            }
        } catch (emailError) {
            console.error('Email notification failed to send (but message was saved to DB):', emailError.message);
            // We deliberately don't return an error response here so the user on the frontend still sees a success message
        }

        res.status(201).json({
            success: true,
            message: 'Message sent successfully!'
        });
    } catch (error) {
        console.error('Error handling contact message:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error. Please try again later.'
        });
    }
});

module.exports = router;
