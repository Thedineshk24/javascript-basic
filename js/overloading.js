function add(n1,n1){
    return n1+n2;
}

function add(n1,n2,n3){
    return n1+n2+n3;
}


console.log(add(10,10)); // NaN because 1+1+undefined 
console.log(add(10,10,10)); // 30
console.log(add(1+2+undefined));// 1+2+undefined == NaN