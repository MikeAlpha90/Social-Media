const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("this is user page");
});

//Update
router.put("/:id", async (req, res) => {
    // Check if the user is authorized
    if (req.body.userId === req.params.id || req.user?.isAdmin) {
      try {
        // Update password if provided
        if (req.body.password) {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        }
  
        // Update user data
        const user = await User.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true } // Returns the updated document
        );
  
        return res.status(200).json({ message: "User updated successfully", user });
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }
    } else {
      return res.status(403).json("You can update your account only!");
    }
  });
  

//Delete
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.user?.isAdmin) {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Account has been deleted.");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can delete only your account!");
    }
  });
  
//Get
router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, updatedAt, ...other } = user._doc; // Exclude sensitive information
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Follow
router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        if (!user.followers.includes(req.body.userId)) {
          await user.updateOne({ $push: { followers: req.body.userId } });
          await currentUser.updateOne({ $push: { followings: req.params.id } });
          res.status(200).json("User has been followed.");
        } else {
          res.status(403).json("You already follow this user.");
        } 
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You can't follow yourself.");
    }
  });
  
//Unfollow
router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        if (!user.followers.includes(req.body.userId)) {
          await user.updateOne({ $push: { followers: req.body.userId } });
          await currentUser.updateOne({ $push: { followings: req.params.id } });
          res.status(200).json("User has been followed.");
        } else {
          res.status(403).json("You already follow this user.");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You can't follow yourself.");
    }
  });
  
module.exports = router;
