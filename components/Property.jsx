import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from '../public/house.png';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID  } }) => (
  <div className="property-main-container">
    <div className="property-card">
      <div className="property-cover-photo">
        <img src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260}/>
      </div>
      <div className="property-card-content">
        <div className="property-card-content-price">
          <div className="property-card-verified">{isVerified && <GoVerified />}</div>
          <p className="property-card-content-price-text">AED {price}{rentFrequency && `/${rentFrequency}`}</p>
        </div>
        <div className="property-card-agency-logo">
          <img src={agency?.logo?.url} width={250} height={100}/>
        </div>
        <div className="property-card-baths">
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </div>
        <p className="property-card-bottom-description">
          {title.length > 30 ? title.substring(0, 30) + '...' : title}
        </p>
      </div>
    </div>
  </div>
  );
  
  export default Property;