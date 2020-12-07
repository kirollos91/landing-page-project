/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
    const navBar = document.querySelector(".navbar__menu ul");
    const sections = document.querySelectorAll("section"); 
    
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
   const df = document.createDocumentFragment();
   for(let i = 0 ;i<3;i++ ){
       let li = document.createElement("li");
       
       let link = document.createElement("a");
       link.className = "menu__link";
       link.href = "#section"+(i+1);
       link.textContent = "section " + (i+1);
        li.appendChild(link);
        df.appendChild(li);
   }
   navBar.appendChild(df);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
    document.addEventListener("scroll",function(){
        let timeset;
        
        navBar.parentElement.addEventListener("mouseover",function(event){
            clearTimeout(timeset);
        });
       
        navBar.style.display = "block";
        if(window.scrollY >= 0 && window.scrollY < 52){
            clearTimeout(timeset);
            navBar.style.display = "block";
        }
        else{
             if(window.scrollY >52 && window.scrollY < 506){
                sections[0].removeAttribute("class","active");
                sections[1].removeAttribute("class","active");
                sections[2].removeAttribute("class","active");
                document.querySelectorAll("li")[0].removeAttribute("class","active");
                document.querySelectorAll("li")[1].removeAttribute("class","active");
                document.querySelectorAll("li")[2].removeAttribute("class","active");
             }  
            if(window.scrollY >=506 && window.scrollY < 1000){
                sections[0].className = "active";
                sections[1].removeAttribute("class","active");
                sections[2].removeAttribute("class","active");
                document.querySelectorAll("li")[0].className = "active";
                document.querySelectorAll("li")[1].removeAttribute("class","active");
                document.querySelectorAll("li")[2].removeAttribute("class","active");
                timeset =setTimeout(()=>{navBar.style.display = "none";},2000); 
            }
            else if(window.scrollY >=1026 && window.scrollY < 1347){
                sections[0].removeAttribute("class","active");
                sections[1].className = "active";
                sections[2].removeAttribute("class","active");
                document.querySelectorAll("li")[1].className = "active";
                document.querySelectorAll("li")[0].removeAttribute("class","active");
                document.querySelectorAll("li")[2].removeAttribute("class","active");
                timeset =setTimeout(()=>{navBar.style.display = "none";},2000); 
            }
            else if(window.scrollY >=1447){
                sections[0].removeAttribute("class","active");
                sections[1].removeAttribute("class","active");
                sections[2].className = "active";
                document.querySelectorAll("li")[2].className = "active";
                document.querySelectorAll("li")[0].removeAttribute("class","active");
                document.querySelectorAll("li")[1].removeAttribute("class","active");
                timeset =setTimeout(()=>{navBar.style.display = "none";},2000); 
            }
        }

    
    });
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


