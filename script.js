const firebaseConfig = {

    apiKey: "AIzaSyA-uosvPAJCbFwMs7pr5FlO0QzqxM71wfQ",

    authDomain: "login-interativo.firebaseapp.com",

    projectId: "login-interativo",

    storageBucket: "login-interativo.appspot.com",

    messagingSenderId: "485275432251",

    appId: "1:485275432251:web:79448bfbca0993d2e6331e",

    measurementId: "G-G4ZDGPF7S7"

};

firebase.initializeApp(firebaseConfig);




let btnLogin = document.getElementById("btn_login")
let btnRegistro = document.getElementById("btn_registro")
let login = document.getElementById("login")
let register = document.getElementById("register")
var btnLoginStatus = login.getAttribute('class')
let container = document.getElementById("container")


// FAZER ANIMAÇÃO CONTAINER INDO PARA O LADO


function ativar() {

    let register = document.getElementById("register")
    let login = document.getElementById("login")
    let loginStatus = login.getAttribute('class')
    let container = document.getElementById("container")



    if (loginStatus == "login ativo") {
        let login = document.getElementById("login")
        let register = document.getElementById("register")
        let container = document.getElementById("container")
        login.classList.remove("ativo")
        login.classList.add("desativado")
        register.classList.remove("desativado")
        register.classList.add("ativo")
        container.classList.remove("login")
        container.classList.add("register")

    } else {
        let login = document.getElementById("login")
        let register = document.getElementById("register")
        let container = document.getElementById("container")
        login.classList.remove("desativado")
        login.classList.add("ativo")
        register.classList.remove("ativo")
        register.classList.add("desativado")
        container.classList.remove("register")
        container.classList.add("login")



    }

}

let inputEmail = document.getElementById("emailLogin")
let inputSenha = document.getElementById("senhaLogin")


// LOGAR
function logar() {

    let email = document.getElementById("emailLogin").value
    let senha = document.getElementById("senhaLogin").value

    const login = [email, senha]

    let inputEmail = document.getElementById("emailLogin")
    let inputSenha = document.getElementById("senhaLogin")

    if (((senha == null) || (senha == "")) && ((email == null) || (email == ""))) {
        inputSenha.style.backgroundColor = "rgba(255, 0, 0, 0.233)"
        inputEmail.style.backgroundColor = "rgba(255, 0, 0, 0.233)"
        alert("Preencha os campos!")
        inputEmail.focus()
        let time = setTimeout(() => {
            inputSenha.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
            inputEmail.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
        }, 5000);

    } else if ((senha == null) || (senha == "")) {
        inputSenha.style.backgroundColor = "rgba(255, 0, 0, 0.233)"
        alert("Preencha o campo da senha!")
        inputSenha.focus()
        let time = setTimeout(() => {
            inputSenha.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
        }, 5000);

    } else if ((email == null) || (email == "")) {
        inputEmail.style.backgroundColor = "rgba(255, 0, 0, 0.233)"
        inputEmail.focus()
        alert("Preencha o campo do email!")
        let time = setTimeout(() => {
            inputEmail.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
        }, 5000);

    }




    if (email == "quem é o amor da minha vida?" && senha == "lilidy") {

        alert("eu te amo meu bem <3, fique comigo para sempre, por favor. Te quero mais do que tudo e por você tudo vale a pena! Logo você será a Lilidy Rafaele da Cunha Proveza <3 (eu AMO pensar nisso HEHEHEHEHE)")

    } else if ((email != null) && (email != "") && (senha != null) && (senha != "")) {


        firebase.auth().signInWithEmailAndPassword(login[0], login[1]).then(response => {
            alert("Logado com sucesso", response)
            inputEmail.value = ""
            inputSenha.value = ""
            window.location.href = "https://animated-cupcake-af47cf.netlify.app/"
        }).catch(error => {
            alert("Usuário não encontrado", error)
        });
        // console.log("depois")





        // alert("Email: " + email + "   " + "Senha: " + senha)


    }


}



// EVENTOS CLICAR ENTER
inputEmail.onfocus = function () {
    inputEmail.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            logar()
        }
    })
};

inputSenha.onfocus = function () {
    inputSenha.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            logar()
        }
    })
};

//function firebase register:

// async function registerUser(email, password) {


//     try {
//       // Tenta criar um novo usuário com e-mail e senha
//       const userCredential = await createUserWithEmailAndPassword(email, password);

//       // Se o registro for bem-sucedido, você pode acessar informações sobre o novo usuário
//       const user = userCredential.user;
//       console.log('Usuário registrado com sucesso:', user.uid);

//       // Aqui você pode redirecionar para a próxima página, exibir uma mensagem, etc.
//     } catch (error) {
//       // Se ocorrer um erro durante o registro, você pode tratá-lo aqui
//       console.error('Erro durante o registro:', error.message);
//       // Exiba uma mensagem de erro para o usuário, por exemplo.
//     }
//   }





// REGISTRAR
function registrar() {
    let email = document.getElementById("emailRegistro").value
    let senha = document.getElementById("senhaRegistro").value
    let senha2 = document.getElementById("senhaRegistro2").value

    let inputEmail = document.getElementById("emailRegistro")
    let inputSenha = document.getElementById("senhaRegistro")
    let inputSenha2 = document.getElementById("senhaRegistro2")

    let register = document.getElementById("register")
    let login = document.getElementById("login")
    let loginStatus = login.getAttribute('class')
    let container = document.getElementById("container")


    if (((email != null) && (email != "")) && ((senha != null) && (senha != "")) && ((senha2 != null) && (senha2 != ""))) {
        if (senha == senha2) {


            firebase.auth().createUserWithEmailAndPassword(email, senha).then(response => {
                alert("Logado com sucesso", response, "Agora realize o login!")
                let login = document.getElementById("login")
                let register = document.getElementById("register")
                let container = document.getElementById("container")
                register.classList.remove("ativo")
                register.classList.add("desativado")
                login.classList.remove("desativado")
                container.classList.remove("register")
                container.classList.add("login")
                login.classList.add("ativo")
            }).catch(error => {


                if (error == "FirebaseError: Firebase: The email address is already in use by another account. (auth/email-already-in-use).") {
                    alert("Usuário já existente!")
                } else if (error == "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).") {
                    alert("Senha fraca! Ela precisa ter mais de 6 caracteres")
                } else if (error == "FirebaseError: Firebase: The email address is badly formatted. (auth/invalid-email).") {
                    alert("Email inválido!")
                }


            });



        } else {

            alert("As senhas não coincidem")
            inputSenha.style.backgroundColor = "rgba(255, 0, 0, 0.233)"
            inputSenha2.style.backgroundColor = "rgba(255, 0, 0, 0.233)"

            inputSenha.focus()

            let time = setTimeout(() => {
                inputSenha.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
                inputSenha2.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
            }, 5000);

        }
    }

    if (email == null || email == "") {
        alert("Preencha o campo do email!")
        inputEmail.style.backgroundColor = "rgba(255, 0, 0, 0.233)"
        inputEmail.focus()
        let time = setTimeout(() => {
            inputEmail.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
        }, 5000);

    }

    else if (((senha == null) || (senha == "")) && ((email == null) || (email == "")) && ((senha2 == null) || (senha2 == ""))) {
        inputSenha.style.backgroundColor = "rgba(255, 0, 0, 0.233)"
        inputEmail.style.backgroundColor = "rgba(255, 0, 0, 0.233)"
        inputSenha2.style.backgroundColor = "rgba(255, 0, 0, 0.233)"
        alert("Preencha os campos!")
        inputEmail.focus()
        let time = setTimeout(() => {
            inputSenha.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
            inputEmail.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
            inputSenha2.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
        }, 5000);

    } else if (((senha == null) || (senha == "")) && ((senha2 == null) || (senha2 == ""))) {
        inputSenha.style.backgroundColor = "rgba(255, 0, 0, 0.233)"
        inputSenha2.style.backgroundColor = "rgba(255, 0, 0, 0.233)"
        inputSenha.focus()
        alert("Preencha os campos de senha!")
        let time = setTimeout(() => {
            inputSenha.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
            inputSenha2.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
        }, 5000);

    }
    else if ((senha == null) || (senha == "")) {
        inputSenha.style.backgroundColor = "rgba(255, 0, 0, 0.233)"
        inputSenha.focus()
        alert("Preencha o campo da senha!")
        let time = setTimeout(() => {
            inputSenha.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
        }, 5000);

    } else if ((senha2 == null) || (senha2 == "")) {
        inputSenha2.style.backgroundColor = "rgba(255, 0, 0, 0.233)"
        inputSenha2.focus()
        alert("Preencha o campo repetir senha!")
        let time = setTimeout(() => {
            inputSenha2.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
        }, 5000);

    } else if ((senha2 != senha)) {
        inputSenha.style.backgroundColor = "rgba(255, 0, 0, 0.233)"
        inputSenha2.style.backgroundColor = "rgba(255, 0, 0, 0.233)"
        inputSenha2.focus()
        alert("As senhas não coincidem!")
        let time = setTimeout(() => {
            inputSenha.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
            inputSenha2.style.backgroundColor = "rgba(255, 255, 255, 0.507)"
        }, 5000);

    }

}


// EVENTOS AO CLICAR ENTER REGISTRO

let inputEmailRegistro = document.getElementById("emailRegistro")
let inputSenhaRegistro = document.getElementById("senhaRegistro")
let inputSenha2 = document.getElementById("senhaRegistro2")

inputEmailRegistro.onfocus = function () {
    inputEmailRegistro.addEventListener("keyup", function (event) {

        if (event.keyCode === 13) {
            registrar()
        }
    })
};

inputSenhaRegistro.onfocus = function () {
    inputSenhaRegistro.addEventListener("keyup", function (event) {

        if (event.keyCode === 13) {
            registrar()
        }
    })
};

inputSenha2.onfocus = function () {
    inputSenha2.addEventListener("keyup", function (event) {

        if (event.keyCode === 13) {
            registrar()
        }
    })
};