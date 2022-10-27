const avista = document.getElementById('avista').value;
const parcela = document.getElementById('parcela').value;



const juros1 = avista*0.024;
const juros2 = avista*0.026;

const x1 = juros1*0.0143;
const x2 = juros1*0.0286;
const x3 = juros1*0.0429;
const x4 = juros1*0.0572;
const x5 = juros1*0.0715;
const x6 = juros1*0.0858;

const x7 = juros2*0.1001;
const x8 = juros2*0.1144;
const x9 = juros2*0.1287;
const x10 = juros2*0.143;
const x11 = juros2*0.1573;
const x12 = juros2*0.1716;
const x13 = juros2*0.1859;
const x14 = juros2*0.2002;
const x15 = juros2*0.2145;
const x16 = juros2*0.2288;
const x17 = juros2*0.2431;
const x18 = juros2*0.2574;


function calcular() { 

let cobrar = document.getElementById('cobrar').value; 

switch(cobrar) {

  case 1:
    cobrar = avista + x1;
    break;
  case 2:
    cobrar = avista + x2;
    break;    
  case 3:
    cobrar = avista + x3;
    break;
  case 4:
    cobrar = avista + x4;
    break;
  case 5:
    cobrar = avista + x5;
    break;
  case 6:
    cobrar = avista + x6;
    break;
  case 7:
    cobrar = avista + x7;
    break;
  case 8:
    cobrar = avista + x8;
    break;
  case 9:
    cobrar = avista + x9;
    break;
  case 10:
    cobrar = avista + x10;
    break;
  case 11:
    cobrar = avista + x11;
    break;
  case 12:
    cobrar = avista + x12;
    break;
  case 13:
    cobrar = avista + x13;
    break;
  case 14:
    cobrar = avista + x14;
    break;
  case 15:
    cobrar = avista + x15;
    break;
  case 16:
    cobrar = avista + x16;
    break;
  case 17:
    cobrar = avista + x17;
    break;
  case 18:
    cobrar = avista + x18;
    break;
}

 document.getElementByID('cobrar').value = cobrar;
return cobrar; 
}

calcular(cobrar)
