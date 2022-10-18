let myResume = {

    Name : "Jaganath G",

    Mail  : "Jaganath0901@gmail.com",

    Experience : " Fresher ",
    
    Degree : "BSC",

    Department : "Mathematics",

    CGPA : " 7.433",

    address : {
        houseno : "***",
        Streetname : "xyz",
        areaname : "abc",
        City : "Chennai",
        State : "Tamil Nadu",   
    },

    Skills  : "Javascript  CSS  HTML ",

   
        
}
myResume.Interest = "Reading books,Learning to create video content, Music,Watching webseries, Trying to create my own website"

//to convert object into JSON, we can use JSON.stringify()
const json = JSON.stringify(myResume);
console.log(json);

//to convert JSON into object again, we have to use JSON.parse()
// console.log(JSON.parse(json));