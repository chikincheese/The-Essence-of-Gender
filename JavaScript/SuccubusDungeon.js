function FirstWave() {
    var RacesCave = ["Goblin", "Imp"];
    var OP = new enemy("Guard", RandomString(RacesCave), RandomInt(10, 13), RandomInt(10, 13), RandomInt(10, 13), RandomInt(0, 2),
        RandomInt(1, 3), RandomInt(9, 18), 150, 180, RandomInt(30, 40), RandomInt(20, 35),
        'red', grid, RandomInt(120, 140));
    EssenceGiver(OP, 150);
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function SecondWave() {
    var RacesCave2 = ["Goblin", "Demon"];
    var OP = new enemy("Guard", RandomString(RacesCave2), RandomInt(15, 21), RandomInt(15, 21), RandomInt(15, 21), RandomInt(11, 15),
        RandomInt(8, 11), RandomInt(19, 28), 220, 240, RandomInt(45, 65), RandomInt(40, 65),
        'red', grid, RandomInt(150, 180));
    EssenceGiver(OP, 150);
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function ThirdWave() {
    var RacesCave3 = ["Dhampir", "Demon"];
    var OP = new enemy("Guard", RandomString(RacesCave3), RandomInt(30, 45), RandomInt(30, 45), RandomInt(27, 43), RandomInt(23, 27),
        RandomInt(20, 23), RandomInt(55, 75), 420, 450, RandomInt(75, 95), RandomInt(65, 85),
        'red', grid, RandomInt(160, 190));
    EssenceGiver(OP, 150);
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function FourthWave() {
    var RacesCave4 = ["Succubus", "Incubus"];
    var OP = new enemy("Guard", RandomString(RacesCave4), RandomInt(10, 15), RandomInt(50, 65), RandomInt(55, 70), RandomInt(55, 70),
        RandomInt(35, 55), RandomInt(95, 135), 500, 600, RandomInt(110, 140), RandomInt(90, 140),
        'purple', grid, RandomInt(150, 180));
    EssenceGiver(OP, 1500);
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}

function SuccubusBoss() {
    var RacesCave4 = ["Succubus", "Incubus"];
    var OP = new enemy("Mistress", RandomString(RacesCave4), RandomInt(20, 25), RandomInt(60, 75), RandomInt(65, 80), RandomInt(65, 80),
        RandomInt(45, 65), RandomInt(105, 145), 800, 1500, RandomInt(300, 400), RandomInt(200, 340),
        'purple', grid, RandomInt(150, 180));
    EssenceGiver(OP, 150);
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    if (OP.Race == "Succubus") {
        OP.Femi = RandomInt(4500, 7000);
        OP.Masc = 0;
        OP.Name = "Mistress";
    } else {
        OP.Femi = 0;
        OP.Masc = RandomInt(4500, 7000);
        OP.Name = "Master";
    }
    return OP;
}

function SuccubusBossUnique() {
    var OP = new enemy("Dungeon Mistress", "Succubus", RandomInt(20, 25), RandomInt(60, 75), RandomInt(65, 80), RandomInt(65, 80),
        RandomInt(45, 65), RandomInt(105, 145), 800, 1500, RandomInt(300, 400), RandomInt(200, 340),
        'purple', grid, RandomInt(150, 180));
    EssenceGiver(OP, 3000, "female");
    FatMuscle(OP, 1, 1);
    StandardEnemy(OP);
    EvilNameGiver(OP);
    return OP;
}
var Dungeon = false;
var Wave = 0;
document.getElementById("EnterDungeon").addEventListener("click", function () {
    enemies = [];
    if (false) {
        enemies = [FirstWave(), SecondWave(), ThirdWave(), FourthWave(), SuccubusBossUnique()];
    } else {
        enemies = [FirstWave(), SecondWave(), ThirdWave(), FourthWave(), SuccubusBoss()];
    }

    BattleSetup(enemies[Wave]);

    document.getElementById("FirstDungeon").style.display = 'none';
    document.getElementById("FirstDungeonText").innerHTML = "Wave " + (Wave + 2);
    EnemyIndex = enemies.indexOf(enemies[Wave]);
    EssenceCheck(enemies[Wave]);
    Dungeon = true;
});
document.getElementById("DungeonStopButton").addEventListener("click", function () {
    document.getElementById("status").style.display = 'block';
    document.getElementById("buttons").style.display = 'none';
    document.getElementById("EmptyButtons").style.display = 'block';
    document.getElementById("EventLog").style.display = 'block';

    player.Orgasm = 0;
    document.getElementById("AfterBattle").style.display = 'none';
    document.getElementById("PlayerMouth").style.display = 'block';
    document.getElementById("PlayerVagina").style.display = 'block';
    document.getElementById("PlayerDick").style.display = 'block';
    document.getElementById("Anal").style.display = 'block';
    document.getElementById("EnemyVagina").style.display = 'block';
    document.getElementById("EnemyDick").style.display = 'block';

    document.getElementById("DrainMenu").style.display = 'block';
    document.getElementById("InjectMenu").style.display = 'block';

    document.getElementById("FirstDungeon").style.display = 'block';
    Wave++;
    if (Wave == 4 && !Flags.BeatSuccubus && false) {
        Flags.BeatSuccubus = true;
        document.getElementById("FirstDungeonText").innerHTML = "Having beaten her you found a teleport shard to a new world,"
        if (House.Portal) {
            document.getElementById("FirstDungeonText").innerHTML += " you can use it at your portal at home!"
        } else {
            document.getElementById("FirstDungeonText").innerHTML += " you should build a portal at your mansion so you can use it."
        }
    }
    if (Wave == 5) {
        Wave = 0;
        document.getElementById("FirstDungeonText").innerHTML += "<br><br> You beat the dungeon more to come!"
    }
    LastPressed = " ";
    return;
});
document.getElementById("DungeonCapture").addEventListener("click", function () {
    document.getElementById("status").style.display = 'block';
    document.getElementById("buttons").style.display = 'none';
    document.getElementById("EmptyButtons").style.display = 'block';
    document.getElementById("EventLog").style.display = 'block';

    House.Dormmates.push(enemies[EnemyIndex]);
    player.Orgasm = 0;
    document.getElementById("AfterBattle").style.display = 'none';
    document.getElementById("PlayerMouth").style.display = 'block';
    document.getElementById("PlayerVagina").style.display = 'block';
    document.getElementById("PlayerDick").style.display = 'block';
    document.getElementById("Anal").style.display = 'block';
    document.getElementById("Breast").style.display = 'block';
    document.getElementById("EnemyVagina").style.display = 'block';
    document.getElementById("EnemyDick").style.display = 'block';
    document.getElementById("DrainMenu").style.display = 'block';
    document.getElementById("InjectMenu").style.display = 'block';
    document.getElementById("FirstDungeon").style.display = 'block';
    Wave++;
    LastPressed = " ";
    if (Wave == 4) {
        Wave = 0;
        document.getElementById("FirstDungeonText").innerHTML += "<br><br> You beat the dungeon more to come!"
    }
    LastPressed = " ";
    return;
});
document.getElementById("DungeonLose").addEventListener("click", function () {
    battle = false;
    document.getElementById("Lose").style.display = 'none';
    document.getElementById("map").style.display = 'block';
    document.getElementById("status").style.display = 'block';
    document.getElementById("buttons").style.display = 'block';
    document.getElementById("LoseStruggle").style.display = 'inline-block';
    document.getElementById("LoseSubmit").style.display = 'inline-block';
    document.getElementById("LosePlayerOrgasm").innerHTML = " ";
    document.getElementById("EventLog").style.display = 'block';
    enemies = [];
    Dungeon = false;
    Wave = 0;
});
document.getElementById("LeaveFirstDungeon").addEventListener("click", function () {
    enemies = [];
    battle = false;
    player.Orgasm = 0;
    document.getElementById("AfterBattle").style.display = 'none';
    document.getElementById("PlayerMouth").style.display = 'block';
    document.getElementById("PlayerVagina").style.display = 'block';
    document.getElementById("PlayerDick").style.display = 'block';
    document.getElementById("Anal").style.display = 'block';
    document.getElementById("EnemyVagina").style.display = 'block';
    document.getElementById("EnemyDick").style.display = 'block';
    document.getElementById("map").style.display = 'block';
    document.getElementById("status").style.display = 'block';
    document.getElementById("buttons").style.display = 'block';
    document.getElementById("DrainMenu").style.display = 'block';
    document.getElementById("InjectMenu").style.display = 'block';
    document.getElementById("EventLog").style.display = 'block';
    LastPressed = " ";
    Dungeon = false;
    Wave = 0;
    return;
});

// change these to document.get... adventlistners
function MakeHerEqual() {
    // Some friendly sex
    Partners.Succubus.Equal = true;
    Partners.Succubus.Yours = true;
    Partners.Succubus.Like += 100;
}

function MakeHerSubmit() {
    // Some rougher sex
    Partners.Succubus.Equal = false;
    Partners.Succubus.Yours = true;
    Partners.Succubus.Submit += 100; // Points so it's possible to change route, but 100 is a lot so this choice matters
}

function UseAndIgonore() {
    // Sex where you skip taking her as partner
}