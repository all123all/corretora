import { Flex, Text, Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <Box className="footer-main-container">
            <div className="footer-contact-view">
                <h2 className="footer-contact-view-title">Contact us</h2>
                <p className="footer-contact-view-text">Tel: 1234-5678</p>
                <p className="footer-contact-view-text">Email: example@mail.com</p>
            </div>
            <div className="footer-map-view">
                <div className="footer-map">
                    
                </div>
            </div>
        </Box>
    )
}