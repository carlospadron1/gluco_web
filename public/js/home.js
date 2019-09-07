firebase.auth().onAuthStateChanged(function (user) { // se activa cada vez que entra un usuario a la app
    if (user) {
        console.log("con usuario")
        console.log('update')
        setInfo()
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

        var photoUrl = userInfo.photoURL;
        var uid = userInfo.uid;
        var email = user.email
        console.log('En setInfo')
        console.log(name)

        console.log(photoUrl)
        console.log(uid)

        var docRef = db.collection('doctors').doc(email)

        docRef.get().then(function (doc) {
            if (doc.exists) {
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
            $('.name').text("name")
            $('#name').val(name)

            $('.photo').attr("src", 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png')
            $('#photo').attr("src", 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png')
            console.log('sin foto')
        }
        else {
            console.log(name)

            $('.name').text(name)

            $('#name').val(name)

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

        var photoUrl = userInfo.photoURL;
        var uid = userInfo.uid;

        if (photoUrl == null) { //si tienen foto
            $('#name').text(name)

            $('#photo').attr("src", 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png')

        }
        else {
            $('#name').text(name)

            $('#photo').attr("src", photoUrl)

        }
    }
}



function saveUserInfo() { // se aactiva cuando la dan en guardar cmabios en el modal

    var user = firebase.auth().currentUser;
    var uid = user.uid//jala el id del usuario actual
    var email = user.email
    var docRef = db.collection('doctors').doc(email) //crea una referencia a la base de datos
    var time = new Date($('#date_picker').val()) //toma el valor del date picker y crea un objeto de tipo date
    var timestamp = firebase.firestore.Timestamp.fromDate(time) //el objeto de tipo date se convierte a timestamp para que guardar en la base de datos
    var photoUrl = user.photoURL;


    console.log($('#name').val())
    console.log($('#generoCombo').val())
    console.log($('#diabetesCombo').val())
    console.log(timestamp)

    if ($('#name').val() == '' || $('#generoCombo').val() == '' || $('#diabetesCombo').val() == '' || timestamp == '') {
        console.log($('#name').val())

        console.log($('#generoCombo').val())
        console.log($('#diabetesCombo').val())
        console.log(timestamp)

        Swal.fire(
            'Campos vacíos',
            'Llena los campos requeridos para continuar',
            'warning'
        )
    }
    else { //Si los inputs están llenos , hace lo siguiente

        if (photoUrl == null) { // SI NO SELECCINÓ FOTO, HACE ESTO
            user.updateProfile({
                displayName: $('#name').val(),

                photoURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png'
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
        } else {// SI SELECCIONÓ FOTO, HACE ESTO

            console.log($('#emailId').val())
            user.updateProfile({
                displayName: $('#name').val(),

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

    console.log('se seleccinó algo')
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var email = user.email
    var file = e.target.files[0];
    const fileType = file['type'];
    const validImageTypes = ['image/jpeg', 'image/png'];

    if (!validImageTypes.includes(fileType)) {
        Swal.fire({
            type: 'warning',
            title: 'imagenes inválidas',
            text: 'Por favor selecione una imagen de tipo png/jpeg'
        })
        return false
    }


    var storageRef = firebase.storage().ref('doctors/' + email + '/profile_pic')

    var task = storageRef.put(file)

    storageRef.getDownloadURL().then(function (url) {
        console.log('se entró a la funcion')


        user.updateProfile({
            photoURL: url
        }).then(function () {
            $('#photo').attr("src", url)
            $('.photo').attr("src", url)
            Swal.fire({
                type: 'success',
                title: 'Listo!!!',
                text: 'Se actualizó tu foto de perfil'
            })

            setInfo()
        }).catch(function (error) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Algo salió mal, intentelo más tarde'
            })
        });


    })


})


