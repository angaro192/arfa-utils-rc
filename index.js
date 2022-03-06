function formatMoney(value) {
	const numero = String(value)
		.replace(/\D/g, "")
		.replace(/^0+/, "");

	let counter = 1;
	let isCommaFound = "notFound";

	const formattedStringReversed = Array
		.from(numero.toString())
		.reverse()
		.reduce((acc, i, index, arr) => {
			if (counter == 2 && isCommaFound == "notFound" && (arr = acc + i + ',')) {
				acc = acc + i + ',';
				isCommaFound = "found";
				counter = 0;
			} else if (counter == 3 && (arr.length != (index + 1))) {
				acc = acc + i + '.'
				counter = 0;
			} else {
				acc = acc + i
			}

			counter++
			return acc
		}, "")

	let formmatedNumber = Array.from(formattedStringReversed)
		.reverse().join("")

	if (formmatedNumber.length == 2) {
		formmatedNumber = "0," + formmatedNumber
	} else if (formmatedNumber.length == 1) {
		formmatedNumber = "0,0" + formmatedNumber
	}
	return formmatedNumber
}

function formatCep(value) {
	return String(value)
		.replace(/\D/g, "")
		.slice(0, 8)
		.replace(/(\d{5})(\d)/, "$1-$2")
}

module.exports = {
	formatMoney,
	formatCep
}