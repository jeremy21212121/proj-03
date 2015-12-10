#Project 3 - Instagrid

The goal of this project is to use the Instagram API to get recent Instagram pictures by hashtag. It is designed for mobile-first, with breakpoints for tablet and desktop. 

As this was my first project using SCSS, I was eager to figure out what it could do. I made good use of variables, for example each media query pixel value is represented by the variables $tablet or $desktop, making it easy to adjust the breakpoints. I over-used nesting, however, not realizing at the time that I was being more specific than necessary. 

This project makes use of Ajax and jQuery to fetch and display the images. I accomplished two optional features, or "stretch-goals" as we call them. I enabled pagination, allowing the user to load more images. I also used a light-weight lightbox plugin, called featherlight, to allow the user to quickly expand a photo without navigating away from their search results.

If I were to re-do this project now, I would do a couple things differently. I wouldn't use global variables, and I would obscure my API key or move the API call to the backend for security.


A *RED Academy* project by _Jeremy Poole_

