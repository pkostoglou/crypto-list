import styled, { keyframes } from "styled-components"
import { FaArrowRight } from "react-icons/fa";
const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`
const moveRight = keyframes`
    from{
        transform: translate(0,0);
    }
    to{
        transform: translate(10px,0);
    }
`

const Arrow = styled(FaArrowRight)`
    margin-top:0.25rem;
`

const ElementWrapper = styled.div<{ $index?: number }>`
    width:80%;
    background-color:#2966cf;
    margin:auto;
    padding: 0.75rem 0.25rem;
    border-radius: 0.25rem;
    display: flex;
    justify-content: space-evenly;
    font-size: 20px;
    color:white;
    animation: ${fadeIn} 2s linear;
    animation-fill-mode: backwards;
    animation-delay: ${props => props.$index ? (props.$index * 0.2) : 0}s;

    &:hover{
        transform: scale(1.05);
        cursor: pointer;
    }
    &:hover ${Arrow}{
        animation: ${moveRight} 1s ease-out infinite;
    }
    @media (max-width: 1100px) {
        flex-wrap: wrap;
    }
`
const IdentityWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap:0.5rem;
    @media (max-width: 1100px) {
        order: 1;
    }
`
const CoinImage = styled.img`
    height: 25px;
`

const PriceDetails = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-evenly;
    @media (max-width: 1100px) {
        order: 3;
        flex-direction: column;
    }
`

const PriceLine = styled.div`
    @media (max-width: 1100px) {
        margin:auto;
    }
`

const PercentageWrapper = styled.div`
    display: flex;
    gap:0.3rem; 
    @media (max-width: 1100px) {
        margin:auto;
    }
`

const Percentage = styled.div<{ $isPositive?: boolean }>`
    color:${props => props.$isPositive ? "#03540d" : "red"};
`

const DetailsWrapper = styled.div`
    min-width: 150px;
    display: flex;
    gap:0.25rem;
    align-items: center;

    @media (max-width: 1100px) {
        order: 2;
    }
`

const CoinListElement = ({
    id,
    name,
    symbol,
    symbolImage,
    currentPrice,
    high24h,
    low24h,
    priceChangePerc24h,
    index,
    handleClick
}: {
    id: string,
    name: string,
    symbol: string,
    symbolImage: string,
    currentPrice: number,
    high24h: number,
    low24h: number,
    priceChangePerc24h: number,
    index?: number,
    handleClick: Function
}) => {
    return (
        <ElementWrapper $index={index} onClick={()=>handleClick()}>
            <IdentityWrapper>
                {symbol} | {name}
                <CoinImage src={symbolImage} alt="coin image" />
            </IdentityWrapper>
            <PriceDetails>
                <PriceLine>Current Price: {currentPrice}</PriceLine>
                <PriceLine>24h high: {high24h}</PriceLine>
                <PriceLine>24h low: {low24h}</PriceLine>
                <PercentageWrapper>Price change: <Percentage $isPositive={priceChangePerc24h >= 0}>{priceChangePerc24h}</Percentage></PercentageWrapper>
            </PriceDetails>
            <DetailsWrapper>
                See more <Arrow />
            </DetailsWrapper>
        </ElementWrapper>
    )
}

export default CoinListElement