firebase.auth().onAuthStateChanged(function (user) { // se activa cada vez que entra un usuario a la app
    if (user) {
        if (user.metadata.creationTime === user.metadata.lastSignInTime) {
            $('#photo').attr("src", 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png')
            $('.photo').attr("src", 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png')
            getModalForNewUser()
            $('#exampleModalCenter').modal({ backdrop: 'static', keyboard: false })
            $('#exampleModalCenter').modal('show');

        } else {
            window.location.replace('home.html')
        }
    } else {
        window.location.replace('index.html')
        console.log("sin usuario")
    }
});



function getModalForNewUser() {

    var userInfo = firebase.auth().currentUser;

}

function saveUserInfo() { // se aactiva cuando la dan en guardar cmabios en el modal

    var user = firebase.auth().currentUser;
    var email = user.email
    var docRef = db.collection('doctors').doc(email) //crea una referencia a la base de datos
    var photoUrl = user.photoURL;


    console.log($('#name').val())
    console.log($('#generoCombo').val())
    console.log($('#diabetesCombo').val())

    if ($('#name').val() == '' || $('#generoCombo').val() == '' || $('#diabetesCombo').val() == '') {

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
                    genero: $('#generoCombo').val(),
                    tipoDiabetes: $('#diabetesCombo').val()
                }).then(function () {
                    console.log("Document successfully written!");
                    Swal.fire({
                        type: 'success',
                        title: 'Listo!',
                        text: 'La información se guardó correctamente'

                    })
                    window.location.replace('home.html')
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
                    genero: $('#generoCombo').val(),
                    tipoDiabetes: $('#diabetesCombo').val()
                }).then(function () {
                    console.log("Document successfully written!");
                    Swal.fire({
                        type: 'success',
                        title: 'Listo!',
                        text: 'La información se guardó correctamente'

                    })
                    window.location.replace('home.html')
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
        }).catch(function (error) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Algo salió mal, intentelo más tarde'
            })
        });


    })


})