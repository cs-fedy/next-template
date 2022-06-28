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
