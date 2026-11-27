# My Travel List

A simple packing list app built with React for C304 Cloud Application Development (Lesson 11).
Add the things you need to pack, tick them off when they are in your bag, and see how much you have packed.
Live app: https://travel-list-app-chi.vercel.app## Features

Add an item with a name and quantity (1 to 10)
Empty items are not added
Tick the checkbox to mark an item as packed (it gets crossed out)
Untick to mark it as not packed again
Stats at the bottom show the number of items, how many are packed, and the percentage
Shows “You got everything! Ready to go!” when all items are packed
Cartoon “sticker” design: every item gets its own colour and tilt
Works on laptop and phone screens## Built with

React (Create React App)
useState for the form and the item list
Lifting state up: the items state lives in App and is passed down as props
CSS with variables, flexbox, grid and a media query for phones
Fonts: Fredoka and Nunito (Google Fonts)
Hosted on Vercel## Components

Component
What it doesApp
Holds the items state and the add / toggle functionsLogo
Shows the titleForm
Text box, quantity dropdown and ADD buttonPackingList
Loops through the items with .mapItem
One item with a checkbox, name and quantityStats
Counts packed items with .filter and shows the progress## Run it on your computer

Clone the repo
git clone https://github.com/yan-webDev/Trave-List-App.gitGo into the folder and install packages
cd Trave-List-App
npm installStart the app
npm startOpen http://localhost:3000 in your browser

## Project structure

src/
components/
App.js      all the components
index.css     colours, layout and styles
index.js      renders App into the page
public/
index.html## Author

Yan, C304 Cloud Application Development, Republic Polytechnic

