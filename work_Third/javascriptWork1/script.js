function convert(){
    let num1=0;
    num1 = document.getElementById('inp01');
    switch(num1)
    {
        case 1: return "UNO";
        case 2: return "DOS";
        case 3: return "TRES";
        case 4: return "CUATRO";
        case 5: return "CINCO";
        case 6: return "SEIS";
        case 7: return "SIETE";
        case 8: return "OCHO";
        case 9: return "NUEVE";
        case 10: return "DIEZ";
    }
    return "";
}