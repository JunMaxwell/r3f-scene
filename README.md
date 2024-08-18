# R3F site
A simple site to showcase some of the capabilities of react-three-fiber.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
```

Remember to config .env.local with localhost or your ip address.

```bash
VITE_PUBLIC_URL=http://localhost:5173
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

# Building for Production
This site is built automatically by jekyll when pushed to the main branch. The site is hosted on github pages. [R3F-Scene](https://junmaxwell.github.io/r3f-scene/)

# Tech Stack
- [Vite + React](https://vitejs.dev)
- [Three.js](https://threejs.org)
- [@react-three/fiber](https://github.com/pmndrs/react-three-fiber)
- [@react-three/drei](https://github.com/pmndrs/drei)
- [@react-three/cannon](https://github.com/pmndrs/use-cannon)
- [Jekkyl](https://jekyllrb.com)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
