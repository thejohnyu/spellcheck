const words = require('./words').default;

exports.getWord = (req, res) => {
  try {
    const queryCondition = req.query.word;
    console.log(`queryCondition ===>`, queryCondition);
    console.log('--------------------------');
    const results = words.filter(word => new RegExp(`^${req.query.word}`).test(word));
    res.json({ data: results });
    // res.json('hello world');
  } catch (error) {
    res.json({ message: error });
  }
};
