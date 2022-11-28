let c= Number(prompt(`Ingrese el consumo`));
let desc, datoDesc;

// Ejecucion
if(c <= 100){
    datoDesc='10%';
    desc = c + 0.10;
} else if (c > 100 && c <= 200){
    datoDesc='20%';
    desc = c * 0.20;
}else if(c>200){
    datoDesc = '30%';
    desc = c * 0.30;
}

let descMont = c - desc;
let ivg = descMont*0.19;
let total = descMont + ivg;

document.write(`<pre>
    Consumio:         ${c}
    Se le Descuenta:  ${desc}               |${datoDesc}
    El monto es de:   ${descMont}%      
    ivg:              ${ivg}%            |19%
    En total son:     ${total}
</pre>`);