/**
 * Created by gopi on 1/14/17.
 */
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import Environment from '../utils/env';

const client = new ApolloClient({
    ssrMode: false,
    // Remember that this is the interface the SSR server will use to connect to the
    // API server, so we need to ensure it isn't firewalled, etc
    networkInterface: createNetworkInterface({
        uri: Environment.GCOOL_ENDPOINT
    }),
});

export default client;
