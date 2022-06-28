## Getting started

1. Clone the project `git clone https://gitlab.com/sayedhamdi/opuslab-website.git`
2. Change the directory to the project `cd opuslab-website`
3. Run `docker compose up -d` to start the containers.
4. Seed the db: `yarn run db:seed`
5. If not working with node as a container then install yarn: `npm i -g yarn`
6. Install all the dependencies `yarn install`
7. Run the system in a dev env: `yarn run dev`

- To drop db collections run: `yarn run db:drop`
- To clear redis cache run: `yarn cache:clear`

**Husky hooks:**

- Pre-commit: `yarn husky add .husky/pre-commit "yarn lint-staged"`
- Pre-push: `yarn husky add .husky/pre-push "yarn build"`
- Commit-msg: `yarn husky add .husky/commit-msg "yarn --no -- commitlint --edit $1"`

Checking the code takes time, even more so when the project gets bigger sometimes changing only markdown files or CI yaml files, doesn't require the typescript code to be checked. [Lint staged](https://github.com/okonet/lint-staged), goal is to only run your lint scripts when necessary, and only on the necessary files.

## Used technologies

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [tailwindcss](https://tailwindcss.com/): Rapidly build modern websites without ever leaving your HTML.
- [next.js](https://nextjs.org/): Next.js gives the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
- [Typescript](https://www.typescriptlang.org/): TypeScript is JavaScript with syntax for types.
- [graphQL](https://graphql.org/): Data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.
- [express graphQL](https://github.com/graphql/express-graphql): Create a GraphQL HTTP server with Express.
- [ioredis](https://github.com/luin/ioredis): A robust, performance-focused, and full-featured Redis client for Node.js.
- [express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [mongoose](https://mongoosejs.com/): Elegant mongodb object modeling for node.js.
