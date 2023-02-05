import React, {
  useEffect,
  useState,
} from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  cookieStorageManager,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Styles from "../Components/Homepage.module.css";
import Styles2 from "../Components/ProductPage.module.css";
import { CartDataAdd } from "../Components/Api";

export default function SingleProduct() {
 
  
  var data = JSON.parse(
    localStorage.getItem("single")
  );
  const [single,setSingle] = useState(data)
  data = data[0]
  console.log(data.img, "final")
  
  // console.log(single);
  // useEffect(() => {
    
  //   // getData();
  //   console.log(single)
  //   setData(single)
  // }, [data]);
  // console.log(data,"hi")
  return (
    <Box>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box
        w="85%"
        m="auto"
        mt="1rem"
        mb="1rem"
      >
        <Breadcrumb
          className={Styles.breadcrumb}
          color="#bbbbbb"
        >
          <BreadcrumbItem>
            <BreadcrumbLink
              _hover={{
                color: "#bbbbbb",
                border: "0px",
              }}
              href="/"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              _hover={{
                color: "#bbbbbb",
                border: "0px",
              }}
              href="/product"
            >
              Fruits & Vegetables
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              _hover={{
                color: "#bbbbbb",
                border: "0px",
              }}
              href={`/product/${data.id}`}
              isCurrentPage
            >
              {data.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex
          mt="1rem"
          mb="1rem"
          gap="8rem"
        >
          <Image
            
            src={data.img}
            alt={data.title}
            className={
              Styles2.singleImage
            }
          />
          <Box>
            <Text
              className={
                Styles2.singleTitle
              }
            >
              {data.title}
            </Text>
            <Flex
              pt="5px"
              pb="5px"
              alignItems="center"
              gap="0.5rem"
            >
              <Text fontSize="14px">
                Share
              </Text>
              <span>
                <Image
                  src="https://www.naturesbasket.co.in/Images/product-detail-social.jpg"
                  alt="Social"
                />
              </span>
            </Flex>
            <Text
              className={
                Styles2.singleDescription
              }
            >
              {data.description}
            </Text>
            <Text
              className={
                Styles2.singlePiece
              }
            >
              Size: {data.qty}
            </Text>
            <Flex
              alignItems="center"
              gap="10px"
            >
              <Button
                className={
                  Styles.slickCardTwoButtonOne
                }
                bg="whiteAlpha.900"
                _hover={{
                  background:
                    "whiteAlpha.900",
                }}
                fontSize="14px"
              >
                MRP ₹ {data.price}
              </Button>
              <Button
                className={
                  Styles.slickCardTwoButtonTwo
                }
                leftIcon={
                  <i class="fa-solid fa-cart-plus"></i>
                }
                bg="rgb(123, 205, 0)"
                _hover={{
                  background:
                    "rgb(123, 205, 0)",
                }}
                fontSize="14px"
                onClick={() => {
                  let dataArr = JSON.parse(localStorage.getItem("data")) || []
                  dataArr.push(single[0])
                  localStorage.setItem("data", JSON.stringify(dataArr))
                  alert("Item added to cart successful..")

                }}
              >
                ADD
              </Button>
            </Flex>
            <Text
              className={
                Styles2.singleTaxes
              }
            >
              (Inclusive of all taxes)
            </Text>
            <Text
              className={
                Styles2.singleKnowMore
              }
            >
              Know More
            </Text>
            <Text
              className={
                Styles2.singleDescription
              }
              pt="0px"
            >
              {data.category}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque officiis nemo tenetur maxime fugit consequuntur animi, repudiandae laudantium exercitationem suscipit illum minima voluptate? Asperiores, eos maxime expedita consequatur voluptate fuga?
            </Text>
          </Box>
        </Flex>
        <Text
          className={
            Styles.slickCardTwoPopup
          }
          w="220px"
          ml="0px"
        >
          {data.des1}
        </Text>
      </Box>
      <Footer />
    </Box>
  );
}
