const Validator =require('validator');
const isEmpty =require('is-empty');
module.exports=function SignupInput(data){

    let errors = {};

    data.username = !isEmpty(data.username) ? data.username : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.text = !isEmpty(data.text) ? data.text : "";

    if(Validator.isEmpty(data.username)) {
        errors.username = "Name field is required";
    }


    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }

  

    if(!Validator.isLength(data.password,{min:6,max:30})){
        errors.password = "Password must be at least 6 characters";
    }

    if(Validator.isEmpty(data.text)){
        errors.text = "Enter About";
    }

    return{
        errors,
        isValid:isEmpty(errors)
    };

};