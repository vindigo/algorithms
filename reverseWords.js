function reverseWords(str){
    var wordsArr = str.split(" "),
        resultArr = [];

    aordsArr.forEach(word => {
        var reversedWord = "";

        for (var i = word.length - 1; i >= 0; i--){
            reversedWord += word[i];
        }

        resultArr.push(reversedWord);
    });

    return resultArr.join(" ");
}