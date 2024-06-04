# PokéSearch

Communicates with the external [PokéApi](https://pokeapi.co/) (https://pokeapi.co/) to search for details about a specific Pokémon

- The Pokémon can be searched for by their full name
- The request to the PokéApi should be made from the front-end
- The name, height (in cm) and image of the Pokémon returned from the query should be displayed on the same page as the search input
- The search query can be cleared
- If no Pokémon matches the query, a "Not Found" error message is displayed
- If a network error occurs during the request flow, an "Unexpected Error Occurred" error message is displayed
- A list of Pokémon names that can be used for testing can be found [here](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_name)

## Prerequisites

- [Nodejs](https://nodejs.org/en/)
- [Yarn v1](https://classic.yarnpkg.com/lang/en/)

This repository is a monorepo managed by [Lerna](https://lerna.js.org/) and Yarn workspaces containing two packages. Each package is the same functionally but one is in TypeScript and the other is in JavaScript

- [poke-search-ts](./packages/poke-search-ts/README.md)
- [poke-search-js](./packages/poke-search-js/README.md)

## How to test

1. This test was implemented in TS. Run `cd shiny-eureka-main/packages/poke-search-ts`.

2. Run `yarn` - Install the dependencies of the project.

3. Run `yarn dev` - Runs Next.js in development mode.

4. Run `yarn build` - To test creation of the production bundle.

5. Run `yarn start` - Runs Next.js in production mode.

6. Run `yarn lint` - Runs the linting on the Next.js project.