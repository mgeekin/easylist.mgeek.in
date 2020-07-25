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
        customerObject.user = { user }
            // User is signed in.
        customerObject.Name = user.displayName;
        customerObject.displayName = user.displayName;
        customerObject.Email = user.email;
        customerObject.ImageURL = user.photoURL;

        if (customerObject.displayName === null) {
            customerObject.displayName = customerObject.email
        }
        document.getElementById("welcome").style.display = "none"
        document.getElementById("user").style.display = "none"
            //document.getElementById("hiUser").innerHTML = `Hi ${customerObject.displayName}`
        document.getElementById("signout").style.display = "initial"
        document.getElementById("welcome").classList.add('shrinkmargin')



        if (customerObject.ImageURL !== null) {
            document.getElementById("editUser").src = `${customerObject.ImageURL}`
        }

        showCustomerForm()
            // ...
    } else {
        // User is signed out.
        // ...
        document.getElementById("welcome").style.display = "block"
        document.getElementById("user").style.display = "block"
        document.getElementById("hiUser").innerHTML = ""
        document.getElementById("signout").style.display = "none"

        customerObject = {}

        document.getElementById("customer").style.display = "none"

        document.getElementById("main").innerHTML = ""
    }
    var log = document.getElementById("log")
    log.innerHTML = customerObject.displayName + customerObject.email + `<img src="${customerObject.imageURL}">`

    return customerObject
});



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

    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        log.innerHTML = errorCode + '<br>' + errorMessage

        // ...
    });

    sendEmailVerification()

}


function signout() {
    firebase.auth().signOut();
    log.innerHTML = ""
}


function sendPasswordReset() {
    var email = document.getElementById("userEmail").value
        // [START sendpasswordemail]
    firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        log.innerHTML = 'Password Reset Email Sent!';
        // [END_EXCLUDE]
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
            log.innerHTML += errorMessage;
        } else if (errorCode == 'auth/user-not-found') {
            log.innerHTML += errorMessage;
        }
        log.innerHTML += error;
        // [END_EXCLUDE]
    });
    // [END sendpasswordemail];
}


function sendEmailVerification() {
    // [START sendemailverification]
    firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!')
        log.innerHTML = 'Email Verification Sent!';
        // [END_EXCLUDE]
    });
    // [END sendemailverification]
}







function googleSignin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    //    provider.addScope('profile');
    //  provider.addScope('email');
    firebase.auth().useDeviceLanguage();
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // ...
        }
        // The signed-in user info.
        var user = result.user;
        console.log(user)
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        log.innerHTML = `${errorCode} <br>${errorMessage}`
    });
    return user
}