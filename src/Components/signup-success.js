import React,{useState} from "react";
import {SignUPForm} from "./signup-page"
import {Accounts} from "../Accountsfolder/accounts"

export  const StudentsList = () => {

    const [students, setStudents] = useState(Accounts)

    const addNewStudent = (newStudent) => {
        Accounts.push(newStudent)
        setStudents(Accounts)
        //const clonearray = [...Accounts].concat(newStudent)
        console.log(Accounts)
    }

    return (
        <div>
            <SignUPForm addNewStudent={addNewStudent} />
            
        <div>     
            {/* {students.map((data,key) => {
                return (
                    <div>{"Name: " +data.name},  
                    {"Email: " + data.email}</div>
                )
             })} */}

        </div>
        </div>
    )
}