

firebase.auth().onAuthStateChanged(function (user) { // se activa cada vez que entra un usuario a la app
    if (user) {


        if (user.metadata.creationTime === user.metadata.lastSignInTime) {

            $('#photo').attr("src", 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png')
            $('.photo').attr("src", 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png')
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

function saveUserInfo() { //PARA DOCTOR

    var user = firebase.auth().currentUser;
    var email = user.email
    var docRef = db.collection('doc').doc(email) //crea una referencia a la base de datos

    console.log($('#name').val())
    console.log($('#phone').val())
    console.log($('#address').val())
    console.log($('#schedule1').val())
    console.log($('#schedule2').val())



    if ($('#name').val() == null || $('#name').val().length <= 0 || $('#phone').val() == null || $('#phone').val().length <= 0 || $('#address').val() == null || $('#address').val().length <= 0 || $('#schedule1').val() == null || $('#schedule1').val().length <= 0 || $('#schedule2').val() == null || $('#schedule2').val().length <= 0) {

        Swal.fire(
            'Campos vacíos',
            'Llena los campos requeridos para continuar',
            'warning'
        )

    }
    else { //Si los inputs están llenos , hace lo siguiente

        if (user.photoUrl == null) { // SI NO SELECCINÓ FOTO, HACE ESTO
            user.updateProfile({
                displayName: $('#name').val(),
                photoURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png'
            }).then(function () {
                docRef.set({
                    direccion: $('#address').val(),
                    telefono: $('#phone').val(),
                    horarioEntrada: $('#schedule1').val(),
                    horarioSalida: $('#schedule2').val()
                }).then(function () {
                    console.log("Document successfully written!");
                    Swal.fire({
                        type: 'success',
                        title: 'Listo!',
                        text: 'La información se guardó correctamente'

                    })
                    setTimeout(() => {
                        $('#exampleModalCenter').modal('hide');
                        window.location.replace('home.html')
                    }, 2500);

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
                photoURL: user.photoUrl
            }).then(function () {
                docRef.set({
                    direccion: $('#address').val(),
                    telefono: $('#phone').val(),
                    horarioEntrada: $('#schedule1').val(),
                    horarioSalida: $('#schedule2').val()
                }).then(function () {
                    console.log("Document successfully written!");
                    Swal.fire({
                        type: 'success',
                        title: 'Listo!',
                        text: 'La información se guardó correctamente'

                    })
                    setTimeout(() => {
                        $('#exampleModalCenter').modal('hide');
                        window.location.replace('home.html')
                    }, 2500);

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


    var storageRef = firebase.storage().ref('doc/' + email + '/profile_pic')

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