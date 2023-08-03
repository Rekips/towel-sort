
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let res = [];
	for (let x=0; x<matrix.length; x++) {
		if ((x-1)%2===0 || x-1===0) {
			matrix[x].reverse();
		}
		for (let y of matrix[x]) {
			res.push(y);
		}
	}
	return res;
}
