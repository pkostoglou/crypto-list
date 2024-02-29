const router = require("express").Router();
const fetch = require("node-fetch");

module.exports = () =>{
    const getAllCoins = async(req,res) =>{
        const {page, pageSize} = req.query
        try{
            const paramOptions = {
                page,
                per_page:pageSize,
                vs_currency :"usd",
                price_change_percentage:"",
                precision: 4
            }
            
            const response = await fetch(`${process.env.API_URL}/coins/markets?${new URLSearchParams(paramOptions).toString()}`)
            const data = await response.json()
            const transformedData = data.map(singleCoin=>({
                id:singleCoin.id,
                name:singleCoin.name,
                symbol:singleCoin.symbol,
                symbolImage:singleCoin.image,
                currentPrice:singleCoin.current_price,
                high24h:singleCoin.high_24h,
                low24h:singleCoin.low_24h,
                priceChangePerc24h:singleCoin.price_change_24h
            }))
            res.send(transformedData)
        }catch(error){
            console.log(error)
        }
    }

    const getSingleCoin = async(req,res) =>{
        try{
            const coinId = req.params.id
            const paramOptions = {
                developer_data:false,
                community_data:false,
                tickers:false,
                localization:false,
                market_data:true
            }
            const response = await fetch(`${process.env.API_URL}/coins/${coinId}?${new URLSearchParams(paramOptions).toString()}`)
            const data = await response.json()
            const transformedData = {
                currentPrice:data?.market_data.current_price.usd,
                name:data?.name,
                description:data?.description.en,
                high24h:data?.market_data.high_24h.usd,
                low24h:data?.market_data.low_24h.usd,
                priceChanges:{
                    p24h:Number(data?.market_data.price_change_percentage_24h.toFixed(2)),
                    p7d:Number(data?.market_data.price_change_percentage_7d.toFixed(2)),
                    p14d:Number(data?.market_data.price_change_percentage_14d.toFixed(2)),
                    p1m:Number(data?.market_data.price_change_percentage_30d.toFixed(2)),
                    p2m:Number(data?.market_data.price_change_percentage_60d.toFixed(2)),
                    p200d:Number(data?.market_data.price_change_percentage_200d.toFixed(2)),
                    p1y:Number(data?.market_data.price_change_percentage_1y.toFixed(2))
                }
            }
            res.send(transformedData)
        }catch(error){
            console.log(error)
        }
    }

    router.get("/markets",getAllCoins)
    router.get("/:id", getSingleCoin)
    return router
}