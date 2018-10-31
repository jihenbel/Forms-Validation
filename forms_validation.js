
document.querySelector(".click").addEventListener('click' ,function inputsempty()
    {
    var inputs=document.getElementsByClassName("inputype")
    for (let i=0; i<inputs.length; i++) {
    if (inputs[i].value ==='')
    {
        return alert ("input empty!")
    }}})


document.querySelector(".click").addEventListener('click' ,function ValidateEmail()
    {
    var mail=document.querySelector(".mail").value
    if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))===false)
    {
        alert("You have entered an invalid email address!")
    }})


    document.querySelector(".click").addEventListener('click' ,function myFunction() {
        var password=''
        var lowerCaseCharacter = /(?=.*[a-z])/
        var numbers= /(?=.*\d)/
        var upperCaseCharacter= /(?=.*[A-Z])/
        // Get the value of the input field with id="numb"
        password = document.getElementById("password").value;

        // If x is not a combination of charatacters , numbers and at least a capital letter and has less than 8 characters
        if (password.length<8) {
            alert ("Password must contain at least 8 characters");
        }
        else if (upperCaseCharacter.test(password)===false)
            alert ("Password must contain at least a capital letter")

        else if (numbers.test(password)===false)
            alert ("Password must contain numbers")
        })
    
