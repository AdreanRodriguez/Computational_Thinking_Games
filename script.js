/* 
STEGEN

Ett tärningspel där användaren ska kasta 1st tärning. 
Vid första kastet ska målet vara 1. Om 1 ej fås, ska man 
försöka igen. Hur många kast tar det för att komma upp i en 
stege, 1,2,3,4,5,6? 


anropa funktionen play();

function play()
    SET variabel goal till 1;
    SET variabel nmbrOfThrows till 0;

    while goal är mindre än 7
        SET variabel throw till returen från throwDice();
        öka på nmbrOfThrows med 1;
        if throw är lika med goal
            öka på goal med 1;
        end if
    end while
    PRINT "Grattis du klarade stegen på " + nmbrOfThrows + " kast!";
end function

function throwDice()
    SET variabel dice till slumpat tal (1-6);
    RETURN dice;
end function
*/



/*
let goal = 1;
let nmbrOfThrows = 0;

while(goal < 7) {
    let dice = Math.floor(Math.random() * 6 + 1);
    console.log('Du kastade ' + dice);
    nmbrOfThrows++;
    if(dice === goal) {
        goal++;
        console.log('Snyggt! du kastade rätt!');
    }
}

console.log('Grattis du vann på ' + nmbrOfThrows + ' antal kast!');
*/





/*
KNOCK OUT

Spelet har 2st tärningar.
Du som spelare väljer ett “knock out number” – antingen 6, 7, 8, eller 9.
Du som spelare väljer också vilken poäng som skall uppnås för att spelet skall avslutas.
Spelaren kastar båda tärningarna. Anteckna varje kasts resultat.
Om spelaren kastar något utav "knock out numbers" ges minuspoäng
*/

/*
let score = 0;
let knockOutNmbr = 0;
let goal = 0;
let isInputApproved = false;

while(!isInputApproved) {
    knockOutNmbr = parseInt(window.prompt('Ange ett tal (6-9)'));
    if(knockOutNmbr < 6 || knockOutNmbr > 9) {
        window.alert('Du måste ange ett tal mellan 6 - 9');
    } else {
        goal = window.prompt('Ange ett mål!! (Större än 0)');
        if(goal <= 0) {
            window.alert('Du måste ange ett mål som är större än 0');
        } else {
            isInputApproved = true;
        }
    }
}

while(score < goal) {
    let diceOne = Math.floor(Math.random() * 11 + 2);
    let diceTwo = Math.floor(Math.random() * 6 + 1);
    let sum = diceOne + diceTwo;
    console.log('Du kastade ' + diceOne + ' och ' + diceTwo + '. Summan var ' + sum);

    if(sum === knockOutNmbr) {
        score -= 3;
        //score = score - 3;
    } else {
        score += sum;
        //score = score + sum;
    }
    console.log('Din totala poäng är nu ' + score + '/' + goal);
}
/*





/* GOING TO BOSTON 

Spelet har 3st tärningar.

Kasta tärningarna och spara tärningen med högsta värdet.
Kasta de kvarvarande 2 och spara tärningen med högsta värdet.
Kasta sista tärningen och summera samtliga tre tärningar.
Spelaren med högst summerat värde vinner. Max poäng är 18.

*/

/*
play();

function play()
    SET variabel diceOne = slumpat tal (1-6);
    SET variabel diceTwo = slumpat tal (1-6);
    SET variabel diceThree = slumpat tal (1-6);
    SET variabel score = 0;

    IF( diceOne > diceTwo OCH diceOne > diceThree )
        score = diceOne;
    END IF
    ELSE IF( diceTwo > diceOne OCH diceTwo > diceThree )
        score = diceTwo;
    END IF
    ELSE
        score = diceThree;
    END ELSE
    
    variabel diceOne = slumpat tal (1-6);
    variabel diceTwo = slumpat tal (1-6);

    IF( diceOne > diceTwo )
        score += diceOne;
    END IF
    ELSE
        score += diceTwo;
    END ELSE
    
    variabel diceOne = slumpat tal (1-6);
    score = score + diceOne; // ELLER score += diceOne;

    PRINT "Dina tärningar visade totalt { score } poäng";
end function
*/

/*
play()

function play() {
    let diceOne = Math.floor(Math.random() * 6 + 1);
    let diceTwo = Math.floor(Math.random() * 6 + 1);
    let diceThree = Math.floor(Math.random() * 6 + 1);
    let score = 0;

    if (diceOne > diceTwo && diceOne > diceThree) {
        score = diceOne;
    } else if (diceTwo > diceOne && diceTwo > diceThree) {
        score = diceTwo;
    } else {
        score = diceThree;
    }

    diceOne = Math.floor (Math.random() * 6 + 1);
    diceTwo = Math.floor (Math.random() * 6 + 1);

    if (diceOne > diceTwo) {
        score += diceOne;
    } else {
        score += diceTwo;
    }

    diceOne = Math.floor (Math.random() * 6 + 1);{
        score += diceOne   
    }
    
    console.log(`Dina tärningar visade totalt ${score} poäng`)
}
*/





/* STEN, SAX, PÅSE 

Pseudokod för det klassiska spelet sten, sax och påse. 
Först till 3 vinster vinner!
*/

/*
SET playerOneScore = 0;
SET playerTwoScore = 0;

while( playerOneScore < 3 || playerTwoScore < 3 )
    SET playerOneChoice = input från användaren (sten, sax eller påse);
    SET playerTwoChoice = slumpat tal (1-3, där 1 = sten, 2 = sax, 3 = påse);

    IF( playerOneChoice === playerTwoChoice )
        PRINT "Det blev lika";
    ELSE IF( playerOneChoice === "sten" && playerTwoChoice === "sax" )
        playerOneScore++;
        PRINT "Spelare 1 vann!";
    ELSE IF( playerOneChoice === "sax" && playerTwoChoice === "påse" )
        playerOneScore++;
        PRINT "Spelare 1 vann!";
    ELSE IF( playerOneChoice === "påse" && playerTwoChoice === "sten" )
        playerOneScore++;
        PRINT "Spelare 1 vann!";
    ELSE
        playerTwoScore++;
        PRINT "Spelare 2 vann!";

IF( playerOneScore === 3 )
    PRINT "Spelare 1 vann matchen!";
ELSE
    PRINT "Spelare 2 vann matchen!";
*/







/* FIZZBUZZ 

Loopa igenom hundra nummer och om:

Numret är dividerbart med 3, skriv ut "Fizz"
Numret är dividerbart med 5, skriv ut "Buzz"
Numret är dividerbart med 3 och 5, skriv ut "FizzBuzz"
*/

/*
FOR (loopa igenom talen 1-100)
    IF( talet är jämnt delbart med 3 OCH talet är jämnt delbart med 5 ) // talet % 3 === 0 && talet % 5 === 0
        PRINT "FizzBuzz";
    ELSE IF( talet är jämnt delbart med 3 ) // talet % 3 === 0
        PRINT "Fizz";
    ELSE IF( talet är jämnt delbart med 5 ) // talet % 5 === 0
        PRINT "Buzz";
*/





/* HÖGT ELLER LÅGT

Fråga användaren efter ett tal mellan 1 och 100. 
Programmet ska ha ett hemligt tal sparat. 
Det ska fortsätta fråga användaren till dess att användaren gissar det hemliga talet. 
Om man gissade för högt eller för lågt så ska det skrivas ut, så att användaren har en rimlig chans att klara det.
*/

/*
play();
function play()
    SET variabel secretNmbr till slumpat tal (1-100);
    SET variabel guess till 0;
    SET nmbrOfGuesses till 0;

    WHILE( guess är inte lika med secretNmbr )
        SET variabel guess till input från användaren;
        WHILE(controlInput(guess) är false)
            SET variabel guess till input från användaren;

        IF( guess är mindre än secretNmbr )
            PRINT "För lågt!";
        ELSE IF( guess är större än secretNmbr )
            PRINT "För högt!";
        ELSE
            PRINT "Rätt!";
        END IF
        Öka på nmbrOfGuesses med 1;

    PRINT "Du klarade det på { nmbrOfGuesses } försök!";

function controlInput(input)
    IF(input är ett tal OCH input är mellan 1-100)
        RETURN true;
    ELSE
        RETURN false;
*/





/* Söka efter likheter mellan ord 

Fråga användaren efter två ord, och kontrollera därefter hur många bokstäver som förekommer på samma plats i båda orden.
*/

/*
input();

function input()
    SET variabel wordOne till input från användaren;
    SET variabel wordTwo till input från användaren;
    SET variabel likheter till 0;
    SET variable loop till true;

    while(loop)
        if(wordOne och wordTwo innehåller lika många bokstäver)
            likheter = checkSimilarities(wordOne, wordTwo);
            loop = false;
        end if
        else
            PRINT "Båda orden måste innehålla lika många bokstäver!";
            AVBRYT PROGRAMMET;
        end else
    end while

    PRINT "Orden innehåller { likheter } likheter";
end function

function checkSimilarities(hund, katt) // notera att namnen hund och katt bara är ett sätt att visa att vi kan döpa våra variabler till vad vi vill. De innehåller fortfarande samma värden som wordOne och wordTwo
    SET variabel similarities = 0;

    for(varje bokstavsindex i variabeln hund)
        if(hund[index] === katt[index])
            similarities++;
        end if
    end for

    returnera similarities;
end function
/*






/* TODO app 

Skriv pseudokod för en enkel todo app där användaren kan:

Se sina todos i en lista
Lägga till en ny todo
Ta bort en todo
*/

/*
SET varaibeln todos = [..., ..., ...];

Funktion visaTodos():
    skriv("Dina Todos:");
    för varje todo i todos:
        skriv("- " + todo);

Funktion lagg_till_todo():
    skriv("Lägg till en ny todo:");
    nyTodo = läs in användarinput;
    todos.lägg_till(nyTodo);
    skriv("Todo tillagd!");

Funktion taBortTodo():
    visaTodos();
    skriv("Vilken todo vill du ta bort? Ange index:");
    indexAttTaBort = läs in användarinput;

    om indexAttTaBort >= 0 och indexAttTaBort < längd(todos):
        borttagenTodo = todos.taBort(indexAttTaBort);
        skriv("Todo borttagen:", borttagenTodo);
    annars:
        skriv("Ogiltigt index. Försök igen.");

Funktion huvudprogram():
    medan val !== 4:
        skriv("Välkommen till ToDo-appen!");
        skriv("1. Visa Todos");
        skriv("2. Lägg till Todo");
        skriv("3. Ta bort Todo");
        skriv("4. Avsluta");

        val = läs in användarinput;

        om val == "1":
            visa_todos()
        annars om val == "2":
            laggTillTodo();
        annars om val == "3":
            taBortTodo();
        annars om val == "4":
            skriv("Hejdå!");
            bryt;
        annars:
            skriv("Ogiltigt val. Försök igen.");

*/


