import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/layout";
import {FaBed, FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
// import {GoVerified} from 'react-icons/goverified'; thats not working i don't know why
import millify from "millify";

const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId}}) => (
    <Link href={`/property/${externalID}`} passHref>
        {title}
    </Link>
);

export default Property;