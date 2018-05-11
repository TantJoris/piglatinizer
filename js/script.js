// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {
    $('#submit').click(function() {
        $("#pigIt").html(" ");
        var sentence = $('#input').val();
        var transformedSentence = sentenceToPigLatin(sentence);
        console.log(transformedSentence);
        $('#pigIt').append(transformedSentence);
    });
});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 

function wordToPigLatin(word) {
    if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" ||
        word[0] === "u") {
        //it is a vowel
        return word + "ay";
    }
    else {
        //it is a consonant
        var length = word.length;
        var firstLetter = word.slice(0, 1);
        var rest = word.slice(1, length);
        var newTransformation = rest + firstLetter + "ay";
        return newTransformation;
        // word = word.substring(0, 1);
        // word = word + firstLetter + "ay";
    }

}

function sentenceToPigLatin(sentence) {
    var arrayOfWords = sentence.split(" ");
    for (var i = 0; i < arrayOfWords.length; i++) {
        var word = arrayOfWords[i];
        var transformedWord = wordToPigLatin(word);
        arrayOfWords[i] = transformedWord;
    }
    return arrayOfWords;
}
