const Company = require("../models/company.model");
// const cloudinary = require("../utils/cloudinary");
const upload = require("../middleware/multer");
const cloudinary = require("cloudinary")
const streamifier = require("streamifier")





exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json({ success: true, data: companies });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    console.log(req.params.id)
    const company = await Company.findOne({id:req.params.id});
    console.log(company)
    if (!company) {
      return res
        .status(404)
        .json({ success: false, error: "Company not found" });
    }
    res.status(200).json({ success: true, data: company });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!company) {
      return res
        .status(404)
        .json({ success: false, error: "Company not found" });
    }
    res.status(200).json({ success: true, data: company });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) {
      return res
        .status(404)
        .json({ success: false, error: "Company not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getCompaniesByTypeOfService = async (req, res) => {
  try {
    console.log("incoming request")
    const { typeOfService } = req.params;
    const companies = await Company.find({
      type_service: typeOfService,
    });
    res.status(200).json({ success: true, data: companies });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.createCompany = async (req, res) => {
     console.log(req.file)
  try {
    
    const { about, role, address, contact } = req.body;
    const requestData = JSON.parse(req.body.data);
const service_provider = requestData.service_provider;

console.log(service_provider)
console.log(JSON.parse(req.body.data))
     
if (req.file) {
  let cld_upload_stream = cloudinary.v2.uploader.upload_stream(
    {
      folder: "FastInfo"
    },
    async function(error, result) {
       const urlPhoto  =  result?.url

      if (result?.url){
    

    const newCompany = new Company({
      ...requestData, profile_file: urlPhoto
    });
    
   
   
    try {
      let savedCompany = await newCompany.save();

      console.log(savedCompany)
    res.status(201).json({ success: true, data: savedCompany });
    } catch (error) {
    console.log(error)
    }
  }
    })
    streamifier.createReadStream(req.file.buffer).pipe(cld_upload_stream);

    return

   
 }
       
    const newCompany = new Company({
      ...requestData
    }); 


    // const newCompany = new Company({
    //   ...requestData
    // });
    console.log("let see the new company")
    

    const savedCompany = await newCompany.save();
    console.log(savedCompany)
    console.log("now")
    res.status(201).json({ success: true, data: savedCompany });
  } catch (err) {
    console.log(err)
    res.status(400).json({ success: false, error: err.message });
  }
};