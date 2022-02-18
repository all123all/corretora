import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import DefaultImage from '../public/house.png';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID  } }) => (
  <div className="property-card">
    <div className="property-cover-container">
      <img src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} className="property-cover-img"/>
    </div>
    <div className="property-card-content">
      <div className="property-card-content-price">
        <div className="property-card-verified">{isVerified && <GoVerified />}</div>
        <p className="property-card-content-price-text">USD {price}{rentFrequency && `/${rentFrequency}`}</p>
        <img src={agency?.logo?.url} className="property-card-agency-img"/>
      </div>
      <hr width={'95%'}/>
      <div className="property-card-baths">
        {rooms}
        <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
      </div>
      <p className="property-card-bottom-description">
        {title.length > 40 ? title.substring(0, 40) + '...' : title}
      </p>
    </div>
  </div>
);
  
  export default Property;