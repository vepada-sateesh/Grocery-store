  import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import { CartDataAdd } from "../Components/Api";

export default function HomeSlickTwoCard(data) {      
  const { id, img, title, piece, price } = data;
  return (
    <Box className={Styles.slickCardTwo}>
      <Link to={`/product/${id}`}>
        <Image src={img} alt={title} className={Styles.slickCardTwoImage}
          onClick={() => {
           var singarr = JSON.parse(localStorage.getItem("single")) || []
            console.log(singarr,"singarr1")
            if (singarr.length > 0) {
              singarr.pop()
            }
           singarr.push(data)
          localStorage.setItem("single",JSON.stringify(singarr))
        }}
        />
        
      </Link>
      <Text className={Styles.slickCardTwoPopup}> DELIVERY IN 80 MINS </Text>
      <Text className={Styles.slickCardTwoTitle}>{title}</Text>
      <Text textAlign="center">{piece}</Text>
      <Flex alignItems="center" justifyContent="center" gap="10px" mt="2">
        <Button
          className={Styles.slickCardTwoButtonOne}
          bg="whiteAlpha.900"
          _hover={{ background: "whiteAlpha.900" }}
          fontSize="14px"
        >
          MRP ₹ {price}
        </Button>
        <Button
          className={Styles.slickCardTwoButtonTwo}
          leftIcon={<i class="fa-solid fa-cart-plus"></i>}
          bg="rgb(123, 205, 0)"
          _hover={{ background: "rgb(123, 205, 0)" }}
          fontSize="14px"
          onClick={() => {
            alert("Item added to cart");
            var arr = JSON.parse(localStorage.getItem("data")) || []
            //CartDataAdd({ ...data, qty: 1, aPrice: price });
            data = {...data,qty: 1}
            arr.push(data)
            localStorage.setItem("data", JSON.stringify(arr));
            
          }}
        >
          ADD
        </Button>
      </Flex>
    </Box>
  );
}
