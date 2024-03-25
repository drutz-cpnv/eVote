import type { CodegenConfig } from '@graphql-codegen/cli'

const gqlEndpoint = 'http://localhost:8080/admin'
const GQL_ROOT_PATH = "./src/graphql";
const SCHEMA_PATH = `${GQL_ROOT_PATH}/schema/remote/dgraph.schema.graphql`;
const GENERATED_SERVICES_PATH = `${GQL_ROOT_PATH}/generated/graphql.ts`

const config: CodegenConfig = {
  generates: {
    // This property
    [SCHEMA_PATH]: {
      schema: gqlEndpoint,
      config: {
        commentDescriptions: true,
        mergeDirectives: true
      },
      plugins: ['schema-ast']
    },

    [GENERATED_SERVICES_PATH]: {
      schema: SCHEMA_PATH,
      documents: ['./src/**/*.ts', 'src/**/*.graphql'],
      plugins: [{
        typescript: {
          allowEnumStringTypes: true,
          addExplicitOverride: true
        },
      },
        {
          'typescript-operations': {
            exportFragmentSpreadSubTypes: true,
          },
        },

        {
          'typescript-apollo-angular': {
            addExplicitOverride: true
          }
        },
        'fragment-matcher',
        {
          add: {
            content: '/* eslint-disable */',
            placement: 'prepend',
          },
        }]
    }

  }
}
export default config


