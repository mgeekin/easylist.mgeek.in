var a = new XMLHttpRequest();
a.open("GET","data/data.json",true);
a.onreadystatechange = function() {
  if( this.readyState == 4) {
    if( this.status == 200) {
      var json = window.JSON ? JSON.parse(this.reponseText) : eval("("+this.responseText+")");
      // do something with json
    }
    else alert("HTTP error "+this.status+" "+this.statusText);
  }
}
a.send();