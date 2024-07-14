/**
 * # Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Orange: hsl(25, 97%, 53%)

### Neutral

- White: hsl(0, 0%, 100%)
- Light Grey: hsl(217, 12%, 63%)
- Dark Blue: hsl(213, 19%, 18%)
- Very Dark Blue: hsl(216, 12%, 8%)

## Typography

### Body Copy

- Font size (paragraph): 15px

### Font

- Family: [Overpass](https://fonts.google.com/specimen/Overpass)
- Weights: 400, 700

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.

 */




/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./thank-you.html"],
  theme: {
    colors: {
      //Primary
      "orange": "hsl(25, 97%, 53%)",
      "white": "#FFFFFF",
      "black": "#000000",

      //Neutrals
      "light-gray":"hsl(217, 12%, 63%)",
      "dark-blue": "hsl(213, 19%, 18%)",
      "very-dark-blue": "hsl(216, 12%, 8%)"
    },
    fontFamily: {
      "main": "Overpass"
    },
    fontWeight:{
      "normal":"400",
      "bold":"700"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

