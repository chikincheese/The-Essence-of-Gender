// Checks flags, settings, etc at load
function CheckFlags() {
    // Flags
    if (Flags.BanditLord && !House.Owned) {
        document.getElementById("BuyHouse").style.display = 'inline-block'
    } else {
        document.getElementById("BuyHouse").style.display = 'none'
    };

    // load Settings
    document.body.style.backgroundColor = Settings.BackColor;
    MapColor = Settings.MapColor
    document.body.style.color = Settings.TextColor
    document.body.style.fontFamily = Settings.TextFont

    document.getElementById("backcolor").value = Settings.BackColor;
    document.getElementById("MapColor").value = Settings.MapColor;
    document.getElementById("textcolor").value = Settings.TextColor;
    document.getElementById("textfont").value = Settings.TextFont;

    if (Settings.Vore) {
        if (!Settings.hasOwnProperty("VoreSettings")) {
            Settings.VoreSettings = {
                StomachDigestion: false,
                CumTF: false,
                ChildTF: false,
                VCumDigestion: false,
                MilkTF: false,
                AnalDigestion: false
            }
        }
        //More load fixing
        if (!Settings.VoreSettings.hasOwnProperty("AnalDigestion"))
            Settings.VoreSettings.AnalDigestion = false;
        if (!Settings.VoreSettings.hasOwnProperty("AbsorbEssence")) {
            Settings.VoreSettings.AbsorbEssence = "Both";
        }
    }
    if (!Settings.VoreSettings.hasOwnProperty("AnalDigestion"))
        Settings.VoreSettings.AnalDigestion = false;
    if (!Settings.hasOwnProperty("EssenceAuto")) {
        Settings.EssenceAuto = true;
        console.log("Added EssenceAuto");
    }
    if (!Settings.ImgPack) {
        Settings.ImgPack = false;
        console.log("Set imgpack: false");
    }
    if (!Settings.hasOwnProperty("Pronoun")) {
        Settings.Pronoun = {
            Status: false,
            Herm: "hermaphrodite",
            Male: "male",
            Female: "female",
            Doll: "doll",
            DickGirl: "dickgirl",
            CuntBoy: "cuntboy"
        }
        console.log("Added Settings pronoun");
    }
    if (!Settings.Pronoun.hasOwnProperty("CuntBoy")) {
        Settings.Pronoun = {
            CuntBoy: "cuntboy",
            DickGirl: "dickgirl"
        }
        console.log("Added pronouns")
    }
    // Makes old saves work?
    if (player.Balls.length > 0) {
        if (!player.Balls[0].hasOwnProperty("Cum")) {
            for (var e = 0; e < player.Balls.length; e++) {
                player.Balls[e] = {
                    CumMax: Math.round(player.Masc / 70) * 400,
                    Cum: 0,
                    CumRate: 0.01,
                    CumBaseRate: 0.1
                }
            }
        }
    }
    for (var b = 0; b < player.Boobies.length; b++) {
        if (!player.Boobies[b].hasOwnProperty("Milk")) {
            player.Boobies[b].Milk = 0;
            player.Boobies[b].MilkMax = Math.round(player.Boobies[b].Size * 600);
            player.Boobies[b].MilkRate = 0;
            player.Boobies[b].MilkBaseRate = 0;
        }
        if (player.Boobies[b].MilkMax < 600)
            player.Boobies[b].MilkMax = Math.round(player.Boobies[b].Size * 600);
    }
    if (!player.Pregnant.hasOwnProperty("Babies")) {
        player.Pregnant = {};
        player.Pregnant.Babies = [];
        console.log("Added babies []");
    }
    if (!Array.isArray(player.Children)) {
        player.Children = [];
        console.log("Added Children []");
    }
    Flags.Pregnations = Math.max(0, Flags.Pregnations);
    if (!Flags.hasOwnProperty("Date")) {
        Flags.Date = {
            Year: 1200,
            Month: 0,
            Day: 0
        }
        console.log("Added date")
    }
    DateEngine();

    if (!House.hasOwnProperty("Gym")) {
        House.Gym = 0;
        console.log("Added gym");
    }
    if (!House.hasOwnProperty("Kitchen")) {
        House.Kitchen = 0;
        console.log("Added Kitchen");
    }
    if (!House.hasOwnProperty("Brothel")) {
        House.Brothel = 0;
        console.log("Added brothel")
    }
    if (!House.hasOwnProperty("Nursery")) {
        House.Nursery = 0;
        console.log("Added Nursery")
    }

    if (window.innerHeight < 800) {
        document.getElementById("FirstButtons").style.display = 'block';
        document.getElementById("SecondButtons").style.display = 'none';
        document.getElementById("MoreButtons").style.display = 'inline-block';
        document.getElementById("LessButtons").style.display = 'inline-block';
    } else {
        document.getElementById("SecondButtons").style.display = 'block';
        document.getElementById("FirstButtons").style.display = 'block';
        document.getElementById("MoreButtons").style.display = 'none';
        document.getElementById("LessButtons").style.display = 'none';
    }

    if (Array.isArray(player.Inventory)) {
        if (player.Inventory.length < 1) {
            player.Inventory.push(ItemDict.blade);
        }
    } else {
        player.Inventory = [];
    }

    if (!Settings.hasOwnProperty("MaxLimbs")) {
        Settings.MaxLimbs = {
            MaxBoobs: 5,
            MaxVaginas: 5,
            MaxDicks: 5,
            MaxBalls: 5
        }
        console.log("Added MaxLimbs ")
    }
    if (!player.hasOwnProperty("Age")) {
        player.Age = 18;
        console.log("Added player age")
    }
    if (!player.hasOwnProperty("SecondRace")) {
        player.SecondRace = "human";
    }
    if (!Flags.Date.hasOwnProperty("Hour")) {
        Flags.Date.Hour = 0;
        console.log("Added hour")
    }
    if (!player.hasOwnProperty("FoodStomach")) {
        player.FoodStomach = [];
        console.log("Added food stomach")
    }
    document.getElementById("CurrentDate").innerHTML = Flags.Date.Day + "/" + Flags.Date.Month + "/" + Flags.Date.Year;
    if (!player.hasOwnProperty("Face")) {
        player.Face = {
            Eyes: "brown",
            HairStyle: "curly",
            HairColor: player.Haircolor,
            HairLength: "shoulder-length"
        }
    }
    if (!Settings.hasOwnProperty("Brothel")) {
        Settings.Brothel = {
            ServeMasc: true,
            ServeFemi: true
        }
        console.log("Added brothel settings");
    }
    if (!Settings.hasOwnProperty("LogLength")) {
        Settings.LogLength = 100;
        console.log("Added Settings loglength");
    }
    if (!Settings.hasOwnProperty("Inch")) {
        Settings.Inch = false;
        console.log("Added Inch")
    }
    if (!Flags.hasOwnProperty("BeatSuccubus")) {
        Flags.BeatSuccubus = false;
        console.log("Added beat succubus");
    }
    if (!Flags.hasOwnProperty("FirstCityLike")) {
        Flags.FirstCityLike = 0;
    }
    for (var e of player.Inventory) {
        var itemarray = Object.values(ItemDict);
        for (var b of itemarray) {
            if (e.Name === b.Name) {
                e.Use = b.Use
            }
        }
    }
    if (!Settings.hasOwnProperty("BalanceParts")) {
        Settings.BalanceParts = false;
    }
    if (!player.hasOwnProperty("Spells")) {
        player.Spells = {
            Fireball: 0,
            FireballMax: 0
        }
        console.log("Added Spells & Fireballs");
    }
    if (!House.hasOwnProperty("Portal")) {
        House.Portal = {
            Owned: false,
            Mountain: false
        }
        console.log("Added house portal owned false");
    } else if (!House.Portal.hasOwnProperty("Owned")) {
        if (House.Portal) {
            House.Portal = {
                Owned: true,
                Mountain: false
            }
            console.log("Added house portal owned true");
        } else {
            House.Portal = {
                Owned: false,
                Mountain: false
            }
            console.log("Added house portal owned false");
        }
    }
    if (window.innerHeight < 600) {
        document.getElementById("FirstButtons").style.display = 'none';
        document.getElementById("SecondButtons").style.display = 'none';
        document.getElementById("MoreButtons").style.display = 'inline-block';
        document.getElementById("LessButtons").style.display = 'inline-block';
        document.getElementById("MobileButtons").style.display = 'inline-block';
    } else if (window.innerHeight < 800) {
        document.getElementById("FirstButtons").style.display = 'block';
        document.getElementById("SecondButtons").style.display = 'none';
        document.getElementById("MoreButtons").style.display = 'inline-block';
        document.getElementById("LessButtons").style.display = 'inline-block';
        document.getElementById("MobileButtons").style.display = 'none';
    } else {
        document.getElementById("SecondButtons").style.display = 'block';
        document.getElementById("FirstButtons").style.display = 'block';
        document.getElementById("MoreButtons").style.display = 'none';
        document.getElementById("LessButtons").style.display = 'none';
        document.getElementById("MobileButtons").style.display = 'none';
    }

    if (!player.hasOwnProperty("Blessings")) {
        player.Blessings = {};
    }
    if (!player.Blessings.hasOwnProperty("Incubator")) {
        player.Blessings.Incubator = 0;
    }
    if (!player.Blessings.hasOwnProperty("IncubatorSeed")) {
        player.Blessings.IncubatorSeed = 0;
    }
    if (!player.Blessings.hasOwnProperty("Broodmother")) {
        player.Blessings.Broodmother = 0;
    }
    if (!player.Blessings.hasOwnProperty("BroodmotherSeed")) {
        player.Blessings.BroodmotherSeed = 0;
    }
    if (!player.Blessings.hasOwnProperty("MalePreg")) {
        player.Blessings.MalePreg = 0;
    }
}