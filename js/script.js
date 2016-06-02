(function() {
    var input = {
        "youAreFirstInput" : [
            "Mr.",
            "Easy to please",
            "Magnificent",
            "AIDS",
            "Bizarro",
            "Basement",
            "Penis",
            "Boss",
            "Silent",
            "Master",
            "Mecha",
            "Super",
            "Not",
            "Stinky",
            "Ultra",
            "Chibi",
            "Captain",
            "Good Old",
            "Eternal",
            "Dark",
            "Chief",
            "Commander",
            "Waffen-SS",
            "Ruthless",
            "Faggy",
            "Jesus",
            "Mega",
            "Lazy",
            "Silent",
            "Father",
            "Tiny",
            "Stoned",
            "Hitlers",
            "Psycho",
            "Emperor",
            "Long John",
            "Mammoth",
            "Nigger",
            "Inferno",
            "Blast",
            "W. T.",
            "Magnus",
            "Pussy",
            "Omega",
            "Fat",
            "Feminist",
            "Booze",
            "Samuel L."
        ],
        "youAreSecondInput" : [
            "Mc Donald",
            "Jim",
            "Savior",
            "Mc Muffy",
            "Penis",
            "Assassin",
            "Woman",
            "Kun",
            "Saurus",
            "Niffer",
            "Anon",
            "Jew",
            "Simon",
            "Jesus",
            "Christ",
            "Sam",
            "Prime",
            "Mom",
            "Bro",
            "Maximus",
            "Advocate",
            "Killer",
            "X",
            "Boy",
            "Snacks",
            "Virgin",
            "Man",
            "Chan"
        ],
        "theFirstInput" : [
            "Brooding",
            "Raging",
            "One who'll steal the",
            "Humungous",
            "Massive",
            "Brutal",
            "Fabled",
            "Heroic",
            "Very angry",
            "Perfect",
            "Unstoppable",
            "Marked",
            "Savior",
            "Hope of the",
            "Bringer of the",
            "Tragic",
            "Ruthless",
            "Silent",
            "Last",
            "Plaged",
            "Feared",
            "Cold-blooded",
            "Fabled",
            "Evil, evil",
            "Bloodthirsty",
            "Ronery",
            "First",
            "Immortal",
            "Desperate",
            "Chosen",
            "Right",
            "Legendary",
            "One and only",
            "Impeccable",
            "Kawaii"
        ],
        "theSecondInput" : [
            "Anon",
            "Otaku",
            "Superhero",
            "Superrobot",
            "Christian",
            "Overlord",
            "Tripfag",
            "Anon",
            "Manchild",
            "Behemoth",
            "King",
            "Meme",
            "McMuffy",
            "Pedo",
            "Wizard",
            "Camwhore",
            "Mastertroll",
            "NEET",
            "Ruler",
            "Assassin",
            "Driller",
            "One",
            "Killer",
            "Basement Dweller"
        ],
        "destinedToFirstInput" : [
            "Re-educate",
            "Discover",
            "Murder",
            "Annihilate all",
            "Rule all",
            "Eat all",
            "End all",
            "Study all",
            "Turn lead into",
            "Steal",
            "Slaughter all the",
            "Drill",
            "Wrestle with",
            "Sell",
            "Do nothing about",
            "Re-invent",
            "Subdue all",
            "Challenge all",
            "Invade",
            "Slay",
            "Lead all",
            "Liberate all",
            "Die eating",
            "Snack on",
            "Battle with",
            "Defeat",
            "Break"
        ],
        "destinedToSecondInput" : [
            "Cakes",
            "Poland",
            "Mankind",
            "The Trolls",
            "The Whitehouse",
            "The Heavens",
            "AIDS",
            "Jews",
            "Original content",
            "Two bears at once",
            "Your little Sis",
            "STDs",
            "God",
            "The Skies",
            "Feminism",
            "Your mother",
            "Children",
            "The Internet",
            "The Goverment",
            "Yourself",
            "Nothing",
            "Hoods",
            "His waifu",
            "Furries",
            "Tibet",
            "Europe",
            "4chan",
            "Pokemon",
            "And pillage everything",
            "The memes"
        ]
    };

    // You are: First input
    var youAreFirst = function(i) {
        document.getElementById('you-are-first').innerHTML = input.youAreFirstInput[i];

        if(i < input.youAreFirstInput.length) {
            youAreFirstTimer = setTimeout(function() {
                youAreFirst(i + 1);
            }, 50);
        }
        else {
            youAreFirst(0);
        }
    }

    youAreFirst(0);

    document.getElementById('you-are-first').addEventListener('click', function(e) {
        clearTimeout(youAreFirstTimer);

        e.preventDefault();
    });

    // You are: Second Input
    var youAreSecond = function(i) {
        document.getElementById('you-are-second').innerHTML = input.youAreSecondInput[i];

        if(i < input.youAreSecondInput.length) {
            youAreSecondTimer = setTimeout(function() {
                youAreSecond(i + 1);
            }, 50);
        }
        else {
            youAreSecond(0);
        }
    }

    youAreSecond(0);

    document.getElementById('you-are-second').addEventListener('click', function(e) {
        clearTimeout(youAreSecondTimer);

        e.preventDefault();
    });

    // The: First input
    var theFirst = function(i) {
        document.getElementById('the-first').innerHTML = input.theFirstInput[i];

        if(i < input.theFirstInput.length) {
            theFirstTimer = setTimeout(function() {
                theFirst(i + 1);
            }, 50);
        }
        else {
            theFirst(0);
        }
    }

    theFirst(0);

    document.getElementById('the-first').addEventListener('click', function(e) {
        clearTimeout(theFirstTimer);

        e.preventDefault();
    });

    // The: Second input
    var theSecond = function(i) {
        document.getElementById('the-second').innerHTML = input.theSecondInput[i];

        if(i < input.theSecondInput.length) {
            theSecondTimer = setTimeout(function() {
                theSecond(i + 1);
            }, 50);
        }
        else {
            theSecond(0);
        }
    }

    theSecond(0);

    document.getElementById('the-second').addEventListener('click', function(e) {
        clearTimeout(theSecondTimer);

        e.preventDefault();
    });

    // Destined To: First input
    var destinedToFirst = function(i) {
        document.getElementById('destined-to-first').innerHTML = input.destinedToFirstInput[i];

        if(i < input.destinedToFirstInput.length) {
            destinedToFirstTimer = setTimeout(function() {
                destinedToFirst(i + 1);
            }, 50);
        }
        else {
            destinedToFirst(0);
        }
    }

    destinedToFirst(0);

    document.getElementById('destined-to-first').addEventListener('click', function(e) {
        clearTimeout(destinedToFirstTimer);

        e.preventDefault();
    });

    // Destined To: Second input
    var destinedToSecond = function(i) {
        document.getElementById('destined-to-second').innerHTML = input.destinedToSecondInput[i];

        if(i < input.destinedToSecondInput.length) {
            destinedToSecondTimer = setTimeout(function() {
                destinedToSecond(i + 1);
            }, 50);
        }
        else {
            destinedToSecond(0);
        }
    }

    destinedToSecond(0);

    document.getElementById('destined-to-second').addEventListener('click', function(e) {
        clearTimeout(destinedToSecondTimer);

        e.preventDefault();
    });

    // Reset all timeout
    var clearAllTimeouts = function() {
        clearTimeout(youAreFirstTimer);
        clearTimeout(youAreSecondTimer);
        clearTimeout(theFirstTimer);
        clearTimeout(theSecondTimer);
        clearTimeout(destinedToFirstTimer);
        clearTimeout(destinedToSecondTimer);
    }

    // Reset
    document.getElementById('reset').addEventListener('click', function(e) {
        clearAllTimeouts();

        youAreFirst(0);
        youAreSecond(0);
        theFirst(0);
        theSecond(0);
        destinedToFirst(0);
        destinedToSecond(0);

        e.preventDefault();
    })
})();