document.getElementById('app3').style.display = 'none';
var coach = ["Michael Randall <br> League Coordinator", "Phone: (630) 690-8132", "michael.randall@chisoccer.org"];
var match = [];
var teams = ["U1", "U2", "U3", "U4", "U5", "U6"];

var tablaPartidos = new Vue({
  el: '#tablaPartidos',
  data: {
    matches: match
  },
});

var app3 = new Vue({
  el: '#app3',
  data: {
    'id1': '',
    'dateM': '',
    'month': 0,
    'time': '',
    'teamA': '',
    'teamB': '',
    'location': '',
    'address': '',
    'url': ''
  }
});

window.addEventListener("load", function()
{

	if(!window.pageYOffset)
	{
		hideAddressBar();
	}

	window.addEventListener("orientationchange", hideAddressBar);

});

showData("U0"); //U0: valor por default que me muestra los partidos de todos los equipos

function hideAddressBar()
{
  if(!window.location.hash)
  {
      if(document.height < window.outerHeight + 10)
      {
          document.body.style.height = (window.outerHeight + 50) + 'px';
      }

      setTimeout(function()
      {
      	window.scrollTo(0, 1);
      }, 50);
  }
}

function showData(what) {
  tablaPartidos.matches = [];
  var info = what == "U0" ? datos.matches : datos.matches.filter(function (val) {
    return (val.teamA == what || val.teamB == what);
  });
  info.forEach(function (valor) {
    m = {
      id1: '2019' + valor.dateM.replace('/', '') + valor.time.replace('.', ''),
      dateM: valor.dateM,
      month: parseInt(valor.dateM.slice(0, 2)),
      time: valor.time,
      teamA: valor.teamA,
      teamB: valor.teamB,
      location: valor.location,
      address: valor.address,
      url: valor.url
    };
    tablaPartidos.matches.push(m);
  });
}

function clickaction(b) {
  tablaPartidos.matches.map(function (valor) {
    document.getElementById('app3').style.display = 'none';
    if (valor.id1 == b.id) {
      app3 = valor;
    }
  })
  showMap();
}

function showMap() {
  document.getElementById('app3').style.display = 'inline-block';
  var cadena1 = '<div class=\"centered\"> Date: ' + app3.dateM + '<br>Time: ' + app3.time + '<br><h3>' + app3.teamA + ' vs ' + app3.teamB + '</h3><button class=\"teamsB\" disabled>Message Board</button></div>';
  var cadena2 = '<b>' + app3.location + ' Elementary</b><br>' + app3.address + '<br><iframe src=\"' + app3.url + '"\ style=\"border:1px\" width=\"100%\" allowfullscreen name=\"iframe1\"></iframe>';
  var share = "<br><div class=\"centered\"><a href=\"whatsapp://send?text=Game info: Date: " + app3.dateM + " at " + app3.time + " / Teams: " + app3.teamA + ' vs ' + app3.teamB + " / Place: " + app3.location + " Elementary / Address: " + app3.address + "\"data-action=\"share/whatsapp/share\"><img border=\"0\" src=\"img/wa.png\" width=\"32px\" height=\"32px\"> Share on Whatsapp</a></div>";
  document.getElementById('app3').innerHTML = cadena1 + share + cadena2;
}

function showContact() {
  $('.navbar-collapse').collapse('hide');
  var contactD = "<table class=\"no-border centered\"><tr><td><img src =\"img/alex.png\" width= \"100\"></td></tr><tr><td valign=\"bottom\"><h4>" + coach[0] + "</h4></td></tr><tr><td><h5>" + coach[1] + "<br><a href = \"mailto:" + coach[2] + "\">" + coach[2] + "</a></h5></td></tr></table>";
  document.getElementById('app3').style.display = 'inline-block';
  document.getElementById('app3').innerHTML = contactD;
}

function showByTeam() {
  $('.navbar-collapse').collapse('hide');
  document.getElementById('app3').style.display = 'inline-block';
  var buttons = "<div class=\"centered\"><fieldset><legend>Select one team: </legend>";
  teams.forEach(function (valor) {
    buttons += "<button id=\"" + valor + "\" class=\"teamsB\" onclick=\"showTeam(this)\">" + valor + "</button>"
  });
  buttons += "<br><br><button id=\"U0\" class=\"teamsB\" onclick=\"showTeam(this)\">Show all teams</button></fieldset></div>";
  document.getElementById('app3').innerHTML = buttons;
}

function showTeam(b) {
  showData(b.id);
}
