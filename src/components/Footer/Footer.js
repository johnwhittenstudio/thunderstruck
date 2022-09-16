import React from "react";
import { FaYoutube, FaInstagramSquare } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import BoltTwoToneIcon from '@mui/icons-material/BoltTwoTone'
import classes from './Footer.module.css'

const handleURL = (url) => {
  return () => window.open(url, "_blank")
}

const Footer = () => {
  return ( 
    <div className={classes.Footer}>
      <div className={classes.Row} id="footer">

        <div className={classes.FooterIcons}>
          <GrMail className={classes.Icon} color="#87bcf9" size='30px' style={{padding: '1%'}}
          onClick={handleURL('mailto:thunderstruckcollective@gmail.com')} />
          <FaInstagramSquare className={classes.Icon} color="#87bcf9" size='30px' style={{padding: '1%'}}
          onClick={handleURL('https://www.instagram.com/thunderstruckcollective/')} />
          <FaYoutube className={classes.Icon} color="#87bcf9" size='35px' style={{padding: '1%'}}
          onClick={handleURL('https://www.youtube.com/channel/UC-V6tMaHcYExkqCy-NWzTxQ/featured')} />
        </div>
        <div className={classes.FooterText}>
          <BoltTwoToneIcon style={{color: '#87bcf9'}}/>
          <p style={{color: '#87bcf9'}}>Copyright 2022, thunderstruck collective</p>
          <BoltTwoToneIcon style={{color: '#87bcf9'}}/>
        </div>  
      </div>
    </div>
  );
}

export default Footer;





// import React from "react";
// import {
// Box,
// Container,
// Row,
// Column,
// FooterLink,
// Heading,
// } from "./Footer.module.css";

// const Footer = () => {
// return (
// 	<Box>
// 	<h1 style={{ color: "green",
// 				textAlign: "center",
// 				marginTop: "-50px" }}>
// 		GeeksforGeeks: A Computer Science Portal for Geeks
// 	</h1>
// 	<Container>
// 		<Row>
// 		<Column>
// 			<Heading>About Us</Heading>
// 			<FooterLink href="#">Aim</FooterLink>
// 			<FooterLink href="#">Vision</FooterLink>
// 			<FooterLink href="#">Testimonials</FooterLink>
// 		</Column>
// 		<Column>
// 			<Heading>Services</Heading>
// 			<FooterLink href="#">Writing</FooterLink>
// 			<FooterLink href="#">Internships</FooterLink>
// 			<FooterLink href="#">Coding</FooterLink>
// 			<FooterLink href="#">Teaching</FooterLink>
// 		</Column>
// 		<Column>
// 			<Heading>Contact Us</Heading>
// 			<FooterLink href="#">Uttar Pradesh</FooterLink>
// 			<FooterLink href="#">Ahemdabad</FooterLink>
// 			<FooterLink href="#">Indore</FooterLink>
// 			<FooterLink href="#">Mumbai</FooterLink>
// 		</Column>
// 		<Column>
// 			<Heading>Social Media</Heading>
// 			<FooterLink href="#">
// 			<i className="fab fa-facebook-f">
// 				<span style={{ marginLeft: "10px" }}>
// 				Facebook
// 				</span>
// 			</i>
// 			</FooterLink>
// 			<FooterLink href="#">
// 			<i className="fab fa-instagram">
// 				<span style={{ marginLeft: "10px" }}>
// 				Instagram
// 				</span>
// 			</i>
// 			</FooterLink>
// 			<FooterLink href="#">
// 			<i className="fab fa-twitter">
// 				<span style={{ marginLeft: "10px" }}>
// 				Twitter
// 				</span>
// 			</i>
// 			</FooterLink>
// 			<FooterLink href="#">
// 			<i className="fab fa-youtube">
// 				<span style={{ marginLeft: "10px" }}>
// 				Youtube
// 				</span>
// 			</i>
// 			</FooterLink>
// 		</Column>
// 		</Row>
// 	</Container>
// 	</Box>
// );
// };
// export default Footer;
