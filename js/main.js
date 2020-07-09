console.log(`main.js loaded`)
var cartObject = []
var cartList = `
<div id="cart" class="col-12 col-sm-12 col-lg-6 col-xs-6">
<h1>Cart Items </h1>
<h2 id="cartTotal">Total = INR 0.00</h2>
<table id="cart-table" class="table table-hover">
  <thead>
    <tr>
      <th>Index No.</th>
      <th>Name</th>
      <th>Rate</th>
      <th style="height:40px">Quantity</th>
      <th>Total</th>
      <th></th>
    </tr>
  </thead>
  <tbody style="height: 10px !important; overflow: scroll; ">

  </tbody>

</table>

</div>
`

document.getElementById('main').innerHTML = cartList

document.getElementById("cart").style.display = "none"


var menuList = `
<div class="row mb-4 ">
          <div class="col-12 col-lg-12 mb-12">


            <div id="loadlist" class="col-lg-12 col-sm-12">

              <div id="grocery1" class="loadbtn btn btn-primary" onclick="loadgroup(event)">
                Show Grocery
              </div>

              <div id="liquor2" class="btn-primary btn loadbtn" onclick="loadgroup(event)">
                Show Liquor
              </div>

              <div id="suitcaseAndElectrical3" class="btn-primary btn loadbtn" onclick="loadgroup(event)">
                Show Suitcase and Electrical
              </div>
              <div id="goToCart" class="btn-primary btn loadbtn">
                <a href="#cart" style="color:white">Go to cart</a>
              </div>
            </div>
          </div>

        </div>

        <div class="row">
          <div id="list" class="col-12 col-sm-12 col-lg-6 col-xs-6">
            <h1>Item list</h1>
            <input type="text" id="searchInput" class="form-control mb-3" onkeyup="filterList()"
              placeholder="Search for items">
            <table id="item-table" class="table table-hover">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Item Index</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody style="height: 10px !important; overflow: scroll; ">
              </tbody>

            </table>

          </div>
`

var customerForm = `
<div id="customer-form" class="row container col-lg-12">
<form class="sm">
  <label>Rank</label>
  <select class="form-control" id="customer-rank">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
  <input type="text" class="form-control" id="customer-name" placeholder="name">
  <input type="email" class="form-control" id="customer-email" placeholder="name@example.com">
  <input type="number" min=10000000000 max=9999999999 class="form-control" id="customer-number" placeholder="number">

  <textarea class="form-control" id="customer-address" rows="3"></textarea>
  <div class="g-recaptcha" data-sitekey="6Lds0K4ZAAAAAOM-h7WV1K-zVkfTnhN0hzBJE-rE"></div>

  <button type="submit" class="btn btn-primary mb-2">Submit</button>
</form>
</div>
`




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


var cartListTable = `
<h2 id="cartTotal">Cart Total</h2>
<table id="cart-table" class="table"><thead>
<tr>
  <th>Index No.</th>
  <th>Name</th>
  <th>Rate</th>
  <th style="height:40px">Quantity</th>
  <th>Total</th>
  <th></th>
</tr>
</thead>
<tbody style="height: 10px !important; overflow: scroll; ">

</tbody></table>
`


var cartListFooter = ``




document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    main()
    console.log('Ready')
  }
}


document.getElementById("cart-table").getElementsByTagName('tbody')[0].innerHTML = ""

//document.getElementById("cart-table").innerHTML = cartListHeader
//
function main() {
  console.log('main')
  var key = "85528aslgkjag[23-4slfjk003rjslf049073"
  var D = ""
  var g1 = ""
  var g2 = ""
  var g2 = ""
  var itemList = ""
  var order = ""
  var encryptedOrder = ""
  var cartTable = document.querySelector("#cart-table")
  var cartTableData = cartTable.innerHTML
  console.log(cartTableData)






}

//load group1
function loadgroup(event) {
  console.log('loadgroup')

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
  console.log('objectToRow')
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
  console.log('filterList')
  var input, filter, table, tr, i, txtValue
  input = document.querySelector("#searchInput")
  filter = input.value.toUpperCase()
  table = document.querySelector("#item-table")
  tr = table.querySelectorAll("tr")
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


function addToCart() {
  console.log('addToCart')
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

  var obj = {
    "Index": selectedRowArray[0],
    "Name": selectedRowArray[1],
    "Rate": selectedRowArray[2],
    "Quantity": 1,
    "Total": null
  }
  obj.Total = Math.round(obj.Rate * obj.Quantity * 100) / 100
  var itemExist = 0
  for (i = 0; i < cartObject.length; i++) {
    if (obj.Index === cartObject[i].Index) {
      itemExist = 1
      cartObject[i].Quantity += 1
      cartObject[i].Total = Math.round(cartObject[i].Rate * cartObject[i].Quantity * 100) / 100
    }
  }
  if (itemExist === 0) {
    cartObject.push(obj)
  }


  var rowTotal = rowSelected.children[2].innerText
  var rowToAdd = `<tr>
    <td class="filterable-cell">${rowSelected.children[0].innerText}</td>
    <td class="filterable-cell">${rowSelected.children[1].innerText}</td>
    <td class="filterable-cell">${rowSelected.children[2].innerText}</td>
    <td class="filterable-cell col-2" ><input type="number" min="1" max="50" value="1" class="form-control-sm col-12 input-sm" placeholder="1" onchange="updateRowTotal(this)"></td>

    <td class="filterable-cell">${rowTotal} </td>
    <td class="filterable-cell"><button type="button" class="btn btn-danger btn-sm" onclick="removeFromCart()">
    <span class="glyphicon glyphicon-remove"></span> Remove
    </button></td>
    </tr>`


  return cartObject
  document.getElementById("cart-table").getElementsByTagName("tbody")[0].innerHTML += rowToAdd
  updateCartTotal()
}

function removeFromCart() {
  console.log('removeFromCart')
  var removeRow = window.event.target.parentElement.parentElement.rowIndex
  //delete cartObject[removeRow]
  cartObject.splice(removeRow - 1, 1)
  document.getElementById("cart-table").deleteRow(removeRow)
  console.log(cartObject)
  updateCartTotal()
  showCart()
}

function updateRowTotal(target) {

  console.log('updateRowTotal')

  var indexno = target.parentElement.parentElement.firstElementChild.innerText
  var quantity = Number(target.value)
  if (quantity < target.min) {
    quantity = target.min
    target.value= quantity
  }
  if (quantity > target.max) {
    console.log('overlimit')
    quantity = target.max
    target.value= quantity
  }

  for (i = 0; i < cartObject.length; i++) {
    if (indexno === cartObject[i].Index) {
      cartObject[i].Quantity = Number(quantity)
      cartObject[i].Total = Math.round(cartObject[i].Rate * cartObject[i].Quantity * 100) / 100
    }
  }



/*
  var cartBody = document.getElementById("cart-table").getElementsByTagName('tbody')[0]
  var cartRows = cartBody.getElementsByTagName('tr')
  for (i = 0; i < cartRows.length; i++) {
    tr = cartRows[i]
    td = tr.children
    var rowTotal = Math.round((td[2].innerText * td[3].firstChild.value) * 100) / 100
    td[4].innerText = rowTotal
  }
  updateCartTotal()
  */
 showCart()
}


function updateCartTotal() {
  console.log('updateCartTotal')

  var cartBody = document.getElementById("cart-table").getElementsByTagName('tbody')[0]
  var cartRows = cartBody.getElementsByTagName('tr')
  var cartTotal = 0
  for (i = 0; i < cartRows.length; i++) {
    tr = cartRows[i]
    td = tr.children
    cartTotal += parseFloat(td[4].innerText)
  }
  cartTotal = Math.round(cartTotal * 100) / 100
  document.getElementById('cartTotal').innerHTML = `Cart Total = INR ${cartTotal} <button type="button" class="btn btn-success" onclick="sendOrder()"> Finalize order</button>`
}

function cartToJson() {
  console.log('cartToJson')
  var cartTable = document.getElementById('cart-table')
  var cartBody = cartTable.getElementsByTagName('tbody')[0]
  //console.log(cartBody)
  var cartRows = cartBody.getElementsByTagName('tr')
  //console.log(cartRows)
  var cartJson = ""
  for (i = 0; i < cartRows.length; i++) {
    //  var cartJson =""
    tr = cartRows[i]
    td = tr.children
    //var rowTotal = Math.round(td[2] * td[3].firstChild.value * 100) / 100
    //console.log(rowTotal)
    if (i === 0) {
      var objarray = `{
    "Index":${td[0].innerText},
    "Name":"${td[1].innerText}",
    "Rate":${td[2].innerText},
    "Quantity":${td[3].firstChild.value},
    "Total":${td[4].innerText}
    }`
    }

    else {
      objarray += `,
    {
    "Index":${td[0].innerText},
    "Name":"${td[1].innerText}",
    "Rate":${td[2].innerText},
    "Quantity":${td[3].firstChild.value},
    "Total":${td[4].innerText}
    }`
    }
    //console.log(`objarray= ${objarray}`)
    //cartJson.Index=td[0]
    //cartJson[i].Name=td[1]
    //cartJson[i].Rate=td[2]
    //cartJson[i].Quantity=td[3].firstChild.value
    //cartJson[i].Total=Math.round(cartJson[i].Rate*cartJson[i].Quantity*100)/100
  }
  cartJson = `[${objarray}]`

  return [JSON.parse(cartJson), cartTable]
}

function sendOrder() {
  console.log('sendOrder')
  var [cartJson, cartTable] = cartToJson()
  var [finalTable, cartTotal] = finalOrderOnjectToTable(cartJson)

  var main = document.getElementById("main")
  main.innerHTML = ""
  var h = document.createElement("h2")
  h.innerText = "customerDetailsTable"
  main.append(h)

  main.append(finalTable)


  var h = document.createElement("h2")
  h.innerText = `Net amount is INR ${cartTotal}`
  main.append(h)




  var customer = ""
  var order = { customer, cartJson }
  var encryptedOrder = cryptoJS.AES.encrypt(key, JSON.stringify(order))
}



function finalOrderOnjectToTable() {
  console.log('finalOrderOnjectToTable')
  finalTable = document.createElement("TABLE")
  finalTable.classList.add("table")
  finalTable.classList.add("table-striped")

  var A =
    `
      <thead>
        <tr>
          <th>Index No.</th>
          <th>Name</th>
          <th>Rate</th>
          <th style="height:40px">Quantity</th>
          <th>Total</th>
                  </tr>
      </thead>
      <tbody style="height: 10px !important; overflow: scroll; ">

      </tbody>
    `

  finalTable.innerHTML = A



  var row = ""
  var cartTotal = 0
  for (i = 0; i < cartObject.length; i++) {
    row += `
    <tr id="row${i}">
      <td id="list-col1" class="filterable-cell">${cartObject[i].Index}</td>
      <td id="list-col2" class="filterable-cell">${cartObject[i].Name}</td>
      <td id="list-col3" class="filterable-cell">${cartObject[i].Rate}</td>
      <td id="list-col3" class="filterable-cell">${cartObject[i].Quantity}</td>
      <td id="list-col3" class="filterable-cell">${cartObject[i].Total}</td>
      </tr>
      `
    cartTotal += cartObject[i].Total
  }
  finalTable.getElementsByTagName("tbody")[0].innerHTML = row
  cartTotal = Math.round(cartTotal * 100) / 100
  return [finalTable, cartTotal]
}





function showCustomerForm() {
  //var customerForm
  console.log(customerForm)
  document.getElementById('main').innerHTML = customerForm
  //document.getElementById('main').append()
}



function showList() {
  //var customerForm
  console.log(menuList)
  document.getElementById('main').innerHTML = menuList
  //document.getElementById('main').append()
}




function showCart() {
  //var customerForm
  console.log(cartList)
  document.getElementById('main').innerHTML = cartListTable
  for (i = 0; i < cartObject.length; i++) {
    var tr = `
  <tr>
    <td class="filterable-cell">${cartObject[i].Index}</td>
    <td class="filterable-cell">${cartObject[i].Name}</td>
    <td class="filterable-cell">${cartObject[i].Rate}</td>
    <td class="filterable-cell col-2" id="cart-quantity-${i}"><input type="number" min="1" max="50" value="${cartObject[i].Quantity}" class="form-control-sm col-12 input-sm" placeholder="1" onchange="updateRowTotal(this)"></td>
    <td class="filterable-cell">${cartObject[i].Total} </td>
    <td class="filterable-cell"><button type="button" class="btn btn-danger btn-sm" onclick="removeFromCart()">
    <span class="glyphicon glyphicon-remove"></span> Remove
    </button></td>
    </tr>`
    console.log()
    document.getElementById("cart-table").getElementsByTagName("tbody")[0].innerHTML += tr
  }
  //document.getElementById('main').append()
  updateCartTotal()
}