function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
    };

    const serviceID = "service_4f22m5n";
    const templateID = "template_pakxjzd";

    emailjs
        .send(serviceID,templateID,params)
        .then(
             res =>{
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("phone").value = "";
                console.log(res);
                alert("your message sent successfully")
         })
        .catch(err=>console.log(err));
        alert("vous devez remplir les champs !")
}

