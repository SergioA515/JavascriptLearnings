let n1, n2, c, r;
let opr;
n1 = Number(document.getElementById('income01'));
n2 = Number(document.getElementById('income02'));
opr=document.querySelector('operate');

opr.addEventListener("click", function operateNums(c,r) {
    (n1/n2)=c;
    (n1%n2)=r;
    printText();
    function printText(){
        document.getElementById('outCos').value=c;
        document.getElementById('outRes').value=r;
    }
});
let n=5;
for(let i=0; i <= 10; i++){
    console.log(`${n} x ${i} = ${n*i}`);
}
let listOne = ['Sergio','Alejandro','Parra','Toro'];
// For In es para recoger los indices del array
for(let dato in listOne){
    console.log(dato);
}
// For Of es para recoger los elementos del array
for(let dato of listOne){
    console.log(dato);
}
// Bucle While
let i=0;
while(i< listOne.length){
    console.log(listOne[i]);
    i++;
}
// Bucle Do-While se ejecuta al menos una vez
do{
    console.log(listOne[i]);
    i++;
}while(i< listOne.length); 



