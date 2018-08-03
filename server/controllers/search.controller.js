const words = require('./words')

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const WORD_COUNTS = HashObj(words)

function HashObj (arr) {
  const result = arr.reduce((acc, word) => {
    if (acc[word] === undefined) {
      acc[word] = 1
    } else {
      acc[word]++
    }
    return acc
  }, {})
  return result
}

function editDistance1 (string) {
  const word = string.toLowerCase().split('')
  const results = []

  // Adding any one character (from the alphabet) anywhere in the word.
  for (let i = 0; i <= word.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      const newWord = word.slice()
      newWord.splice(i, 0, alphabet[j])
      results.push(newWord.join(''))
    }
  }

  // Removing any one character from the word.
  if (word.length > 1) {
    for (let i = 0; i < word.length; i++) {
      const newWord = word.slice()
      newWord.splice(i, 1)
      results.push(newWord.join(''))
    }
  }

  // Transposing (switching) the order of any two adjacent characters in a word.
  if (word.length > 1) {
    for (let i = 0; i < word.length - 1; i++) {
      const newWord = word.slice()
      const r = newWord.splice(i, 1)
      newWord.splice(i + 1, 0, r[0])
      results.push(newWord.join(''))
    }
  }

  // Substituting any character in the word with another character.
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      const newWord = word.slice()
      newWord[i] = alphabet[j]
      results.push(newWord.join(''))
    }
  }

  return results
}

function correctWord (word) {
  if (word in WORD_COUNTS) {
    return word
  }

  let maxCount = 0
  let correctWord = word
  const editDistance1Words = editDistance1(word)
  const editDistance2Words = editDistance1Words.reduce((acc, cur) => acc.concat(cur), [])

  for (var i = 0; i < editDistance1Words.length; i++) {
    if (editDistance1Words[i] in WORD_COUNTS) {
      if (WORD_COUNTS[editDistance1Words[i]] > maxCount) {
        maxCount = WORD_COUNTS[editDistance1Words[i]]
        correctWord = editDistance1Words[i]
      }
    }
  }

  let maxCount2 = 0
  let correctWord2 = correctWord

  for (var i = 0; i < editDistance2Words.length; i++) {
    if (editDistance2Words[i] in WORD_COUNTS) {
      if (WORD_COUNTS[editDistance2Words[i]] > maxCount2) {
        maxCount2 = WORD_COUNTS[editDistance2Words[i]]
        correctWord2 = editDistance2Words[i]
      }
    }
  }

  if (word.length < 6) {
    if (maxCount2 > 100 * maxCount) {
      return correctWord2
    }
    return correctWord
  } else {
    if (maxCount2 > 4 * maxCount) {
      return correctWord2
    }
    return correctWord
  }
}

function autoComplete (arr, word) {
  return arr.filter((cur) => {
    return new RegExp(`^${word}`).test(cur)
  })
}

exports.getWord = (req, res) => {
  try {
    const queryCondition = correctWord(req.query.word)
    const autoCompleteData = autoComplete(words, req.query.word)
    res.json({ spellcheck: queryCondition, success: true, error: false})
  } catch (error) {
    res.json({ message: error, success: false, error: true})
  }
}
