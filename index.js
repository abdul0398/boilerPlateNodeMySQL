import 'dotenv/config'
import setMiddleWares from './middlewares/express.js';
import userRouter from './routes/index.js';
import setupDb from "./services/dbHandler.js";
async function start() {
    const PORT  = process.env.PORT || 4000;
    const {app, express} = await setMiddleWares();
    await setupDb();
    app.use("/uploads", express.static("uploads"));
    app.use([userRouter]);
    app.use((req,res)=>{
        res.render("error.ejs");
    })
    app.listen(PORT, async ()=>{
        console.log(`##### Express Server Started at port ${PORT} #####`);
    })
}
start();