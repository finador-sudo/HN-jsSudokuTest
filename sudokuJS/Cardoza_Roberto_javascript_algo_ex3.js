import readTable from "./Cardoza_Roberto_javascript_algo_ex1.js"
import {checkUniques} from "./Cardoza_Roberto_javascript_algo_ex2.js"

var sudoku9by9 = readTable();

function checkLines9by9(tableId){
    for (let i=0; i < to_verify.length;i++ ){
        if (checkUniques(to_verify[i])){
            //Line is okay
        }else{
            //Line has duplicates
          var y = document.createElement("TR");
          y.setAttribute("id", "myTr"+i);
          document.getElementById(tableId).appendChild(y);
          var t = document.createElement("TD");
          if (to_verify[i][j]){
            t.appendChild(document.createTextNode(`Line ${i+1} incorrect `+ to_verify[i].toString()));
            y.appendChild(t);
          }
          //we stop looking for more duplicated lines
          break;
        }
    }
}

function checkComulms9by9(tableId){
    //Same logic as before, but we will first rotate our array
    rotatedArray = []
    for (let k=0;k<to_verify.length;k++){
        for (let l=0;k<to_verify.length;l++){
            rotatedArray[k][l]=to_verify[l,k];
        }
    }
    //We use the new array in our method
    for (let i=0; i < rotatedArray.length;i++ ){
        if (checkUniques(rotatedArray[i])){
            //column is okay
        }else{
            //column has duplicates
          var y = document.createElement("TR");
          y.setAttribute("id", "myTr"+i);
          document.getElementById(tableId).appendChild(y);
          var t = document.createElement("TD");
          if (rotatedArray[i][j]){
            t.appendChild(document.createTextNode(`Column ${i} incorrect `+rotatedArray[i].toString()));
            y.appendChild(t);
          }
          //we stop looking for more duplicated lines
          break;
        }
    }
}

function checkSegments(tableId){
    //Same logic as before, but we will first create segments
    segmentedArray = []
    for (let k=0;k<to_verify.length;k++){
        for (let l = 0; l < 3;k++){
            for (let m = 0; m < 3; m++){
                segmentedArray[l][m]=to_verify[m][l]
            }
        }
    }
    //We use the new array in our method
    for (let i=0; i < rotatedArray.length;i++ ){
        if (checkUniques(rotatedArray[i])){
            //column is okay
        }else{
            //column has duplicates
          var y = document.createElement("TR");
          y.setAttribute("id", "myTr"+i);
          document.getElementById(tableId).appendChild(y);
          var t = document.createElement("TD");
          if (rotatedArray[i][j]){
            t.appendChild(document.createTextNode(`Region ${i} incorrect`+rotatedArray[i].toString()));
            y.appendChild(t);
          }
          //we stop looking for more duplicated lines
          break;
        }
    }
}