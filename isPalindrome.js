function isPalindrome(str){
    str = str.toLowerCase();
    var charArr = str.split(''),
        validCharArr = 'abcdefghijklmnopqrstuvwxyz'.split(''),
        lettersArr = [];
  
    charArr.forEach(char => {
      if (validCharArr.indexOf(char) > -1){
        lettersArr.push(char);
      }
    });
      
    return lettersArr.join('') === lettersArr.reverse().join('');
  }
  
  var input = "Madam I'm Adam";
  console.log(isPalindrome(input));