![](public/android-chrome-192x192.png?raw=true)

**Welcome to L.L**. is a simple code test made to list Brazil's Zip Codes(CEPs) in a Google map using React, Redux and Jsonp services.

Live version available at: https://romulobordezani.github.io/welcome-to-ll/
 
Please, try this PWA on a Mobile Phone using Chrome and add it to your Home screen.

# Achieved Features
- **Progressive Web App**
- Offline mode
- It saves your last searches on localStorage
- Animated 
- Responsive
- Using Function Generators to make async requests
- SASS, BEM and Flex Box to style
- Normalized with Normalize.css
- Doesn't use material-ui react library in order to make it lighter weight
- Input with Masks to prevent mistakes while typing a CEP
- Airbnb and Prettier as code stylers (with rules to prevent a war between them)
- Snapshots testing
- Deploy using gh-pages

# What I would still like to do, but I'm out of time
- Add Docker and CI CD with gitlab, delivering in an AWS instance
- Server Side Render using [Next.js](https://nextjs.org/)
- A **Back-end For Front-end** middleware using Node.js and Express, serving in a GraphQL way
- Server responses mocks using [fetch-mock](https://www.npmjs.com/package/fetch-mock) to get a higher coverage
- Enhance Jest with Enzyme to get a higher coverage and user's event simulations

# How to Install
```bash
yarn install
```


# How to run
```bash
yarn start
```

You can access it locally at: [http://localhost:3000/](http://localhost:3000/)


# How to Test
```bash
yarn test
```

# How to Deploy
```bash
yarn run deploy
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and the original Read-me file was kept as [CRA_README.md](CRA_README.md)
