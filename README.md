# Connect Four Game

Welcome to this implementation of the classic Connect Four game. This project is a simple, yet engaging Angular application that allows two players to play the Connect Four game against each other. It was developed as part of a technical test, with the challenge to complete the task in under 45 minutes.

## Overview

Connect Four is a two-player connection game in which the players first choose a color and then take turns dropping colored tokens from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own tokens.

## Technical Implementation

This project is built using Angular, a platform and framework for building single-page client applications using HTML and TypeScript. The game logic and state management are handled within Angular services, utilizing BehaviorSubjects from RxJS for reactive state management. The UI updates reactively based on the game's state.

## Project Structure

- `GameLogicService`: Contains the core logic for the game, including initializing the board, handling player turns, and checking for a win condition.
- `GameBoardComponent`: Responsible for displaying the game board and handling user interactions, such as token placement.
- The application utilizes Angular's reactive forms and RxJS observables to manage and respond to changes in the game's state.

## Running the Project

To run this project on your local machine, follow these steps:

1. Make sure you have [Node.js](https://nodejs.org/) and [Angular CLI](https://cli.angular.io/) installed.
2. Clone this repository to your local machine.
3. Navigate to the project directory and install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   ng serve
   ```

5. Open your web browser and navigate to `http://localhost:4200/` to view the game.

## Purpose

This game was developed as a technical test to demonstrate proficiency in Angular, TypeScript, and reactive programming concepts. The challenge was to implement the game within a strict timeframe of 45 minutes, showcasing the ability to quickly understand requirements, design a solution, and implement functionality effectively.

Thank you for checking out this project. Enjoy playing Connect Four!