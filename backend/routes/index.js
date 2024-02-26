const coinRouter = require("./coinsRoutes")

module.exports = (app) =>{
    const coins = coinRouter()
    app.use("/coins",coins)

    app.all("*",(req,res)=>{
        res.status(404).json({error:"Page not found"})
    })
}