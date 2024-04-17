import styled from "styled-components";
import Navbar1 from "../components/Navbar1";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
padding:20px;
`;

const Title = styled.h1`
font-weight:300;
text-align:center;
`;

const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px
`;
const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props=>props.type === "filled" && "none"};
background-color:${(props)=>props.type === "filled"  ? "black" : "transparent"};
color:${(props) => props.type === "filled" && "white"}
`;

const TopTexts = styled.div``;

const TopText = styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
`;

const Button = styled.div`
display:flex;
justify-content:space-between;
`;
const Info = styled.div`
flex: 3;
`;

const Product = styled.div`
display:flex;
justify-content:space-between;
`;
const ProductDetail = styled.div`
flex:2;
display:flex;
`;
const Image = styled.img`
width:200px;
`;
const Detail = styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`;
const ProductName = styled.span``;
//const ProductId = styled.span``;
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=> props.color};
`;
const ProductSize = styled.span`
font-size: 20px
`;

const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`;
const ProductAmount = styled.div`
font-size:20px;
margin: 5px;
`;
const ProductPrice = styled.div`
font-size:30px;
font-weight:200;
`;

const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`;

const SummaryTitle = styled.h1`
font-weight:200;

`;
const SummaryItem = styled.div`

margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight: ${props => props.type ==="total"&&"500"};
font-size: ${props => props.type ==="total"&&"24"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`

width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;
`;

const Cart = () => {
    const cart = useSelector(state=>state.cart)
  return (
    <Container>
        <Navbar1/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAGS</Title>
            <Top>
                     <Link to = "/products/:category" style={{ textDecoration: 'none',color:'black' }}>
                     <TopButton> CONTINUE SHOPPING </TopButton>
                     </Link>
                 
                
                <TopTexts>
                    <TopText>Shopping Bag</TopText>
                    <TopText>Your Wishlist</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Button>
                <Info>
                    {cart.products.map(product=>(

                        <Product>
                        <ProductDetail>
                        <Image src={product.img}/>
                        <Detail>
                        <ProductName><b>Products: </b> {product.title}  </ProductName>
                        <ProductColor color={product.color}/>
                        <ProductSize><b>Size: </b> {product.size}</ProductSize>
                        
                        </Detail>
                        </ProductDetail>
                        <PriceDetail>

                        <ProductAmountContainer>
                        <ProductAmount>Quantity: {product.quantity}</ProductAmount>
                        </ProductAmountContainer>

                        <ProductPrice>
                        Rs {product.price*product.quantity}
                        </ProductPrice>
                        </PriceDetail>
                        </Product>
                        ))}
                        <hr/>
                    
                </Info>
                <Summary>
                 <SummaryTitle>
                    ORDER SUMMARY
                 </SummaryTitle>
                 <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>RS {cart.total}</SummaryItemPrice>
                 </SummaryItem> 
                 
                 <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>RS 50</SummaryItemPrice>
                 </SummaryItem>
                 
                 <SummaryItem>
                    <SummaryItemText>Shipping discount</SummaryItemText>
                    <SummaryItemPrice>RS -50</SummaryItemPrice>
                 </SummaryItem>
                 
                 <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>RS {cart.total}</SummaryItemPrice>
                 </SummaryItem>
                <SummaryButton>CHECKOUT NOW </SummaryButton>
                </Summary>
            </Button>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart