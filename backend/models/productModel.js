const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    InternName: {
        type: String,
        required: [true, "Please Enter product Name"],
        trim: true,
    },
    CompanyName: {
        type: String,
        required: [true, "Please Enter product Name"],
        trim: true,
    },
    AboutUs: {
        type: String,
        required: [false, "Please Enter product Description"],
    },
    Requirements: {
        type: String,
        required: [false, "Please Enter product Description"],
    },
    Responsibilities: {
        type: String,
        required: [false, "Please Enter product Description"],
    },
    InternData: {
        Duration: {
            type: String,
            required: false,
        },
        Location: {
            type: String,
            required: false,
        },
        Stripend: {
            type: String,
            required: false,
        },
        NoOfPositions: {
            type: String,
            required: false,
        },
    },

    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
    Technologies: [
        {
            Tech: {
                type: String,
                required: false,
            }
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Product", productSchema);
