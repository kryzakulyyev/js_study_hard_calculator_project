//1 2
let studyHours;
function getStudyHours(day){
   switch(day.toLowerCase()){
     case "monday":
       studyHours=8;
       break;
     case "tuesday"|| "wednesday":
       studyHours=7;
       break;
     case "thursday":
       studyHours=8;
       break;
     case "friday" || "saturday":
       studyHours=4;
       break;
     case "sunday":
       studyHours=6
       break;
     default: "Please enter correct day!"
       break;
 }
    return studyHours;
 }
 //3

   console.log(getStudyHours(prompt("Plaese enter day!")));
 

//4 5
 function getActualStudyHours(){
     return getStudyHours("monday")+getStudyHours("tuesday")+getStudyHours("wednesday")+getStudyHours("thursday")+getStudyHours("friday")+getStudyHours("saturday")+getStudyHours("sunday");
 }
    console.log(getActualStudyHours());
 

 //6 7
 function getIdealStudyHours(){
     let idealHours=6;
     return idealHours*7;
 }
    console.log(getIdealStudyHours());


     let actualStudyHours=getActualStudyHours();
     let idealStudyHours=getIdealStudyHours() 


  //8 9  
 function calculateStudyDebt(){
    let actualStudyHours=getActualStudyHours();
    let idealStudyHours=getIdealStudyHours() 

    if(actualStudyHours===idealStudyHours){
    console.log( "You  got the perfect amount of study "+actualStudyHours+" hours");
   }else if(actualStudyHours>idealStudyHours){
    console.log("You can get rest. You did perfect job. Total study: "+actualStudyHours+" hours");
   }else {
    console.log("Time to Study")
   }
  
 }
   calculateStudyDebt();