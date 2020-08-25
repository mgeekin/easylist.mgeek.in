<?php include 'header.php'; ?>




    <div id="header" class="row container-fluid ">
        <nav class="navbar navbar-expand-lg navbar-light container">
            <div class="container-fluid">
                <a class="navbar-brand" href="http://urctughlakabad.in">urcTughlakabad </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="navbar nav-item" onclick="showList()">Select Items</li>
                        <li id="cart-nav" class="navbar nav-item" onclick="showCart()">Cart</li>
                        <!--<li class="navbar nav-item" onclick="showCustomerForm()">Customer Details</li>-->
                        <li class="navbar nav-item" onclick="showCheckout()">Checkout</li>
                        <li id="signout" style="display:none" class="navbar nav-item" onclick="signout()">Sign out</li>
                        <li><img id="editUser" src=""> </li>
                    </ul>

                    <!--<div id="googleSignin">
                        <div class="g-signin2" data-onsuccess="onSignIn"></div>
                    </div>-->
                </div>
            </div>
        </nav>

    </div>
    <div class="row mt-5"></div>

    <section id="welcome">
        <div class="container">


            <h1>
                Welcome to URC Tughlakabad
            </h1>
            <h2>
                In view of COVID-19 pandamic, kindly preorder your URC shopping list to help us serve you better
            </h2>






    </section>


    <section id="userSection">

        <div id="userLogin">
            <div class="center">
                <h3>Login or Signup to continue</h3>
                <input class="loginInput" type="text" id="userEmail" placeholder="Email">
                <input class="loginInput" type="password" id="userPassword" placeholder="Password">
                <div class="loginButtons">
                    <button class="loginButton" id="signinButton" onclick="signin()"> Sign in </button>
                    <button class="loginButton" id="signupButton" onclick="signup()"> Sign up </button>
                    <br />
                    <button class="loginButton" id="resetButton" onclick="sendPasswordReset()"> Reset Password </button>

                </div>

                <div id="logMessage">

                </div>
                <br>
                <h3>Login with Google</h3>
                <div id="signInWithGoogle">
                    <div class="loginButtons">
                        <button class="loginButton" id="googleSignin" onclick="googleSignin()"> One click to login
                        </button>
                    </div>
                </div>

            </div>

        </div>






    </section>
 



    <section>
        <div class="row">
            <div class="container">
                <div class="" id="main">



                </div>

            </div>
        </div>

    </section>







<?php include 'footer.php'; ?>

