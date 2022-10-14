import React from "react"
import '../Css/aboutus-css/aboutus_style.css'


export const AboutUsPage = ()=>{

    return(
        <div>
            <html dir="rtl" lang="ar">
            <header>
	            <title> About US </title>
	            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
	            <meta charset="UTF-8"></meta>
  	            <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
  	            <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
            </header>
            <main >
                <div class="about">
		            <section >
			            <div class="childmain">
				             <img src={require ('../images/privatelesson.jpg')} alt="privatelesson"></img> 
				            <div class="childabout_text">
					            <h1>من نحن</h1>
					            <p> لمعرفتنا أن إيجاد المدرس الخصوصي لطفلك في الوقت والسعر المناسبين هو أمر صعب. <br></br>
					            نحن، في فريق درسني، نهدف لتزويدكم بأفضل موقع الكتروني لتسهيل ايجاد المدرس الخصوصي المناسب لاحتاياجات طفلك.</p>
					            <p>
					            موقع درسني الالكتروني يسمح للمدرسيين وطلاب الجامعات بتكريس معرفتهم العلمية وخبرتهم في خدمة المسيرة التعليمية للأطفال. <br></br></p>
					            <p>للمعنيين في تطوير أداء أبنائهم المهاري في المنهج التعليمي فرصتك للاشتراك الان.</p>
					            <button type="button">اشترك الان</button>
				            </div>
			            </div>
		            </section>
                    <section>
			            <div class="teachermain">
				            <img src={require('../images/developer.jpg')} alt="Developer"></img> 
				            <div class="teacherabout_text">
					            <h1>انضم للفريق</h1>
					            <p>اذا رأيت أنك تملك المؤهلات المناسبة لمشروعنا درسني، وترى نفسك جزءً من فريقنا، فنحن سعيدون بانضمامك إلينا.</p>
					            <button type="button">انضم لنا</button>
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