import { MdOutlineKeyboardArrowRight,MdOutlineKeyboardArrowLeft } from "react-icons/md";
import styled from "styled-components"

const PaginationWrapper = styled.div`
    background-color:#2966cf;
    margin: 0.5rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`

const PageSelector = styled.div<{ $active?: boolean }>`
    border:${props => props.$active ? '#012969' :'#2966cf'} solid 2px;
    background-color: ${props => props.$active ? '#012969' :'#2966cf'};
    &:hover{
        border:black solid 2px;
    }
    padding:0.15rem;
`

const Pagination = ({
    currentPage,
    setCurrentPage
}: {
    currentPage: number,
    setCurrentPage: Function
}) => {
    const goToPage = (page:number) =>{
        setCurrentPage(page)
    }
    const handleLeftClick = () =>{
        if(currentPage>1){
            goToPage(currentPage - 1)
        }
    }
    return (
        <PaginationWrapper>
            <MdOutlineKeyboardArrowLeft size="22px" onClick={handleLeftClick}/>
            {currentPage>1 && <PageSelector onClick={()=>goToPage(currentPage - 1)}>{currentPage-1}</PageSelector>}
            <PageSelector onClick={()=>{}} $active={true}>{currentPage}</PageSelector>
            <PageSelector onClick={()=>goToPage(currentPage + 1)}>{currentPage + 1}</PageSelector>
            <PageSelector onClick={()=>goToPage(currentPage + 2)}>{currentPage + 2}</PageSelector>
            <MdOutlineKeyboardArrowRight size="22px" onClick={()=>goToPage(currentPage + 1)}/>
        </PaginationWrapper>
    )
}

export default Pagination