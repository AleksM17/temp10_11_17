
        let field1 = document.querySelector("form[name=signup2] input[type=email]");
        field1.addEventListener("focus",function(){
            this.form.classList.remove("animated");
        },true);

        field1.addEventListener("blur",function(){

            this.form.style.animationName = "bounceOutRight";
            this.form.style.animationIterationCount = 1;
            this.form.classList.add("animated");
            this.form.addEventListener("animationend",function(){
                this.hidden = true;
            });
        },true);



var h_hght = 150; // высота шапки
var h_mrg = 0;    // отступ когда шапка уже не видна
                 
$(function(){
 
    var elem = $('header');
    var top = $(this).scrollTop();
     
    if(top > h_hght){
        elem.css('top', h_mrg);
    }           
     
    $(window).scroll(function(){
        top = $(this).scrollTop();
         
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
        } else {
            elem.css('top', h_mrg);
        }
    });
 $('input[type="submit"]').val("TEST");
  $('.test').html("TEST");
});

// $('input[type="submit"]').html("TEST");