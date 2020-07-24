var firebaseConfig = {
    apiKey: "AIzaSyC0MgpY39heBsDt38A-0BkCJA8MyUZ3_sE",
    authDomain: "easylist-9151404899.firebaseapp.com",
    databaseURL: "https://easylist-9151404899.firebaseio.com",
    projectId: "easylist-9151404899",
    storageBucket: "easylist-9151404899.appspot.com",
    messagingSenderId: "507347859854",
    appId: "1:507347859854:web:b4d47cc274f2abd1444cdf",
    measurementId: "G-GJT2T6KEJ1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        customerObject.displayName = user.displayName;
        customerObject.email = user.email;
        customerObject.imageURL = user.photoURL;

        if (customerObject.displayName === null) {
            customerObject.displayName = customerObject.email
        }

        document.getElementById("userLogin").style.display = "none"
        document.getElementById("userSignOut").style.display = "initial"
        document.getElementById("userSignOut").innerHTML = `<button class="loginButton" id="signout" onclick="signout()"> Sign out </button>`
        document.getElementById("hiUser").innerHTML = `Hi ${customerObject.displayName}`
            // ...
    } else {
        // User is signed out.
        // ...
        document.getElementById("userLogin").style.display = "block"
        document.getElementById("userSignOut").style.display = "none"
        document.getElementById("hiUser").innerHTML = ""
        customerObject.displayName = null
        customerObject.email = null;
        customerObject.imageURL = mull;
    }
    var log = document.getElementById("log")
    log.innerHTML = customerObject.displayName + customerObject.email + `<img src="${customerObject.imageURL}">`

    return customerObject
});

var customerObject = {}


function signin() {

    var log = document.getElementById("log")
    var email = document.getElementById("userEmail").value
    var password = document.getElementById("userPassword").value


    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        log.innerHTML = errorCode + errorMessage
            // ...
    });

}


function signup() {

    var log = document.getElementById("log")
    var email = document.getElementById("userEmail").value
    var password = document.getElementById("userPassword").value
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        log.innerHTML = errorCode + errorMessage

        // ...
    });
}


function signout() {
    firebase.auth().signOut();
    log.innerHTML = ""
}