let users = JSON.parse(localStorage.getItem("users")) || [];

$(".registerBtn").click(function(){
    let nameInput = $("#nameInput").val();
    let phoneInput = $("#phoneInput").val();
    let usernameInput = $("#usernameInput").val();
    let passwordInput = $("#passwordInput").val();

    if (!nameInput || !phoneInput || !usernameInput || !passwordInput) {
        alert("Please enter all data");
        return;
    }

    let userExists = users.some(user => user.istifageciAd === usernameInput);
    if (userExists) {
        alert("This username is already registered, please choose a different one");
        return;
    }

    let NewUser = {
        ad: nameInput,
        telefon: phoneInput,
        istifageciAd: usernameInput,
        shifre: passwordInput
    };

    users.push(NewUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Успешная регистрация");
});
