# YuHui: A game for practicing Chinese character recognition

# Overview

While learning Chinese, I noticed I was spending a great deal of time writing and recalling Chinese characters. There were just too many of them, and it was time consuming to write them all out by hand each time. My goal was to get to a proficient level of character recognition rather than writing everything out by heart, so I wanted to find a way to practice that. 

I wanted to make a game that was equally engaging, fun and educational. The scrambled grid of characters gives a familiar feeling to word puzzles and matching games, so it is intuitive to get started and play. 

# Features

There are separate levels for each of the HSK levels and each vocabulary list contains ~600 words. Once you choose the HSK level, the game will automatically create **clusters** for that vocabulary list. Each **cluster** is a sub-stack deck of words. The reason for creating these **clusters** was so that each deck would be a manageable size and the user can repeat what they just practiced in condensed batches.

Once you select a **cluster** from the **Home** page, you will be redirected to the **Practice** page with your chosen **cluster**. On load, the deck is shuffled and you're given the *English* word and the *Pinyin* counterpart for the traditional Chinese characters to fill out in the answer blocks. The characters get filled out once the correct character is clicked on from the grid of shuffled characters.

You will have the option to move on to the next word once the word is completely filled. Once you get to the end of the current deck, you will be given stats on how you did with that round. You can then practice the deck again to better your score or go back **Home** to choose another **cluster** to study a new deck. You can also reset the level of difficulty or choose a new vocabulary word list on the homepage at any time.


# Running the Project

1. Clone this project locally
2. Run `npm install` in your command line
3. Run `npm run dev` in your command line
4. Pick your vocabulary **cluster** and get started!

# Dependencies

- React
- React-DOM
- ESLint
- Prettier
