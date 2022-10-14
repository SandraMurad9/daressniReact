export const validation = (values) =>{

    let errors = {};
    
    if(!values.fullname){
        errors.fullname = "يجب كتابة اسم الطالب"
    }
    if(!values.email){
        errors.email = "يجب كتابة البريد الالكتروني"
    }else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email ="username@example.com صيغة البريد الالكتروني الصحيحة"
    }
    if(!values.password){
        errors.password = "يجب كتابة كلمة السر"
    }else if (values.password.length <8){
        errors.password ="كلمة السر يجب أن تكون على الأقل 8 خانات"
    }
    if(!values.repassword){
        errors.repassword = "يجب اعادة كتابة كلمة السر"
    }else if (!(values.repassword==values.password)){
        errors.password ="كلمة السر غير متطابقة"
        errors.repassword ="كلمة السر غير متطابقة"
    }

    return errors;
}