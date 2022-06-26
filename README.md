## Getting started

1. Clone the project `git clone https://gitlab.com/sayedhamdi/opuslab-website.git`
2. Change the directory to the project `cd opuslab-website`
3. Install all the dependencies `yarn install`
4. Install husky dependencies `yarn husky install`

Checking the code takes time, even more so when the project gets bigger sometimes changing only markdown files or CI yaml files, doesn't require the typescript code to be checked. [Lint staged](https://github.com/okonet/lint-staged), goal is to only run your lint scripts when necessary, and only on the necessary files.
