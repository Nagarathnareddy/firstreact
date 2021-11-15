import logo from './logo.svg';
import './App.css';

function App() {

let cricketers = ["Kohli","Raina","Dhoni","Jadeja","yuvaraj","ashwin"]; 
console.log(cricketers)

let footballplayers=["Messi","ronaldo","Neymar","Dawid","Andirapirlo","Ibrahim"];
console.log(footballplayers)
//methods of array//
//concat():it joins two or more arrays//
let indianteam = cricketers.concat(footballplayers);
console.log(indianteam)
//fill():it fills the elements in an array with static value//
indianteam.fill("nagu")
console.log(indianteam)
//join():joins all elements of an array in string//
let family = ["nagu","chinni","chitti","joel"]
console.log(family.join())
//push():add new elements to the end of an array and returns the new length//
indianteam.push("modi")
console.log(indianteam.push())
//pop():removes last element of an array and returns the element//
let students = ["sachin","sai","praveen","joshu"]
console.log(students)
console.log(students.pop())
//reverse():reverses the order of an array//
let icecreams= ["vannila","strawberry","butterscotch","cone","choclate"]
console.log(icecreams.reverse())

//shift():removes the first element of array and returns the element//
let biscuits =["marriegold","gooday","hide&seek","osmania","darkfantasy"]
console.log(biscuits.shift())
//map():if you want to do something to each and every element then we use map//
function addPrefix(name)
{
  return "mr." + name;
}
console.log(addPrefix())
let newArr = students.map(addPrefix)
console.log(newArr)
//filter():creates a new array with every element//
let naguMarks = [80,45,36,78,30,29]
//here we are giving true all marks will show//
function getNaguScore(marks)
{
  return true;
}
let passedMarks = naguMarks.filter(getNaguScore)
console.log(passedMarks)
//here we are giving false it'll show none//
let karthikMarks = [32,43,89,34,67,89]
function getKarthikScore(marks)
{
  return false;
}
let noneValues = karthikMarks.filter(getKarthikScore)
console.log(noneValues)
//here we are giving condition >=35 so it shows only pass marks//
let sanjuMarks = [90,34,89,67,25,80]
function getSanjuScore(marks)
{
  return marks>=35;
}
let passedScore = sanjuMarks.filter(getSanjuScore)
console.log(passedScore)

//here we are giving <=35 so it'll show only fail marks//
let vivekMarks=[28,89,90,56,12,34]
function getVivekScore(marks)
{
  return marks<=35;
}
let failedScore = vivekMarks.filter(getVivekScore)
console.log(failedScore)

//sort():sorts the element of array//
let chicken = ["pakoda","biryani","lollypop","gobi","paneer"]
chicken.sort()
console.log(chicken)
//for sorting alphabets in the order we need to use compare funtion()//
cricketers.sort(function(a, b) {return a-b});

//if you want to display particular element we will use index[]index starts from 0//
//array has important property called length//
console.log(cricketers.length)
console.log(footballplayers.length)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Arrays and its methods
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello! This is React
        </a>
      </header>
    </div>
  );
}

export default App;

