import React from 'react'
import './App.css';


//Stateless Functional Component
const Footer = (props) => {
    return (
        <div id='footer-wrapper'>
            <footer id='footer'>
                <span id='quote'>
                    <i>It does not matter how slowly you go as long as you do not stop. Confucius</i>
                </span>
                <div className='footer-text'>
                        <span className='copyright'>
                        Coded with love, sweat and tears for Udacity by &copy;
                        <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/monica-moura-39024046/'>Monica Moura</a> {/*implicit ARIA role: 'link'*/}
                        </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;