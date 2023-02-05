import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import axios from "axios";
import { handelLogin } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";



export default function Login(){
 
  const dispatch = useDispatch()
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const [mbNum, setMbNum] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [Login, setLogin] = useState("")
  const [Password,setPassword] = useState("")
  const data = useSelector(selector=>selector)
console.log(data)
 
 
  
  const CheckValidUser=()=>{
    alert("we are checking data wait...")
    try {
      axios.get("https://blue-frantic-springbok.cyclic.app/userData")
    .then(res=>{
      for(var i=0; i<res.data.length;i++){
        if(res.data[i].Email==email && res.data[i].Password==pass){
         // setUser(res.data[i].UserType)
          //console.log(res.data[i].UserType);
          if(res.data[i].UserType=="USER"){
            localStorage.setItem("UserName", email)
            localStorage.setItem("token", JSON.stringify([{ "token": res.data[i].Password }]))
            setPassword(res.data[i].Password)
            dispatch(handelLogin())
            localStorage.setItem("loginstatus", true)
             navigate("/")
          }
          else{
            localStorage.setItem("UserName",email)
            navigate("/Admin")
          }
          break;
        }
        
      }
      
    }).catch(res=>{})
    } catch (error) {
      alert("wrong data")
    }
  }
  

  return (
    <Box>
      <Navbar />
      <br />
      <Box w="25%" m="auto">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Text
          padding="16px 0 24px 0"
          lineHeight="28px"
          color="#1f1f1f"
          fontSize="20px"
          fontWeight="bold"
          textAlign="center"
        >
          Enter valid details to Login
        </Text>
        <Button
          onClick={modal1.onOpen}
          _hover={{ bg: "whiteAlpha.900" }}
          bg="whiteAlpha.900"
          borderBottom="1px solid #e0e0e0"
          display="flex"
          alignItems="center"
          gap="8px"
          color="#666"
          fontWeight="semibold"
          p="10"
          w="100%"
        >
          <Image
            src="https://zoomcar-assets.zoomcar.com/images/original/38ff9c58fe221677b6e8958c1caba43d35710fe2.png?1654779648"
            alt="India Logo"
            h="40px"
            mr="-2"
          />{" "}
          <span>+91</span>
          <Text ml="3" pl="2" borderLeft="1px solid #e0e0e0">
            Enter Mobile Number
          </Text>
        </Button>
        <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter login credentials</ModalHeader>
           
            <ModalCloseButton />
            <ModalBody>
              <Flex alignItems="center" gap="10px">
                <Button
                  _hover={{ bg: "whiteAlpha.900" }}
                  bg="whiteAlpha.900"
                  borderBottom="1px solid #e0e0e0"
                  display="flex"
                  alignItems="center"
                  gap="8px"
                  color="#666"
                  fontWeight="semibold"
                >
                  <Image
                    src="https://zoomcar-assets.zoomcar.com/images/original/38ff9c58fe221677b6e8958c1caba43d35710fe2.png?1654779648"
                    alt="India Logo"
                    h="40px"
                    mr="-2"
                  />{" "}
                  <span>+91</span>
                </Button>
                <Input
                  placeholder="Enter your registered mobile number"
                  onChange={(e) => setMbNum(e.target.value)}
                />
              </Flex>
              <br />
              <Input
                placeholder="Enter your registered email-ID"
                onChange={(e) => setEmail(e.target.value)}
              />
          
            
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={modal1.onClose}>
                Close
              </Button>
              <Button
                onClick={() => {
                  if (mbNum === "" || email === "")
                    alert("Please enter vaild credentials!");
                  else modal2.onOpen();
                }}
                variant="ghost"
              >
                Continue
              </Button>
              <Modal isOpen={modal2.isOpen} onClose={modal2.onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Enter Password</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <br />
                    <Input
                      placeholder="Enter your password"
                      onChange={(e) => setPass(e.target.value)}
                      type="password"
                    />
                  </ModalBody>
                  <br />
                  <br />
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={modal2.onClose}>
                      Close
                    </Button>
                    <Button
                      onClick={() => {
                        if (pass === "") alert("Please enter vaild password!");
                        else {
                          CheckValidUser()
                          // GetLoginData(email, pass, mbNum)
                          //   .then((res) => {
                          //     if (res.data.length > 0) {
                          //       alert("Login successfull!");
                          //       dispatch({
                          //         type: loginSuccess,
                          //         payload: { token: Date.now() + email },
                          //       });
                          //       modal2.onClose();
                          //       modal1.onClose();
                          //       navigate("/");
                          //     } else navigate("/signup");
                          //   })
                          //   .catch((err) => {
                          //     console.log(err);
                          //   });
                        }
                      }}
                      variant="ghost"
                    >
                      Continue
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Box textAlign="start" fontWeight="bold" color="green.500">
          <Button
            _hover={{ bg: "whiteAlpha.900" }}
            bg="whiteAlpha.900"
            borderBottom="1px solid #e0e0e0"
            p="7"
            w="100%"
          >
            <Text> Continue with Email ID</Text>
          </Button>
          <Button
            _hover={{ bg: "whiteAlpha.900" }}
            bg="whiteAlpha.900"
            borderBottom="1px solid #e0e0e0"
            p="7"
            w="100%"
            display="flex"
            alignItems="center"
            gap="8px"
          >
            <Text>Continue via Social</Text>
            <Image
              src="https://www.zoomcar.com/build/62ba375ec1a9fbcbee9e9099181c8d38.svg"
              alt="Facebook"
            />
            <Image
              src="https://www.zoomcar.com/build/279de03b0c8ecdb4db56a79da6e775e6.svg"
              alt="Google"
            />
          </Button>
          <Button
            _hover={{ bg: "whiteAlpha.900" }}
            bg="whiteAlpha.900"
            borderBottom="1px solid #e0e0e0"
            p="7"
            w="100%"
            rightIcon={<ExternalLinkIcon />}
            onClick={() => {
              navigate("/signup");
            }}
          >
            <Text>Create an account</Text>
          </Button>
        </Box>
        
      </Box>
      <br />
      <br />
      <br />
      <Footer />
    </Box>
  );
}
