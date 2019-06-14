document.getElementById('app3').style.display = 'none';
var coach = ["Michael Randall, League Coordinator", "Phone: (630) 690-8132", "michael.randall@chisoccer.org"];
var match = [];
var app1 = new Vue({
  el: '#app1',
  data: {
    matches: match
  }
});

var app3 = new Vue({
  el: '#app3',
  data: {
    'id1': '',
    'dateM': '',
    'time': '',
    'teamA': '',
    'teamB': '',
    'location': '',
    'address': '',
    'url': ''
  }
});

info = datos.matches;
info.forEach(function (valor) {
  m = {
    id1: '2019' + valor.dateM.replace('/', '') + valor.time.replace('.', ''),
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
    if (valor.id1 == b.id) {
      app3 = valor;
    }
  })
  showMap();
}

function showMap() {
  document.getElementById('app3').style.display = 'inline-block';
  var cadena1 = '<div class=\"centered\"> Date: ' + app3.dateM + '<br>Time: ' + app3.time + '<br><h3>' + app3.teamA + ' vs ' + app3.teamB + '</h3></div><br>';
  var cadena2 = app3.location + ' Elementary<br>' + app3.address + '<br><iframe src=\"' + app3.url + '"\ style=\"border:1px\" width=\"100%\" allowfullscreen name=\"iframe1\"></iframe>';
  var share = "<br><a href=\"whatsapp://send?text=Match info: Date: " + app3.dateM + " at " + app3.time + " / Match: " + app3.teamA + ' vs ' + app3.teamB + " / Place: " + app3.location + " Elementary / Address: " + app3.address + "\"data-action=\"share/whatsapp/share\"><img border=\"0\" src=\"img/wa.png\" width=\"32px\" height=\"32px\"> Share on Whatsapp</a><br><br>";
  document.getElementById('app3').innerHTML = cadena1 + share + cadena2;
}

function showContact() {
  var contactD = "<table class=\"no-border centered\"><tr><td><img src =\"img/alex.png\" width= \"100\"></td></tr><tr><td valign=\"bottom\"><h4>" + coach[0] + "</h4></td></tr><tr><td><h5>" + coach[1] + "<br><a href = \"mailto:" + coach[2] + "\">" + coach[2] + "</a></h5></td></tr></table>";
  document.getElementById('app3').style.display = 'inline-block';
  document.getElementById('app3').innerHTML = contactD;
}
