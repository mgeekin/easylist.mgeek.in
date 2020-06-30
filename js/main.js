console.log(`main.js loaded`)
var D = ""
var g1 = ""
var g2 = ""
var g2 = ""






//load group1
function loadgroup1() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
      g1 = JSON.parse(this.responseText);
      console.log(g1)

      var table = document.getElementById("item-table")
      console.log(table)
      table.innerHTML = ""
      var list = ""
      list += `<thead>
    <tr>
      <th>S. No.</th>
      <th>Item Index</th>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody style="height: 10px !important; overflow: scroll; ">`

var row= ""
    for (i = 0; i < g1.length; i++) {
row += `<tr>
<td class="filterable-cell">${g1[i].itemindex}</td>
<td class="filterable-cell">${g1[i].name}</td>
<td class="filterable-cell">${g1[i].price}</td>
<td class="filterable-cell">${g1[i].imageurl}</td>
</tr>`

}
list += row
    table.innerHTML=list
    }
  };
  xmlhttp.open("GET", "data/group1.json", true);
  xmlhttp.send();
}

//load group1
function loadgroup2() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
      g2 = JSON.parse(this.responseText);
      console.log(g2)
    }
  };
  xmlhttp.open("GET", "data/group1.json", true);
  xmlhttp.send();
}

//load group1
function loadgroup3() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
      g3 = JSON.parse(this.responseText);
      console.log(g3)
    }
  };
  xmlhttp.open("GET", "data/group1.json", true);
  xmlhttp.send();
}




