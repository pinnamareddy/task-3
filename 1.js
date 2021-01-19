//0 part B
//0 Change atFaultForAccident from true to false and Print the dated of accidents
var myCar = {
    make: "Bugatti",
    model: "Bugatti La Voiture Noire",
    year: 2019,
    accidents: [
    {
    date: "3/15/2019",
    damage_points: "5000",
    atFaultForAccident: true
    },
    {
    date: "7/4/2022",
    damage_points: "2200",
    atFaultForAccident: true
    },
    {
    date: "6/22/2021",
    damage_points: "7900",
    atFaultForAccident: true
    }
    ]
   } 
   
   for(i=0;i<myCar.accidents.length;i++)
   {
       myCar.accidents[i].atFaultForAccident = false;
   }
   console.log(myCar);
   for(i=0;i<myCar.accidents.length;i++)
   {
       console.log(myCar.accidents[i].date);
   }
 
 //0 part A

var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
   }
   console.log(cat);
  
   // a	Add height and weight to Fluffy

  cat.height= "18cm";
  cat.weight = "20kgs"
  console.log(cat);


  //c) cat friend activites
  for(i=0;i<cat.catFriends.length;i++){
  console.log(cat.catFriends[i].activities);}
  
 // d)cat friend names
for(i=0;i<cat.catFriends.length;i++){
console.log(cat.catFriends[i].name);}

//e) activites done by all cats
console.log(cat.activities);
for(i=0;i<cat.catFriends.length;i++){
console.log(cat.catFriends[i].activities);}

// f) adding the two activites to two friends
cat.catFriends[0].activities[2] = "sleeping";
cat.catFriends[0].activities[3] = "killing rats";
cat.catFriends[1].activities[2] = "sleeping";
cat.catFriends[1].activities[3] = "killing insects";
console.log(cat)

// g) changing the color of fur
cat.catFriends[0].furcolor = "red";

console.log(cat)

//1) print the values in the array
var obj = {name : "RajiniKanth", age: 33, hasPets : false};

var red = Object.values(obj);
console.log(red)


//2) print the index values

var ed = Object.keys(obj);
console.log(ed)

//3) the values in array

var object = {name: "ISRO", age: 35, role: "Scientist"};
var entries = Object.entries(object);
console.log(entries);

//4) print the guvi as the index and geek as the values for that index value like GUVI as "key" and GEEK as "value"

var array = ["GUVI", "I", "am", "GEEK"];
m = array.length - 1;
let n = {}
let k = array[0];

n[[k]]=array[m];
console.log(n)

//5) to convert the list to the object by the below code

var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
obj = {};
for(i=0;i<array.length;i++){
    c = array[i];
   obj[[c[0]]] = c[1];
}
console.log(obj);


//6 list of lists converts into JSON object
var array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

obj = {};
for(i=0;i<array.length;i++)
{  
     
        c = array[i];
      for(j=0;j<c.length;j++)
      {
          d = c[j];
         obj[[d[0]]] = d[1];
          
      }

 console.log(obj);

}

//7 comparision of two json objects using the stringify
var a = {foo: 5, bar: 6};
var b = {foo: 5, bar: 6};
c = JSON.stringify(a);
d = JSON.stringify(b);

if(c===d)
{console.log("equal")}
else{
    consol.log("not equal")
}

//8  Parsing JSON objects and Compare:I have a mock data of security Questions and Answers.You function should take the object 
//and a pair of strings and should return if the quest is present and if its valid answer
var securityQuestions = [
    {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
   ]
   
   var ques = "What was your first pet’s name?";
   var ans  =  "DufferNutter";
   
   flag = 0; temp = 0;
       for(i=0;i<securityQuestions.length;i++)
       {
   if(securityQuestions[i].question ===ques && securityQuestions[i].expectedAnswer=== ans)
           {
   
               flag = flag +1;
           }else
           {   temp = temp +1;
           }
       }
   if(flag===1||temp === 1)
   {console.log("true")}
   else
   {
       console.log("false")
   }
   
   var ques = "What was your first pet’s name?";
   var ans  =  "FlufferNutter";
   
   flag = 0; temp = 0;
       for(i=0;i<securityQuestions.length;i++)
       {
   if(securityQuestions[i].question ===ques && securityQuestions[i].expectedAnswer=== ans)
           {
   
               flag = flag +1;
           }else
           {   temp = temp +1;
           }
       }
   if(flag===1||temp === 1)
   {console.log("true")}
   else
   {
       console.log("false")
   }
  
   
   //9 Write a function to return the list of characters below 20 age
var students = [
 {
 name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
 {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
 {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
 {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
 {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
 {name: "Devdas",age: 56} 
 ];
 
 for(i=0;i<students.length;i++)
 {
     if(students[i].age<20)
     {
         console.log(students[i]);
     }
 }
