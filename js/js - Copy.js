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
    'dateM': app2.dateM,
    'time': app2.time,
    'teamA': app2.teamA,
    'teamB': app2.teamB,
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
console.log(b.id);
    if (valor.location == b.id && valor.id==) {
      app2 = valor;
    }
    n = {
      dateM: app2.dateM,
      time: app2.time,
      teamA: app2.teamA,
      teamB: app2.teamB,
      location: app2.location + " Elementary",
      address: app2.address,
      url: app2.url
    }
    app3 = n;
  })
  showMap();
} 

function showMap() {
  document.getElementById('app3').style.display = 'inline-block';
  document.getElementById('app3').innerHTML = '<div class=\"centered\"> Date: ' +app3.dateM + '<br>Time: ' + app3.time + '<br><h3>' + app3.teamA + ' vs ' + app3.teamB + '</h3></div><br>' + app3.location + '<br>' + app3.address + '<br><iframe src=\"' + app3.url + '"\ style="border:1px" allowfullscreen name="iframe1"></iframe>';
}
