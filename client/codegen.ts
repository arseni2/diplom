import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:7777/graphql",
  documents: ["src/features/**/**/*.ts"],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    },
    "./schema.graphql": {
      plugins: ["schema-ast"]
    }
  }
};

export default config;