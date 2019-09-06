
const google = require('./google.js');
const reddit = require('./redditScraper/index.js');



async function getData(subReddits) {
	let redditData = await reddit.scrapeData(subReddits);
	let dataArray = [];
	for (let rd of redditData.data) {
		let data = await google.analyzeText(rd.text);
		data.forEach(entity => {
			let item = {text: entity.name, size: 1, href: [rd.link]};
			dataArray.push(item);
		});
	}

	dataArray = combineDuplicates(dataArray);
	dataArray = dataArray.sort((a, b) => b.size - a.size);

	if (subReddits.includes("canada")) {
		dataArray = dataArray.filter((item) => item.text.toUpperCase() !== "canada".toUpperCase());
	}

	return {'data': dataArray};
}

/**
* combineDuplicates(dataArray): Merges all the elements in the dataArray with the same title.
*/
function combineDuplicates(dataArray) {
	let newArray = [];

	while (dataArray.length > 0) {
		let currentTitle = dataArray[0].text;
		let curTitleArray = dataArray.filter((a) => a.text === currentTitle);

		if (curTitleArray.length > 1) {
			let linkList = [];
			for (let item of curTitleArray) {
				linkList.push(item.href[0]);
			}

			newArray.push({text: currentTitle, size: linkList.length * 50, href: linkList});
			console.log({text: currentTitle, size: linkList.length * 50, href: linkList});
		} else {
			newArray.push({text: currentTitle, size: 1 * 50, href: [dataArray[0].href[0]]});
			console.log({text: currentTitle, size: 1 * 50, href: [dataArray[0].href[0]]});
		}

		var dataArray = dataArray.filter((a) => a.text !== currentTitle);
	}

	return newArray;
}


module.exports = {
	getData
}