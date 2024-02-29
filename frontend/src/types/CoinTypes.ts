type CoinDetailType = {
    name: string,
    currentPrice: number,
    description: string,
    high24h: number,
    low24h: number,
    priceChanges:{
        p24h:number,
        p7d:number,
        p14d:number,
        p1m:number,
        p2m:number,
        p200d:number,
        p1y:number,
    }
}

type CoinListElementType = {
    id: string,
    name: string,
    symbol: string,
    symbolImage: string,
    currentPrice: number,
    high24h: number,
    low24h: number,
    priceChangePerc24h: number
}

export type {
    CoinDetailType,
    CoinListElementType
}