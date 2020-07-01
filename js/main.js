console.log(`main.js loaded`)
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    main()
    console.log('Ready')
  }
}





var itemListHeader = `<thead>
<tr>
  <th>Index No.</th>
  <th>Name</th>
  <th>Rate</th>
  <th>Image</th>
  <th>Select</th>
  <th></th>
</tr>
</thead>
<tbody style="height: 10px !important; overflow: scroll; ">`


var cartListHeader = `<thead>
<tr>
  <th>Index No.</th>
  <th>Name</th>
  <th>Rate</th>
  <th style="height:40px">Quantity</th>
  <th>Total</th>
  <th></th>
</tr>
</thead>
<tbody style="height: 10px !important; overflow: scroll; ">`
document.getElementById("cart-table").innerHTML = cartListHeader
function main() {













  var D = ""
  var g1 = ""
  var g2 = ""
  var g2 = ""
  var itemList = ""




  var cartTable = document.querySelector("#cart-table")
  var cartTableData = cartTable.innerHTML
  console.log(cartTableData)






}

//load group1
function loadgroup(event) {

  var obj = window.event.target.id
  //document.querySelector(`#${obj}`).style.display = "none"
  var groupIndex = obj[obj.length - 1]
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
      var G = JSON.parse(this.responseText);

      var row = objectToRow(G)

      var table = document.getElementById("item-table")
      table.innerHTML = ""
      var list = ""



      list += row
      table.innerHTML = itemListHeader + list
    }
  };
  xmlhttp.open("GET", `data/group${groupIndex}.json`, true);
  xmlhttp.send();

}


function objectToRow(obj) {
  var row = ""
  for (i = 0; i < obj.length; i++) {
    row += `<tr id="row${i}">
      <td id="list-col1" class="filterable-cell">${obj[i].IndexNo}</td>
      <td id="list-col2" class="filterable-cell">${obj[i].Name}</td>
      <td id="list-col3" class="filterable-cell">${obj[i].Rate}</td>
      <td id="list-col4" class="filterable-cell"><!-- <img width="100" height="30" src="image/${obj[i].IndexNo}.jpg">--></td>
      <td id="list-col5" class="filterable-cell"><button type="button" class="btn btn-sm btn-primary" onclick="addToCart()">Add to cart</button></td>
      </tr>`
  }
  return (row)
}

function filterList() {
  var input, filter, table, tr, i, txtValue
  input = document.querySelector("#searchInput")
  filter = input.value.toUpperCase()
  table = document.querySelector("#item-table")
  tr = table.querySelectorAll("tr")
  console.log(tr)



  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1]
    if (td) {
      txtValue = td.textCOntent || td.innerText
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = ""
      } else {
        tr[i].style.display = "none"
      }
    }
  }
}


function addToCart(event) {
  var clickedItemRow = window.event.target.parentElement.parentElement.id
  //var cols=clickedItemRow.children.innerText

  var rowSelected = document.querySelector(`#${clickedItemRow}`)
  rowSelected.style.display = "none"
  var selectedRowArray = [rowSelected.children[0].innerText, rowSelected.children[1].innerText, rowSelected.children[2].innerText]
  var htmlTableRow = `< tr >
  <td class="filterable-cell">${selectedRowArray[0]}</td>
  <td class="filterable-cell">${selectedRowArray[1]}</td>
  <td class="filterable-cell">${selectedRowArray[2]}</td>
  <td class="filterable-cell col-2"><input class="form-control-sm col-12 input-sm" placeholder="1"></td>
    <td class="filterable-cell">
      <button type="button" class="btn btn-success btn-sm">
        <span class="glyphicon glyphicon-plus"></span> Add 1
            </button>
      <button type="button" class="btn btn-primary btn-sm">
        <span class="glyphicon glyphicon-minus"></span> Remove 1
            </button>
      <button type="button" class="btn btn-danger btn-sm">
        <span class="glyphicon glyphicon-remove"></span> Remove Item
          </button>
    </td>
    <td class="filterable-cell">rowTotal</td>
          </tr>`


  var rowTotal = rowSelected.children[2].innerText
  var rowToAdd = `<tr>
<td class="filterable-cell">${rowSelected.children[0].innerText}</td>
<td class="filterable-cell">${rowSelected.children[1].innerText}</td>
<td class="filterable-cell">${rowSelected.children[2].innerText}</td>
<td class="filterable-cell col-2"><input type="number" min="1" max="50" value="1" class="form-control-sm col-12 input-sm" placeholder="1"></td>

<td class="filterable-cell">${rowTotal} </td>
<td class="filterable-cell"><button type="button" class="btn btn-danger btn-sm" onclick="removeFromCart()">
<span class="glyphicon glyphicon-remove"></span> Remove
</button></td>
</tr>`



  document.getElementById("cart-table").innerHTML += rowToAdd

}

function removeFromCart()
{
  var removeRow =window.event.target.parentElement.parentElement.rowIndex
  document.getElementById("cart-table").deleteRow(removeRow)
  console.log(removeRow)
}


function updateCart(){
  var cartTable = document.getElementById("cart-table")
  for (var i=1;i<cartTable.length;i++){
    
  }
}