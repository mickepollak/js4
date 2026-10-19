function isValidPassword(
    username = document.getElementById("username").value,
    password = document.getElementById("password").value
) {

    if (password.length < 8) {
        console.log("Password must be at least 8 characters long.");
        return false;
    }
    else if (password.includes(" ")) {
        console.log("Password cannot contain spaces.");
        return false;
    }
    else if (username.length > 0 && password.includes(username)) {
        console.log("Password cannot contain username.");
        return false;
    }
    else {
        console.log("Password is valid.");
        return true;
    }
}