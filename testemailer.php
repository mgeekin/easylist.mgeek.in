<?php 
include 'header.php';
echo 'header loaded'; 
?>


<div id="main">

</div>


<script>

var E = {};

E.To='prateekrajgautam@gmail.com';
E.Subject='New Subject';

E.Body='mail body';
//E.Header=`From: orderConfirmation@urctughlakabad.in \r\n BCC: easylist.mgeek.in@gmail.com \r\n Reply-To: order@urctughlakabad.in`;

E.From=`orderConfirmation@urctughlakabad.in`;
E.Bcc= `easylist.mgeek.in@gmail.com`;
E.ReplyTo= `order@urctughlakabad.in`;
E.pdfURI=``;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("main").innerHTML += '<br />Ready <br />';
       document.getElementById("main").innerHTML += xhttp.responseText;
    }
};
xhr.open("POST", "sendorder.php", true);
xhr.setRequestHeader("Content-type", "application/json")
xhr.send(JSON.stringify(E));
console.log(E)
document.getElementById("main").innerHTML+= JSON.stringify(E);

</script>

<?php 
include 'footer.php';
echo 'footer loaded';
?>