let myResume = [{
    "Name"      :"Jaganath G",
    "Mail"      :"Jaganath0901@gmail.com",
    "address"   :{  "houseno"    :"***",
                    "Streetname" :"xyz",
                    "areaname"   :"abc",
                     "City"      :"Chennai",
                     "State"     :"Tamil Nadu"},
},
{
    "Experience":" Fresher ",
    "Degree"    :"BSC",
    "Department":"Mathematics",
    "CGPA"      :" 7.433",
    "Skills"    :"Javascript  CSS  HTML ",
    "Interest"  :"Reading books,Learning to create video content, Music,Watching webseries, Trying to create my own website"
}]                


// 1. for loop 
for(let i=0; i<myResume.length; i++){
   console.log(myResume[i]);


//     to get output in JSON format we can use JSON.stringify()
//    console.log(JSON.stringify(myResume[i]));

};

// 2. for in loop
for(let index in myResume){
 console.log(myResume[index]);


//     to get output in JSON format we can use JSON.stringify()
//    console.log(JSON.stringify(myResume[index])); 

};

// 3. for of loop
for(let key of myResume){
    console.log(key);

//     to get output in JSON format we can use JSON.stringify()
//    console.log(JSON.stringify(key)); 

};


// 4. forEach loop

myResume.forEach(function(resume){
   console.log(resume);

//     to get output in JSON format we can use JSON.stringify()
//    console.log(JSON.stringify(resume)); 


})
