import Link from 'next/link'
import Image from 'next/image'
import {Flex, Box, Text, Button} from '@chakra-ui/react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import Banner from '../components/banner'
import { baseUrl, fetchApi } from '../utils/fetchApi'
import Property from '../components/Property'

const Home = ({ propertiesForSale, propertiesForRent }) => (
  <div className="index-main-container">
    <Menu />
    <div className="index-search-container">
      <div className="index-search-content">
        <p className="index-search-content-text">Find The Best Homes In The Best Places</p>
      </div>
      <form className="index-search-input-form">
      <select name="choose-operation" id="choice" className="index-search-select">
        <option value="rent">Rent</option>
        <option value="buy">Buy</option>
      </select>
        <input className="index-search-input" placeholder="Search for your city" />
        <button className="index-search-button">Search</button>
      </form>
    </div>
    <div className="home-rent-header-container">
      <p className="home-rent-header-text">Check these selected homes for Rent</p>
    </div>
    <div className="properties-for-container">
        {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
    </div>    
    <div className="home-rent-header-container">
      <p className="home-rent-header-text">Check these selected homes for Sale</p>
    </div>
    <div className="properties-for-container">
        {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
    </div>    
    <Footer />
  </div>
);

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;