import express from "express";
import bcryptjs from "bcryptjs";
import errorHandler from "../utils/error.js";
import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({
    message: "api router",
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can only update your own account"));
  }
  try {
    // Hash the password if provided in the request body
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    // Update user document in the database
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          // Only set the password field if it's provided
          ...(req.body.password && { password: req.body.password }),
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );
    // Exclude password field from the response
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    // Pass any caught errors to the error handling middleware
    next(error);
  }
};
