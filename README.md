This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) && [MERN-boilerplate](https://github.com/thejohnyu/MERN-boilerplate.git)


1. `git clone https://github.com/thejohnyu/spellcheck.git`
2. `cd spellcheck`
3. `npm install && cd client && npm install && cd ..`
4. `npm run dev`


# Node running on port 5000 ---- React running on port 3000
### Spell Check
1. `API === localhost:3000/api/search?word=${word}`
2. `Controller === searchController.getWord()`

### Auto Complete

1. `API === localhost:3000/api/autocomplete?word=${word}`
2. `Controller === autoCompleteController.autoComplete()`

# Resources

1. http://norvig.com/spell-correct.html
2. https://github.com/WillSen/spellchecker-autocorrect
3. https://gist.github.com/tpae/72e1c54471e88b689f85ad2b3940a8f0
