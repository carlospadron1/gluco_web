

var ref = document.querySelector('#ref')

firebase.auth().onAuthStateChanged(function (user) {

    if (user) {

        getDiet1()
        getDiet2()
        getDiet3()
        $('#desayuno').val('')
        $('#comida').val('')
        $('#cena').val('')
        $('#dietName').val('')

    } else {
        console.log('no user')
    }



});


function renderDiet(doc) {

    let div1 = document.createElement('div')
    div1.classList.add('card')
    div1.classList.add('mb-4')

    let cardBlock = document.createElement('div')
    cardBlock.classList.add('card-block')

     let i = document.createElement('i')
    i.classList.add('fa')
    i.classList.add('fa-minus')
    let button1 = document.createElement('button')
    button1.classList.add('btnEliminar')
    button1.classList.add('btn')
    button1.classList.add('btn-circle')
    button1.classList.add('btn-info2')
    button1.classList.add('btn-lg')
    button1.appendChild(i) 
    button1.onclick = function () {
        $('#dieta1').modal('show');
    }

    /*  */
    let cardTitle = document.createElement('h3')
    cardTitle.classList.add('card-title')
    cardTitle.classList.add('d-flex')
    cardTitle.classList.add('justify-content-between')
    cardTitle.appendChild(document.createTextNode(doc.data().Nombre))
    cardTitle.appendChild(button1)

    let divider = document.createElement('div')
    divider.classList.add('divider')
    divider.style.marginTop = '1rem'

    let articlesContainer = document.createElement('div')
    articlesContainer.classList.add('articles-container')

    let article = document.createElement('div')
    article.classList.add('article')
    let article2 = document.createElement('div')
    article2.classList.add('article')
    let article3 = document.createElement('div')
    article3.classList.add('article')

    let colxs12 = document.createElement('div')
    colxs12.classList.add('col-xs-12')
    let colxs122 = document.createElement('div')
    colxs122.classList.add('col-xs-12')
    let colxs123 = document.createElement('div')
    colxs123.classList.add('col-xs-12')

    let row = document.createElement('div')
    row.classList.add('row')
    let row2 = document.createElement('div')
    row2.classList.add('row')
    let row3 = document.createElement('div')
    row3.classList.add('row')

    let col12 = document.createElement('div')
    col12.classList.add('col-12')
    let col122 = document.createElement('div')
    col122.classList.add('col-12')
    let col123 = document.createElement('div')
    col123.classList.add('col-12')

    let h4 = document.createElement('h4')
    let des = document.createTextNode('Desayuno')
    h4.appendChild(des)
    let h42 = document.createElement('h4')
    let com = document.createTextNode('Comida')
    h42.appendChild(com)
    let h43 = document.createElement('h4')
    let cena = document.createTextNode('Cena')
    h43.appendChild(cena)

    let ul = document.createElement('ul')
    let ul2 = document.createElement('ul')
    let ul3 = document.createElement('ul')

    let li = document.createElement('li')
    let li2 = document.createElement('li')
    let li3 = document.createElement('li')


    let clear = document.createElement('div')
    clear.classList.add('clear')
    let clear2 = document.createElement('div')
    clear2.classList.add('clear')
    let clear3 = document.createElement('div')
    clear3.classList.add('clear')

    div1.appendChild(cardBlock)
    cardBlock.appendChild(cardTitle)
    cardBlock.appendChild(divider)
    cardBlock.appendChild(articlesContainer)
    articlesContainer.appendChild(article)
    article.appendChild(colxs12)
    colxs12.appendChild(row)
    row.appendChild(col12)
    col12.appendChild(h4)
    col12.appendChild(ul)
    li.appendChild(document.createTextNode(doc.data().Desayuno))
    ul.appendChild(li)
    colxs12.appendChild(clear)

    articlesContainer.appendChild(article2)
    article2.appendChild(colxs122)
    colxs122.appendChild(row2)
    row2.appendChild(col122)
    col122.appendChild(h42)
    col122.appendChild(ul2)
    li2.appendChild(document.createTextNode(doc.data().Comida))
    ul2.appendChild(li2)
    colxs122.appendChild(clear2)

    articlesContainer.appendChild(article3)
    article3.appendChild(colxs123)
    colxs123.appendChild(row3)
    row3.appendChild(col123)
    col123.appendChild(h43)
    col123.appendChild(ul3)
    li3.appendChild(document.createTextNode(doc.data().Cena))
    ul3.appendChild(li3)
    colxs123.appendChild(clear3)

    ref.appendChild(div1)

}

function renderDiet2(doc) {

    let div1 = document.createElement('div')
    div1.classList.add('card')
    div1.classList.add('mb-4')

    let cardBlock = document.createElement('div')
    cardBlock.classList.add('card-block')

    /*  */
    let i = document.createElement('i')
    i.classList.add('fa')
    i.classList.add('fa-minus')
    let button2 = document.createElement('button')
    button2.classList.add('btnEliminar')
    button2.classList.add('btnEliminar')
    button2.classList.add('btn')
    button2.classList.add('btn-circle')
    button2.classList.add('btn-info2')
    button2.classList.add('btn-lg')
    button2.appendChild(i) 
    button2.onclick = function () {
        $('#dieta2').modal('show');
    }

    

    let cardTitle = document.createElement('h3')
    cardTitle.classList.add('card-title')
    cardTitle.classList.add('d-flex')
    cardTitle.classList.add('justify-content-between')
    cardTitle.appendChild(document.createTextNode(doc.data().Nombre))
    cardTitle.appendChild(button2)

    let divider = document.createElement('div')
    divider.classList.add('divider')
    divider.style.marginTop = '1rem'

    let articlesContainer = document.createElement('div')
    articlesContainer.classList.add('articles-container')

    let article = document.createElement('div')
    article.classList.add('article')
    let article2 = document.createElement('div')
    article2.classList.add('article')
    let article3 = document.createElement('div')
    article3.classList.add('article')

    let colxs12 = document.createElement('div')
    colxs12.classList.add('col-xs-12')
    let colxs122 = document.createElement('div')
    colxs122.classList.add('col-xs-12')
    let colxs123 = document.createElement('div')
    colxs123.classList.add('col-xs-12')

    let row = document.createElement('div')
    row.classList.add('row')
    let row2 = document.createElement('div')
    row2.classList.add('row')
    let row3 = document.createElement('div')
    row3.classList.add('row')

    let col12 = document.createElement('div')
    col12.classList.add('col-12')
    let col122 = document.createElement('div')
    col122.classList.add('col-12')
    let col123 = document.createElement('div')
    col123.classList.add('col-12')

    let h4 = document.createElement('h4')
    let des = document.createTextNode('Desayuno')
    h4.appendChild(des)
    let h42 = document.createElement('h4')
    let com = document.createTextNode('Comida')
    h42.appendChild(com)
    let h43 = document.createElement('h4')
    let cena = document.createTextNode('Cena')
    h43.appendChild(cena)

    let ul = document.createElement('ul')
    let ul2 = document.createElement('ul')
    let ul3 = document.createElement('ul')

    let li = document.createElement('li')
    let li2 = document.createElement('li')
    let li3 = document.createElement('li')


    let clear = document.createElement('div')
    clear.classList.add('clear')
    let clear2 = document.createElement('div')
    clear2.classList.add('clear')
    let clear3 = document.createElement('div')
    clear3.classList.add('clear')

    div1.appendChild(cardBlock)
    cardBlock.appendChild(cardTitle)
    cardBlock.appendChild(divider)
    cardBlock.appendChild(articlesContainer)
    articlesContainer.appendChild(article)
    article.appendChild(colxs12)
    colxs12.appendChild(row)
    row.appendChild(col12)
    col12.appendChild(h4)
    col12.appendChild(ul)
    li.appendChild(document.createTextNode(doc.data().Desayuno))
    ul.appendChild(li)
    colxs12.appendChild(clear)

    articlesContainer.appendChild(article2)
    article2.appendChild(colxs122)
    colxs122.appendChild(row2)
    row2.appendChild(col122)
    col122.appendChild(h42)
    col122.appendChild(ul2)
    li2.appendChild(document.createTextNode(doc.data().Comida))
    ul2.appendChild(li2)
    colxs122.appendChild(clear2)

    articlesContainer.appendChild(article3)
    article3.appendChild(colxs123)
    colxs123.appendChild(row3)
    row3.appendChild(col123)
    col123.appendChild(h43)
    col123.appendChild(ul3)
    li3.appendChild(document.createTextNode(doc.data().Cena))
    ul3.appendChild(li3)
    colxs123.appendChild(clear3)

    ref.appendChild(div1)

}

function renderDiet3(doc) {

    let div1 = document.createElement('div')
    div1.classList.add('card')
    div1.classList.add('mb-4')

    let cardBlock = document.createElement('div')
    cardBlock.classList.add('card-block')

    /*  */
    let i = document.createElement('i')
    i.classList.add('fa')
    i.classList.add('fa-minus')
    let button3 = document.createElement('button')
    button3.classList.add('btnEliminar')
    button3.classList.add('btn')
    button3.classList.add('btn-circle')
    button3.classList.add('btn-info2')
    button3.classList.add('btn-lg')
    button3.appendChild(i) 
    button3.onclick = function () {
        $('#dieta3').modal('show');
    }

    /*  */

    let cardTitle = document.createElement('h3')
    cardTitle.classList.add('card-title')
    cardTitle.classList.add('d-flex')
    cardTitle.classList.add('justify-content-between')

    cardTitle.appendChild(document.createTextNode(doc.data().Nombre))
    cardTitle.appendChild(button3)

    let divider = document.createElement('div')
    divider.classList.add('divider')
    divider.style.marginTop = '1rem'

    let articlesContainer = document.createElement('div')
    articlesContainer.classList.add('articles-container')

    let article = document.createElement('div')
    article.classList.add('article')
    let article2 = document.createElement('div')
    article2.classList.add('article')
    let article3 = document.createElement('div')
    article3.classList.add('article')

    let colxs12 = document.createElement('div')
    colxs12.classList.add('col-xs-12')
    let colxs122 = document.createElement('div')
    colxs122.classList.add('col-xs-12')
    let colxs123 = document.createElement('div')
    colxs123.classList.add('col-xs-12')

    let row = document.createElement('div')
    row.classList.add('row')
    let row2 = document.createElement('div')
    row2.classList.add('row')
    let row3 = document.createElement('div')
    row3.classList.add('row')

    let col12 = document.createElement('div')
    col12.classList.add('col-12')
    let col122 = document.createElement('div')
    col122.classList.add('col-12')
    let col123 = document.createElement('div')
    col123.classList.add('col-12')

    let h4 = document.createElement('h4')
    let des = document.createTextNode('Desayuno')
    h4.appendChild(des)
    let h42 = document.createElement('h4')
    let com = document.createTextNode('Comida')
    h42.appendChild(com)
    let h43 = document.createElement('h4')
    let cena = document.createTextNode('Cena')
    h43.appendChild(cena)

    let ul = document.createElement('ul')
    let ul2 = document.createElement('ul')
    let ul3 = document.createElement('ul')

    let li = document.createElement('li')
    let li2 = document.createElement('li')
    let li3 = document.createElement('li')


    let clear = document.createElement('div')
    clear.classList.add('clear')
    let clear2 = document.createElement('div')
    clear2.classList.add('clear')
    let clear3 = document.createElement('div')
    clear3.classList.add('clear')

    div1.appendChild(cardBlock)
    cardBlock.appendChild(cardTitle)
    cardBlock.appendChild(divider)
    cardBlock.appendChild(articlesContainer)
    articlesContainer.appendChild(article)
    article.appendChild(colxs12)
    colxs12.appendChild(row)
    row.appendChild(col12)
    col12.appendChild(h4)
    col12.appendChild(ul)
    li.appendChild(document.createTextNode(doc.data().Desayuno))
    ul.appendChild(li)
    colxs12.appendChild(clear)

    articlesContainer.appendChild(article2)
    article2.appendChild(colxs122)
    colxs122.appendChild(row2)
    row2.appendChild(col122)
    col122.appendChild(h42)
    col122.appendChild(ul2)
    li2.appendChild(document.createTextNode(doc.data().Comida))
    ul2.appendChild(li2)
    colxs122.appendChild(clear2)

    articlesContainer.appendChild(article3)
    article3.appendChild(colxs123)
    colxs123.appendChild(row3)
    row3.appendChild(col123)
    col123.appendChild(h43)
    col123.appendChild(ul3)
    li3.appendChild(document.createTextNode(doc.data().Cena))
    ul3.appendChild(li3)
    colxs123.appendChild(clear3)

    ref.appendChild(div1)

}




function getDiet1() {
    console.log('Entró a la función createDiet')


    var user = firebase.auth().currentUser; // los datos del usuario actual se guardan en la variable user
    if (user != null) { // si hya un susario, se hace lo siguiente
        var uid = user.uid


        console.log(' El Id es  ' + uid)

        var docRef = db.collection('users').doc(uid).collection('dietas').doc('dieta1') // 

        console.log(docRef.id)


        docRef.get().then(doc => {
            if (doc.exists) {
                console.log(doc.data().Desayuno)
                renderDiet(doc)
            } else {
                console.log('no hay doc')
            }
        })


    } else {
        console.log('NO hay usuario')
    }
}

function getDiet2() {
    console.log('Entró a la función createDiet')


    var user = firebase.auth().currentUser; // los datos del usuario actual se guardan en la variable user

    if (user != null) { // si hya un susario, se hace lo siguiente
        var uid = user.uid
        console.log(' El Id es  ' + uid)

        var docRef = db.collection('users').doc(uid).collection('dietas').doc('dieta2') // 

        docRef.get().then(doc => {
            if (doc.exists) {
                console.log(doc.data().Desayuno)
                renderDiet2(doc)
            } else {
                console.log('no hay doc')
            }
        })


    } else {
        console.log('NO hay usuario')
    }
}

function getDiet3() {
    console.log('Entró a la función createDiet')


    var user = firebase.auth().currentUser; // los datos del usuario actual se guardan en la variable user

    if (user != null) { // si hya un susario, se hace lo siguiente
        var uid = user.uid
        console.log(' El Id es  ' + uid)

        var docRef = db.collection('users').doc(uid).collection('dietas').doc('dieta3') // 

        docRef.get().then(doc => {
            if (doc.exists) {
                console.log(doc.data().Desayuno)
                renderDiet3(doc)
            } else {
                console.log('no hay doc')
            }
        })


    } else {
        console.log('NO hay usuario')
    }
}



function addDiet() {
    /* implemetnar funcion para agregar dieta */
    var user = firebase.auth().currentUser;
    var uid = user.uid

    db.collection('users').doc(uid).collection('dietas').get().then(snap => {
        size = snap.size
        // numero de deitas , solo se peden agregar  3 dietas
        // se hace la valdiación que solo se puede agregar una dieta si hay menos de 3 
        if (snap.size == 3) {
            Swal.fire({
                type: 'warning',
                title: 'Se alcanzó el límite de dietas disponibles',
                text: 'Para agregar otra dieta, elimina una'
            })
        } else {
            console.log(snap.size)
            $('#ModalDieta').modal('show');
        }
    });


}

function checkInputs() {
    var user = firebase.auth().currentUser;
    var uid = user.uid
    if ($('#dietName').val() == '' || $('#desayuno').val() == '' || $('#comida').val() == '' || $('#cena').val() == '') {

        Swal.fire(
            'Campos vacíos',
            'Llena los campos requeridos para continuar',
            'warning'
        )
        return false

    } else {

        var docRef1 = db.collection('users').doc(uid).collection('dietas').doc('dieta1')
        var docRef2 = db.collection('users').doc(uid).collection('dietas').doc('dieta2')
        var docRef3 = db.collection('users').doc(uid).collection('dietas').doc('dieta3')


        docRef1.get().then(function (doc) {
            if (!doc.exists) {
                docRef1.set({
                    Desayuno: $('#desayuno').val(),
                    Comida: $('#comida').val(),
                    Cena: $('#cena').val(),
                    Nombre: $('#dietName').val()

                }).then(() => {

                    $('#desayuno').val('')
                    $('#comida').val('')
                    $('#cena').val('')
                    $('#dietName').val('')

                    Swal.fire({
                        type: 'success',
                        title: 'Listo!',
                        text: 'La información se guardó correctamente'

                    })
                    $('#ModalDieta').modal('hide');
                    getDiet1()

                    console.log('se escribió la diet de manera correcta')


                }).catch(function (error) {
                    console.log("Error writting document:", error);
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Algo salió mal, intentelo más tarde'
                    })
                });
            } else {

                docRef2.get().then(function (doc) {
                    if (!doc.exists) {
                        docRef2.set({
                            Desayuno: $('#desayuno').val(),
                            Comida: $('#comida').val(),
                            Cena: $('#cena').val(),
                            Nombre: $('#dietName').val()

                        }).then(() => {

                            $('#desayuno').val('')
                            $('#comida').val('')
                            $('#cena').val('')
                            $('#dietName').val('')

                            Swal.fire({
                                type: 'success',
                                title: 'Listo!',
                                text: 'La información se guardó correctamente'

                            })
                            $('#ModalDieta').modal('hide');
                            getDiet2()

                            console.log('se escribió la diet de manera correcta')


                        }).catch(function (error) {
                            console.log("Error writting document:", error);
                            Swal.fire({
                                type: 'error',
                                title: 'Oops...',
                                text: 'Algo salió mal, intentelo más tarde'
                            })
                        });
                    } else {



                        docRef3.get().then(function (doc) {
                            if (!doc.exists) {
                                docRef3.set({
                                    Desayuno: $('#desayuno').val(),
                                    Comida: $('#comida').val(),
                                    Cena: $('#cena').val(),
                                    Nombre: $('#dietName').val()

                                }).then(() => {

                                    $('#desayuno').val('')
                                    $('#comida').val('')
                                    $('#cena').val('')
                                    $('#dietName').val('')

                                    Swal.fire({
                                        type: 'success',
                                        title: 'Listo!',
                                        text: 'La información se guardó correctamente'

                                    })
                                    $('#ModalDieta').modal('hide');
                                    getDiet3()

                                    console.log('se escribió la diet de manera correcta')


                                }).catch(function (error) {
                                    console.log("Error writting document:", error);
                                    Swal.fire({
                                        type: 'error',
                                        title: 'Oops...',
                                        text: 'Algo salió mal, intentelo más tarde'
                                    })
                                });
                            }
                        })
                    }
                })
            }
        })

        /*  */






    }
}
function eliminarDieta1() {
    var user = firebase.auth().currentUser;
    var uid = user.uid
    var docRef1 = db.collection('users').doc(uid).collection('dietas').doc('dieta1')
    docRef1.delete().then(function () {
        Swal.fire({
            type: 'success',
            title: 'Listo!',
            text: 'la dieta se eliminó correctamente'

        })

        $('#dieta1').modal('hide');
        setTimeout(function () {
            location.reload();
        }, 2000);

        getDiet1()
        getDiet2()
        getDiet3()

    }).catch(function (error) {


        Swal.fire({
            type: 'error',
            title: 'Opps...',
            text: 'Algo salió mal, intentelo más tarde'

        })


    });

}

function eliminarDieta2() {
    var user = firebase.auth().currentUser;
    var uid = user.uid
    var docRef2 = db.collection('users').doc(uid).collection('dietas').doc('dieta2')
    docRef2.delete().then(function () {
        Swal.fire({
            type: 'success',
            title: 'Listo!',
            text: 'la dieta se eliminó correctamente'

        })

        $('#dieta2').modal('hide');
        setTimeout(function () {
            location.reload();
        }, 2000);
        getDiet1()
        getDiet2()
        getDiet3()

    }).catch(function (error) {


        Swal.fire({
            type: 'error',
            title: 'Opps...',
            text: 'Algo salió mal, intentelo más tarde'

        })


    });

}



function eliminarDieta3() {
    var user = firebase.auth().currentUser;
    var uid = user.uid
    var docRef3 = db.collection('users').doc(uid).collection('dietas').doc('dieta3')
    docRef3.delete().then(function () {
        Swal.fire({
            type: 'success',
            title: 'Listo!',
            text: 'la dieta se eliminó correctamente'

        })
        $('#dieta3').modal('hide');

        setTimeout(function () {
            location.reload();
        }, 2000);

        getDiet1()
        getDiet2()
        getDiet3()

    }).catch(function (error) {


        Swal.fire({
            type: 'error',
            title: 'Opps...',
            text: 'Algo salió mal, intentelo más tarde'

        })


    });

}