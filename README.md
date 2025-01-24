# YuHui: A game for practicing Chinese character recognition

![Uploading Screenshot 2025-01-23 at 10.52.49 PM.png…]()
![Uploading Screenshot 2025-01-23 at 10.53.01 PM.png…]()
![Uploading Screenshot 2025-01-23 at 10.53.23 PM.png…]()
![Uploading Screenshot 2025-01-23 at 11.05.03 PM.png…]()

Try it out: https://yuhui-8crprcg4l-kristi-hs-projects.vercel.app/

# Overview

While learning Chinese, I noticed I was spending a great deal of time writing and recalling Chinese characters. There were just too many of them, and it was time consuming to write them all out by hand each time. My goal was to get to a proficient level of character recognition rather than writing everything out by heart, so I wanted to find a way to practice that.

I wanted to make a game that was equally engaging, fun and educational. The scrambled grid of characters gives a familiar feeling to word puzzles and matching games, so it is intuitive to get started and play.

# Features

There are separate levels for each of the HSK levels and each vocabulary list contains ~600 words. Once you choose the HSK level, the game will automatically create **decks** for that vocabulary list. Each deck provides a manageable size the user can study what they just practiced in condensed batches.

Once you select a **deck** from the **Home** page, you will be redirected to the **Practice** page with your chosen **deck**. On load, the deck is shuffled and you're given the _English_ word and the _Pinyin_ counterpart for the traditional Chinese characters to match from the grid of characters. If the guess is incorrect, the guess gets highlighted with a red border and the question word gets saved into a list of vocabulary you got wrong. If you answer correctly, you move onto the next word and so on until the deck completes.

At the end of the current deck, the you will be shown a scoreboard with the scores for that round, including a list of incorrect question words. You can then practice the deck again to better your score or go back **Home** to choose another **deck** to study. You can also reset the level of difficulty or choose a new vocabulary word list on the homepage at any time.

# Running the Project

1. Clone this project locally
2. Run `npm install` in your command line
3. Run `npm run dev` in your command line
4. Pick your vocabulary **cluster** and get started!

# Dependencies

- React
- React-DOM
- React Router
- ESLint
- Prettier
