generateData = (rounds, angle) => {

	var len = Math.floor(rounds  * 360 / angle)

	return Array(len).fill(null).map((e, i) => ({
		angle    : i * angle % 360,
		len      : len,
		fragment : i / len,
	}))
}
