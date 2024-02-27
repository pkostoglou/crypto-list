const getCoins = async(queries:{page:string,pageSize:string}) => await fetch(`http://localhost:5000/coins/markets?${new URLSearchParams(queries).toString()}`)
const getSingleCoin = async(coinId:string) => await fetch(`http://localhost:5000/coins/${coinId}`)


export{
    getCoins,
    getSingleCoin
}