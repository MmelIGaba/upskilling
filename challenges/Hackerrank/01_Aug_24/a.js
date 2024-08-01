
var countSeniors = function(details) {
    let res = 0;
    for(let i of details){
        if(Number(i.substring(11, 13) > 60)){
            res++;
        }
    }
    // console.log(res)
    return res;
};

const details = ["7868190130M7522","5303914400F9211","9273338290F4010"];
countSeniors(details)