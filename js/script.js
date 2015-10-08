$(function() {
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
            "Assassin",
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
            "Fabled"
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
            "Ruler"
        ],
        "destinedToFirstInput" : [
            "Re-educate",
            "Discover",
            "Muder",
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
            "Liberate all"
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
            "Furries"
        ]
    };

    // You are: First Input
    var youAreFirst = function(i) {
        $('#you-are-first').html(input.youAreFirstInput[i]);
        if (i < input.youAreFirstInput.length) {
            youAreFirstTimer = setTimeout(function() {
                youAreFirst(i + 1);
            }, 50);
        }
        else {
            youAreFirst(0);
        }
    }
    youAreFirst(0);

    $('#you-are-first').on('click', function(e) {
        clearTimeout(youAreFirstTimer);

        e.preventDefault();
        e.stopPropagation();
    });

    // You are: Second Input
    var youAreSecond = function(i) {
        $('#you-are-second').html(input.youAreSecondInput[i]);
        if (i < input.youAreSecondInput.length) {
            youAreSecondTimer = setTimeout(function() {
                youAreSecond(i + 1);
            }, 50);
        }
        else {
            youAreSecond(0);
        }
    }
    youAreSecond(0);

    $('#you-are-second').on('click', function(e) {
        clearTimeout(youAreSecondTimer);

        e.preventDefault();
        e.stopPropagation();
    });

    // The: First Input
    var theFirst = function(i) {
        $('#the-first').html(input.theFirstInput[i]);
        if (i < input.theFirstInput.length) {
            theFirstTimer = setTimeout(function() {
                theFirst(i + 1);
            }, 50);
        }
        else {
            theFirst(0);
        }
    }
    theFirst(0);

    $('#the-first').on('click', function(e) {
        clearTimeout(theFirstTimer);

        e.preventDefault();
        e.stopPropagation();
    });

    // The: Second Input
    var theSecond = function(i) {
        $('#the-second').html(input.theSecondInput[i]);
        if (i < input.theSecondInput.length) {
            theSecondTimer = setTimeout(function() {
                theSecond(i + 1);
            }, 50);
        }
        else {
            theSecond(0);
        }
    }
    theSecond(0);

    $('#the-second').on('click', function(e) {
        clearTimeout(theSecondTimer);

        e.preventDefault();
        e.stopPropagation();
    });

    // Destined To: First Input
    var destinedToFirst = function(i) {
        $('#destined-to-first').html(input.destinedToFirstInput[i]);
        if (i < input.destinedToFirstInput.length) {
            destinedToFirstTimer = setTimeout(function() {
                destinedToFirst(i + 1);
            }, 50);
        }
        else {
            destinedToFirst(0);
        }
    }
    destinedToFirst(0);

    $('#destined-to-first').on('click', function(e) {
        clearTimeout(destinedToFirstTimer);

        e.preventDefault();
        e.stopPropagation();
    });

    // Destined To: Second Input
    var destinedToSecond = function(i) {
        $('#destined-to-second').html(input.destinedToSecondInput[i]);
        if (i < input.destinedToSecondInput.length) {
            destinedToSecondTimer = setTimeout(function() {
                destinedToSecond(i + 1);
            }, 50);
        }
        else {
            destinedToSecond(0);
        }
    }
    destinedToSecond(0);

    $('#destined-to-second').on('click', function(e) {
        clearTimeout(destinedToSecondTimer);

        e.preventDefault();
        e.stopPropagation();
    });

    // Reset
    $('#reset').on('click', function(e) {
        youAreFirst(0);
        youAreSecond(0);
        theFirst(0);
        theSecond(0);
        destinedToFirst(0);
        destinedToSecond(0);

        e.preventDefault();
        e.stopPropagation();
    })
});
