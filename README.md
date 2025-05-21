# React Router Example with Vite

This project demonstrates a minimal React application using [Vite](https://vitejs.dev/) as the build tool and [React Router](https://reactrouter.com/) for client-side routing. It is intended as a starting point for building modern, fast, and maintainable single-page applications (SPAs) with React.

## Features

- ⚡️ Fast development with Vite and Hot Module Replacement (HMR)
- 🛣️ Client-side routing using React Router
- 🧹 Basic ESLint configuration for code quality
- 📦 Easy to extend and customize

## Live Demo

Check out the live demo: [https://react-router-sepia-chi.vercel.app](https://react-router-sepia-chi.vercel.app/about)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/react-router-vite-example.git
   cd react-router-vite-example
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Development Server

Start the local development server:

```sh
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

To create an optimized production build:

```sh
npm run build
# or
yarn build
```

The output will be in the `dist` directory.

### Previewing the Production Build

You can preview the production build locally:

```sh
npm run dev

```

## Project Structure

```
reactRouter/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── package.json
├── vite.config.js
└── README.md
```

- `src/` contains the React source code.
- `public/` contains static assets.
- `vite.config.js` is the Vite configuration file.

## Customization

- Add new routes by editing `App.jsx` and using React Router's `<Route>` components.
- Add new components in the `src/components/` directory.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
