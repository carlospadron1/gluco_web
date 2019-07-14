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
            setInfo()
        }



    } else {
        window.location.replace('index.html')
        console.log("sin usuario")
    }
});



function logout() {
    firebase.auth().signOut();
}


function setInfo() { //Para mostrar la info una vez que ya está puesta

    var userInfo = firebase.auth().currentUser;

    if (userInfo != null) {
        var name = userInfo.displayName;
        var email = userInfo.email;
        var photoUrl = userInfo.photoURL;
        var uid = userInfo.uid;
        console.log('En setInfo')
        console.log(name)
        console.log(email)
        console.log(photoUrl)
        console.log(uid)

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

        if (photoUrl == null) {
            $('.name').text(name)
            $('.emailId').text(email)
            $('#name').val(name)
            $('#emailId').val(email)
            $('.photo').attr("src", 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png')
            $('#photo').attr("src", 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png')
            console.log('sin foto')
        }
        else {
            console.log(name)
            console.log(email)
            $('.name').text(name)
            $('.emailId').text(email)
            $('#name').val(name)
            $('#emailId').val(email)
            $('.photo').attr("src", photoUrl)
            $('#photo').attr("src", photoUrl)
            console.log('con foto')
        }


    }

}

function getModalForNewUser() {

    var userInfo = firebase.auth().currentUser;

    if (userInfo != null) {
        var name = userInfo.displayName;
        var email = userInfo.email;
        var photoUrl = userInfo.photoURL;
        var uid = userInfo.uid;

        if (photoUrl == null) {
            $('#name').text(name)
            $('#emailId').text(email)
            $('#photo').attr("src", 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png')

        }
        else {
            $('#name').text(name)
            $('#emailId').text(email)
            $('#photo').attr("src", photoUrl)

        }
    }
}



function saveUserInfo() {

    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var docRef = db.collection('users').doc(uid)
    var time = new Date($('#date_picker').val())
    var timestamp = firebase.firestore.Timestamp.fromDate(time)
    var photoUrl = user.photoURL;


    console.log($('#name').val())
    var correo = $('#emailId').val()
    console.log(correo)
    console.log($('#generoCombo').val())
    console.log($('#diabetesCombo').val())
    console.log(timestamp)

    if ($('#name').val() == '' || $('#emailId').val() == '' || $('#generoCombo').val() == '' || $('#diabetesCombo').val() == '' || timestamp == '') {
        console.log($('#name').val())
        console.log($('#emailId').val())
        console.log($('#generoCombo').val())
        console.log($('#diabetesCombo').val())
        console.log(timestamp)
        Swal.fire(
            'Campos vacíos',
            'Llena los campos requeridos para continuar',
            'warning'
        )
    }
    else {

        if (photoUrl == null) {
            user.updateProfile({
                displayName: $('#name').val(),
                email: correo,
                photoURL: 'https://i.redd.it/6giqv6zjkog21.jpg'
            }).then(function () {
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
                    setInfo()
                    $('#exampleModalCenter').modal('hide');

                }).catch(function (error) {
                    console.error("Error writing document: ", error);
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Algo salió mal, intentelo más tarde'
                    })
                    return false
                });
            }).catch(function (error) {
                console.log('error al actualizar')
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Algo salió mal, intentelo más tarde'
                })
                return false
            });
        } else {

            console.log($('#emailId').val())
            user.updateProfile({
                displayName: $('#name').val(),
                email: correo,
                photoURL: photoUrl
            }).then(function () {
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
                    setInfo()
                    $('#exampleModalCenter').modal('hide');

                }).catch(function (error) {
                    console.error("Error writing document: ", error);
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Algo salió mal, intentelo más tarde'
                    })
                    return false
                });
            }).catch(function (error) {
                console.log('error al actualizar')
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Algo salió mal, intentelo más tarde'
                })
                return false
            });
        }


    }



}

var fileButton = $('#fileButton').change(function (e) {

    console.log('se selecinó algo')
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var file = e.target.files[0];


    var storageRef = firebase.storage().ref('user/' + uid + '/profile_pic')

    var task = storageRef.put(file)

    storageRef.getDownloadURL().then(function (url) {
        console.log('se entró a la funcion')


        user.updateProfile({
            photoURL: url
        }).then(function () {
            $('#photo').attr("src", url)
            Swal.fire({
                type: 'success',
                title: 'Listo!!!',
                text: 'Se actualizó tu foto de perfil'
            })
        }).catch(function (error) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Algo salió mal, intentelo más tarde'
            })
        });


    })


})


