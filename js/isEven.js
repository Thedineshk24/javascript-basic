function isEvenn(no1){
    let ans = no1%2 ===0; //no1 % division by ===0 if TRUE than return EVEN , if FALSE than RETURN ODD
    if(ans === 0){
        return 'even';
    }else{
        return 'odd';
    }
}

var anss = isEvenn(9);
console.log(anss);