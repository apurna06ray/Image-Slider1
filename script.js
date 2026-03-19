let slides =document.querySelectorAll(".slide");
let count=0;
slides.forEach(function(slides, index){
    slides.style.left=`${index*100}%`
});
function next(){
    count++;
    if (count==slides.length){
        count=0;
    }
    myFun();
}
function pre(){
    count--;
    if(count<0){
       count= slides.length-1;
    }
    myFun();
}
function myFun(){
    slides.forEach((image)=>{
        image.style.transform=`translateX(-${count*100}%)`
    })
}
function goBack(){
    window.location.href = "index.html";
}
