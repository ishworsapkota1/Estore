const {
  addCategory,
  getAllCategories,
  getCategoryDetails,
  updateCategory,
  deleteCategory,
} = require("../controller/categoryController");
const { checkAdmin } = require("../controller/userController");
const { categoryCheck, validate } = require("../validation");

const router = require("express").Router();

// endpoints
router.post("/addcategory", categoryCheck, validate, addCategory);
router.get("/getallcategories", getAllCategories);
router.get("/getcategory/:id", getCategoryDetails);
router.patch("/updatecategory/:id", updateCategory);
// router.delete("/deletecategory", checkAdmin, deleteCategory);
router.delete("/deletecategory/:id", deleteCategory);

module.exports = router;
