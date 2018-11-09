var fs = require('fs')
var makePodcast = require('../../podcast2')
var a = require('./a.json')

/*
a is a 3-dimesional array:
	a[album number][song number][tag index] = some tag
top (first) level:
	all album tables
	album name and directory are not stored in the array
second level:
	songs of each album
third level:
	tags of each song
a[i][n][0] = artist
a[i][n][1] = album (not used in this export)
a[i][n][2] = track
a[i][n][3] = title
a[i][n][4] = length in seconds (digits only)
a[i][n][5] = year
a[i][n][6] = genre
a[i][n][7] = bitrate (digits only)
a[i][n][8] = bitrate information ( kbps VBR/CBR)
a[i][n][9] = codec
a[i][n][10] = comment
a[i][n][11] = size of file
a[i][n][12] = samplerate
a[i][n][13] = mode
a[i][n][14] = written tags
a[i][n][15] = directory (not used in this export)
a[i][n][16] = relative filename
a[i][n][17] = file size in bytes (for sorting)
*/

var items = []
a.forEach(function(b) {
	b.forEach(function (c) {
		items.push(c)
	})
})


items = items.map(function (item, i) {
	var paddedCount = ('000' + (i+1)).slice(-4)
	return {
		title: paddedCount + '. ' + item[3],
		description: item[0] + ' ' + item[3],
		url: item[16],
		date: 'Jan 1, '+item[5]+' 12:00:00',
		enclosure: {
			url: item[16],
			size: item[17]
		}
	}
})

var podcast = makePodcast({
	indent: true,
	title: 'Pocket College',
	description: 'Pocket College',
	feed_url: 'https://artskydj.github.io/test/pocketcollege/rss.xml',
	site_url: 'https://artskydj.github.io/test/pocketcollege/',
	author: 'Joseph Dykstra',
	pubDate: 'November 8, 2018 18:00:00 GMT',
	language: 'en'
}, items)

fs.writeFileSync('./podcast.rss', podcast, 'utf-8')
