[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Miami-LMLI/Reimagine-Collaboration)
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Miami-LMLI/Reimagine-Collaboration)

![GitHub last commit](https://img.shields.io/github/last-commit/Miami-LMLI/Reimagine-Collaboration)
[![GitHub issues](https://img.shields.io/github/issues/Miami-LMLI/Reimagine-Collaboration)](https://github.com/Miami-LMLI/Reimagine-Collaboration/issues)
![GitHub repo size](https://img.shields.io/github/repo-size/Miami-LMLI/Reimagine-Collaboration)

# Reimagine Collaboration: Navigating the Evolving Workplace

- [Reimagine Collaboration: Navigating the Evolving Workplace](#reimagine-collaboration-navigating-the-evolving-workplace)

  - [Overview](#overview)
  - [Core Tech Stack](#core-tech-stack)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Useful Commands](#useful-commands)
  - [License](#license)

<a name="overview"/></a>
## Overview

This repository is for the development of the Lockheed Martin Leadership Institute's Reimagine Collaboration website. This project was initially forked from [Cohort 9's Envision 2040 website](https://github.com/LMLI-Cohort-9/Envision-2040).

<a name="tech"/></a>
## Core Tech Stack
- [ ] [NodeJS](https://nodejs.org/)
- [ ] [React](https://reactjs.org/)
- [ ] [Gatsby](https://www.gatsbyjs.com/)
- [ ] [Contentful](https://www.contentful.com/)
- [ ] [GraphQL](https://graphql.org/)

<a name="prereq"/></a>
## Prerequisites
- [ ] NodeJS (version >=10.13.0)
- [ ] NPM
- [ ] Contentful API Access
- [ ] An IDE of your choice ([Visual Studio Code](https://code.visualstudio.com/) recommended)

<a name="setup"/></a>
## Setup
1. Clone the repository.
```

git clone git@github.com:Miami-LMLI/Reimagine-Collaboration.git

```

2. Check into the cloned repository.
```
cd Reimagine-Collaboration/
```

3. Install dependencies.
```
npm install
```

4. Setup Contentful API keys.
---
**NOTE**

Running `npm run setup` on the command-line will reset the Contentful content in your space to the default content setup. Likely you just want to run this for the initial setup, then you will run `npm run dev` for subsequent developments. 

---
```
npm run setup
```

4. (alternative) Create a `.env.development` and `.env.production` files following the format of `.env.example` in the root directory.
Fill in the API keys here.
```
CONTENTFUL_SPACE_ID=''
CONTENTFUL_ACCESS_TOKEN=''
```

5. Run in development mode.
```
npm run dev
```

<a name="useful"/></a>
## Useful Commands
- `npm run start` or `npm run dev`
  - Starts a development server accessible by default at http://localhost:8000. Gatsby will start a hot-reloading development environment.

- `npm run lint`
  - Runs ESLint on all Javascript and Typescript files. ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.The project should be in compliance with [Google's ESLint rules](https://github.com/google/eslint-config-google).

- `npm run test`
  - Runs all test cases. Currently there are no that have been written yet.

- `npm run build`
  - Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.


<a name="license"/></a>
## License

The underlying source code is licensed under the [LICENSE](https://github.com/Miami-LMLI/Reimagine-Collaboration/blob/main/LICENSE.md)

[![LICENSE](https://img.shields.io/badge/LICENSE-grey.svg)](https://github.com/Miami-LMLI/Reimagine-Collaboration/blob/main/LICENSE.md)

The graphics used are licensed under a [CC BY-NC 4.0 License](https://licensebuttons.net/l/by-nc/4.0/80x15.png).

[![license: CC BY-NC 4.0](https://img.shields.io/badge/license-CC%20BY--NC%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc/4.0/)
