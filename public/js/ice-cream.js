//alert("Hello, ice cream!");

document.getElementById("icecream-form").onsubmit = () => {

    let isValid = true; 

    // validate name
    let name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById("err-name").style.display = "block";
        isValid = false;
    }

    // validate email 
    let email = document.getElementById('email').value.trim();
    if (!email || email.indexOf("@") === -1) {
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    }

    // validate flavor
    let flavor = document.getElementById("flavor").value;
    if (flavor === "none") {
        document.getElementById("err-flavor").style.display = "block";
        isValid = false;
    }

    // validate cone 
    let methodButtons = document.getElementsByName("method");
    let count = 0;
    for (let i = 0; i < methodButtons.length; i++){
        if (methodButtons[i].checked) {
            count++;
        }
    }
    if (count === 0) {
        document.getElementById("err-method").style.display = "block";
        isValid = false;
    }
    
    return isValid;

}