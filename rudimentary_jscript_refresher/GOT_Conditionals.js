var userName = ''; 
userName ? console.log('Hello Jon') : console.log('Hello No One'); 
const userQuestion = 'Who will win the Iron Throne?'; 
console.log(`${userQuestion}`);
const theRuler = Math.floor(Math.random() * 8); 

let theWinner = ''; 

swtich (theRuler) {
  case 0:
  theWinner = 'Jon'; 
  break;   
  
  case 1:
  theWinner = 'Danny'; 
  break; 
  
  case 2:
  theWinner = 'Sansa'; 
  break; 
  
  case 3:
  theWinner = 'Cersei'; 
  break; 
  
  case 4:
  theWinner = 'Yara'; 
  break; 
  
  case 5:
  theWinner = 'Euron'; 
  break; 
  
  case 6:
  theWinner = 'Jorah'; 
  break; 
  
  case 7:
  theWinner = 'Sam'; 
  break; 
}

console.log(theRuler);
