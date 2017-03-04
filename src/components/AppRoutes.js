/**
 * Created by gopi on 1/8/17.
 */
import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import Envrironment from '../utils/env';

//console.log("CURRENT ENVIRONMENT IS:", Envrironment);


const networkInterface = createNetworkInterface({ uri: Envrironment.GCOOL_ENDPOINT});

const client = new ApolloClient({
    networkInterface,
    dataIdFromObject: o => o.id
})

export default class AppRoutes extends React.Component {
    render() {

        return (
            <ApolloProvider client={client}>
                <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
            </ApolloProvider>
        );
    }
}

