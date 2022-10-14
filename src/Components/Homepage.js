import '../Css/HomePageCss/homepage.css'
export function HomePage(){
    return (
        <div>
             <html  lang="ar">
             <header>
	            <title> HomePage </title>
	            <meta charset="UTF-8"></meta>
  	            <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
  	            <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
            </header>
            <body>
                
    <div class="Intro-container">
        <div class="image">
        <img src={require('../images/image.png')} alt="Time"></img>
          
        </div>
        <div> <p id="SonologText"> طور مهاراتك الدراسية مع درسني</p></div>

    </div>

    <div class="Better-container">



        <div class="BetterImage">
        <img src={require('../images/time.png')} alt="Time"></img>
           
            <label>وقت أقل</label>
        </div>

        <div class="BetterImage">
            
        <img src={require('../images/price.png')} alt="Time"></img>
          
            <label>سعر أفضل</label>
        </div>

        <div class="BetterImage">
        <img src={require('../images/education.png')} alt="Time"></img>
            
            <label>تعليم فعال</label>

        </div>

        <p id="BetterText">  لماذا نحن افضل من الاخرين؟</p>

    </div>

    <div class="Intro-container">

        <p id="developText">ارتقِ بمعرفتك التقنية إلى المستوى التالي.</p>


    </div>



            </body> 
               <footer> جميع الحقوق محفوظة لمجموعة درسني ©  </footer>
             </html>
        </div>
    )
}