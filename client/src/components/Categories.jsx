import { categories } from "../data"
import styled from "styled-components"
import CategoriesItem from "./CategoriesItem"
import { mobile } from "../responsive"


const Container = styled.div`
      display:flex;
      padding:20px;
      justify-content: space-between;
      ${mobile({
        flexDirection:"column",padding:"0px"
    })}
`
const Categories = () => {
  return (
    <Container>
         {categories.map(item=>(
            <CategoriesItem item={item} key={item.id}/>
         ))}
    </Container>
  )
}

export default Categories