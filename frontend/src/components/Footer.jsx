import React from 'react';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaXTwitter, FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row text-start">
          {[
            {
              heading: 'Products',
              links: ['Flowers', 'Decorations', 'Events', 'Gifts']
            },
            {
              heading: 'About Us',
              links: ['Who We Are', 'Community Impact', 'Sustainability', 'Join Us', 'Brand Toolkit']
            },
            {
              heading: 'FAQs',
              links: ['Flowers', 'Decorations', 'Events', 'Gifts']
            },
            {
              heading: 'More',
              links: ['Terms & Conditions', 'Data Privacy Statement', 'Frequently Asked Questions']
            }
          ].map((col, idx) => (
            <div className="col-6 col-md-3 mb-4" key={idx}>
              <h6 className="fw-bold">{col.heading}</h6>
              <ul className="list-unstyled">
                {col.links.map((link, i) => (
                  <li key={i}><a href="#" className="text-white-50 text-decoration-none">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-secondary" />

        <div className="d-flex justify-content-center gap-4 fs-5">
          <a href="#" className="text-white"><FaFacebookF /></a>
          <a href="#" className="text-white"><FaYoutube /></a>
          <a href="#" className="text-white"><FaLinkedinIn /></a>
          <a href="#" className="text-white"><FaInstagram /></a>
          <a href="#" className="text-white"><FaXTwitter /></a>
          <a href="#" className="text-white"><FaTiktok /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
