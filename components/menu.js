import Image from "next/image";
import companyLogo from '../public/home-solid.png';
import { Input } from '@chakra-ui/react'

export default function Menu(){
    return(
        <div className="menu-main-container">
            <div className="menu-logo-container">
                {/* <Image src={companyLogo} className="menu-logo-img"/> */}
                <a className="menu-logo-text" href="#home">DreamHome</a>
            </div>
            <div className="menu-search-container">
                <form>
                    <input placeholder="City name here..." className="menu-search-input"/>
                </form>
            </div>
            <div className="menu-options-container">
                <a className="menu-options-container-text" href="#home">Home</a>
                <a className="menu-options-container-text" href="#home">Sale</a>
                <a className="menu-options-container-text" href="#home">Rental</a>
                <a className="menu-options-container-text" href="#home">Contact</a>
            </div>
        </div>
    )
}