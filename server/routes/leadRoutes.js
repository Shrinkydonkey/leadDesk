const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const { createLead, getLeads, updateLeadStatus } = require("../controllers/leadController");

router.post("/", createLead);
router.get("/", verifyToken, getLeads);
router.put("/:id", verifyToken, updateLeadStatus);

module.exports = router;