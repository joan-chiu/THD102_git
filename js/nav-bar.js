let btn_nav = document.getElementById("nav-bar");
let nav_list = document.getElementsByClassName("nav-list")[0];
let nav_show = false;

btn_nav.addEventListener("click",function(e){
    if(nav_show === false){
        nav_list.style.display = "inline-flex";
        nav_show = true;

        
        
    }
    else{
        nav_list.style.display = "none";
        nav_show = false;
    }

    e.stopPropagation();



    nav_list.addEventListener("click",function(e){
    e.stopPropagation();
    
});
    document.getElementsByTagName('body')[0].addEventListener("click",function(e){
        console.log('123');
        if(nav_show === true){
            e.preventDefault();
             nav_list.style.display = "none";
             nav_show = false;
        }
        else{
            event.returnValue = true;
        }
        
        
        

     


    
});
      
   
});

        