import Head from 'next/head'
import Footer from './Footer';


export default function withLayout(Child, opts={}) {
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
        return (
          <div>
            <Head>
              <meta name="format-detection" content="telephone=no"/>
              <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
              <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
              <link rel="shortcut icon" type="image/x-icon" href="/static/images/fav.ico"/>
              <meta charSet="utf-8"/>
            </Head>
            <div>
              <div className="">
                  <Child {...this.props}/>
              </div>
              <Footer />
            </div>
          </div>
        )
      }
    }

    return WrappedComponent
  }
