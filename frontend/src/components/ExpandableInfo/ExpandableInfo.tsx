import styled from "styled-components"
import {useState} from "react"
const ExpandableInfoLineWrapper = styled.div`
    display: flex;
    padding: 0.25rem 0px;
    align-items: center;
`

const ExpandableLine = styled.hr`
    flex:1;
    color: white;
`

const ShowMore = styled.div`
    padding:0px 0.5rem;
    &:hover{
        cursor: pointer;
    }
    & a{
        color:black
    }
`

const Info = styled.div`
    background-color: #3d8dfc;
    padding:0.5rem;
`

const ExpandableInfo = ({
    info
}: {
    info: string
}) => {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <>
            {showInfo && <Info dangerouslySetInnerHTML={{__html: info}}/>}
            <ExpandableInfoLineWrapper>
                <ExpandableLine />
                <ShowMore onClick={()=>setShowInfo(!showInfo)}>{showInfo ?"Hide":"Show"} Coin Info</ShowMore>
                <ExpandableLine />
            </ExpandableInfoLineWrapper>
        </>
    )
}

export default ExpandableInfo