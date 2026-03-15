const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// @desc    Submit contact form
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
