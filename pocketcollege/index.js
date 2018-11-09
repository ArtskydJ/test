var fs = require('fs')

var index = fs.readFileSync('./www.pocketcollege.com_index.htm', 'utf-8')

var js = index.split('// count albums')[1].split('// IE7 workaround')

eval(js)

fs.writeFileSync('./a.json', JSON.stringify(a), 'utf-8')
