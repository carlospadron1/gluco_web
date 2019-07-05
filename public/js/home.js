

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log("con usuario")

        if (user.metadata.creationTime === user.metadata.lastSignInTime) {
            // this is a new user
            console.log('Usuario nuevo'); /// abrir el modal

            
        }
        else {
            console.log('Usuario registrado previamente');
        }
    }
    else {
        window.location.replace('index.html')
        console.log("sin usuario")
    }
});



function logout() {
    firebase.auth().signOut();
}

