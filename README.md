# Pokemon Cards Watch List

Pokemon Cards as a collectible item has risen in recent years, and collecters are actively looking out for cards to complete their collection. 
This project serves as an interface for a pokemon card Watch List that allows users to add cards to their watchlist and submit it to the back-end. 

The intention is to start an automated process that source for cards for sale in various marketplace. This project mainly focuses on the front-end portion.

![image](https://user-images.githubusercontent.com/103638962/201466984-3dbedc63-03f3-45e8-913a-0e37390fe719.png)

## Component Tree
![component-tree](https://user-images.githubusercontent.com/103638962/201466814-6de0a63a-4b54-47d5-86e0-0b18ea34813e.png)

## SearchBar.js
<li> Receives user input with controlled forms
<li> Triggers a re-render at every change in input to call pokemontcg.io API
<li> Sends input values to redux store

  
## Results.js
<li> Calls pokemontcg.io API according to input values. Initialized on load with default values
<li> Return Cards components to DOM according to number of elements recieved from DOM
<li> Sends input values to redux store

## Card.js
  
## index.js REDUX
  



This project was built with:
<li> [React](https://reactjs.org/)
<li> [Create React App](https://github.com/facebook/create-react-app)
<li> [React Bootstrap](https://react-bootstrap.github.io/)
<li> [React Redux](https://react-redux.js.org/)
<li> [Pokemontcg.io](https://docs.pokemontcg.io/)
  
