import express from "express"
import multer from "multer"
import fs from "fs"
import path from "path"
import v2 from "cloudinary"
import {fileURLToPath} from "url"
const _filename=fileURLToPath(import.meta.url)
const _dirname=path.dirname(_filename)

const app=express()
v2.config({
    cloud_name: 'div73bxig',
  api_key: '934178561787478',
  api_secret: 's6RYiLHbAaMlM5N2EBYByjDtIJo'
})

const uploadDir=path.join(_dirname,"uploads")
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir)
}

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const upload=multer({storage: storage})

app.post("/upload",upload.single("photo"),async(req,res)=>{
    if(!req.file){
        return res.status(400).json({ error: "No file uploaded" }); 
    }
    try {
        const uploadedFile = await v2.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path);
        return res.json({
          message: "File uploaded successfully",
          fileUrl: uploadedFile.secure_url
        });
      } catch (error) {
        console.error("Upload Error:", error);
        return res.status(500).json({
          error: "File upload failed",
          details: error
        });
      }

})

app.listen(3000, () => {
    console.log("Server started at port http://localhost:3000");
});