var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    this.getFullName = function() {
      return fullName;
    };
    this.getFirstName = function() {
     
      return fullName.split(' ')[0];
    }
    this.getLastName = function() {
      
      return fullName.split(' ')[1];
    }
    this.setFirstName = function(first) {
      console.log(fullName);
      fullName = first + " " + fullName.split(' ')[1];
      console.log(fullName);
    }
    this.setLastName = function(second) {
       fullName = fullName.split(' ')[0] + " " + second;
    }
    this.setFullName = function(name) {
       fullName = name;
    }
    
  };
  
  var bob = new Person('Bob Ross');