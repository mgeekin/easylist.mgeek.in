<section id="footer" class="mt-5 hide">
        <script>
            function signOut() {
                var auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut().then(function () {
                    customerObject.Nmae = ""
                    customerObject.Email = ""
                    customerObject.ImageURL = ""
                    document.getElementById("googleSignin").innerHTML = ""
                    document.getElementById("googleSignin").innerHTML += `<div class="g-signin2" data-onsuccess="onSignIn"></div>`
                    console.log('User signed out.');
                });
            }
        </script>
        <div class="container mt-5 ">
            <!--<div class="col-5">
        <a href="#" onclick="signOut();">Sign out</a>
      </div>-->
            <p class="hide">Designed by <a href="http://mgeek.in">mGeek.in</a></p>
        </div>





    </section>














    <script src="https://apis.google.com/js/platform.js" async defer></script>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <!--<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>-->
    <script src="bootstrap4/js/bootstrap.min.js"></script>
    <script src="js/smtp.js"></script>














    <script type="text/javascript">
        // Client ID and API key from the Developer Console
        var CLIENT_ID = '201216020998-9m7aussf56d4kjkciqmrs01k9tq8l8qr.apps.googleusercontent.com';
        var API_KEY = 'AIzaSyCbVEVuW4lDMB9KaTtEbq02lR57EfaEGrk';

        // Array of API discovery doc URLs for APIs used by the quickstart
        var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

        // Authorization scopes required by the API; multiple scopes can be
        // included, separated by spaces.
        var SCOPES = "https://www.googleapis.com/auth/spreadsheets";

        var authorizeButton = document.getElementById('authorize_button');
        var signoutButton = document.getElementById('signout_button');

        /**
         *  On load, called to load the auth2 library and API client library.
         */
        function handleClientLoad() {
            gapi.load('client:auth2', initClient);
        }

        /**
         *  Initializes the API client library and sets up sign-in state
         *  listeners.
         */
        function initClient() {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            }).then(function () {
                // Listen for sign-in state changes.
                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

                // Handle the initial sign-in state.
                updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
                authorizeButton.onclick = handleAuthClick;
                signoutButton.onclick = handleSignoutClick;
            }, function (error) {
                appendPre(JSON.stringify(error, null, 2));
            });
        }

        /**
         *  Called when the signed in status changes, to update the UI
         *  appropriately. After a sign-in, the API is called.
         */
        function updateSigninStatus(isSignedIn) {
            if (isSignedIn) {
                authorizeButton.style.display = 'none';
                signoutButton.style.display = 'block';
                listMajors();
            } else {
                authorizeButton.style.display = 'block';
                signoutButton.style.display = 'none';
            }
        }

        /**
         *  Sign in the user upon button click.
         */
        function handleAuthClick(event) {
            gapi.auth2.getAuthInstance().signIn();
        }

        /**
         *  Sign out the user upon button click.
         */
        function handleSignoutClick(event) {
            gapi.auth2.getAuthInstance().signOut();
        }

        /**
         * Append a pre element to the body containing the given message
         * as its text node. Used to display the results of the API call.
         *
         * @param {string} message Text to be placed in pre element.
         */
        function appendPre(message) {
            var pre = document.getElementById('content');
            var textContent = document.createTextNode(message + '\n');
            pre.appendChild(textContent);
        }

        /**
     * Print the names and majors of students in a sample spreadsheet:
     * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
https://docs.google.com/spreadsheets/d/1If8fRluMKtbe_ZBTeRLHfukzVJpO9QkresTS7sD1qgw/edit

     */
        function listMajors() {
            gapi.client.sheets.spreadsheets.values.get({
                //spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
                spreadsheetId: '1If8fRluMKtbe_ZBTeRLHfukzVJpO9QkresTS7sD1qgw',
                range: 'Class Data!A2:E',
            }).then(function (response) {
                var range = response.result;
                if (range.values.length > 0) {
                    appendPre('Name, Major:');
                    for (i = 0; i < range.values.length; i++) {
                        var row = range.values[i];
                        // Print columns A and E, which correspond to indices 0 and 4.
                        appendPre(row[0] + ', ' + row[4]);
                    }
                } else {
                    appendPre('No data found.');
                }
            }, function (response) {
                appendPre('Error: ' + response.result.error.message);
            });
        }
    </script>

    <script async defer src="https://apis.google.com/js/api.js" onload="this.onload=function(){};handleClientLoad()"
        onreadystatechange="if (this.readyState === 'complete') this.onload()">
        </script>

        
    <script src="js/main.js"></script>
    <script src="js/firebaseConf.js"></script>
    <script src="js/googleSignin.js"></script>
</body>

</html>