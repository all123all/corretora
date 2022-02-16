import { Flex, Text, Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Banner = ({purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl}) =>{
    return(
        <div className="banner-card-container">
            <Flex flexWrap="wrap" m="10" flexDirection="center" alignItems="center">
                <img src={imageUrl} width={'100%'} height={'100%'}/>
                <Box p="5">
                    <Text color="black" fontSize="sm" fontWeight="medium">{purpose}</Text>
                    <Text color="black" fontSize="3x1" fontWeight="bold">{title1}<br/>{title2}</Text>
                    <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="black">{desc1}<br/>{desc2}</Text>
                    <button>
                        <Link href={linkName}>{buttonText}</Link>
                    </button>
                </Box>
            </Flex>
        </div>
        
    )
}
export default Banner