import Head from 'next/head'
import Footer from './Footer';
import {LoginModalWrapper} from '../contexts/LoginModalContext'


export default function withLayout2(Child, opts={}) {
    class WrappedComponent extends React.Component {
      static async getInitialProps(context, apolloClient) {
        let ChildProps = {};
        if (Child.getInitialProps) {
          ChildProps = await Child.getInitialProps(context, apolloClient)
        }

        return {
          ...ChildProps,
        }
      }

      render() {
          const {showSignIn} = this.props;
        return (
          <div>
            <Head>
              <meta name="format-detection" content="telephone=no"/>
              <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
              <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
              <meta charSet="utf-8"/>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
              <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500" rel="stylesheet"/>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
              <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
              <link href="/static/css/style.css" rel="stylesheet" type="text/css" media="all" />
            </Head>
            <div>
              <div className="">
                <LoginModalWrapper showSignIn={showSignIn}>
                  <Child {...this.props}/>
                </LoginModalWrapper>
              </div>
            </div>
            <Footer />
          </div>
        )
      }
    }

    return WrappedComponent
  }
