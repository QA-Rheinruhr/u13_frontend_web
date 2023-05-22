function generatePassword(){
    let capitalLetter = false;
    let smallLetter = false;
    let cipher = false;
    let special = false;
    let min = 33;
    let max = 127
    let password = ''
    while (password.length < 9){
      x = Math.floor(Math.random() * (max - min) + min)

      
      if(x>32 && x<49 || x>57 && x<65 || x>90 && x<127 && special==false){
        // special
        special = true;
        password = password + String.fromCharCode(x)
      }
      else if(x>47 && x<58 && cipher ==false){
        // cipher
        cipher = true;
        password = password + String.fromCharCode(x)
      }
      else if (x>96 && x<127 && smallLetter ==false){
        // smallLetter
        smallLetter = true;
        password = password + String.fromCharCode(x)
      }
      else if (x>64 && x<91 && capitalLetter ==false){
        // capitalLetter
        capitalLetter = true;
        password = password + String.fromCharCode(x)
      }
      else if(x>32 && x<127 && special==true && cipher==true && smallLetter==true && capitalLetter==true){
        // Habe schon von jeder Art ein Zeichen, deshalb ist es jetzt egal was generiert wird
        password = password + String.fromCharCode(x)
      }
    }
  document.getElementById('output').innerHTML = password
  return true
  }