import React from 'react';
import "./About.scss";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const About = () => {
  return (
    <div className='aboutPage'>
      <div className="main">
        <h1>About us</h1>
        <p><b>THE M-STORE</b> caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find anywhere else. We are constantly curating fresh new collections and looking for the next big thing our customers will love. <strong>Founded in Vienna in 2019,</strong> we are proud to be your Online Clothing Shop that you can rely on for our expert service and care. The trust of <strong>over 50 million customers and 500,000 sellers</strong> propelled us to become the first decacorn in USA. </p>
      </div>
    </div>
  )
}

export default About;