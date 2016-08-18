//Variables
var roll = 0;
var msg = "No feed yet...";
var money = 0;
var startIncc = 1;
var Worker1Cost = 50;
var Worker2Cost = 200;
var Worker3Cost = 500;
var Worker4Cost = 1000;
var Worker1numb = 0;
var Worker2numb = 0;
var Worker3numb = 0;
var Worker4numb = 0;
var miss = 0;
var feed1 = "<br>";
var feed2 = "<br>";
var feed3 = "<br>";
var feed4 = "<br>";
var feed5 = "<br>";
var feed6 = "<br>";
var feed7 = "<br>";
var feed8 = "<br>";
var feed9 = "<br>";
var feed10 = "<br>";
var feed11 = "<br>";
var feed12 = "<br>";
var feed13 = "<br>";
var feed14 = "<br>";
var feed15 = "<br>";
var tickAmount = 0;
var incc = 1;
var hoboGain = 1;
var nerdGain = 3;
var donatorGain = 8;
var prostitudeGain = 12;
var hUNr = 0;
var nUNr = 0;
var dUNr = 0;
var pUNr = 0;
var hUC = 400;
var nUC = 1600;
var dUC = 4000;
var pUC = 8000;
var hoboUpgradeDesc = "Haircut";
var nerdUpgradeDesc = "New books";
var donatorUpgradeDesc = "Mom's credit card";
var prostitudeUpgradeDesc = "Bigger boobs";
var suffixes = ["", "k", "m", "b", "t", "q"];
var tempMoney = money;
var victory = 0;
var won = 0;
var prVictory = 0;
var n = 0;
var oldFeed = "";
var fTick = 0;
// First run



function roundNumber(num1){
	
  place = 0;
     while(num1 >= 1000)
     {
     num1 = num1 / 1000;
     place++;
	 n = num1.toFixed(3);
     }
	 if(place == 0)
     {
     tempString = num1.toString();
     }
     else if(place == 1)
     {
     tempString = n.toString() + "k";
     }
     else if(place == 2)
     {
     tempString = n.toString() + "m";
     }
     else if(place == 3)
     {
     tempString = n.toString() + "b";
     }
     else if(place == 4)
     {
     tempString = n.toString() + "t";
     }
     else if(place == 5)
     {
     tempString = n.toString() + "q";
     }
tempMoney = tempString;
  }

function gamble() {
	roll = Math.random();
	if (roll > 0.49){
		money *= 2;
		document.getElementById("gambleP").innerHTML = "You won!";
	}
	else {
		money = 0;
		document.getElementById("gambleP").innerHTML = "You lost!";
	};
	refresh();
}

  
function firstRun(){
document.getElementById("moneyy").innerHTML = money + "$";
msgFeed("No feed yet...");
document.getElementById("Worker1Cost").innerHTML = Worker1Cost + "$";
document.getElementById("Worker2Cost").innerHTML = Worker2Cost + "$";
document.getElementById("Worker3Cost").innerHTML = Worker3Cost + "$";
document.getElementById("Worker4Cost").innerHTML = Worker4Cost + "$";
document.getElementById("Worker1Amount").innerHTML = Worker1numb;
document.getElementById("Worker2Amount").innerHTML = Worker2numb;
document.getElementById("Worker3Amount").innerHTML = Worker3numb;
document.getElementById("Worker4Amount").innerHTML = Worker4numb;
setUpgradeDesc();
load();
};

function upgradeHobo () {
	if (hUNr == 0) {
		if (money >= hUC){
			money -= hUC;
			hUC *= 2;
			hoboGain *= 2;
			msgFeed("You bought the upgrade!");
			hoboUpgradeDesc = "More beer!";
			refresh();
			hUNr++;
		} else {
			miss = hUC - money;
			msgFeed("You need "+miss+"$ more!");
		};
	} else if (hUNr == 1) {
				if (money >= hUC){
			money -= hUC;
			hUC *= 2;
			hoboGain *= 2;
			msgFeed("You bought the upgrade!");
			hoboUpgradeDesc = "New boots!";
			refresh();
			hUNr++;
		} else {
			miss = hUC - money;
			msgFeed("You need "+miss+"$ more!");
		};
	} else if (hUNr == 2) {
				if (money >= hUC){
			money -= hUC;
			hUC *= 2;
			hoboGain *= 2;
			msgFeed("You bought the upgrade!");
			hoboUpgradeDesc = "Large beard";
			refresh();
			hUNr++;
		} else {
			miss = hUC - money;
			msgFeed("You need "+miss+"$ more!");
		};
	} else if (hUNr == 3) {
				if (money >= hUC){
			money -= hUC;
			hUC = " ";
			hoboGain *= 2;
			msgFeed("You bought the upgrade!");
			hoboUpgradeDesc = "More may be coming...";
			refresh();
			hUNr++;
		} else {
			miss = hUC - money;
			msgFeed("You need "+miss+"$ more!");
		};
	} else {
		
		
	};
	setUpgradeDesc();
};

function upgradeNerd () {
	if (nUNr == 0) {
		if (money >= nUC){
			money -= nUC;
			nUC *= 2;
			nerdGain *= 2;
			msgFeed("You bought the upgrade!");
			nerdUpgradeDesc = "Fedora";
			refresh();
			nUNr++;
		} else {
			miss = nUC - money;
			msgFeed("You need "+miss+"$ more!");
		};
	} else if (nUNr == 1) {
				if (money >= nUC){
			money -= nUC;
			nUC *= 2;
			nerdGain *= 2;
			msgFeed("You bought the upgrade!");
			nerdUpgradeDesc = "Glasses";
			refresh();
			nUNr++;
		} else {
			miss = nUC - money;
			msgFeed("You need "+miss+"$ more!");
		};
	} else if (nUNr == 2) {
				if (money >= hUC){
			money -= nUC;
			nUC *= 2;
			nerdGain *= 2;
			msgFeed("You bought the upgrade!");
			nerdUpgradeDesc = "New calculator";
			refresh();
			nUNr++;
		} else {
			miss = nUC - money;
			msgFeed("You need "+miss+"$ more!");
		};
	} else if (nUNr == 3) {
				if (money >= nUC){
			money -= nUC;
			nUC = " ";
			nerdGain *= 2;
			msgFeed("You bought the upgrade!");
			nerdUpgradeDesc = "More may be coming...";
			refresh();
			nUNr++;
		} else {
			miss = nUC - money;
			msgFeed("You need "+miss+"$ more!");
		};
	} else {
		
		
	};
	setUpgradeDesc();
};

function upgradeDonator () {
	if (dUNr == 0) {
		if (money >= dUC){
			money -= dUC;
			dUC *= 2;
			donatorGain *= 2;
			msgFeed("You bought the upgrade!");
			donatorUpgradeDesc = "Dad's phone number";
			refresh();
			dUNr++;
		} else {
			miss = dUC - money;
			msgFeed("You need "+miss+"$ more!");
		};
	} else if (dUNr == 1) {
				if (money >= dUC){
			money -= dUC;
			dUC *= 2;
			donatorGain *= 2;
			msgFeed("You bought the upgrade!");
			donatorUpgradeDesc = "High pitched voice";
			refresh();
			dUNr++;
		} else {
			miss = dUC - money;
			msgFeed("You need "+miss+"$ more!");
		};
	} else if (dUNr == 2) {
				if (money >= dUC){
			money -= dUC;
			dUC *= 2;
			donatorGain *= 2;
			msgFeed("You bought the upgrade!");
			donatorUpgradeDesc = "New computer";
			refresh();
			dUNr++;
		} else {
			miss = dUC - money;
			msgFeed("You need "+miss+"$ more!");
		};
	} else if (dUNr == 3) {
				if (money >= dUC){
			money -= dUC;
			dUC = " ";
			donatorGain *= 2;
			msgFeed("You bought the upgrade!");
			donatorUpgradeDesc = "More may be coming...";
			refresh();
			dUNr++;
		} else {
			miss = dUC - money;
			msgFeed("You need "+miss+"$ more!");
		};
	} else {
		
		
	};
	setUpgradeDesc();
};

function upgradeProstitude () {
	if (pUNr == 0) {
		if (money >= pUC){
			money -= pUC;
			pUC *= 2;
			prostitudeGain *= 2;
			msgFeed("You bought the upgrade!");
			prostitudeUpgradeDesc = "Bubblegum";
			refresh();
			pUNr++;
		} else {
			miss = pUC - money;
			msgFeed("You need "+miss+"$ more!");
		};
	} else if (pUNr == 1) {
				if (money >= pUC){
			money -= pUC;
			pUC *= 2;
			prostitudeGain *= 2;
			msgFeed("You bought the upgrade!");
			prostitudeUpgradeDesc = "Personal pimp";
			refresh();
			pUNr++;
		} else {
			miss = pUC - money;
			msgFeed("You need "+miss+"$ more!");
		};
	} else if (pUNr == 2) {
				if (money >= pUC){
			money -= pUC;
			pUC *= 2;
			prostitudeGain *= 2;
			msgFeed("You bought the upgrade!");
			prostitudeUpgradeDesc = "2 for 1 special";
			refresh();
			pUNr++;
		} else {
			miss = pUC - money;
			msgFeed("You need "+miss+"$ more!");
		};
	} else if (pUNr == 3) {
				if (money >= pUC){
			money -= pUC;
			pUC = " ";
			prostitudeGain *= 2;
			msgFeed("You bought the upgrade!");
			prostitudeUpgradeDesc = "More may be coming...";
			refresh();
			pUNr++;
		} else {
			miss = pUC - money;
			msgFeed("You need "+miss+"$ more!");
		};
	} else {
		
		
	};
	setUpgradeDesc();
};

function tick() {
    "use strict";
    money += incc - 1;
    refresh();
	tickAmount++;
	if (tickAmount >= 10){
		save();
		tickAmount = 0;
	};
};

function setUpgradeDesc() {
	document.getElementById("hoboUpgradeDesc").innerHTML = hoboUpgradeDesc;
	document.getElementById("nerdUpgradeDesc").innerHTML = nerdUpgradeDesc;
	document.getElementById("donatorUpgradeDesc").innerHTML = donatorUpgradeDesc;
	document.getElementById("prostitudeUpgradeDesc").innerHTML = prostitudeUpgradeDesc;
	
	document.getElementById("hoboUpgradeCost").innerHTML = hUC;
	document.getElementById("nerdUpgradeCost").innerHTML = nUC;
	document.getElementById("donatorUpgradeCost").innerHTML = dUC;
	document.getElementById("prostitudeUpgradeCost").innerHTML = pUC;
};

function updateProgressBar() {
	victory = money/100000000*100
	document.getElementById("progressBar").style.width = victory+"%";
	prVictory = Math.round(victory);
	document.getElementById("progress%").innerHTML = prVictory + "%";
	if (won == 0) {
		if (victory >= 100){
		alert("Victory is achieved!");
		won = 1;
		document.getElementById("uWot").src = "http://static4.fjcdn.com/thumbnails/comments/Oi+m8+u+fookin+mad+m8+u+fookin+_09cddd977aa21792732f0a6f8072e0da.jpg";
		};
	};
}

var tickOnce = setInterval(tick, 1000); //sets tick() interval

function refresh(){
	updateProgressBar();
	tempMoney = money;
	roundNumber(tempMoney);
	money = Math.round(money);
	Worker1Cost = Math.round(Worker1Cost);
	Worker2Cost = Math.round(Worker2Cost);
	Worker3Cost = Math.round(Worker3Cost);
	Worker4Cost = Math.round(Worker4Cost);
	document.getElementById("moneyy").innerHTML = "$ " + tempMoney;
	document.getElementById("Worker1Cost").innerHTML = Worker1Cost + "$";
	document.getElementById("Worker2Cost").innerHTML = Worker2Cost + "$";
	document.getElementById("Worker3Cost").innerHTML = Worker3Cost + "$";
	document.getElementById("Worker4Cost").innerHTML = Worker4Cost + "$";
	document.getElementById("Worker1Amount").innerHTML = Worker1numb;
	document.getElementById("Worker2Amount").innerHTML = Worker2numb;
	document.getElementById("Worker3Amount").innerHTML = Worker3numb;
	document.getElementById("Worker4Amount").innerHTML = Worker4numb;
	incc = startIncc + (hoboGain*Worker1numb) + (nerdGain*Worker2numb) + (donatorGain*Worker3numb) + (prostitudeGain*Worker4numb);
	setUpgradeDesc();
};

function feedRefresh() {
document.getElementById("Feed1").innerHTML = feed1;
document.getElementById("Feed2").innerHTML = feed2;
document.getElementById("Feed3").innerHTML = feed3;
document.getElementById("Feed4").innerHTML = feed4;
document.getElementById("Feed5").innerHTML = feed5;
document.getElementById("Feed6").innerHTML = feed6;
document.getElementById("Feed7").innerHTML = feed7;
document.getElementById("Feed8").innerHTML = feed8;
document.getElementById("Feed9").innerHTML = feed9;
document.getElementById("Feed10").innerHTML = feed10;
document.getElementById("Feed11").innerHTML = feed11;
document.getElementById("Feed12").innerHTML = feed12;
document.getElementById("Feed13").innerHTML = feed13;
document.getElementById("Feed14").innerHTML = feed14;
document.getElementById("Feed15").innerHTML = feed15;
}
//Functions
function inc(clickAmount) {
	var incAmount = incc*clickAmount;
    money += incAmount;
	refresh();
};

function msgFeed(newFeed){
	if(oldFeed != newFeed){
	feed15 = feed14;
	feed14 = feed13;
	feed13 = feed12;
	feed12 = feed11;
	feed11 = feed10;
	feed10 = feed9;
	feed9 = feed8;
	feed8 = feed7;
	feed7 = feed6;
	feed6 = feed5;
	feed5 = feed4;
	feed4 = feed3;
	feed3 = feed2;
	feed2 = feed1;
	feed1 = newFeed;
	fTick = 0
	}
	else{
		if(fTick == 0){
			fTick = 2;
		}
		else{
		fTick++;
		};
		feed1 = newFeed+" x"+fTick;
	};
	oldFeed = newFeed
	feedRefresh();
};

function buyWorker1(amount){
	if (money >= Worker1Cost){
		money -= Worker1Cost;
		Worker1numb++;
		msgFeed("You bought 1 hobo for "+ Worker1Cost + "$");
		Worker1Cost *= 1.05;
		refresh();
	}
	else {
		miss = Worker1Cost - money;
		msgFeed("You need "+ miss + "$ more!");
	};
};

function buyWorker2(amount){
	if (money >= Worker2Cost){
		money -= Worker2Cost;
		msgFeed("You bought 1 nerd for "+ Worker2Cost + "$")
		Worker2Cost *= 1.1;
		Worker2numb++;
		refresh();
	}
	else {
		miss = Worker2Cost - money;
		msgFeed("You need "+ miss + "$ more!");
	};
};

function buyWorker3(amount){
	if (money >= Worker3Cost){
		money -= Worker3Cost;
		msgFeed("You bought 1 donater for "+ Worker3Cost + "$");
		Worker3Cost *= 1.15;
		Worker3numb++;
		refresh();
	}
	else {
		miss = Worker3Cost - money;
		msgFeed("You need "+ miss + "$ more!");
	};
};

function buyWorker4(amount){
	if (money >= Worker4Cost){
		money -= Worker4Cost;
		msgFeed("You bought 1 prostitude for "+ Worker4Cost + "$");
		Worker4Cost *= 1.2;
		Worker4numb++;
		refresh();
	}
	else {
		miss = Worker4Cost - money;
		msgFeed("You need "+ miss + "$ more!");
	};
};

function save() {
    "use strict";
    var saveData = {
		money: money,
		incc: incc,
		Worker1Cost: Worker1Cost,
		Worker2Cost: Worker2Cost,
		Worker3Cost: Worker3Cost,
		Worker4Cost: Worker4Cost,
		Worker1numb: Worker1numb,
		Worker2numb: Worker2numb,
		Worker3numb: Worker3numb,
		Worker4numb: Worker4numb,
		hoboGain: hoboGain,
		nerdGain: nerdGain,
		donatorGain: donatorGain,
		prostitudeGain: prostitudeGain,
		hUNr: hUNr,
		nUNr: nUNr,
		dUNr: dUNr,
		pUNr: pUNr,
		hUC: hUC,
		nUC: nUC,
		dUC: dUC,
		pUC: pUC,
		hoboUpgradeDesc: hoboUpgradeDesc,
		nerdUpgradeDesc: nerdUpgradeDesc,
		donatorUpgradeDesc: donatorUpgradeDesc,
		prostitudeUpgradeDesc: prostitudeUpgradeDesc,
    };
    localStorage.setItem("saveData", JSON.stringify(saveData));
}

function load() {
    "use strict";
    var loadData = JSON.parse(localStorage.getItem("saveData"));
    if (typeof loadData.money !== "undefined") {money = loadData.money; }
    if (typeof loadData.incc !== "undefined") {incc = loadData.incc; }
    if (typeof loadData.Worker1Cost !== "undefined") {Worker1Cost = loadData.Worker1Cost; }
    if (typeof loadData.Worker2Cost !== "undefined") {Worker2Cost = loadData.Worker2Cost; }
    if (typeof loadData.Worker3Cost !== "undefined") {Worker3Cost = loadData.Worker3Cost; }
    if (typeof loadData.Worker4Cost !== "undefined") {Worker4Cost = loadData.Worker4Cost; }
    if (typeof loadData.Worker1numb !== "undefined") {Worker1numb = loadData.Worker1numb; }
    if (typeof loadData.Worker2numb !== "undefined") {Worker2numb = loadData.Worker2numb; }
    if (typeof loadData.Worker3numb !== "undefined") {Worker3numb = loadData.Worker3numb; }
    if (typeof loadData.Worker4numb !== "undefined") {Worker4numb = loadData.Worker4numb; }
    if (typeof loadData.hoboGain !== "undefined") {hoboGain = loadData.hoboGain; }
    if (typeof loadData.nerdGain !== "undefined") {nerdGain = loadData.nerdGain; }
    if (typeof loadData.donatorGain !== "undefined") {donatorGain = loadData.donatorGain; }
    if (typeof loadData.prostitudeGain !== "undefined") {prostitudeGain = loadData.prostitudeGain; }
    if (typeof loadData.hUNr !== "undefined") {hUNr = loadData.hUNr; }
    if (typeof loadData.nUNr !== "undefined") {nUNr = loadData.nUNr; }
    if (typeof loadData.dUNr !== "undefined") {dUNr = loadData.dUNr; }
    if (typeof loadData.pUNr !== "undefined") {pUNr = loadData.pUNr; }
    if (typeof loadData.hUC !== "undefined") {hUC = loadData.hUC; }
    if (typeof loadData.nUC !== "undefined") {nUC = loadData.nUC; }
    if (typeof loadData.dUC !== "undefined") {dUC = loadData.dUC; }
    if (typeof loadData.pUC !== "undefined") {pUC = loadData.pUC; }
	if (typeof loadData.hoboUpgradeDesc !== "undefined") {hoboUpgradeDesc = loadData.hoboUpgradeDesc; }
    if (typeof loadData.nerdUpgradeDesc !== "undefined") {nerdUpgradeDesc = loadData.nerdUpgradeDesc; }
    if (typeof loadData.donatorUpgradeDesc !== "undefined") {donatorUpgradeDesc = loadData.donatorUpgradeDesc; }
    if (typeof loadData.prostitudeUpgradeDesc !== "undefined") {prostitudeUpgradeDesc = loadData.prostitudeUpgradeDesc; }
    refresh();
}

function delSave() {
    "use strict";
    localStorage.removeItem("saveData");
	if (confirm("Are you sure you want to reset? \nNothing will be gained from thes (exept a clean save)") == true) {
		location.reload();
	}
}