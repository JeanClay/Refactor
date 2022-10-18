function returnRandomNumber() {
  return Math.random() * 100;
}

function sumRandomNumber(num) {
  return `Seu número é ${Math.round(returnRandomNumber()) + num}!`;
}

function subtractRandomNumber(num) {
  return `Seu número é ${Math.round(returnRandomNumber()) - num}!`;
}

function multiplyRandomNumber(num) {
  return `Seu número é ${Math.round(returnRandomNumber()) * num}!`;
}

function divideRandomNumber(num) {
  if(num !== 0){
    return `Seu número é ${Math.round(returnRandomNumber()) / num}!`;
  }else{
    return 'Nao e possivel dividir por Zero!';
  }
}
