import React from "react"
import '../Css/aboutus-css/aboutus_style.css'


export const Advices = ()=>{

    return(
        <div>
            <html dir="rtl" lang="ar">
            <header>
	            <title> advices  </title>
	            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
	            <meta charset="UTF-8"></meta>
  	            <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
  	            <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
            </header>
            <main >
                <div class="about">
		            <section >
			            <div class="childmain">
				             <img src={require ('../images/tips.png')} alt="privatelesson"></img> 
				            <div class="childabout_text">
					            <h1>نصائح دراسية</h1>
					            <p>     
                               <h3>1- ضع خططك مقدماً <br/> <br/></h3> 
                                ضع جدولاً زمنياً لموادك الدراسية ومحاضراتك كي تحدد الوقت الكافي الذي تحتاجه لبدء مراجعاتك قبل الامتحانات. ومن الأفضل البدء في الدراسة بوقت مبكر حتى تتفادي أي ضغوط. استذكر دروسك يومياً أو أسبوعياً واختر الطريقة الأنسب لك، ولا تتردد في اللجوء لأساتذتك ومساعدة زملائك. واعلم أنك ستحتاج إلى بعض الوقت لتتكيف على نظام التعليم بوجهتك الدراسية الجديدة الذي قد يكون مختلفاً عن نظام التعليم بوطنك الأم. <br/> <br/>
                               <h3>2- كن منظماً <br/> <br/></h3> 
                                تأكد من امتلاكك لكافة المواد الدراسية الضرورية التي تحتاجها لبدء دراستك واستذكار دروسك. إذا لم تتوافر لديك بعض الكتب أو المراجع، اذهب إلى المكتبة أو استعر من صديقك كتابة لعمل نسخة منه. ولا تؤخر تجهيز تلك الأمور الهامة لفترة ما قبل الامتحانات. <br/> <br/>
                                
                                 </p>
				            </div>
			            </div>
		            </section>
                   
	            </div>
            </main>
            <footer> © جميع الحقوق محفوظة لمجموعة درسني   </footer>
            </html>
        </div>
    )

}