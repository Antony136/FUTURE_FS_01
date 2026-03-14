const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    excerpt: {
        type: String,
        required: [true, 'Please add an excerpt']
    },
    content: {
        type: String,
        required: [true, 'Please add content']
    },
    tags: {
        type: [String],
        default: []
    },
    imageUrl: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Blog', blogSchema);
