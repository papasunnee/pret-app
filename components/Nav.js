import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import cookie from 'cookie'
import redirect from '../lib/auth/redirect'
import SvgLoader from 'bv-react-svgloader'
import {ApolloConsumer} from 'react-apollo'
import LoginModal from './LoginModal'
import { LoginModalContext } from '../contexts/LoginModalContext'
import { USER_ISAUTHENTICATED_QUERY } from '../lib/graphql/queries'
        
export default class Nav extends Component {
    constructor(props){
        super(props);
    }
    render() {
    return (
        <Fragment>
            <nav>
                <Link prefetch href="/">
                    <a className="navbar-brand"><SvgLoader src='/static/images/pret-logo-small.svg' className="svg-logo"/></a>
                </Link>
                <ul>
                    <li>
                        <Link prefetch href="/">
                        <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/about">
                        <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/employer">
                        <a>Employer</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/contact">
                        <a>Contact</a>
                        </Link>
                    </li>
                    <li>
                        <LoginModalContext.Consumer>{
                            ({open, toggleModal}) => (
                                <Fragment>
                                <LoginModal isOpen={open} close={toggleModal} />
                                <ApolloConsumer>
                                    {client => (
                                    <a href="#!"
                                        onClick={async () => {
                                        const { data : { userIsAuthenticated } } = await client.query({query: USER_ISAUTHENTICATED_QUERY});
                                        if (userIsAuthenticated) {
                                            console.log('isAuth - fetching cookies');
                                            const {userType, token} = cookie.parse(document.cookie)
                                            if (userType && token) {
                                                let target = `/user/dashboard`;
                                                userType == 'PretCandidate' && (target=`/user/dashboard`);
                                                userType == 'Institution' && (target=`/institution/dashboard`);
                                                redirect({}, target)
                                            } else {
                                            toggleModal();
                                            }
                                        } else {
                                            toggleModal();
                                        }
                                        }}>Login</a>
                                    )}
                                    </ApolloConsumer>
                                </Fragment>
                            )}
                        </LoginModalContext.Consumer>
                    </li>
                </ul>
            </nav>        
        </Fragment>
    )
    }
}