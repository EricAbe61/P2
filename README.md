# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
Use the following user stories to guide your development:

As a user, I should be able to navigate to the home page and see a list of the first 151 Pokemon, including their pictures, so that I can review the pokemon.
As a user, I should be able to click on a pokemon’s picture that directs me to a view that provides additional information about that pokemon, so that I can learn more about an individual pokemon.
This detailed view page should contain basic information about the Pokemon, such as flavor text, height and weight, types, base stats, and moves that the Pokemon is able to learn.
As a user, I should be able to click a button from the detailed view of a Pokemon to go back to the original list of Pokemon.
As a user, I should see a loading spinner when waiting for the page to load instead of seeing the pictures load piecemeal.
Your application should:

Utilize the following React hooks in functional React components:
useState
useEffect
useContext
Custom hooks
Be styled to look similar to the images below
Stretch Goals
Implement a filter menu on the main Pokedex page that allows users to filter Pokemon by their types.
Implement a search feature that allows users to search for specific Pokemon and gracefully handles any errors. This feature should implement the useReducer hook
Write unit and integration tests for your application