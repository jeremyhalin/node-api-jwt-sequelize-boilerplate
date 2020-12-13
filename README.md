# Node.js API boilerplate with JWT and Sequelize

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

Node.js REST API boilerplate with authentication for your next project.

[Report bug][issues-url] · [Request feature][issues-url]

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- TABLE OF CONTENTS -->

## Table of contents

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About

I needed an API boilerplate to kickstart my projects. I built this repo for me to be able to use it as a template when I need to create an API for a personal project.

Features included :

- Authentication through JWT (`access_token` and `refresh_token`)
- Sequelize CLI to create additional tables

### Built With

- [Express](https://expressjs.com)
- [Node.js](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/master/)
- [Sequelize CLI](https://github.com/sequelize/cli)

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
- Node.js
- Database working with Sequelize (postgres, mysql, mariadb, sqlite3 or tedious)

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/jeremyhalin/node-api-jwt-sequelize-boilerplate.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Create `.env` file

   ```sh
   cp .env.example .env
   ```

<!-- USAGE EXAMPLES -->

## Usage

1. Start your database

2. Start server

   ```sh
   npm start
   ```

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- ROADMAP -->

## Roadmap

See the [open issues][issues-url] for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [gitmoji](https://github.com/carloscuesta/gitmoji)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [http-status-codes](https://github.com/prettymuchbryce/http-status-codes)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/jeremyhalin/node-api-jwt-sequelize-boilerplate.svg?style=flat
[contributors-url]: https://github.com/jeremyhalin/node-api-jwt-sequelize-boilerplate/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jeremyhalin/node-api-jwt-sequelize-boilerplate.svg?style=flat
[forks-url]: https://github.com/jeremyhalin/node-api-jwt-sequelize-boilerplate/network/members
[stars-shield]: https://img.shields.io/github/stars/jeremyhalin/node-api-jwt-sequelize-boilerplate.svg?style=flat
[stars-url]: https://github.com/jeremyhalin/node-api-jwt-sequelize-boilerplate/stargazers
[issues-shield]: https://img.shields.io/github/issues/jeremyhalin/node-api-jwt-sequelize-boilerplate.svg?style=flat
[issues-url]: https://github.com/jeremyhalin/node-api-jwt-sequelize-boilerplate/issues
[license-shield]: https://img.shields.io/github/license/jeremyhalin/node-api-jwt-sequelize-boilerplate.svg?style=flat
[license-url]: https://github.com/jeremyhalin/node-api-jwt-sequelize-boilerplate/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
[issues-url]: https://github.com/jeremyhalin/node-api-jwt-sequelize-boilerplate/issues
