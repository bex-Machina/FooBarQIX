let compute = str =>{
    let outString = ""
    let num = Number(str);
    let rules = {3:"Foo",5:"Bar",7:"Qix"}; 

    //check if it divisable 
    for (const property in rules) {
        if(num % Number(property) === 0){
            outString += rules[property]
        }
    }
    //check if contains or 0
    for(let i = 0; i< str.length; i++){
        if(Number(str[i]) === 0){
            outString += "0"
        }
        for (const property in rules) {
            if(Number(str[i]) === Number(property)){
                outString += rules[property]
            }
        }
    }
    //check if both empty
    
    let regex = /0/g;
    if(outString.replace(regex,"") === ""){
        return str.replace(regex,"*");
    }else{
        return outString.replace(regex, "*");
    } 
}

let print = str =>{
    document.getElementById('query-output').innerText = compute(str)
}



