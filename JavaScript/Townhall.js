var ChosenQuest
document.getElementById("QuestMenu").addEventListener("click", function () {
    document.getElementById("TownhallStart").style.display = 'none';
    document.getElementById("Quest").style.display = 'block';
    document.getElementById("QuestStart").style.display = 'block';
    TownHallQuests();
});
// Test of new way to add quests, in order to avoid public vars.
function TownHallQuests() {
    var x = document.getElementById("QuestStart");
    document.getElementById("LeaveQuest").style.display = 'inline-block';
    while (x.hasChildNodes()) {
        x.removeChild(x.firstChild);
    }

    var BanditLord = document.createElement("INPUT");
    BanditLord.setAttribute("type", "button");
    BanditLord.setAttribute("value", "BanditLord");
    BanditLord.addEventListener("click", function () {
        document.getElementById("LeaveQuest").style.display = 'none';
        if (Flags.BanditLord) {
            document.getElementById("TownhallText").innerHTML = "The bandit are still humiliated from the defeat of their lord, but if you are willing please defeat them again to make sure they don't regain their confidence."
        } else {
            document.getElementById("TownhallText").innerHTML = "The bandits up to the north has become braver with their new leader, if you are strong enough please beat them into submission. <br> <br>" +
                "You will be greatly awarded for your effort and we will grant you the right to buy the old mansion located east from the city."
        }

        BanditLord.style.display = 'none';
        ElfHunt.style.display = 'none';
        var Accept = document.createElement("INPUT");
        Accept.setAttribute("type", "button");
        Accept.setAttribute("value", "Accept");
        Accept.addEventListener("click", function () {
            var Quest = {
                Name: "BanditLord",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            TownHallQuests();
        });
        var Decline = document.createElement("INPUT");
        Decline.setAttribute("type", "button");
        Decline.setAttribute("value", "Decline");
        Decline.addEventListener("click", function () {
            TownHallQuests();
        });
        document.getElementById("QuestStart").appendChild(Accept);
        document.getElementById("QuestStart").appendChild(Decline);
    });
    var ElfHunt = document.createElement("INPUT");
    ElfHunt.setAttribute("type", "button");
    ElfHunt.setAttribute("value", "ElfHunt");
    ElfHunt.addEventListener("click", function () {
        document.getElementById("TownhallText").innerHTML = "The elves to the south is becoming a problem, defeat atleast three of them and you will be awarded."
        BanditLord.style.display = 'none';
        ElfHunt.style.display = 'none';
        var Accept = document.createElement("INPUT");
        Accept.setAttribute("type", "button");
        Accept.setAttribute("value", "Accept");
        Accept.addEventListener("click", function () {
            var Quest = {
                Name: "ElfHunt",
                Count: 0,
                Completed: false
            }
            player.Quests.push(Quest);
            TownHallQuests();
        });
        var Decline = document.createElement("INPUT");
        Decline.setAttribute("type", "button");
        Decline.setAttribute("value", "Decline");
        Decline.addEventListener("click", function () {
            TownHallQuests();
        });
        document.getElementById("QuestStart").appendChild(Accept);
        document.getElementById("QuestStart").appendChild(Decline);
    });
    if (!player.Quests.some(e => e.Name === "ElfHunt")) {
        document.getElementById("QuestStart").appendChild(ElfHunt);
    } else if (player.Quests.some(e => e.Name === "ElfHunt" && e.Completed)) {
        var ElfHuntReward = document.createElement("INPUT");
        ElfHuntReward.setAttribute("type", "button");
        ElfHuntReward.setAttribute("value", "ElfHuntReward");
        ElfHuntReward.addEventListener("click", function () {
            var Tier = 1;
            for (var i = 0; i < player.Quests.length; i++) {
                if (player.Quests[i].Name === "ElfHunt") {
                    if (player.Quests[i].hasOwnProperty("Tier")) {
                        Tier += Math.pow(2, player.Quests[i].Tier - 1)
                    }
                    player.Quests.splice(i, 1);
                }
            }
            document.getElementById("TownhallText").innerHTML = "You are rewarded: " + 50 * Tier + "Exp and " + 100 * Tier + "gold";
            player.Exp += 50 * Tier;
            player.Gold += 100 * Tier;
            Flags.FirstCityLike += 1 * Tier;
            TownHallQuests();
        });
        document.getElementById("QuestStart").appendChild(ElfHuntReward);

    }
    if (!player.Quests.some(e => e.Name === "BanditLord")) {
        document.getElementById("QuestStart").appendChild(BanditLord);
    } else if (player.Quests.some(e => e.Name === "BanditLord" && e.Completed)) {
        var BanditLordReward = document.createElement("INPUT");
        BanditLordReward.setAttribute("type", "button");
        BanditLordReward.setAttribute("value", "BanditLordReward");
        BanditLordReward.addEventListener("click", function () {
            if (Flags.BanditLord) {
                document.getElementById("TownhallText").innerHTML = "You are rewared: 300Exp and 500gold";
            } else {
                if (!Flags.BanditLord) {
                    Flags.BanditLord = true
                };
                document.getElementById("TownhallText").innerHTML = "You are now allowed to buy a house. <br> You are rewared: 300Exp and 500gold";
                document.getElementById("BuyHouse").style.display = 'inline-block';
            }
            player.Exp += 300;
            player.Gold += 500;
            for (var i = 0; i < player.Quests.length; i++) {
                if (player.Quests[i].Name === "BanditLord") {
                    player.Quests.splice(i, 1);
                }
            }
            TownHallQuests();
        });
        document.getElementById("QuestStart").appendChild(BanditLordReward);
    };
}

document.getElementById("LeaveQuest").addEventListener("click", function () {
    document.getElementById("Quest").style.display = 'none';
    document.getElementById("TownhallStart").style.display = 'block';
    document.getElementById("LeaveQuest").style.display = 'inline-block';
    document.getElementById("TownhallText").innerHTML = "";
});
// Slut på questsystem

document.getElementById("BuyHouse").addEventListener("click", function () {
    if (player.Gold >= 100) {
        document.getElementById("BuyHouse").style.display = 'none';
        House.Owned = true;
        return;
    } else {
        return;
    }
});
document.getElementById("Services").addEventListener("click", function () {
    document.getElementById("TownhallStart").style.display = 'none';
    document.getElementById("Service").style.display = 'block';
});
document.getElementById("NameChange").addEventListener("click", function () {
    document.getElementById("NameChangeForm").style.display = 'block';
    document.getElementById("firstname2").value = player.Name;
    document.getElementById("lastname2").value = player.LastName;
});
document.getElementById("AcceptName").addEventListener("click", function () {
    player.Name = document.getElementById("firstname2").value;
    player.LastName = document.getElementById("lastname2").value;
    document.getElementById("NameChangeForm").style.display = 'none';
});
document.getElementById("ServicesLeave").addEventListener("click", function () {
    document.getElementById("TownhallStart").style.display = 'block';
    document.getElementById("Service").style.display = 'none';
    document.getElementById("NameChangeForm").style.display = 'none';
});
document.getElementById("TownHallRep").addEventListener("click", function () {
    document.getElementById("TownhallText").innerHTML = Flags.FirstCityLike + "<br> They temp temp you.";
});