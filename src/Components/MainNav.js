import { BrowserRouter as Router,Routes, Route, Link, BrowserRouter, NavLink } from 'react-router-dom';
import {AboutUsPage} from './aboutus'
import {SignUPForm} from './signup-page'
import '../Css/mainnav-css/mainnav.css'
import { HomePage } from './Homepage';
import {Advices}  from './advices'
export const MainNav=()=>{
    return(
        <BrowserRouter>
            <div className='topnav'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <NavLink to="/" className='homepage'> الصفحة الرئيسية </NavLink>
                <NavLink to="/aboutUS">من نحن</NavLink>
                <NavLink to="/teachers">أساتذتنا </NavLink>
                <NavLink to="/studiesAdvices">نصائح دراسية</NavLink>
                <NavLink to="/previousTests">نماذج امتحانات</NavLink>
                <NavLink to="/signIn" className='split'>تسجيل الدخول</NavLink>
                <NavLink to="/signup" className='split'>انضم لعائلتنا</NavLink>

                <div className='search-container'>
                    
                    <input type="text" placeholder="  بحث..." name="search"></input>
                    <button type="submit" id="searchbtn"><i className="fa fa-search"></i></button>
                </div>
            </div>

            <Routes>
                <Route path='aboutUS' element={<AboutUsPage/>}/>
                <Route path='studiesAdvices' element={<Advices/>}/>
                <Route path='/' element ={<HomePage/>}/>
                 <Route path='signup' element ={<SignUPForm/>}/>
                {/* <Route path='HomePage' element ={<HomePage/>}/> */}
                <Route path='*' element={<h1>Wrong Path</h1>}/> 
            </Routes>
        </BrowserRouter>
    )
}