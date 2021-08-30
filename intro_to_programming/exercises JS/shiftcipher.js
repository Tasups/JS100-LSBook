
class ShiftCipher {
  constructor (shift) {
    this.shift = shift;
  }
  encrypt(plainShift) {
    let encryptString = '';
    const tempString = plainShift.toUppercase();
  }
  for (let i = 0; i < tempString.length; i++) {
    let charNum = tempString.charCode(i);
    
    
  }
} 


/*encrypt method takes a string and transforms it into a capitalized string and then shifts the alphachars the value of
'shift'
decrypt method does the opposite = it will go back to lowercase and it will shift the encrypted message back the value of
'shift'
*/