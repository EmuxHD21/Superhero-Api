# Superhero-Api
Darbas kuris bus nuobudus 
https://prod.liveshare.vsengsaas.visualstudio.com/join?A789CC00FC112B96FAE06734DE6E24A0A951


DOCS:
Pirma diena:
padarėm pradinį primityvų dizainą dizainą, pridėjom nav bar be jokio dizaino, kad testuoti ar veikia api. Titas dirbo ties dizainu, Emas su JS, Padarėm kad veiktų search bar'as ir išmestų nuotraukas.


<!DOCTYPE html>
<html>
<body>

<h1>Superhero search</h1>

<input id="name">
<button onclick="search()">Find</button>

<div id="info"></div>

<script>
function search() {
    var n = document.getElementById("name").value;
    fetch("https://superheroapi.com/api.php/10156079819513222/search/" + n)
    .then(r => r.json())
    .then(d => {
        var hero = d.results[0];
        document.getElementById("info").innerHTML = 
        "<h2>" + hero.name + "</h2>" +
        "<img src='" + hero.image.url + "' width='200'>" +
        "<p>Power: " + hero.powerstats.power + "</p>" +
        "<p>Combat: " + hero.powerstats.combat + "</p>";
    })
    .catch(e => console.log(e));
}
</script>

</body>
</html>
