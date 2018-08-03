const search = async queryCondition => {
	const res = await fetch(`http://localhost:5000/api/search?word=${queryCondition}`);
	const result = await res.json();
	return result;
};

const autoComplete = async queryCondition => {
	const res = await fetch(`http://localhost:5000/api/autoComplete?word=${queryCondition}`);
	const result = await res.json();
	return result;
};

export default { search, autoComplete };
