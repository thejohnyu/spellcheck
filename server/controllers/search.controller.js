const words = require('./words');

exports.getWord = (req, res) => {
	try {
		const queryCondition = req.query.word;
		const results = words.filter(word => {
			return new RegExp(`^${queryCondition}`).test(word);
		});
		res.json({ data: results });
	} catch (error) {
		res.json({ message: 'error' });
	}
};
