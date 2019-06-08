var score = 0;
var resultsText = "";

function testForLength(password){
    if (password.length < 8 || password.length > 24){
        // output message telling use it's not right
        resultsText = resultsText + "Your password is not long enough"
        return 0;
    }else{
        resultsText = resultsText + "Your password is long enough"
        return 5;
    }
}

function testForLowercase(password){
    if (password.toUpperCase() != password){
        resultsText = resultsText + ", and there are lowercase letters."
        return 5;
        // need to outline success
    }else{
        resultsText = resultsText + ", and there are no lowercase letters."
        return 0;
        // need to outline what is not there
    }
}

function testForUppercase(password){
    if (password.toLowerCase() != password){
        resultsText = resultsText + ", there are uppercase letters"
        return 5;
    }else{
        resultsText = resultsText + ", there are no uppercase letters"
        return 0;
    }
}

function showText(){
    score = localStorage.getItem("tempStoreScore");
    resultsText = localStorage.getItem("tempStoreMessage");
    var myText = document.querySelector('h3');
    myText.textContent = 'The Result: ' + score;
    var myTextTwo = document.querySelector('h4');
    myTextTwo.textContent = resultsText;
}

function resetPage(){
    window.location.replace('index.html');
}

// You should start with a test alert.

function testPassword(anyPassword){
    var lengthScore = testForLength(anyPassword);
    var uppercaseScore = testForUppercase(anyPassword);
    var lowercaseScore = testForLowercase(anyPassword);
    var totalScore = lengthScore + uppercaseScore + lowercaseScore;
    score = totalScore;
    localStorage.setItem("tempStoreScore",score)
    localStorage.setItem("tempStoreMessage", resultsText)
    window.location.replace("results.html");
}