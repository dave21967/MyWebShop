const express = require("express");
const router = express.Router();

router.get("/", (req, resp) => {
    return resp.status(200).render("index");
});

module.exports = router;