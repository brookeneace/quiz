angular.module("fileList",[]);

var responses = [
  {
	  winename: "Riesling",
	  winedesc: "You like the simple things in life."
  },
  {
	  winename: "Sauvignon blanc",
	  winedesc: "You are interesting."
  },
  {
	  winename: "Pinot Noir",
	  winedesc: "You are well balanced."
  },
  {
	  winename: "Bordeaux",
	  winedesc: "You like the finer things in life."
  }
];

//max # of questions for loop
var max = 5;

//array of chosen input values to be added to calculate score
var aux = new Array();

//loop for each radio group to return values of chosen answer
function getCheckedValue(groupName) {
    var radios = document.getElementsByName(groupName);
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return null;
}

//click handler that pushes returned values to array and adds them for the total 
function answerScore() {
	
    for(var i=1;i<=max;i++) {
        aux[i-1] = getCheckedValue('q'+i);
    }
    console.log(aux);
	
	//add each # in the array
	var sum = 0;
	for(var i = 0; i < aux.length; i++){
	  sum += parseInt(aux[i]);
	}
	
	console.log('Your sum is ' + sum);
	
	//print answer to dom function
	function printAnswer(num){
		document.querySelector('#wineAnswer h2').innerHTML=responses[num]['winename'];
		document.querySelector('#wineAnswer p').innerHTML=responses[num]['winedesc'];
		document.querySelector('form').style.display ='none';
	}
	
	if(sum >= 15){
		console.log('you have 15 or more points');
		console.log(responses[3]);
		printAnswer(3);
		
	} else if(sum >= 10 && sum <= 14){
		console.log('you have 10-15 points');
		console.log(responses[2]);
		printAnswer(2);
		
	} else if(sum >= 6 && sum <= 9){
		console.log('you have 5-10 points');
		console.log(responses[1]);
		printAnswer(1);
			
	} else {
		console.log('you have 5 or less points');
		console.log(responses[0]);
		printAnswer(0);
		
	}
}





