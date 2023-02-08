var STYLESHEET_KEY = "stylesheet";

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var stylesheet = document.getElementById("mainStyle");

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var currstyle = stylesheet.getAttribute("href");

    // 1 (c) Determine new stylesheet file name
    var newstyle = "styles2.css";
    if(currstyle == "styles.css"){
        newstyle = "styles2.css"; 
    } else {
        newstyle = "styles.css"
    }

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    stylesheet.setAttribute("href", newstyle);


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem(STYLESHEET_KEY, newstyle);
}

window.onload = function(){
    
    var styleval = localStorage.getItem(STYLESHEET_KEY) || "styles.css";  
    var stylesheet = document.getElementById("mainStyle")
    stylesheet.setAttribute("href", styleval);
    
}