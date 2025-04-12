const express = require("express");
const router = express.Router();
const SearchModel = require("../model/YourSearchModel"); 
const debounceMap = new Map();


router.get("/search", (req, res) => {
  const query = req.query.q; 
  const userKey = req.ip;    

 
  if (debounceMap.has(userKey)) {
    clearTimeout(debounceMap.get(userKey)); 
  }

  
  const timer = setTimeout(async () => {
    try {
      
      const results = await SearchModel.find({
        name: { $regex: query, $options: "i" }, 
      });

     
      res.json({ success: true, data: results });


      debounceMap.delete(userKey);
    } catch (err) {
      
      res.status(500).json({ success: false, error: "Search failed" });
    }
  }, 300); 


  debounceMap.set(userKey, timer);
});


