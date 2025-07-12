const express = require("express");
const router = express.Router();
const menuItem = require("./../model/menuitem");

router.post("/", async (req, res) => {
  try {
    let data = req.body;
    let newMenuItem = new menuItem(data);
    const itemResponse = await newMenuItem.save();
    console.log("data save sucsessfully");
    res.status(200).json(itemResponse);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    let data = await menuItem.find();
    console.log("data fatch sucsessfully");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType; //extract the work type from the URl parameter
    if (tasteType == "spicy" || tasteType == "sweet" || tasteType == "sour") {
      const response = await menuItem.find({ taste: tasteType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
