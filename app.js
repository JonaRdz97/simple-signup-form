let button_submit = document.getElementById("claim");
let form = document.principalForm;
let icon_error = document.getElementsByClassName("icon-error");
let error_msg = document.getElementsByClassName("error-msg");
let name_regex = /[a-z]{2,}/i;
let email_regex = /^\w+([\.\+\-\_]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/;
let pass_regex = /\w{6,}/;


button_submit.addEventListener('click', function(event){
    event.preventDefault(); // previene el comportamiento por defecto
    if (validation()) {
        form.name.value = "";
        form.last_name.value = "";
        form.email.value = "";
        form.pass.value = "";
        Swal.fire({
            title: "Successfully",
            text: "Your data has been sent correctly",
            icon: "success"
        }).then(() => {
            form.submit(); // se envian los datos
        })
    }
});


function validation(){
    let name_correct,last_correct,email_correct,pass_correct;

    if(!name_regex.test(form.name.value)){
        icon_error[0].classList.remove("visible")
        error_msg[0].classList.remove("visible")
        form.name.classList.add("error-border-color")
        setTimeout(function(){
            icon_error[0].classList.add("visible")
            error_msg[0].classList.add("visible")
            form.name.classList.remove("error-border-color")
        },3500)
        name_correct = false;
    }else{
        name_correct = true;
    }
    if(!name_regex.test(form.last_name.value)){
        icon_error[1].classList.remove("visible")
        error_msg[1].classList.remove("visible")
        form.last_name.classList.add("error-border-color")
        setTimeout(function(){
            icon_error[1].classList.add("visible")
            error_msg[1].classList.add("visible")
            form.last_name.classList.remove("error-border-color")
        },3500)
        last_correct = false;
    }else{
        last_correct = true;
    }
    if(!email_regex.test(form.email.value)){
        icon_error[2].classList.remove("visible")
        error_msg[2].classList.remove("visible")
        form.email.classList.add("error-border-color")
        setTimeout(function(){
            icon_error[2].classList.add("visible")
            error_msg[2].classList.add("visible")
            form.email.classList.remove("error-border-color")
        },3500)
        email_correct = false;
    }else{
        email_correct = true;
    }
    if(!pass_regex.test(form.pass.value)){
        icon_error[3].classList.remove("visible")
        error_msg[3].classList.remove("visible")
        form.pass.classList.add("error-border-color")
        setTimeout(function(){
            icon_error[3].classList.add("visible")
            error_msg[3].classList.add("visible")
            form.pass.classList.remove("error-border-color")
        },3500)
        pass_correct = false;
    }else{
        pass_correct = true;
    }

    if (name_correct && last_correct && email_correct && pass_correct) {
        return true
    } else {
        return false        
    }
}