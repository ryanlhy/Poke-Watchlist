# Pokemon Cards Watch List

Pokemon Cards as a collectible item has risen in recent years, and collecters are actively looking out for cards to complete their collection. 
This project serves as an interface for a pokemon card Watch List that allows users to add cards to their watchlist and submit it to the back-end. It will then start an automated process that source for cards for sale in various marketplace. 

This project mainly focuses on the front-end portion. View the site here: https://pokemon-watchlist-lyart.vercel.app/

![image](https://user-images.githubusercontent.com/103638962/201466984-3dbedc63-03f3-45e8-913a-0e37390fe719.png)

## Features

- Search for cards by name or set
- View detailed information about a card, including its image, price, and set details
- Add cards to your watchlist for easy tracking
- View the current prices of cards in your watchlist

## Development Notes

- The application is built using a component-based architecture approach, with each major feature represented by a separate component.
- Controlled forms are used to handle user input and trigger API calls.
- The watchlist feature is implemented using local storage to persist the data between sessions.

## Technologies Used

- ReactJS: The front-end of the application is built using the ReactJS framework.
- Redux: The application uses Redux for state management.
- Bootstrap: The UI is built using the Bootstrap library for styling and responsive design.
- API calls: The application makes API calls to retrieve card data based on user input.

## Component Tree
![component-tree](https://user-images.githubusercontent.com/103638962/201466814-6de0a63a-4b54-47d5-86e0-0b18ea34813e.png)

## SearchBar.js
<li> Receives user input with controlled forms
<li> Triggers a re-render at every change in input to call pokemontcg.io API
<li> Sends input values to redux store

  
## Results.js
<li> Calls pokemontcg.io API according to input values. Initialized on load with default values
<li> Returns an array of Cards components to DOM according to number of elements recieved from DOM
<li> Sends input values to redux store

## CardListing.js
<li> Displays values from pokemontcg.io API
<li> Listen for click on 'add' button and add card object to Watch List Array
<li> Sends action to redux store
  

## Future Improvements

- Implement authentication and user accounts to allow users to save their watchlists and access them from any device.
- Add more detailed card information, such as rarity and condition.
- Allow users to set price alerts and receive notifications when a watched card's price changes.

We hope you enjoy using Poke Watchlist! If you have any feedback or suggestions for improvement, please don't hesitate to let us know.

This project was built with:
<li> React (https://reactjs.org/)
<li> Create React App (https://github.com/facebook/create-react-app)
<li> React Bootstrap (https://react-bootstrap.github.io/)
<li> React Redux (https://react-redux.js.org/)
<li> Pokemontcg.io (https://docs.pokemontcg.io/)
  
