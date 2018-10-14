//Use While loop to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height. So if we call your function with triangleStars(4), we should see:
const triangleStars = function(num){
	let q = (num*2)-1;
	let w = 0;
	while( q>0){
	//	debugger;
		let a = q;	
		let line ="";
		let b = w;
		while (b>0){
				line = line + ' ';
				b = b-1;
			}
		while (a>0){
				line = line+ '*';
				a = a-1;
			}
		q -=2;
		w = w+1;
		console.log(line);
	}
};
triangleStars(8);

//Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays.
// will return [1, 2, 3, 4, 5, 6]
const allarr = function(arr){
	const singleArr =[];
	let index = 0;
	while (index<arr.length){
		let i = 0;
		while (i<arr[index].length){
			singleArr[singleArr.length] = arr[index][i];
			i =i+1;
		}
		index +=1;
	}
	return singleArr;
};
console.log(allarr([[1,2,3],[4,5,6]]));



//Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true. It returns the smallest number in the given array if the second argument is false.
//Example: findMinMax([4, 2, 66, -44, 8], true); // should return 66
//Example: findMinMax([4, 2, 66, -44, 8], false); // should return -44

const findMinMax = function(arr, boolean){
	let m = arr[0];
	let i = 1;
	while(i < arr.length){
		if(boolean === true){
			if(m < arr[i]){
				m = arr[i];
			}
		}else if(boolean === false){
			if(m > arr[i]){
				m = arr[i];
			}
		}else{
			console.log("Wrong Input!!!");
		}
		i++;
	}
	return m;
};

console.log(findMinMax([120,4,5],false));

//Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given array.
//Example: forEach([4, 3, 2], function(val) {console.log(val);}); // doing this should result in this in the console:432(10 points)
const forEach = function(arr, fnc) {
	let i = 0;
	while(i<arr.length){
		fnc(arr[i]);
		i = i+1;
	}
};
forEach([4, 3, 2], function(val) {console.log(val);});
		





//6. Create a function 'sum' that takes an array of numbers and returns their sum.Example: sum([4, 3, 2]); // should return 9
const sum = function(arr){
	let index = 0;
	let ss = 0;
	while (index<arr.length){
		ss = ss + arr[index];
		index = index+1;
	}
	return ss;
};
console.log(sum([6,1,1]));
//7. Write a function 'reverse' that reverses the given string.Example: reverse('abcd') should return 'dcba'.Some things to know about strings:.length will give you the length of the string. Example: 'abc'.length returns 3You can access any character of a string using brackets: 'abcde'[2] returns 'c'.Note that indexes begin with 0. So 'abcde'[0] will return 'a'
//Hint:const str = 'abcd';reverse(str) is the same thing as:str[3] + str[2] + str[1] + str[0]; // which will result in 'dcba'(10 points)
 const reverse = function(str){
 	let index = str.length-1;
 	let newStr ="";
 	while (index>=0){
 		newStr = newStr + str[index];
 		index = index-1;
 	}
 	return newStr;
 };
console.log(reverse("hello"));

//8. Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen. Example: checkerboard(5)
//* * * * *
//* * * * *
//* * * * *
//* * * * *
//* * * * *

const checkerboard = function(n){
	let i =0;
	while(i<n){
		let line ="";
		let j =0;
		while(j<n){
			if(i%2===0){
				line = line + '* ';
				j = j+1;
			}else {
				line = line+' *';
				j = j+1;
			}
		}
		console.log(line);
		i++;
	}

 };
checkerboard(8);





