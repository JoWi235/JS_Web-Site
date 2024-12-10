
document.addEventListener("DOMContentLoaded", () => {
    const myBirthday = "2009-05-23";
    document.getElementById("age").innerHTML = 'Mein alter: ' + calculateMyAge(myBirthday);

    function calculateMyAge(birthday) {
        const toDay = new Date();
        const birthDate = new Date(birthday);
        let age = toDay.getFullYear() - birthDate.getFullYear();
        const birthdayThisYear = new Date(
            toDay.getFullYear(),
            birthDate.getMonth(),
            birthDate.getDate()
        );

        if (toDay < birthdayThisYear) {
            age--;
        }

        return age;
    }
});


