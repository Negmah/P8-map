import React from 'react'
import './App.css';


//Stateless Functional Component
const Footer = (props) => {
    return (
        <div>
            <footer id='footer-wrapper'>
                <p id='quote'><i>- It does not matter how slowly you go as long as you do not stop.<br />Confucius</i></p>
                <p className='copyright'>Coded with love, sweat, tears and <strong>friends</strong> for Udacity<br />by &copy;
                    <a id='footer-link' target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/monica-moura-39024046/'>Monica Moura</a> {/*implicit ARIA role: 'link'*/}
                </p>
            </footer>
        </div>
    );
}

export default Footer;