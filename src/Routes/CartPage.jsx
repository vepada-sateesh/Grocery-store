import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Button,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Styles from "../Components/CartPage.module.css";
import { CartItemDelete, CountIncDec, GetCartData } from "../Components/Api";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export default function CartPage() {
  const [data, setData] = useState([]);
  const [dummy,setdummy] = useState(0)
  var local = JSON.parse(localStorage.getItem("data"))
  useEffect(() => {
     //GetCartData(setData);
    setData(local)
  },[dummy]);


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
      <Box w="85%" m="auto">
        <Link to="/cart">
          <Image
            src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/websitecart.png"
            alt="Cart Header"
          />
        </Link>
        <Flex alignItems="center" mt="40px" mb="15px" gap="0.5rem">
          <Text>MY CART( ITEMS) |</Text>
          <Link to="/cart">
            <Flex gap="0.5rem">
              <Image
                src="https://d1z88p83zuviay.cloudfront.net/Images/nb-loader.png"
                alt="Loading Image"
                w="25px"
              />
              <Text>Refresh</Text>
            </Flex>
          </Link>
        </Flex>
        <Flex alignItems="center" justifyContent="right" gap="1rem">
          <Link to="/product">
            <Text className={Styles.continueText}>CONTINUE SHOPPING</Text>
          </Link>
          <Link to="/checkout">
            <Text
              className={Styles.proceedText}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              PROCEED TO CHECKOUT
            </Text>
          </Link>
        </Flex>
        <Flex
          alignItems="end"
          justifyContent="center"
          className={Styles.timings}
        >
          <Image
            src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/8ab57ed4-47e0-426a-8382-f4c89b11826a.png"
            alt="Bike"
            w="38px"
            h="25px"
          />
          <Text className={Styles.headerText}>
            Get your order delivered in 90 minutes . Service timings between
            10:00 am to 9.30 pm .
          </Text>
        </Flex>
        <Table variant="simple">
          <Thead>
            <Tr borderBottom="2px solid #8ad119">
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Discount</Th>
              <Th>Qty</Th>
              <Th>Sub-Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr borderBottom="1px solid #999999">
              <Td className={Styles.tableHeaderText} border="0px" textAlign="start">
                Fruits & Vegetables
              </Td>
            </Tr>
            <br />
            {data?.length>0 && data?.map((el,i) => (
              <Tr className={Styles.cartBox} key={i}>
                <Td border="0px">
                  <Flex alignItems="center" gap="1rem">
                    <Image src={el.img} alt={el.title} w="50px" h="50px" />
                    <Text>{el.title}</Text>
                  </Flex>
                </Td>
                <Td border="0px">₹ {el.price}</Td>
                <Td border="0px">₹ 0.00</Td>
                <Td border="0px">
                  <Flex
                    display="flex"
                    h="42px"
                    alignItems="center"
                    color="hsl(0, 0%, 100%)"
                  >
                    <Button
                      disabled={el.qty===0?true:false}
                      fontSize="25px"
                      backgroundColor="hsl(83, 47%, 52%)"
                      borderRight="1px solid #fff"
                      onClick={() => {
                        var newLocal = JSON.parse(localStorage.getItem("data"))
                        var reqdata =  newLocal.filter((item) => {
                          if (item.id == el.id) {
                            item.qty = el.qty - 1;
                          }
                          return item.id == el.id
                        })
                        console.log(reqdata[0].qty,"q")
                        newLocal.forEach((item, i) => {
                          if (item.id == reqdata.id) {
                            newLocal.splice(i,1,reqdata)
                          }
                          
                        })
                        localStorage.setItem("data", JSON.stringify(newLocal))
                        
                        setdummy(dummy-1)
                        
                      }}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      borderTopRightRadius="none"
                      borderBottomRightRadius="none"
                      _hover={{
                        backgroundColor: "hsl(83, 47%, 52%)",
                        color: "hsl(0, 0%, 100%)",
                      }}
                    >
                      -
                    </Button>
                    <Button
                      fontSize="15px"
                      backgroundColor="hsl(83, 47%, 52%)"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="none"
                      _hover={{
                        backgroundColor: "hsl(83, 47%, 52%)",
                        color: "hsl(0, 0%, 100%)",
                      }}
                    >
                      
                      {el.qty}
                    </Button>
                    <Button
                      fontSize="25px"
                      backgroundColor="hsl(83, 47%, 52%)"
                      borderLeft="1px solid #fff"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      onClick={() => {
                        //CountIncDec(el.id, +1, el.qty, el.price, el.aPrice)
                        var newLocal = JSON.parse(localStorage.getItem("data"))
                        var reqdata = newLocal.filter((item) => {
                          if (item.id == el.id) {
                            item.qty = el.qty + 1;
                          }
                          return item.id == el.id
                        })
                        console.log(reqdata)
                        newLocal.forEach((item, i) => {
                          if (item.id == reqdata.id) {
                            newLocal.splice(i, 1, reqdata)
                          }
                        })
                        localStorage.setItem("data", JSON.stringify(newLocal))
                        setdummy(dummy+1)
                      }
                      }
                      borderTopLeftRadius="none"
                      borderBottomLeftRadius="none"
                      _hover={{
                        backgroundColor: "hsl(83, 47%, 52%)",
                        color: "hsl(0, 0%, 100%)",
                      }}
                    >
                      +
                    </Button>
                  </Flex>
                </Td>
                <Td border="0px">₹{Math.round(el.price * el.qty)}</Td>
                <Td border={"0px"}>{<button onClick={() => {
                  alert("item deleted")
                  let Ldata = JSON.parse(localStorage.getItem("data"))
                  var deletd = Ldata.filter(item => {
                    return item.id!=el.id
                  })
                  console.log(deletd,"d")
                  localStorage.setItem("data", JSON.stringify(deletd));
                  setdummy(dummy+1)
                }}>DELETE</button>}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Footer />
    </Box>
  );
}
