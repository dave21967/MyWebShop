const express = require("express");
const router = express.Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const db = require("../config/db");
const stripe = require("../config/stripe");
const { getId } = require("../config/genuid");

router.get("/products/all", (req, resp) => {
    const SQL = "SELECT Code,Name,Caption,Pic,Price,PiecesAvailable,Username AS SellerName"+
    " FROM prodotti JOIN utenti ON prodotti.Seller = utenti.Id WHERE utenti.Id = prodotti.Seller";
    db.query(SQL, (err, result) => {
        if(err) {
            console.log(err);
            return resp.status(500).send(err);
        }
        else return resp.status(200).send(result);
    });
});

router.get("/products/details/:id", (req, resp) => {
    const id = req.params.id;
    const SQL = "SELECT * FROM prodotti WHERE Code = ?";
    db.query(SQL, [id], (err, result) => {
        if(err) return resp.status(500).send(err);
        else return resp.status(200).send(result[0]);
    });
});

module.exports = router;