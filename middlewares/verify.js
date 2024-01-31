export default function verify(req,res,next) {
    if(!req.isAuthenticated()){
        return res.render('sign-in');
    }
    next();
}
