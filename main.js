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
    
    return ember.nem===false;


});
