const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User Routes

//REGISTER: /user/signup
router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({
        success: false,
        message: "User with same email already exists",
      });

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedpassword,
      //isAdmin: true,    //Only to add admin
      purchasedCourses: [],
    });

    return res
      .status(201)
      .json({ success: true, message: "User registered successfully", user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

//LOGIN: /user/signin
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect password" });

    const token = await jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
        email: user.email,
        firstName: user.firstName,
      },
      "usersecret",
      {
        expiresIn: "1d",
      }
    );
    return res.status(200).json({ success: true, token: `Bearer ${token}` });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

//GET USER: /user/getuser/:userId
router.get("/getuser", userMiddleware, async (req,res) => {
  try {
    const userId = req.user.id;
    let user = await User.findById(userId);
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

//GET-COURSES: /user/courses
router.get("/courses", async (req, res) => {
  try {
    const course = await Course.find({});

    res.status(200).json({ success: true, course });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

//Purchasing course
//POST: /user/courses/:courseId
router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const userId = req.user.id;
    let user = await User.findById(userId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    const updatedUser = await User.updateOne(
      { _id: user.id },
      { $push: { purchasedCourses: courseId } }
    );

    return res.status(200).json({
      success: true,
      message: "Course purchased successfully",
      updatedUser,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

//GET-PURCHARES: /user/purchasedCourses
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    const purchasesIds = user.purchasedCourses;
    let purchasedCourses = [];

    await Promise.all(
      purchasesIds.map(async (courseId) => {
        const course = await Course.findById(courseId);
        purchasedCourses.push(course);
      })
    );

    return res.status(200).json({ success: true, purchasedCourses });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
