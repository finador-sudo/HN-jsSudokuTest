function checkUniques(a){
    var flag=false;
    for (let i = 0; i < a.length; i++) { 
        for (let j = 0; j < a.length; j++) {
            if (i !== j) {
                if (a[i] === a[j]) {                              
                    flag = true;
                    break;
                }
            }
        }                                                                  
        if (flag) {
            break;
        }
    }
    return !flag;
}


