import React from 'react'
import SvgLoader from 'bv-react-svgloader'

export default (props) => {
        return(
        <footer>
        <SvgLoader src='/static/images/payment-logo.svg'/>
            <ul>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-of-use">Terms of Use</a></li>
                <li><a href="/terms-of-sale">Terms of Sale</a></li>
                <li><a href="/cookie-policy">Cookie Policy</a></li>
                <li><a href="/disclaimer">Disclaimer</a></li>
            </ul>
            <p>
                &copy; 2018 PRET. All Right Reserved | Powered by <a target="_blank" href="http://www.altitude-tech.com">Altitude Technology</a>
            </p>
        </footer>
    )
}