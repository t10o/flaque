import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  documents: "src/**/*.tsx",
  generates: {
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
    "src/gql/": {
      plugins: [],
      preset: "client",
    },
  },
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_ENDPOINT,
};

export default config;
