function palindrome(str) {
    var newstr = str.replace(/[\W_]/g,"").toLowerCase();
     var pal = newstr.split('').reverse().join('');
     if (pal === newstr){
       return true;
     } else {
       return false;
     }
   }
   