import styled from "styled-components"

const PriceBarWrapper = styled.div`
    height: 220px;
    position: relative;
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0.75rem;
    float:bottom;
`

const PriceBarBackground = styled.div<{ $height?: number, $positive?:boolean }>`
    height:${props => props.$height ? props.$height : 0}px;
    width: 40px;
    background-color: ${props => props.$positive ? "green" : "red"};
`

const PriceBarSpan = styled.span`
`

const PriceBar = ({
    title,
    value,
}:{
    title:string,
    value:any
}) => {
    return(
        <PriceBarWrapper>
            <PriceBarSpan style={{marginTop:"auto"}}>{value}</PriceBarSpan>
            <PriceBarBackground $height={value>100?200:Math.abs(value*2)} $positive={value>0?true:false}/>
            <PriceBarSpan>{title}</PriceBarSpan>
        </PriceBarWrapper>
    )
}

export default PriceBar