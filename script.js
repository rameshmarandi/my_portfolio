$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
          $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
    });

    // Download Resume function

    $("#resumeDownload").click(function(e){
        e.preventDefault();
        window.location.href = "Files/Ramesh.pdf";
    });
    //Typing animaiton script
    var typed = new Typed(".typing" , {
        strings: [ "MERN Developer","Full Stack Web Developer", "Designer" , "Freelancer" ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing2" , {
        strings: [ "MERN Developer","Full Stack Web Developer", "Designer" , "Freelancer" ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // Menu Toggle script 

    $(".menu_btn").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu_btn i ").toggleClass("active");
    })
})