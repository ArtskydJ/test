// NOTE
// This is a snippet to copy and paste. It's not being used by the other files in this repo.
// Change this as needed
module.exports =
function xhr(url, cb) {
	var request = new XMLHttpRequest()
	request.open('get', url)
	request.onload = function () {
		if (request.status >= 200 && request.status < 400) {
			cb(null, request.responseText)
		} else {
			cb(new Error(request.status + ' - ' + request.statusText))
		}
		cb = function () {} // avoid the callback getting called twice
	}

	request.onerror = function () {
		cb(new Error('XMLHttpRequest Failure!'))
		cb = function () {} // avoid the callback getting called twice
	}
	request.send()
}
