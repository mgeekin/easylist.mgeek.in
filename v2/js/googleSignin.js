var customerObject = {
    "Name": "name",
    "Rank": "rank",
    "Number": 91,
    "Email": "abc@domain.com",
    "Address": "Address",
    "Filled": 0
  }


  function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    window.profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);



    customerObject.ID = profile.getId()
    customerObject.Name = profile.getName()
    customerObject.Email = profile.getEmail()
    customerObject.ImageURL = profile.getImageUrl()
    customerObject.GoogleUser = 1



    document.getElementById("googleSignin").innerHTML = `<button class="btn btn-secondary btn-sm" onclick="signOut()">signout ${profile.getName()}</button>`
    document.getElementById("googleSignin").onclick = "signOut()"
    return customerObject
  };