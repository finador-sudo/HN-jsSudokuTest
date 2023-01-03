//import {array_number} from "./Javascript_test_je1.js"
var array_number = new Array(9);
array_number[0]= "4 2 7 3 5 1 9 8 6";
array_number[1]= "9 8 3 7 6 2 5 1 4";
array_number[2]= "1 5 6 8 9 4 7 2 3";
array_number[3]= "2 3 9 1 8 5 4 6 7";
array_number[4]= "7 4 1 6 3 9 2 5 8";
array_number[5]= "5 6 8 2 4 7 1 3 9";
array_number[6]= "8 7 2 9 1 3 6 4 5";
array_number[7]= "3 9 5 4 2 6 8 7 1";
array_number[8]= "6 1 4 5 7 8 3 9 2";

var to_verify = [];

export function readTable(){
  console.log("readTable")
    for (let i = 0; i < array_number.length; i++) {
            to_verify.push(array_number[i].split(" "))
        } 
        return to_verify;
}

function displayTable(){
  console.log("displayTable")
    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    x.setAttribute("border", "1");
    document.body.appendChild(x);

    for (let i =0; i<=to_verify.length ;i++ ){
        var y = document.createElement("TR");
        y.setAttribute("id", "myTr"+i);
        document.getElementById("myTable").appendChild(y);
        
        
        for(let j =0 ; j <=to_verify[i].length;j++ ){
          var t = document.createElement("TD");
          if (to_verify[i][j]){
            t.appendChild(document.createTextNode(to_verify[i][j]));
            y.appendChild(t);
            }
          
        }


    }
      
}

export default {readTable}
