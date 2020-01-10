import express from "express";
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "Express" });
});

router.get("/balance", function(req, res) {
  res.send("Received a GET HTTP method");
});
export default router;
