import express from "express";
import verify from "../middlewares/verify.js";
import passport from "passport";
const router = express.Router();


router.get("/", verify, (req, res) => {
    res.render("dashboard");
}).post("/sign-in",passport.authenticate('user', {
    failureRedirect: '/',
    failureFlash: true
}), (req, res) => {
    res.redirect("/");
}).get("/sign-out", (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
});



export {router as userRouter};