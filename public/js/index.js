$('#signUpbtn').click(() => {
  var flag = false
  const email = $('#signUpEmail').val()
  const password1 = $('#signUpPassword').val()
  const password2 = $('#signUpPassword2').val()

  console.log(`valor de mail '${email}', valor del pw '${password1}' y valor de ps2 '${password2}'`)

  if (email != null && password1 == null || password2 == null) {
    alert('escriba su contraseña')
    return false
  }
  if (email == null || email.length <= 0 || password1 == null || password1.length <= 0 || password2 == null || password2.length <= 0) {
    alert('llenar campos')
    return false
  }
  if (password1 != password2) {
    alert('contraseñas dif')
    return false
  }

  if (email && password1 && password2) {
    alert('jala')
    firebase.auth().createUserWithEmailAndPassword(email, password1)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        if (errorCode == 'auth/email-already-in-use') {
          alert('este correo ya se encuetra en uso')
          flag = true
        }
        if (errorCode == 'auth/invalid-email') {
          alert('este correo no es valido')
          flag = true
        }
        if (errorCode == 'auth/weak-password') {
          alert('la contrase;a no es fuerte')
          flag = true
        }
        if (errorCode == 'auth/operation-not-allowed') {
          alert('habila el correo desde firebase')
          flag = true
        }
      }).then(() => {
        if (!flag) {
          window.location.replace('userConfig.html')
        }
      })
  }
})




