import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px 0; /* Reduced padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* Reduced gap */
  bottom: 0;
  width: 100%; /* Ensures it spans the width */
`;

const FooterLogo = styled.div`
  font-size: 20px; /* Slightly smaller font size */
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px; /* Reduced gap between links */
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLink = styled(NavLink)`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px; /* Reduced font size */
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const FooterText = styled.p`
  font-size: 12px; /* Reduced font size */
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>StyleNest</FooterLogo>

      <FooterLinks>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/Shop">Shop</FooterLink>
        <FooterLink to="/Contact">Contact Us</FooterLink>
        <FooterLink to="/About">About Us</FooterLink>
        <FooterLink to="/Privacy">Privacy Policy</FooterLink>
      </FooterLinks>

      <FooterText>© {new Date().getFullYear()} StyleNest. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
