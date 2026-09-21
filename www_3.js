const http = require('http');
//moodul paringu parsimiseks
const url = require('url');
//moodel failitee haldamiseks
const path = require('path');
//moodul failide haldamiseks, ASYNC puhul on vaja seda toetavat erilisemat moodulit
//const fs = require('fs');
const fs = require('fs').promises;
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Ilja Artjomenko, veevbiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBody = '\t<h1>Ilja Artjomenko, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna أœlikoolis</a> ning ei sislda tأµsiseltvأµetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const pageBanner = '<img src="Pictures/123.png" alt=="">';
const pageFoot = '\n</body>\n</html>';

http.createServer(async function(req, res){
	//parsin url-i
	console.log('Päring: ' + req.url);
	let currentURL = url.parse(req.url, true);
	console.log('Parsituna: ' + currentURL.pathname);
	
	//hakkame erinevaid lehti jaotama > routs (marsruudid)
	
	if(currentURL.pathname === '/'){
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageHead); 
		res.write(pageBanner);
		res.write('\n\t<ul>');
		res.write(pageBody);
		res.write('\t<h1>Eesti vanasonad</h1>\n\t<p>Siin naed tanase paeva vanasona.</p>\n\t<hr>'); 
		res.write('\n\t<p><a href="/">Vanasonad</a></p>');		
		res.write(pageFoot); 
		//res.write('o i i a');
		return res.end();
	}
	
	else if (currentURL.pathname === '/vanasona'){
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageHead);
		res.write(pageBanner);		
		res.write('\t<h1>Eesti vanasonad</h1>\n\t<p>Siin naed tanase paeva vanasona.</p>\n\t<hr>'); 
		//res.write('n\n\t<ul>\n\t\t<li>a href="/vanasona">Taname vanasona </a></li>');
		res.write('\n\t<ul>\n\t\t<li>a href="/vanasona">Taname vanasona </a></li>');
		res.write('\n\t<p><a href="/">Tagasi avalehele</a></p>');
		res.write(pageFoot); 
		return res.end();
	}
	
	else if (currentURL.pathname === '/123.png'){
		let picPath = path.join(__dirname, 'pic', currentURL.pathname);
		try {
			const data = await fs.readFile(picPath + currentURL.pathname);
			res.writeHead(200, {"Content-type": "image/png"});
			res.end(data);
		} catch (err){
			res.writeHead(404, {"Content-type": "text/plain; charset=utf8"});
			return res.end('Pilti ei leitud!');
		}
	}
	
	
	else {
		res.end('Viga 404, ei leis sellist lehte!');
	}
}).listen(5102);