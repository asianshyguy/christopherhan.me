//Cookie counter
function setCounter(x){
    sessionStorage.setItem('counter', x);
}

//Animate In
function animateIn(){
    $('#home-text').transition({y: 0, opacity:1, duration: 1000});
    $('#home-menu').transition({y: 0, opacity:1, duration:1000});
    $('#header').transition({y: 0, opacity:1, duration: 850});
    $('#motion-side').transition({x: 0, opacity:1, duration: 800, delay:100});
    $('#design-side').transition({x: 0, opacity:1, duration: 800, delay:200});
    $('#bio-side').transition({x: 0, opacity:1, duration: 800, delay:300});
    $('#contact-side').transition({x: 0, opacity:1, duration: 800, delay:400});
    $('#content').transition({opacity:1, duration:1500, delay: 300}, 'ease')
}

//Animate Out
function animateOut(){
    $('#home-text').transition({y: -85, opacity:0, duration: 650});
    $('#home-menu').transition({y: 85, opacity:0, duration:650});
    $('#header').transition({y: -85, opacity:0, duration: 650});
    $('#motion-side').transition({x: -50, opacity:0, duration: 650, delay:100});
    $('#design-side').transition({x: -50, opacity:0, duration: 650, delay:150});
    $('#bio-side').transition({x: -50, opacity:0, duration: 650, delay:200});
    $('#contact-side').transition({x: -50, opacity:0, duration: 650, delay:250});
    $('#content').transition({y: 25, opacity:0, duration:750, queue: false});
};

function contentOut(){
    $('#content').transition({y: 25, opacity:0, duration:750, queue: false});
}

// Menu Item Hover State
function menuIn() {
};
function menuOut(){
    
};

//Navigation
/// Index
function indexNavP(){
    window.location.href="../index2.html";
}
/// Motion
function motionNav() {
    window.location.href = "./pages/motion.html";   
}
function motionNavP() {
    window.location.href = "motion.html";   
}
/// Design
function designNav() {
    window.location.href = "./pages/design.html";
}
function designNavP() {
    window.location.href = "design.html";
}
/// Bio
function bioNav() {
    window.location.href = "./pages/bio.html";
}
function bioNavP() {
    window.location.href = "bio.html";
}
/// Contact