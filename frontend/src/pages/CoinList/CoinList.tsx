import { useEffect, useState } from 'react';
import { getSingleCoin, getCoins } from '../../apis/coins';
import CoinListElement from '../../components/CoinListElement/CoinListElement';
import Pagination from '../../components/Pagination/Pagination';
import styled from "styled-components"

const CoinListWrapper = styled.div`
    background-image: url("/background.png");
    background-color:black;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap:0.5rem;
`

const CoinList = () => {
    const [coinsList, setCoinsList] = useState<{
        id: string, name: string, symbol: string, symbolImage: string, currentPrice: number, high24h: number, low24h: number, priceChangePerc24h: number
    }[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const init = async () => {
        // const response = await getCoins({page:currentPage.toString(),pageSize:"10"})
        // const data = await response.json()
        const data = [
            {
                id: "bitcoin",
                symbol: "btc",
                name: "bitcoin",
                symbolImage: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
                currentPrice: 57014.5854,
                high24h: 57324,
                low24h: 53222,
                priceChangePerc24h: -0.54783
            }, {
                id: "bitcoin",
                symbol: "btc",
                name: "bitcoin",
                symbolImage: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
                currentPrice: 57014.5854,
                high24h: 57324,
                low24h: 53222,
                priceChangePerc24h: -0.54783
            }, {
                id: "bitcoin",
                symbol: "btc",
                name: "bitcoin",
                symbolImage: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
                currentPrice: 57014.5854,
                high24h: 57324,
                low24h: 53222,
                priceChangePerc24h: -0.54783
            }, {
                id: "bitcoin",
                symbol: "btc",
                name: "bitcoin",
                symbolImage: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
                currentPrice: 57014.5854,
                high24h: 57324,
                low24h: 53222,
                priceChangePerc24h: -0.54783
            }, {
                id: "bitcoin",
                symbol: "btc",
                name: "bitcoin",
                symbolImage: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
                currentPrice: 57014.5854,
                high24h: 57324,
                low24h: 53222,
                priceChangePerc24h: -0.54783
            }, {
                id: "bitcoin",
                symbol: "btc",
                name: "bitcoin",
                symbolImage: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
                currentPrice: 57014.5854,
                high24h: 57324,
                low24h: 53222,
                priceChangePerc24h: -0.54783
            },
        ]
        setCoinsList(data)
    }
    useEffect(() => {
        init()
    }, [])
    return (
        <CoinListWrapper>
            {
                coinsList.map((coin, index) => (
                    <CoinListElement key={coin.id} {...coin} index={index} />
                ))
            }
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </CoinListWrapper>
    )
}

export default CoinList