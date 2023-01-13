function translatePigLatin(str) {
    let subStr = /[aeiou]/gi; 
    let pigLatin = '';
    if (str[0].match(subStr)) {
    return str + 'way' ;
    } else if (str.match(subStr) === null) {
      return str + "ay";
    } else {
      let vowelIndex = str.indexOf(str.match(subStr)[0]);
      pigLatin = str.substring(vowelIndex) + str.substring(0, vowelIndex) + 'ay';
      console.log(pigLatin)
    }
    return pigLatin;
  }
  