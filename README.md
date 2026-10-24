# Rick and Morty Character Explorer

A React application for exploring characters from the Rick and Morty universe using the public [Rick and Morty API](https://rickandmortyapi.com/).

## Features

- Browse characters in a card-based layout.
- Search characters by name.
- Move between API result pages with Previous and Next controls.
- Open a character detail page with information such as species, status, gender, origin, location, and episode count.
- Display loading placeholders while character data is being fetched.
- Toggle the page theme.
- Component tests are included in the repository.

## Built with

- React
- React Router
- Redux Toolkit and React Redux
- Axios
- Create React App (react-scripts)
- Jest and React Testing Library

## Run locally

### Requirements

- Node.js
- npm

### Install and start

```bash
git clone https://github.com/rittika-04/Ricky-morty-.git
cd Ricky-morty-
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tests and production build

Run the project's configured test command:

```bash
npm test
```

Create a production build:

```bash
npm run build
```

> Tests and the production build should be run locally before presenting the project as fully verified. This README describes the implementation visible in the source; it does not claim a current deployment or passing test status.

## Project structure

```text
src/
├── component/   # Character cards, list, header and loading placeholders
├── pages/       # Character detail page
├── services/    # API request helper
├── slices/      # Redux state for characters, search and theme
├── store/       # Redux store setup
└── App.js       # Routes and application entry component
```

## API

Character data is retrieved from the public Rick and Morty API. Network availability and API responses may affect what the application can display.

## Future improvements

- Add a dedicated error state with a retry action for failed API requests.
- Improve keyboard navigation and visible focus states.
- Add a verified live demo and screenshots.
- Add automated coverage for search, pagination, and API failure scenarios.

## Author

Rittika Shaw · [GitHub](https://github.com/rittika-04) · [LinkedIn](https://linkedin.com/in/rittika-shaw-41454023b)
