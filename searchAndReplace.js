function myReplace(str, before, after) {
    let index = str.indexOf(before);

   if(str[index] === str[index].toUpperCase()) {
    
    return str.replace(before, after.replace(after[0],after[0].toUpperCase()));
    
    } else  {
       return str.replace(before, after);
    }
  }