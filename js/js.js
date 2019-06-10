document.getElementById('app3').style.display = 'none';
var match = [];
var app1 = new Vue({
	el: '#app1',
	data: {
		matches: match
	}
});

var app2 = new Vue({
	el: '#app2',
	data: {
		'id': '',
		'dateM': '',
		'time': '',
		'teamA': '',
		'teamB': '',
		'location': '',
		'address': '',
		'url': ''
	}
});
var app3 = new Vue({
	el: '#app3',
	data: {
		'location': app2.location,
		'address': app2.address,
		'url': app2.url
	}
});
info = datos.matches;
info.forEach(function (valor) {
	m = {
		id: '2019' + valor.dateM.replace('/', '') + valor.time.replace('.', ''),
		dateM: valor.dateM,
		time: valor.time,
		teamA: valor.teamA,
		teamB: valor.teamB,
		location: valor.location,
		address: valor.address,
		url: valor.url
	};
	app1.matches.push(m);
});

function clickaction(b) {
	app1.matches.map(function (valor) {
		document.getElementById('app3').style.display = 'none';
		
		if (valor.location == b.id) {
			app2 = valor;
		}
		n = {
			location: app2.location + " Elementary",
			address: app2.address,
			url: app2.url
		}
		app3 = n;
	})
	showMap();
}
console.log(app3.location);

function showMap() {
	document.getElementById('app3').style.display = 'inline-block';
	document.getElementById('app3').innerHTML = app3.location + '<br>' + app3.address + '<br><iframe src=\"' + app3.url + '"\ width = 100% height = 80% style="border:1px" allowfullscreen name="iframe1"></iframe>';
}
