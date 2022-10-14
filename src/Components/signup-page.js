import React,{useState} from "react";
import { validation } from "./validation";
import '../Css/signup-css/signup_style.css'
export const SignUPForm = ({addNewStudent})=>{

    const [values, setValues] = useState ({
        fullname: "",
        email: "",
        password: "",
        repassword:""
    })

    const [errors, setErrors] = useState({})

    const handleChange =(event)=>{
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
        //console.log(event.target.value)
    }

    const handleFormSubmit = (event) =>{
        setErrors(validation(values))
        const newStudent = values
        console.log(newStudent)
        addNewStudent(newStudent)
    }

    return(
        <div>
            <html>
            <header>
	            <title> About US </title>
	            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
	            <meta charset="UTF-8"></meta>
  	            <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
  	            <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>

            </header>
            <main>
                <div class="flexbox-container">
                    <div class="flexbox-item flexbox-item-2">
                         {/* <img src={require('../images/study5.jpg')} alt="study" width="400" height="300"/>  */}
                    </div>
                    <div class="flexbox-item flexbox-item-1">
                        <h1>تسجيل طالب جديد </h1> <br/><br/>
                        <label for="fname" class="size_color">اسم الطالب</label><br/>
                        <input
                            type="text"
                            class="input"
                            name="fullname"
                            id="fname"
                            value={values.name}
                            onChange={handleChange}>
                        </input>
                        {errors.fullname && <p class="error">{errors.fullname}</p>}
                        <br/>
                        

                        <label for="email" class="size_color">البريد الإلكتروني</label> <br/>
                        <input 
                            type="email"
                            class="input"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            >
                        </input>
                        {errors.email && <p class="error">{errors.email}</p>}
                        <br/>

                        <label for="password" class="size_color">كلمة المرور</label><br/>
                        <input
                            type="password"
                            class="input"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            >
                        </input>
                        {errors.password && <p class="error">{errors.password}</p>}
                        <br/>

                        <label for="repassword" class="size_color">تأكيد كلمة المرور</label><br/>
                        <input
                            type="password"
                            class="input" 
                            id="repassword" 
                            name="repassword" 
                            value={values.repassword}
                            onChange={handleChange}
                            >
                        </input>
                        {errors.repassword && <p class="error">{errors.repassword}</p>}
                        

                        <button class="myButton" onClick={handleFormSubmit}>تسجيل</button><br/>
                        <p><a href="C:\Users\ROG\Desktop\درسني\login.html" class="color">لديك حساب؟ سجل الدخول</a></p>
                    </div> 
                </div>
            </main>
            <footer> جميع الحقوق محفوظة لمجموعة درسني ©  </footer>
            </html>
        </div>
    )
}