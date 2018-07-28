import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import SvgLoader from 'bv-react-svgloader'
import Nav from './Nav';

export default class Header extends Component {
    render() {
    return (
        <Fragment>
            <div className="container">
                <header className="main">
                   <Nav />
                </header>
            </div>
            <div className="blockBg" style={{height:'50px', marginBottom: '20px'}}>
                
            </div>
        </Fragment>
    )
    }
}