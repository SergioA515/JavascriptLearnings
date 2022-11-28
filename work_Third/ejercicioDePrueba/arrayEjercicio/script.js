let par = [];
let imp = [];
let num = [];
let randNum
for (let n of num){
    randNum = parseInt(Math.random()*100);
    let res = n * randNum;

    if (res % 2 == 0){
        console.log(`${n} x ${randNum} = ${res}`);
        par.push(res);
    }else{
        console.log(`${n} x ${randNum} = ${res}`);
        imp.push(res);
    }
}
console.log('Array de pares: ', par);
console.log('Array de impares: ', imp);