## Framer Motion

![Framer Motion](https://repository-images.githubusercontent.com/157846876/70574400-9e6a-11e9-8708-22d4bf4c3322)

## What is Framer Motion?

Think of Framer Motion as more of an improvement or reinvention of an existing animation library than a brand new one.

Framer Motion is the successor to Pose, which was one of the most popular animation libraries used with React. Like Pose, it’s built upon promotion, which is a low-level, unopinionated animation library, but it provides abstractions to streamline the process.

Framer Motion improves upon and simplifies the API in a way that couldn’t have been done without breaking changes and rewriting. One difference is that whereas Framer Motion only has support for React, Pose has support for React-Native and Vue. If you’re currently using Pose I would recommend updating to Framer Motion because Pose has been depreciated.

## How do I start?

1. Install Framer Motion package.

    `npm install framer-motion` (if you are using `npm`) 

    or 

    `yarn add framer-motion` (if you are using `yarn`)

2. Import `motion` component in your file.

    ```
    import { motion } from 'framer-motion';
    ```

3. Try to animate an element using `animate` attribute. 

    ⚠️ Remember: you are not using more `css` syntax or attributes, they all are from Framer Motion

    ```
    export default function App() {
      return (
        <motion.h2
          animate={{ scale: 1.2 }}
        >
          Framer Motion Example
        </motion.h2>
      )
    }
    ```

4. See the code and try to learn it works.

5. See this [playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i) on YouTube about Framer Motion.

---

⚠️ You can notice two important things:

1. `motion` always comes before the html tag (just make shure on the [documentation](https://www.framer.com/api/motion/component) if Framer Motion supports)
2. `animate` attribute pass an object (like the `style={{}}`)

---

## Goals

- [X] Project setup
- [X] Animating elements
  - `animate`
- [X] Initital animation state
    - `initial`
- [X] Transition options
  - `transition`
- [X] Hover animations
  - `whileHover`
- [X] Variants [1]
    - `variants`
- [X] Variants [2]
- [X] Keyframes
  - `[]`
- [X] Repeating animations
  - `yoyo`
- [X] Animate Presence
  - `AnimatePresence`
- [ ] Animating routes
- [ ] Modal animation [1]
- [ ] Modal animation [2]
- [ ] Animating SVG's
- [ ] Creating a loader
- [ ] UseCycle Hook
- [ ] Dragging items & wrap up

-----

[LICENSE](./LICENSE)
