import React, { Component } from 'react'
import { Query } from 'react-apollo'

import { PAYMENT_PAGE_QUERY } from '../lib/graphql/queries'

export default class NameBox extends Component {
    render() {
      return (
        <div>
          <Query query={PAYMENT_PAGE_QUERY}>{
            ({loading, error, data}) => {
              const { viewerCandidate: {candidate: { payments }}} = data;

              return payments.map(payment=><div>
              {payment.paystackReference} - {payment.createdAt}
                </div>)
            }
          }</Query>
        </div>
      )
    }
}