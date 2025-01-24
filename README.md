# YuHui: A game for practicing Chinese character recognition

![homepage-darkmode](/assets/screenshots/home-night.png?raw=true)
![homepage-lightmode](/assets/screenshots/home-day.png?raw=true)
![practice-grid](/assets/screenshots/practice.png?raw=true)
![scoreboard-incorrect-list](/assets/screenshots/incorrect-list.png?raw=true)

Try it out: https://yuhui-8crprcg4l-kristi-hs-projects.vercel.app/

# Overview

While learning Chinese, I noticed I was spending a great deal of time writing and recalling Chinese characters. There were just too many of them, and it was time consuming to write them all out by hand each time. My goal was to get to a proficient level of character recognition rather than writing everything out by heart, so I wanted to find a way to practice that.

I wanted to make a game that was equally engaging, fun and educational. The scrambled grid of characters gives a familiar feeling to word puzzles and matching games, so it's intuitive and easy to get started and play.

# Features

There are separate levels for each of the HSK levels and each vocabulary list contains ~600 words. Once you choose the HSK level, the game will automatically create **decks** for that vocabulary list. Each deck provides a manageable size the user can study what they just practiced in condensed batches. There are also intensity levels of: easy, medium, hard which correspond to the sizes of the grid: 2x2, 3x3, 4x4.

From the **Home** page, first select an intensity level then select a **deck**, you will be redirected to the **Practice** page with your chosen **deck**. On load, the deck is shuffled and you're given the _English_ word and the _Pinyin_ counterpart for the traditional Chinese characters to match from the grid of characters. If the guess is incorrect, the guess gets highlighted with a red border and the question word gets saved into a list of vocabulary you got wrong. If you answer correctly, you move onto the next word and so on until the deck completes. You also have the option to move onto the next word with a click of a button, but this will mark your word as wrong.

At the end of the current deck, you will be shown a scoreboard with the scores for that round, including a list of incorrect question words with their corresponding _English_ and _Pinyin_ words. You can then repeat the deck or choose a new deck to play again. You always have the option to return **Home** by clicking on the YuHui icon on the top left corner of the screen.

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
