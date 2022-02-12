import Link from 'next/link'
import Image from 'next/image'
import {Flex, Box, Text, Button} from '@chakra-ui/react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import Banner from '../components/banner'

export default function Home() {
  return (
    <div className="index-main-container">
      <Menu />
      <div className="index-search-container">
        <div className="index-search-content">
          <p className="index-search-content-text">Find The Best Homes In The Best Places</p>
        </div>
      </div>
      <Banner
        purpose="RENT A HOME"
        title1="Rental homes for"
        title2="You"
        desc1="Explore Houses, Apartments, Villas"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Banner
        purpose="BUY A HOME"
        title1="Find your"
        title2="DreamHouse"
        desc1="Explore Houses, Apartments, Villas"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Footer />
    </div>
  )
}
