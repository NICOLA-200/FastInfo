const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const validateCompanyData = require('../middleware/validateCompanyData')
// Create a new company
const  multer = require("multer")



const storage =multer.memoryStorage();
const upload = multer({storage: storage})



// Get all companies
router.get('/retrieve', companyController.getCompanies);

// Get a company by ID
router.get('/retrieveById/:id', companyController.getCompanyById);

// Update a company by ID
router.put('/update/:id', validateCompanyData, companyController.updateCompany);

// Delete a company by ID
router.delete('/deleteById/:id', companyController.deleteCompany);

// Get companies by typeOfService
router.get('/retrieveByTypeOfService/:typeOfService', companyController.getCompaniesByTypeOfService);

router.post('/create', upload.single("profile_file") ,companyController.createCompany);

module.exports = router;
