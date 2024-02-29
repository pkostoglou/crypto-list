import { useLoaderData } from "react-router-dom";
import { getSingleCoin } from "../../apis/coins"
import PriceBar from "../../components/PriceBar/PriceBar";
import ExpandableInfo from "../../components/ExpandableInfo/ExpandableInfo";
import styled from "styled-components";
import { CoinDetailType } from "../../types/CoinTypes";

const CoinDetailsBackground = styled.div`
    background-image: url("/background.png");
    background-color:black;
    min-height: 100vh;
    padding-top: 100px;
`
const CoinDetailsWrapper = styled.div`
    background-color:#2966cf;
    width:80%;
    max-width: 1100px;
    margin:auto;
    border-radius: 1rem;
    padding-bottom: 0.5rem;
    @media (max-width: 600px) {
        width:100%;
    }
`

const CoinDetailsTitle = styled.div`
    display: flex;
    justify-content: center;
    background-color: #012969;
    color:white;
    padding: 0.5rem 0px;
    font-size: xx-large;
    font-weight: 700;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
`

const CoinDetailsDescription = styled.div`
    
`

const CoinDetailsData = styled.div`
    display: flex;
    flex-direction: column;
    gap:0.5rem;
    padding-top: 0.5rem;
`

const CoinDetailsBars = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
const CoinDetails24h = styled.div`
    display: flex;
    justify-content: space-evenly;
    font-size: x-large;
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`

export async function loader({ params }: { params: any }) {
    try {
        const response = await getSingleCoin(params.coinId);
        const coin = await response.json()
        return { coin };
    } catch (error) {
        console.log(error)
        return {coin:{
            name: "",
            currentPrice: 0,
            description: "",
            high24h: 0,
            low24h: 0,
            priceChanges: {
                p24h: 0,
                p7d: 0,
                p14d: 0,
                p1m: 0,
                p2m: 0,
                p200d: 0,
                p1y: 0,
            }
        }
    }
}
    
}

const CoinDetails = () => {
    const { coin } = useLoaderData() as {
        coin: CoinDetailType
    };
    return (
        <CoinDetailsBackground>
            <CoinDetailsWrapper>
                <CoinDetailsTitle>
                    Coin: {coin.name} | Current Price: {coin.currentPrice}$
                </CoinDetailsTitle>
                <CoinDetailsDescription>
                    <ExpandableInfo info={coin.description} />
                </CoinDetailsDescription>
                <CoinDetailsData>
                    <CoinDetails24h>
                        <div>Highest Price 24h: {coin.high24h}$</div>
                        <div>Lowest Price 24h: {coin.low24h}$</div>
                    </CoinDetails24h>
                    <CoinDetailsBars>
                        {
                            Object.entries(coin.priceChanges).map(coinPercentage => (
                                <PriceBar
                                    title={coinPercentage[0].slice(1)}
                                    value={coinPercentage[1]}
                                />
                            ))
                        }
                    </CoinDetailsBars>
                </CoinDetailsData>
            </CoinDetailsWrapper>
        </CoinDetailsBackground>
    )
}

export default CoinDetails