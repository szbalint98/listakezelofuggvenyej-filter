import{adatLISTA}from "./adat.js";
adatLISTA.forEach(function (element) {
    console.log(element)
}) 
adatLISTA.forEach((element,index)=> {
    console.log(element)
}) 

const FERFIAK=emberekLISTA.filter(function(ember){
    
        return ember.nem===false;
    

});
const FERFIAK2=emberekLISTA.filter((ember)=>{
    
    return ember.kor<10;


});
emberekLISTA.sort(function(e1,e2){
    return e2.kor-e1.kor


})
console.log(emberekLISTA)