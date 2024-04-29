function checkingCredentiels (event) {
    var dayInput = document.getElementById("Day");
    var monthInput = document.getElementById("Month");
    var yearInput = document.getElementById("Year");

    if (dayInput.checkValidity() && monthInput.checkValidity() && yearInput.checkValidity()) {
        var year = yearInput.value;
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        var totalAge = currentYear - year;
        if (totalAge < 15) {
            alert("Your age is Restricted");
        } else if (totalAge === 15){
            if (currentDate.getMonth() < monthInput.value - 1) {
                alert("Your age is Restricted");
            } else if ((currentDate.getMonth() === monthInput.value - 1) && (currentDate.getDate() <= dayInput.value)) {
                alert("Your age is Restricted");
            }
            else {
                event.preventDefault();
                window.location.href = "https://www.google.com";    
            }
        }
        else {
            event.preventDefault();
            window.location.href = "https://www.google.com";
        }
    }
}