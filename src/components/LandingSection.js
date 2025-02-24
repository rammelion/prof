import React from "react"; 
import { Avatar, Heading, Image, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
 
const greeting = "Helló, Gábor vagyok!";
const subHead="(Nyugi, nem így nézek ki)"; 
const bio1 = "Amiből taníthatlak:"; 
const bio2 = "Matek, Fizika, Informatika"; 
const phone = "+36 30 218 9916"
 
const LandingSection = () => ( 
 <FullScreenSection 
   justifyContent="center" 
   alignItems="center" 
   isDarkBackground 
   backgroundColor="#2A4365" 
 > 
   <VStack spacing={16}> 
     <VStack spacing={4} alignItems="center"> 
       <Avatar 
         src="https://i.pravatar.cc/150?img=69" 
         size="2xl" 
         name="Your Name" 
       /> 
       <Heading as="h4" size="md" noOfLines={1}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
     <Heading as="h1" size="xl" noOfLines={1}> 
         {subHead} 
       </Heading> 
       <Heading as="h1" size="2xl" noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="xl" noOfLines={1}> 
         {bio2} 
       </Heading> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {phone} 
       </Heading> 
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 
 
export default LandingSection;