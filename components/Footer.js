import React from 'react'
import SvgLoader from 'bv-react-svgloader'

export default (props) => {
        return(
        <footer>
        <SvgLoader src='/static/images/payment-logo.svg'/>
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Terms of Sale</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Disclaimer</a></li>
            </ul>
            <p>
                &copy; 2018 PRET. All Right Reserved | Powered by <a target="_blank" href="www.altitude-tech.com">Altitude Technology</a>
            </p>
        </footer>
    )
}