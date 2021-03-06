function enemy(EnemyName, EnemyRace, Strength, Endurance, Willpower, Charm,
    Intelligence, SexSkill, EnemyHealth, EnemyWillHealth, ExpDrop, GoldDrop,
    Color, Size, Height, EnemyFullHealth = EnemyHealth,
    EnemyFullWillHealth = EnemyWillHealth, EnemySecondRace = EnemyRace) {
    this.Name = EnemyName;
    this.Race = EnemyRace;
    this.Str = Strength;
    this.End = Endurance;
    this.Willpower = Willpower;
    this.Charm = Charm;
    this.Int = Intelligence;
    this.SexSkill = SexSkill;
    this.Health = EnemyHealth;
    this.WillHealth = EnemyWillHealth;
    this.Exp = ExpDrop;
    this.Gold = GoldDrop;
    this.Color = Color;
    this.Size = Size;
    this.Height = Height;
    this.FullHealth = EnemyFullHealth;
    this.FullWillHealth = EnemyFullWillHealth;
    this.SecondRace = EnemySecondRace;
}

// Feral concept list
//var FeralEnemy = ["Squirrel", "Rabbit", "Cat", "Wolf", "Boar", "Deer", "Horse", "Lion", "Bear", "Rhino", "Elephant", "Dragon"];

function NameGiver(who) {
    var FemaleFirstNames = ["Jaiden", "Judy", "Nia", "Kelis", "Chelsea", "Amani", "Veronica", "Kyra", "Lauryn", "Alicja", "Tate", "Colleen", "Melody", "Pippa", "Keziah", "Melissa", "Lana", "Marie", "Molly", "Sandra", "Dannielle", "Yusra", "Laiba", "Gabrielle", "Syeda", "Amirah"];
    var MaleFirstNames = ["Jerome", "Napoleon", "Duncan", "Brant", "Chance", "Dewitt", "Brendan", "Asim", "Faith", "Macy", "Landon", "Sulaiman", "Iestyn", "Gordon", "Hector", "Haris", "Lee", "Simran", "Ronnie", "Rishi", "Bartosz", "Shelley", "Virgil", "Howard", "Rio"];
    var LastNames = ["Paine", "Ward", "Bostock", "Devine", "Heath", "Bone", "Dupont", "Patterson", "Garza", "Stein", "Madden", "Francis", "Villanueva", "Perry", "Lyssa", "Beach", "Crouch", "Sharp", "Clifford", "Wade", "Vargas", "Hatfield", "Mata", "Lozano", "Everett"];
    switch (CheckGender(who)) {
        case "cuntboy":
        case "male":
            who.FirstName = RandomString(MaleFirstNames);
            break;
        case "hermaphrodite":
        case "female":
        case "dickgirl":
        case "doll":
            who.FirstName = RandomString(FemaleFirstNames);
            break;
    }
    who.LastName = RandomString(LastNames);
}

function EvilNameGiver(who) {
    var EvilMaleFirstNames = ["Neclord", "Virion", "Dario", "Grumio", "Auron", "Jaymes", "Fark", "Cidolfus", "Bartholomew", "Arthur"];
    var EvilFemaleFirstNames = ["Autumn", "Imeena", "Margorie", "Draven", "Lauden", "Ethel", "Cat", "Raven", "Senka", "Jinx"];
    var EvilLastNames = ["Crimson", "Kane", "Duke", "Interfector", "Geulimja", "Ebonywood", "Grove", "Helion", "Church", "Geulimja", "Moonfall", "Winter", "Hart", "Calarook", "Crypt", "Wolf", "Rex", "Fadington", "Maganti", "Hook"];
    switch (CheckGender(who)) {
        case "cuntboy":
        case "male":
            who.FirstName = RandomString(EvilMaleFirstNames);
            break;
        case "hermaphrodite":
        case "dickgirl":
        case "female":
        case "doll":
            who.FirstName = RandomString(EvilFemaleFirstNames);
            break;
    }
    who.LastName = RandomString(EvilLastNames);
}

// Functions made to make it easier to make new enemies.
function EssenceGiver(who, amount, Genderlock = false) {
    if (Genderlock) {
        if (Genderlock == "male") {
            who.Masc = Math.round(Math.max(amount / 3, Math.random() * amount));
            who.Femi = 0;
            // it's a boy
        } else if (Genderlock == "cuntboy") {
            who.Masc = Math.round(Math.max(amount / 3, Math.random() * amount));
            who.Femi = Math.round(Math.max(amount / 4, Math.random() * amount));
            // it's a cuntboy, might add a penalty to allow more cuntboy and dickgirls
        } else if (Genderlock == "herm") {
            who.Masc = Math.round(Math.max(amount / 4, Math.random() * amount));
            who.Femi = Math.round(Math.max(amount / 4, Math.random() * amount));
        } else if (Genderlock == "dickgirl") {
            who.Masc = Math.round(Math.max(amount / 4, Math.random() * amount));
            who.Femi = Math.round(Math.max(amount / 3, Math.random() * amount));
            // it's a dickgirl
        } else if (Genderlock == "female") {
            who.Femi = Math.round(Math.max(amount / 3, Math.random() * amount));
            who.Masc = 0;
            // it's a girl
        }
    } else {
        var a = RandomInt(1, 13);
        if (a < 4) {
            who.Masc = Math.round(Math.max(amount / 3, Math.random() * amount));
            who.Femi = 0;
            // it's a boy
        } else if (a < 6) {
            who.Masc = Math.round(Math.max(amount / 3, Math.random() * amount));
            who.Femi = Math.round(Math.max(amount / 4, Math.random() * amount));
            // it's a cuntboy, might add a penalty to allow more cuntboy and dickgirls
        } else if (a < 9) {
            who.Masc = Math.round(Math.max(amount / 4, Math.random() * amount));
            who.Femi = Math.round(Math.max(amount / 4, Math.random() * amount));
        } else if (a < 11) {
            who.Masc = Math.round(Math.max(amount / 4, Math.random() * amount));
            who.Femi = Math.round(Math.max(amount / 3, Math.random() * amount));
            // it's a dickgirl
        } else if (a < 14) {
            who.Femi = Math.round(Math.max(amount / 3, Math.random() * amount));
            who.Masc = 0;
            // it's a girl
        }
    }
}

function FatMuscle(who, minfatprocent, minweight) {
    var fatratio = RandomInt(minfatprocent, minfatprocent + 10);
    var muscleration = 100 - fatratio;
    who.Fat = minweight / 200 * fatratio;
    who.Muscle = minweight / 200 * muscleration;
    who.Weight = minweight + who.Fat + who.Muscle;
}

function EnemySetup(who) {
    who.Arousal = 0;
    who.Orgasm = 0;
}

function RandomPos(who) {
    who.XPos = RandomInt(2, 18) * grid;
    who.YPos = RandomInt(2, 18) * grid;
}

function StandardEnemy(who) {
    EnemySetup(who);
    RandomPos(who);
    RaceBonus(who);
    who.Cumin = {
        Stomach: 0,
        Pussy: 0,
        Anal: 0
    }
    EssenceCheck(who);
    if (who.Pussies.length > 0) {
        var a = RandomInt(1, 5);
        if (a < 5) {
            who.Pussies[0].Virgin = false;
        }
    }
    if (who.Dicks.length > 0) {
        var b = RandomInt(1, 5);
        if (b < 5) {
            who.Dicks[0].Virgin = false;
        }
    }
}

// Encounter function
function EncounterStart() {
    var Races = ["Human", "Halfling"];
    var Names = ["Commoner", "Farmer", "Thug"];
    var OP = new enemy(RandomString(Names), RandomString(Races), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5),
        RandomInt(2, 5), RandomInt(6, 9), 70, 70, RandomInt(15, 20), RandomInt(5, 15),
        'Chocolate', grid, RandomInt(140, 180));
    EssenceGiver(OP, 50);
    FatMuscle(OP, 10, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function RespawnBlocker() {
    var Races = ["Human", "Halfling"];
    var Names = ["Commoner", "Farmer", "Thug"];
    var OP = new enemy(RandomString(Names), RandomString(Races), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5), RandomInt(2, 5),
        RandomInt(2, 5), RandomInt(6, 9), 70, 70, RandomInt(15, 20), RandomInt(5, 15),
        'Chocolate', grid, RandomInt(140, 180));
    EssenceGiver(OP, 50);
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    NameGiver(OP);
    OP.XPos = 99 * grid;
    OP.YPos = 99 * grid;
    return OP;
}

function animalSpawn(maxSize) { // Here's the mess of concept code
    var randomAnimalScore = RandomInt(0, Math.floor(Math.min(Math.pow(maxSize / 10, 0.5), FeralEnemy.length))); // Spawns animals based on height - wolves and lower at start of the game
    console.log("RandScore: " + randomAnimalScore);
    var essence = 10 * Math.max(1, Math.pow(randomAnimalScore, 2)); //The larger the creature, the greater its essence
    console.log("Essence: " + essence);
    var M = 0;
    var F = 0; //Only males or females, no intersex
    console.log("M: " + M + " F: " + F);
    if (Math.random() > 0.5)
        M = essence;
    else F = essence;
    var OP = new enemy("Feral", // Always named feral for description
        FeralEnemy[randomAnimalScore], // Race is their species 
        M, F, //Essence!
        RandomInt(Math.floor(randomAnimalScore / 2) + 1, Math.floor(randomAnimalScore * 1.5)) + 2, // Strength based on size
        RandomInt(Math.floor(randomAnimalScore / 2) + 1, Math.floor(randomAnimalScore * 1.5)) + 2, // Endurance based on size
        RandomInt(Math.floor(randomAnimalScore / 2) + 1, Math.floor(randomAnimalScore * 1.5)) + 2, // Unused willpower based on size
        0, 0, 0, 0, 0, // No charm, Intelligence, SexSkill, Arousal, or Orgasm
        Math.max(10, 10 * randomAnimalScore), Math.max(10, 10 * randomAnimalScore),
        Math.max(10, 10 * randomAnimalScore), Math.max(10, 10 * randomAnimalScore), // HP and Will based on size
        RandomInt(2, 18) * grid, RandomInt(2, 18) * grid, // Same positioning
        RandomInt(Math.floor(randomAnimalScore / 2), Math.floor(randomAnimalScore * 1.5)), RandomInt(randomAnimalScore + 1, (randomAnimalScore + 1) * 10), // XP and gold based on size 
        'Chocolate', // Why not
        grid * (Math.floor(randomAnimalScore / 4) + 0.4), // Thought this determined dimensions, was supposed to be steps based on size
        Math.max(0.5, Math.pow(3, randomAnimalScore / 2)), // Why does weight affect size appearance?
        Math.pow(5, randomAnimalScore), // Massive sizes!
        Math.pow(2, randomAnimalScore), // Muscle?
        Math.pow(2, randomAnimalScore)); // Fat?
    EssenceCheck(OP); // They still have genitals
    OP.LastName = ""; // No named animals
    return OP;
}

function EncounterPath1() {
    var RacesRoad = ["Human"];
    var Names = ["Commoner", "Farmer", "Thug"];
    var OP = new enemy(RandomString(Names), RandomString(RacesRoad), RandomInt(3, 6), RandomInt(3, 6), RandomInt(3, 6), RandomInt(3, 6),
        RandomInt(3, 6), RandomInt(7, 10), 80, 80, RandomInt(20, 25), RandomInt(8, 18),
        'Chocolate', grid, RandomInt(140, 180));
    EssenceGiver(OP, 60);
    FatMuscle(OP, 10, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterPath2() {
    var RacesRoad = ["Human"];
    var Names = ["Commoner", "Farmer", "Thug"];
    var OP = new enemy(RandomString(Names), RandomString(RacesRoad), RandomInt(4, 7), RandomInt(4, 7), RandomInt(4, 7), RandomInt(4, 7),
        RandomInt(4, 7), RandomInt(8, 12), 100, 100, RandomInt(23, 30), RandomInt(12, 25),
        'green', grid, RandomInt(140, 180));
    EssenceGiver(OP, 70);
    FatMuscle(OP, 10, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterBandit() {
    var RacesBandit = ["Orc", "Troll"];
    var OP = new enemy("Bandit", RandomString(RacesBandit), RandomInt(8, 15), RandomInt(8, 15), RandomInt(8, 15), RandomInt(8, 15),
        RandomInt(8, 15), RandomInt(10, 15), 170, 170, RandomInt(30, 45), RandomInt(30, 55),
        'tomato ', grid, RandomInt(140, 180));
    EssenceGiver(OP, 500, "male");
    FatMuscle(OP, 7, 70);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterBanditLord() {
    var RacesBandit = ["Orc", "Troll"];
    var OP = new enemy("Banditlord", RandomString(RacesBandit), RandomInt(20, 35), RandomInt(10, 15), RandomInt(20, 35), RandomInt(20, 35),
        RandomInt(20, 35), RandomInt(40, 60), 350, 300, RandomInt(55, 85), RandomInt(75, 150),
        'tomato', 1.5 * grid, RandomInt(160, 200));
    EssenceGiver(OP, 1000, "male");
    FatMuscle(OP, 7, 80);
    StandardEnemy(OP);
    OP.XPos = startarea.width / 2 - grid;
    OP.YPos = grid;
    NameGiver(OP);
    NameGiver(OP);
    return OP;
}

function EncounterForest() {
    var RacesForest = ["Elf", "Amazon"];
    var OP = new enemy("Forest", RandomString(RacesForest), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13),
        RandomInt(6, 13), RandomInt(8, 18), 150, 150, RandomInt(25, 40), RandomInt(25, 45),
        'darkgreen', grid, RandomInt(140, 180));
    EssenceGiver(OP, 300);
    FatMuscle(OP, 11, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterForest2() {
    var RacesForest2 = ["Elf", "Fairy"];
    var OP = new enemy("Forest", RandomString(RacesForest2), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13), RandomInt(6, 13),
        RandomInt(6, 13), RandomInt(8, 18), 150, 150, RandomInt(25, 40), RandomInt(25, 45),
        'darkgreen', grid, RandomInt(140, 180));
    EssenceGiver(OP, 400);
    FatMuscle(OP, 11, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    return OP;
}

function EncounterPathToWitch2() {
    var RacesWitch = ["Human", "Elf", "Dark elf"];
    var OP = new enemy("Witch", RandomString(RacesWitch), RandomInt(1, 5), RandomInt(3, 7), RandomInt(7, 16), RandomInt(10, 40),
        RandomInt(30, 70), RandomInt(20, 80), 150, 300, RandomInt(30, 60), RandomInt(30, 70),
        'IndianRed', grid, RandomInt(140, 170));
    EssenceGiver(OP, 350);
    FatMuscle(OP, 10, 50);
    StandardEnemy(OP);
    NameGiver(OP);
    switch (CheckGender(OP)) {
        case "male":
        case "cuntboy":
        case "doll":
            OP.Name = "Wizard"
            break;
        default:
            OP.Name = "Witch"
            break;
    }
    return OP;
}

function EncounterCave1() {
    var RacesCave = ["Goblin", "Imp"];
    var OP = new enemy("Lesser", RandomString(RacesCave), RandomInt(7, 10), RandomInt(7, 10), RandomInt(7, 10), RandomInt(0, 2),
        RandomInt(1, 3), RandomInt(6, 15), 120, 150, RandomInt(25, 35), RandomInt(15, 30),
        'red', grid, RandomInt(120, 140));
    EssenceGiver(OP, 250);
    FatMuscle(OP, 8, 40);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function EncounterCave2() {
    var RacesCave2 = ["Goblin", "Demon"];
    var OP = new enemy("Cave", RandomString(RacesCave2), RandomInt(12, 18), RandomInt(12, 18), RandomInt(12, 18), RandomInt(8, 12),
        RandomInt(5, 8), RandomInt(16, 25), 190, 210, RandomInt(40, 60), RandomInt(35, 60),
        'red', grid, RandomInt(150, 180));
    EssenceGiver(OP, 500);
    FatMuscle(OP, 8, 60);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function EncounterCave3() {
    var RacesCave3 = ["Dhampir", "Demon"];
    var OP = new enemy("Guard", RandomString(RacesCave3), RandomInt(25, 40), RandomInt(25, 40), RandomInt(22, 38), RandomInt(18, 22),
        RandomInt(15, 18), RandomInt(50, 70), 370, 400, RandomInt(65, 85), RandomInt(55, 80),
        'red', grid, RandomInt(160, 190));
    EssenceGiver(OP, 750);
    FatMuscle(OP, 8, 70);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function EncounterCave4() {
    var RacesCave4 = ["Succubus", "Incubus"];
    var OP = new enemy("Lesser", RandomString(RacesCave4), RandomInt(2, 5), RandomInt(35, 50), RandomInt(40, 55), RandomInt(40, 55),
        RandomInt(20, 40), RandomInt(80, 120), 420, 550, RandomInt(85, 110), RandomInt(70, 120),
        'purple', grid, RandomInt(150, 180));
    EssenceGiver(OP, 2000);
    FatMuscle(OP, 10, 60);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}