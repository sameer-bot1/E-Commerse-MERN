import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Products from "../components/Products";

import Navbar1 from "../components/Navbar1";
import Newsletter from "../components/Newsletter";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;
const Title = styled.h1`
margin:20px;
`;
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
`;
const Filter = styled.div`
margin:20px;
`;
const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`;
const Select = styled.select`
padding:10px;
margin-right:20px;
`;
const Option = styled.option``;


export const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filter,setFilters]= useState({}) 

    const handleFilters = (e) => {
        const value  = e.taget.value;
        setFilters({
            [e.target.name]: value,
        });
    };

    console.log(filter)

  return (
    <Container>
         <Announcement/>
         <Navbar1/>
         <Title>Dresses</Title>
         <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled seected>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>

                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Option disabled selected>
                        SIZE
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
            </Select>
             </Filter>
            <Filter><FilterText>Sort Product:</FilterText>
            <Select>
                    <Option selected>
                        Newest
                    </Option>
                    <Option>Price(asc)</Option>
                    <Option>Price(desc)</Option>
                    
            </Select>
             </Filter>
         </FilterContainer>
         <Products/>
         <Newsletter/>
         <Footer/>
    </Container>
  )
}
