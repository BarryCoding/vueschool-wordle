# wordle

learn TDD with Vue3

- setup vitest globals
  - [vitest reference](https://vitest.dev/config/#globals)
- test wordle victory
- test wordle failure
- test wordle not submit
- test extraction

- wordle rules
  1. wordOfTheDay is always 5 letters
    - console warning if not
  2. wordOfTheDay is UPPERCASE
    - console warning if not 
  3. wordOfTheDay is real english
    - console warning if not
    - setup 5 letter json with alias import
- json words already satisfy all 3 rules
  - no warning when all satisfied