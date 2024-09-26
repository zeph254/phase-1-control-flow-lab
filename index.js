function scuberGreetingForFeet(feet){
  if (feet<=400){
    return "This one is on me!";
  }
else if (feet>=400 && feet<=2000){
  return "That will be twenty bucks.";
}
else if (feet>=2000 && feet<=2500) {
  return "I will gladly take your thirty bucks.";
}
else (feet>2500) ;{
  return "No can do.";
}
}

function ternaryCheckCity(NYC){
  if (NYC>1) {
    return "Ok,sounds good."
  }
  else(NYC<1)
{ return "No go."}
}

function switchOnCharmFromTip(Tip){
  if (Tip>=2) {
   return 'Thank you so much.' 
  }
  else if (Tip=1){
    return 'Thank you.'
  }
  else(Tip=>0);{
    return 'Bye.'
  }
}