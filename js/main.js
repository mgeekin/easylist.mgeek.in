console.log(`main.js loaded`)
var customerObject = {

    "Filled": 0,
    "Name": null,
    Email: null,
    Number: null
}

var pdf, pdfBlob, pdfURL, pdfURI;
var gInfo = [
    { "group": 1, "label": "Grocery" },
    { "group": 2, "label": "Electrical" },
    { "group": 3, "label": "Suitcase" },
    { "group": 4, "label": "Watches and stationary" },
    { "group": 5, "label": "Liquor" },
    { "group": 6, "label": "Food items" },
    { "group": 7, "label": "AFD items" }
]
var G = []
var cartObject = []
var cartHTML = `<div><button type="button" class="btn btn-primary onclick="showCart()><table class="table"></table></div>`
var mobile = "9403275606"
var key = mobile + "fadflkasdfj234lkf98asdf345dsflkj23m407sdf"
var encDataStr = ""
//var emailBody = ""
var cartTable = ""
var customerTable = ""
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

//document.getElementById('main').innerHTML = cartList

//document.getElementById("cart").style.display = "none"


var menuList = `
<div  class="row mb-6 ">


            <div id="loadlist" class="col-lg-12 col-sm-12">


            </div>

        </div>

        <div class="row">
          <div id="list" class="col-12 col-sm-12 ">
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

var customerForm = `<div id="customer">

<div id="customer-form" class="row container col-lg-12">
<form class="sm">
<div class="g-signin2" data-onsuccess="onSignIn"></div>
<img id="customer-image" src="" alt="" class="userImage">
<input type="text" class="form-control" id="customer-rank" placeholder="Rank">
<input type="text" class="form-control" id="customer-name" placeholder="Name">
<input type="text" class="form-control" id="customer-catagory" placeholder="Serviceman/Ex-serviceman">
 
  <input type="email" class="form-control" id="customer-email" placeholder="Email">
  <input type="number" class="form-control" id="customer-number" placeholder="Number (Call)">
  <input type="number" class="form-control" id="customer-whatsapp" placeholder="Number (Whatsapp)">

  <textarea class="form-control" id="customer-address" rows="3" placeholder="Address"></textarea>
  <div class="row g-recaptcha" data-sitekey="6Lds0K4ZAAAAAOM-h7WV1K-zVkfTnhN0hzBJE-rE"></div>
  <button type="submit" class="btn btn-success mb-2" onclick="saveCustomerInfo()">Save</button>



</form>
</div></div>
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


//document.getElementById("cart-table").getElementsByTagName('tbody')[0].innerHTML = ""

//document.getElementById("cart-table").innerHTML = cartListHeader
//
function main() {
    console.log('main')
    //showCart()
    var key = "85528aslgkjag[23-4slfjk003rjslf049073"
    var D = ""

    var g1 = ""
    var g2 = ""
    var g2 = ""
    var itemList = ""
    var order = ""
    var encryptedOrder = ""
    //var cartTable = document.querySelector("#cart-table")
    //var cartTableData = cartTable.innerHTML
    //console.log(cartTableData)






}

//load group1
function loadgroup(event) {
    console.log('loadgroup')

    var obj = window.event.target.id
    //document.querySelector(`#${obj}`).style.display = "none"
    var groupIndex = obj[obj.length - 1]
    console.log(groupIndex)
    if (!G[groupIndex]) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
                G[groupIndex] = JSON.parse(this.responseText);
                var row = objectToRow(G[groupIndex])
                var table = document.getElementById("item-table")
                table.innerHTML = ""
                var list = ""
                list += row
                table.innerHTML = itemListHeader + list
            }
        };
        xmlhttp.open("GET", `data/g${groupIndex}.json`, true);
        xmlhttp.send();
    } else {
        var row = objectToRow(G[groupIndex])
        var table = document.getElementById("item-table")
        table.innerHTML = ""
        var list = ""
        list += row
        table.innerHTML = itemListHeader + list
    }


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
    document.getElementById('cart-nav').innerHTML = `Cart (${cartObject.length})`

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

    if (cartObject.length > 0) {
        document.getElementById("goToCart").style.display = "inline-block"
    } else if (cartObject.length === 0) {
        document.getElementById("goToCart").style.display = "none"
    }
    return cartObject
    // document.getElementById("cart-table").getElementsByTagName("tbody")[0].innerHTML += rowToAdd
    //updateCartTotal()
}

function removeFromCart() {
    console.log('removeFromCart')
    var removeRow = window.event.target.parentElement.parentElement.rowIndex
    //delete cartObject[removeRow]
    cartObject.splice(removeRow - 1, 1)
    document.getElementById("cart-table").deleteRow(removeRow)
    console.log(cartObject)
    document.getElementById('cart-nav').innerHTML = `Cart (${cartObject.length})`
    updateCartTotal()
    showCart()
}

function updateRowTotal(target) {
    console.log('updateRowTotal')

    var indexno = target.parentElement.parentElement.firstElementChild.innerText
    var quantity = Number(target.value)
    if (quantity < target.min) {
        quantity = target.min
        target.value = quantity
    }
    if (quantity > target.max) {
        console.log('overlimit')
        quantity = target.max
        target.value = quantity
    }

    for (i = 0; i < cartObject.length; i++) {
        if (indexno === cartObject[i].Index) {
            cartObject[i].Quantity = Number(quantity)
            cartObject[i].Total = Math.round(cartObject[i].Rate * cartObject[i].Quantity * 100) / 100
        }
    }


    if (cartObject.length > 0) {
        document.getElementById("goToCart").style.display = "inline-block"
    } else if (cartObject.length === 0) {
        document.getElementById("goToCart").style.display = "none"
    }


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

    cartObject.Total = cartTotal
    if (cartObject.length > 0) {
        document.getElementById('cartTotal').innerHTML = `Cart Total = INR ${cartTotal} <button type="button" class="btn btn-success" onclick="saveOrderToObject()"> Finalize cart</button>`
        document.getElementById('cart-nav').innerHTML = `Cart (${cartObject.length})`
        //document.querySelector("#goToCart").innerHTML = `Cart (${cartObject.length}) INR ${cartObject.Total}`
    }
}

function cartToJson() {
    console.log('cartToJson')
    var cartTable = document.getElementById('cart-table')
    var cartBody = cartTable.getElementsByTagName('tbody')[0]
    var cartRows = cartBody.getElementsByTagName('tr')
    var cartJson = ""
    for (i = 0; i < cartRows.length; i++) {
        tr = cartRows[i]
        td = tr.children
        if (i === 0) {
            var objarray = `{
            "Index":${td[0].innerText},
            "Name":"${td[1].innerText}",
            "Rate":${td[2].innerText},
            "Quantity":${td[3].firstChild.value},
            "Total":${td[4].innerText}
            }`
        } else {
            objarray += `,
            {
            "Index":${td[0].innerText},
            "Name":"${td[1].innerText}",
            "Rate":${td[2].innerText},
            "Quantity":${td[3].firstChild.value},
            "Total":${td[4].innerText}
            }`
        }

    }
    cartJson = `[${objarray}]`

    return [JSON.parse(cartJson), cartTable]
}

function saveOrderToObject() {
    console.log('saveOrderToObject')
    var cartJson, cartTable;
    [cartJson, cartTable] = cartToJson()
    var [cartHTML, cartTotal] = finalOrderOnjectToTable(cartJson)

    var main = document.getElementById("main")
    //main.innerHTML = `<h2>Cart <button type="button" class="btn btn-success" onclick="showCustomerForm()">Fill customer info</h2>`

    main.innerHTML = `<h2>Cart <button type="button" class="btn btn-success" onclick="showCheckout()">Go to checkout</h2>`
    //main.append(cartHTML)
    main.innerHTML += cartHTML
    var h = document.createElement("h2")
    h.innerText = `Net amount is INR ${cartTotal}`
    main.append(h)
    if (cartObject.length > 0) {
        document.getElementById('main').innerHTML += ` <button type="button" class="btn btn-danger" onclick="showCart()">Edit</button>`
    }
    var customer = ""
    var order = { customer, cartJson }
    var encryptedOrder = CryptoJS.AES.encrypt(key, JSON.stringify(order))
}



function finalOrderOnjectToTable() {
    console.log('finalOrderOnjectToTable')
    cartHTML = document.createElement("TABLE")
    cartHTML.classList.add("table")
    cartHTML.classList.add("table-striped")

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

    cartHTML.innerHTML = A



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

    cartHTML.getElementsByTagName("tbody")[0].innerHTML = row
    cartHTML = cartHTML.outerHTML
    cartTotal = Math.round(cartTotal * 100) / 100
    return [cartHTML, cartTotal]
}





function showCustomerForm() {
    //var customerForm
    console.log(customerForm)

    var main = document.getElementById('main')
    if (user) {
        main.innerHTML = `<h3 id="
        hiUser ">Hi ${customerObject.Name}!</h3>
        <p>Please fill following details to continue</p>
        `
    }


    document.getElementById('main').innerHTML += customerForm

    if (user) {
        document.getElementById("customer-image").src = `${customerObject.ImageURL}`
        document.getElementById("customer-name").value = customerObject.Name
        document.getElementById("customer-email").value = customerObject.Email
    }

    if (customerObject.Filled === 1) {
        document.getElementById("customer-catagory").value = customerObject.Catagory
        document.getElementById("customer-rank").value = customerObject.Rank
        document.getElementById("customer-number").value = customerObject.Number
        document.getElementById("customer-whatsapp").value = customerObject.Whatsapp
        document.getElementById("customer-address").value = customerObject.Address

    }


    //document.getElementById('main').append()
}



function showList() {
    //var customerForm
    console.log(menuList)
    var main = document.getElementById('main')
    main.innerHTML = `<h2>Select catagory below</h2>`
    main.innerHTML += menuList

    for (i = 0; i < gInfo.length; i++) {
        document.querySelector("#loadlist").innerHTML += ` <span id="group${gInfo[i].group}" type="button" class="btn showlistButton" onclick="loadgroup(event)">${gInfo[i].label}</span> `
    }
    document.querySelector("#loadlist").innerHTML += ` <span id="goToCart" type="button" class="btn btn-success showlistButton hide" onclick="showCart()"> Go to cart </span>`

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
    var cartHTML = document.getElementById('main').getElementsByTagName("table")
    cartTable = finalOrderOnjectToTable()
    return cartHTML
}



function saveCustomerInfo() {
    //var customerForm = document.getElementById("customer-rank").value
    customerObject.Name = document.getElementById("customer-name").value
    customerObject.Rank = document.getElementById("customer-rank").value
    customerObject.Number = document.getElementById("customer-number").value
    customerObject.Whatsapp = document.getElementById("customer-whatsapp").value
    customerObject.Catagory = document.getElementById("customer-catagory").value
    customerObject.Email = document.getElementById("customer-email").value
    customerObject.Address = document.getElementById("customer-address").value
    customerObject.Filled = 1
    customerJsonToHTML()

    document.getElementById("main").innerHTML = ""
    if (customerObject.Filled === 1) {
        document.getElementById('main').innerHTML = ""
        var buttonTemp = `<h2><button type="button" class="btn btn-success" onclick="showList()">Select items</button></h2>`
        document.getElementById('main').innerHTML = buttonTemp
    }














    document.getElementById("main").innerHTML += customerTable
    if (customerObject.Filled === 1) {
        document.getElementById('main').innerHTML += ` <button type="button" class="btn btn-danger" onclick="showCustomerForm()">Edit</button>`
    }
    return customerObject
}

function customerJsonToHTML() {
    customerTable = `
  <table id="customer-info-table" class="table">
  <tr>
  <td scope="row">
    Rank
  </td>
  <td>
    ${customerObject.Rank}
  </td>
</tr>

<tr>
<td scope="row">
        Name
      </td>
      <td>
        ${customerObject.Name}
      </td>
    </tr>

    <tr>
    <td scope="row">
          Email
        </td>
        <td>
          ${customerObject.Email}
        </td>
      </tr>

      <tr>
      <td scope="row">
            Number
          </td>
          <td>
            ${customerObject.Number}
          </td>
        </tr>
        <td scope="row">
        Whatsapp
      </td>
      <td>
        ${customerObject.Whatsapp}
      </td>
    </tr>
        <tr>
        <td scope="row">
              Address
            </td>
            <td>
              ${customerObject.Address}
            </td>
          </tr>
          </table>`

    return customerTable
}

function showCheckout() {
    document.getElementById("main").innerHTML = ""
    var checkoutHTML = ""

    if (customerObject.Filled == 1 && cartObject.length > 0) {
        var checkoutHTML = `
    <button id="orderStatusEmail" type="button" onclick="sendEmail()" class="btn btn-success">Send order (by email)</button></h2>
    
    <div class="g-recaptcha"
            data-sitekey="6Le5AbAZAAAAADC7mtnDaBzApK6P8Bzmo9s6Z7-d"
            data-callback="onSubmit"
            data-size="invisible">
      </div>`
    }



    if (customerObject.Filled === 0) {
        checkoutHTML += `<h2 class="btn btn-primary" onclick="showCustomerForm()">Fill Customer details </h2>`
    } else {
        checkoutHTML += `<h2>Customer Details</h2>
    
    
    <div class="row">
<div class="col-6">
${customerTable}</div>
<div class="col-6">
<img id="customer-image" src="${customerObject.ImageURL}" alt="" class="userImage">
</div>
</div>
    `
    }
    if (cartObject.length === 0) {
        checkoutHTML += `<h2 class="btn btn-primary" onclick="showList()">Add items to cart </h2>`
    } else {


        if (cartHTML.length < 10) {
            checkoutHTML += `<h2 class="btn btn-primary" onclick="showList()">Finalize list </h2>`
        } else {
            checkoutHTML += `<h2>Order</h2>
    ${cartHTML}`
        }



        //var emailText=emailBody()


    }





    document.getElementById("main").innerHTML = checkoutHTML


    if (customerObject.Filled === 1 && cartObject.length > 0) {
        //        document.getElementById("main").innerHTML += `<p id="downloadPdf"><button  type="button" class="btn btn-primary" onclick="downloadPDF()"> Download PDF (beta)</button></p>
        var main = document.getElementById("main")
        printJS('printJS-form', 'html')
        main.innerHTML += `<button id="orderStatus" type="button" onclick="sendToGoogleSheet(encDataStr)" class="btn btn-success" disable>Send Order (beta)</button>`
        //main.innerHTML += `<button id="print" type="button" class="btn btn-primary" onclick="print()"> Print (beta)</button>`
        //main.innerHTML += `<button id="download"  type ="button" class = "btn btn-primary" onclick = "download()" > Download PDF (beta) </button>`
        var savedData = [customerObject, cartObject]
        var encDataStr = encToString(savedData)

        var printableHTML = document.getElementById("main").innerHTML
        var orderNumber = 0
        //orderNumber = sendToGoogleSheet(encDataStr)




    }
    //return emailBody
}




function emailBody() {
    var obj = `<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="http://easylist.mgeek.in/css/style.css">
</head>
<body>
    <div class="row">
        <h1> easylist order from: ${customerObject.Name}, mob: ${customerObject.Number}, Total: INR ${cartObject.Total}
        </h1>
        <div class="container">
            <h2>
                Customer Details
            </h2>
            <p>
                <img src="${customerObject.ImageURL}" alt="profile"> ${customerTable}
            </p>
        </div>
    </div>

    <div class="row">
        <div class="container">
            <h2>
                Order List
            </h2>
            <p>
                ${cartHTML}
            </p>
        </div>
        <h2> Net amount: INR ${cartObject.Total}
        </h2>
    </div>
</body>
</html>`





    return obj
}


function encToString(savedData) {
    var savedDataString = JSON.stringify(savedData)
    var savedDataEncrypted = CryptoJS.AES.encrypt(savedDataString, key)
    encStr = savedDataEncrypted.toString()
    //at receiver end
    var dec = CryptoJS.AES.decrypt(encStr, key).toString(CryptoJS.enc.Utf8)
    console.log(dec)
    console.log(JSON.parse(dec))
    return encStr
}



function sendToGoogleSheet(encDataStr) {
    var orderNumber = 1
    //get google sheet row and append insert order


    // /https://docs.google.com/spreadsheets/d/1nUh47iT5m7QOkwMJWXDfuHjSNL3t5_Rl4zLWUZxjGYY/edit?usp=drivesdk

    var values = [
        [
            encStr
        ],
        // Additional rows ...
    ];
    var body = {
        values: values
    };
    gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: "1nUh47iT5m7QOkwMJWXDfuHjSNL3t5_Rl4zLWUZxjGYY",
        range: "A1",
        valueInputOption: "RAW",
        resource: body
    }).then((response) => {
        var result = response.result;
        console.log(`${result.updates.updatedCells} cells appended.`)
    });




    if (orderNumber === 0) {
        alert("Order not Saved retry")
        document.getElementById("orderStatus").innerHTML = `<button type="button" onclick="sendToGoogleSheet(encDataStr)" class="btn btn-success">Send Order(beta)</button>`
    }
    if (orderNumber > 0) {
        document.getElementById("orderStatus").innerHTML = `Order Number : ${orderNumber}`
        document.getElementById("downloadPdf").innerHTML = ""
        printableHTML = document.getElementById("main").innerHTML
        savePDF(printableHTML, orderNumber)
    }
    return orderNumber
}














function sendEmail() {

    var emailText = emailBody();
    [pdf, pdfBlob, pdfURL, pdfURI] = newjspdf()
    Email.send({
        Host: "smtp.gmail.com",
        Username: "easylist.mgeek.in@gmail.com",
        Password: "Prateek9151404899",
        //SecureToken : "5c9a4b70-ea81-4dff-8f39-fc65f60a99a3",

        To: `easylist.mgeek.in@gmail.com`, //
        From: "easylist.mgeek.in@gmail.com",
        Subject: `Easylist order from: ${customerObject.Name}, mob: ${customerObject.Number}, Total: INR ${cartObject.Total}`,
        Body: `${emailText} <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> 
        <a href=${pdfURI}>
            PDF Downnload
        </a>
        <br><br> <br> <br> <br> 
        If the link don't work copy code below and paste in address bar
        <br><br> <br> <br> <br> 

       <p>
       ${pdfURI}
       </p>`
       
       /*,
        Attachments: [{
            name: `${customerObject.Name} Order.pdf`,
            path: pdfURI
        }]
*/
    }).then(function (message) {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "easylist.mgeek.in@gmail.com",
            Password: "Prateek9151404899",
            //SecureToken : "5c9a4b70-ea81-4dff-8f39-fc65f60a99a3",
    
            To: customerObject.Email, //
            From: "easylist.mgeek.in@gmail.com",
            Subject: `Your order Total: INR ${cartObject.Total}`,
            Body: `Thanks for your order. We will communicate when your order is ready for pickup.
            <br> ${emailText}`
        }).then(function (message) {
        document.getElementById("orderStatusEmail").innerHTML = "mail sent successfully"
        document.getElementById("orderStatusEmail").classList.add('btn-success')
        document.getElementById("orderStatusEmail").disabled = true
        })
    })




    return emailBody
}












// styling

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('#header')

    navbar.classList[window.scrollY > 100 ? 'add' : 'remove']('hide')

});






function newjspdf() {
    //wordking function
    var pdf = new jsPDF('p', 'pt', 'letter')
    pdf.canvas.height = 72 * 11;
    pdf.canvas.width = 72 * 8.5;
    var x = 30
    var y = 30
    var offsetX = 50
    var fontsize = 10
    //pdf.setFont('Roboto')
    //var HTML = document.getElementById("main").innerHTML;
    var lineStart = 1
    var margin = 1
    //Print Customer details

    pdf.setFont('helvetica')
    pdf.setFontType('bold')
    var text = 'Customer details';
    pdf.setTextColor(62, 158, 255);

    [pdf, y] = pdfjsHelper(pdf, x, y, 20, fontsize * 1.5, text, 1);

    pdf.setFont('helvetica');
    pdf.setTextColor(0, 20, 40);
    pdf.setFontType('normal');
    [pdf, y] = pdfjsHelper(pdf, x, y, fontsize, margin, `Name: `, 1);
    pdf.setFontType('bold');
    [pdf, y] = pdfjsHelper(pdf, x + offsetX, y, fontsize, margin, `${ customerObject.Name }`, 0);

    pdf.setFontType('normal');
    [pdf, y] = pdfjsHelper(pdf, x, y, fontsize, margin, `Rank: `, 1);
    pdf.setFontType('bold');
    [pdf, y] = pdfjsHelper(pdf, x + offsetX, y, fontsize, margin, `${ customerObject.Rank }`, 0);
    //pdf.line(x, y + fontsize / 2, pdf.canvas.width, y + fontsize / 2)

    pdf.setFontType('normal');
    [pdf, y] = pdfjsHelper(pdf, x, y, fontsize, margin, `Catagory: `, 1);
    pdf.setFontType('bold');
    [pdf, y] = pdfjsHelper(pdf, x + offsetX, y, fontsize, margin, `${ customerObject.Catagory }`, 0);
    //pdf.line(x, y + fontsize / 2, pdf.canvas.width, y + fontsize / 2)

    pdf.setFontType('normal');
    [pdf, y] = pdfjsHelper(pdf, x, y, fontsize, margin, `Email: `, 1);
    pdf.setFontType('bold');
    [pdf, y] = pdfjsHelper(pdf, x + offsetX, y, fontsize, margin, `${ customerObject.Email }`, 0);
    //pdf.line(x, y + fontsize / 2, pdf.canvas.width, y + fontsize / 2)

    pdf.setFontType('normal');
    [pdf, y] = pdfjsHelper(pdf, x, y, fontsize, margin, `Whatsapp: `, 1);
    pdf.setFontType('bold');
    [pdf, y] = pdfjsHelper(pdf, x + offsetX, y, fontsize, margin, `${ customerObject.Whatsapp }`, 0);
    //  pdf.line(x, y + fontsize / 2, pdf.canvas.width, y + fontsize / 2)

    pdf.setFontType('normal');
    [pdf, y] = pdfjsHelper(pdf, x, y, fontsize, margin, `Address: `, 1);
    pdf.setFontType('bold');
    [pdf, y] = pdfjsHelper(pdf, x + offsetX, y, fontsize, fontsize * 2, `${ customerObject.Address }`, 0);
    //    pdf.line(x, y + fontsize / 2, pdf.canvas.width, y + fontsize / 2)


    //hsl(140,240,149)
    //rgb(62,158,255)



    //order

    pdf.setFont('helvetica');
    pdf.setFontType('bold');
    pdf.setTextColor(62, 158, 255);
    var text = 'Order';
    [pdf, y] = pdfjsHelper(pdf, x, y, 20, fontsize * 1.5, text, 1);


    pdf.setFont('helvetica');
    pdf.setFontType('bold');
    pdf.setTextColor(0, 20, 40);
    [pdf, y] = pdfjsHelper(pdf, x, y, fontsize, margin, `Index No: `, 1);
    [pdf, y] = pdfjsHelper(pdf, x + 60, y, fontsize, margin, `Name: `, 0);
    [pdf, y] = pdfjsHelper(pdf, x + 400, y, fontsize, margin, `Rate: `, 0);
    [pdf, y] = pdfjsHelper(pdf, x + 500, y, fontsize, margin, `Quantity: `, 0);
    [pdf, y] = pdfjsHelper(pdf, x + 600, y, fontsize, margin, `Total: `, 0);

    pdf.setFont('helvetica');
    pdf.setFontType('normal');
    for (i = 0; i < cartObject.length; i++) {
        [pdf, y] = pdfjsHelper(pdf, x, y, fontsize, margin, `${ cartObject[i].Index }`, 1);
        [pdf, y] = pdfjsHelper(pdf, x + 60, y, fontsize, margin, `${ cartObject[i].Name }`, 0);
        [pdf, y] = pdfjsHelper(pdf, x + 400, y, fontsize, margin, `${ cartObject[i].Rate }`, 0);
        [pdf, y] = pdfjsHelper(pdf, x + 500, y, fontsize, margin, `${ cartObject[i].Quantity }`, 0);
        [pdf, y] = pdfjsHelper(pdf, x + 600, y, fontsize, margin, `${ cartObject[i].Total }`, 0);
    }
    pdf.setFont('helvetica')
    pdf.setFontType('bold')
    pdf.setTextColor(62, 158, 255);
    var text = `Net Payable: INR ${ cartObject.Total }`;
    [pdf, y] = pdfjsHelper(pdf, x, y, 20, margin * 3, text, 1);










    //    pdf.output('/order.pdf')
    pdf.save("easylist.mgeek.in.pdf");
    var pdfBlob = pdf.output('blob')

    var pdfURI = pdf.output('datauristring')
    console.log(pdfURI)

    var pdfURL = URL.createObjectURL(pdfBlob)
    console.log(pdfURL)

    //window.open(pdf.output('bloburl'), '_blank');
    //pdf.output('dataurlnewwindow')

    return [pdf, pdfBlob, pdfURL, pdfURI]
}





function pdfjsHelper(pdf, x, y, fontsize, margin, text, newline) {
    //required by newjspdf
    if (newline === 1) {
        y += 1.2 * fontsize + margin
        if (y >= pdf.canvas.height - 50) {
            pdf.addPage()
            y = 30
        }
    }
    pdf.setFontSize(fontsize)
    pdf.text(x, y, text)


    return [pdf, y]
}