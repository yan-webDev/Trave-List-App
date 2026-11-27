# My Travel List – Packing List App

A packing list app I built with React for C304 Cloud Application Development.

## What it does

Lets you add things you need to pack, with a name and a quantity (1 to 10)
Doesn’t add an item if the name is empty
Shows every item as a colourful sticker with its name and quantity
Tick the checkbox on an item to mark it as packedWhen packed: the item is crossed out
Untick it to mark it as not packed againStats at the bottom show how many items you have, how many are packed and the percentage

When the list is empty: “Start adding some items to your packing list!”
When everything is packed: “You got everything! Ready to go!”Works on phones as well as laptops

## How I built it

I split the page into small components so each part has its own job:

App
├── Logo
├── Form
├── PackingList
│   └── Item (one for each item)
└── StatsThe React things I used:

Components and props – one Item component is reused for every item, and the item data is passed in as a prop
Array of data + .map() – all the items are stored in one array, and .map() turns each one into an Item component (with key). I also used .map() to make the 1–10 options in the quantity dropdown
useState – for the item name, the quantity, and the list of items
Controlled inputs – the text box and dropdown get their value from state, and Number(e.target.value) turns the quantity into a number
Handling form submit – e.preventDefault() stops the page from reloading when you click ADD
Lifting state up – the items state lives in App, so both PackingList and Stats can use it
Passing functions as props – App passes onAddItems to Form and onToggleItem down to each Item
Updating state from the previous state – […prevItems, item] adds a new item, and .map() with { …item, packed: !item.packed } flips packed for one item
.filter() – to count how many items are packed
Conditional rendering – ternary (? :) for the crossed-out style and the stats message, and an early return when the list is empty## Styling

All styling is in index.css (no CSS libraries)
I went with a cartoon “sticker board” look: sky blue, sunny yellow, bubblegum pink, mint and orange on a cream background
The colours are saved as CSS variables at the top of the file, so I can change the theme in one place
Thick dark outlines and hard shadows (no blur) give it a comic feel, also saved as variables
Fonts are Fredoka (headings) and Nunito (text) from Google Fonts, both round and playful to match the cartoon style
Each item is a tilted sticker, and nth-child gives every sticker its own colour and tilt, so new items get colours automatically
Small touches: stickers straighten and grow a bit when you hover, and the ADD button pops up on hover and squishes down when clicked
A media query stacks the form and makes the title smaller on phones## Running it locally

npm install
npm startThen open http://localhost:3000

## Hosting

Hosted on Vercel https://travel-list-app-chi.vercel.app , connected to this GitHub repo, so every push updates the live site.

