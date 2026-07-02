const multer = require("multer")

// Store the file temporarily in the image
const storage = multer.memoryStorage();

const upload  = multer({
    storage,
    limits : {fileSize : 2 * 1024 * 1024},
    fileFilter : (req, file, cb) =>{
        const allowed =  ["image/jpeg", "image/png", "image/webp"]
        if(allowed.includes(file.mimetype)){
            cb(null, true)
        }
        else{
            cb(new Error("The image should be either jpeg, png or webp format"), false)
        }
    }
})

module.exports = upload

