import mongoose from "mongoose";

// Define the schema for a listing
const listingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    regularPrice: {
        type: Number,
        required: true,
    },
    discountPrice: { // Fixed a typo in 'tyep' to 'type'
        type: Number,
        required: true,
    },
    bathroom: {
        type: Number,
        required: true,
    },
    bedroom: {
        type: Number,
        required: true,
    },
    furnished: {
        type: Boolean,
        required: true,
    },
    parking: {
        type: Boolean,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    offer: {
        type: Boolean,
        required: true,
    },
    imageUrl: { // Changed 'imageurl' to 'imageUrl' to follow camelCase convention
        type: Array,
        required: true,
    },
    userRef: { // Changed 'useref' to 'userRef' to follow camelCase convention
        type: String,
        required: true,
    }
}, { timestamps: true }); // Adding timestamps to automatically track createdAt and updatedAt fields

// Create a Mongoose model for the listing schema
const Listing = mongoose.model('Listing', listingSchema);

export default Listing; // Export the Listing model
