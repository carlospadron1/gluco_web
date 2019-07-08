

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log("con usuario")

        if (user.metadata.creationTime === user.metadata.lastSignInTime) {
            console.log('Usuario nuevo');


            getModalForNewUser()

            $('#exampleModalCenter').modal({ backdrop: 'static', keyboard: false })
            $('#exampleModalCenter').modal('show');


        }
        else {
            console.log('usario registrado previamente')

            /*  getUserInfoForModal()
             $('#exampleModalCenter').modal({ backdrop: 'static', keyboard: false })
             $('#exampleModalCenter').modal('show') */



        }
    } else {
        window.location.replace('index.html')
        console.log("sin usuario")
    }
});



function logout() {
    firebase.auth().signOut();
}


function getUserInfoForModal() { //Para mostrar la info una vez que ya está puesta

    var userInfo = firebase.auth().currentUser;

    if (userInfo != null) {
        var name = userInfo.displayName;
        var email = userInfo.email;
        var photoUrl = userInfo.photoURL;
        var uid = userInfo.uid;

        var docRef = db.collection('users').doc(uid)

        docRef.get().then(function (doc) {
            if (doc.exists) {
                var fehca = doc.data().nacimiento.toDate().toISOString().slice(0, 10)
                $('#date_picker').val(fehca)
                $('#diabetesCombo').val(doc.data().tipoDiabetes)
                console.log(doc.data().genero)
                $('#generoCombo').val(doc.data().genero)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        $('#name').val(name)
        $('#email').val(email)
        $('#photo').attr("src", photoUrl)
    }

}

function getModalForNewUser() {

    var userInfo = firebase.auth().currentUser;

    if (userInfo != null) {
        var name = userInfo.displayName;
        var email = userInfo.email;
        var photoUrl = userInfo.photoURL;
        var uid = userInfo.uid;


        $('#name').val(name)
        $('#email').val(email)
        $('#photo').attr("src", photoUrl)





    }

}


function saveUserInfo() {

    var user = firebase.auth().currentUser;
    var uid = user.uid;

    user.updateProfile({
        displayName: $('#name').val(),
        email: $('#email').val(),
        photoURL: 'https://i.redd.it/6giqv6zjkog21.jpg'//Aprender como subir las fotos
    }).then(function () {
        console.log('se actualizó')
    }).catch(function (error) {
        console.log('error al actualizar')
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Algo salió mal, intentelo más tarde'
        })
        return false
    });


    var docRef = db.collection('users').doc(uid)
    var time = new Date($('#date_picker').val())
    var timestamp = firebase.firestore.Timestamp.fromDate(time)

    docRef.set({
        nacimiento: timestamp,
        genero: $('#generoCombo').val(),
        tipoDiabetes: $('#diabetesCombo').val()
    }).then(function () {
        console.log("Document successfully written!");
        Swal.fire({
            type: 'success',
            title: 'Listo!',
            text: 'La información se guardó correctamente'
        })
        $('#exampleModalCenter').modal('hide');
    })
        .catch(function (error) {
            console.error("Error writing document: ", error);
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Algo salió mal, intentelo más tarde'
            })
            return false

        });




}