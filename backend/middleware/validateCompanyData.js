const companySchema = require('../models/company.model');

const validateCompanyData = (req, res, next) => {
    const { error } = companySchema.validate(req.body);
    if (error) {
        return res.status(400).json({ success: false, error: error.details.map(d => d.message) });
    }
    next();
};

module.exports = validateCompanyData;