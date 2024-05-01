const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({


    id: {
        type: String,
        required:true
    },
    
    service_provider: {
            type: String,
            required: false
        },
        type_service: {
            type: String,
            required: false
        },
        provider_description: {
            type: String,
            required: false
        },
        profile_file: {
            type: String ,
            required: false // Store URLs of images uploaded to Cloudinary
        },
    
    
        service_name: {
            type: String,
            required: false
        },
        service_requirement: {
            type: String,
            required: false
        },
        service_description: {
            type: String,
            required: false
        },

        product_name: {
            type: String,
            required: false
        },
        product_requirement: {
            type: String,
            required: false
        },
        product_description: {
            type: String,
            required: false
        },

        role_name: {
            type: String,
            required: false
        },
        role_requirement: {
            type: String,
            required: false
        },
        role_description: {
            type: String,
            required: false
        },

        country: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        location: {
            type: {
                latitude: Number,
                longitude: Number 
            },
            required: false
          },

        phone_number: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: false
        },
        website: {
            type: String,
            required: false
        }
    
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
