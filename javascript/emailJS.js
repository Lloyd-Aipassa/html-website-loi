(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init("NpuBHe_vpdYjJ_LMf");
})();

window.onload = function () {
    document.getElementById(
        "contact-form"
    ).addEventListener("submit", function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value =
            (Math.random() * 100000) | 0;
        // these IDs from the previous steps
        emailjs.sendForm(
            "service_ozfvgtv",
            "template_7bsxc3m",
            this
        ).then(
            function () {
                console.log("SUCCESS!");
            },
            function (error) {
                console.log(
                    "FAILED...",
                    error
                );
            }
        );
    });
};

function clickSucces() {
    if (
        document.getElementById("name-form")
            .value === ""
    ) {
        return false;
    }
    setTimeout(succes, 2000);
}

function succes() {
    window.location.href = "/thankyou.html";
}
