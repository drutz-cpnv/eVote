import { Apollo, APOLLO_FLAGS, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import { ApolloClientOptions, InMemoryCache, split } from '@apollo/client/core';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

export function apolloOptionsFactory(): ApolloClientOptions<any> {
    const httpLink = inject(HttpLink).create({ uri: "https://zero.poo-e-vote.orb.local/" });


    // Crée un WebSocketLink avec l'instance de wsClient
    const wsLink = new WebSocketLink({ uri: "wss://localhost:6080" });

    // Utilise 'split' pour dispatcher les requêtes vers le bon 'link'
    const link = split(
        // split based on operation type
        ({ query }) => {
            const definition = getMainDefinition(query);
            return (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
            );
        },
        wsLink, // Utilisé pour les abonnements
        httpLink, // Utilisé pour les requêtes et mutations
    );

    return {
        link,
        cache: new InMemoryCache(),
    };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
    Apollo,
    {
        provide: APOLLO_FLAGS,
        useValue: {
            useMutationLoading: true,
        },
    },
    {
        provide: APOLLO_OPTIONS,
        useFactory: apolloOptionsFactory,
    },
];
