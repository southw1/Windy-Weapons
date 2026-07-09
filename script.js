/* =====================================
   WINDY CITY WEAPONS
   GTA WEAPON SPIN SYSTEM

   SCRIPT.JS PART 1/6

===================================== */



/* =========================
        TIER 0 WEAPONS
========================= */


const tier0Weapons = [

    {
        name:"Pistol",
        image:"images/pistol.jpeg",
        damage:45,
        accuracy:70,
        range:45
    },

    {
        name:"Pistol Mk II",
        image:"images/pistol mk.jpeg",
        damage:50,
        accuracy:80,
        range:50
    },

    {
        name:"Combat Pistol",
        image:"images/combat pistol.jpeg",
        damage:55,
        accuracy:85,
        range:55
    },

    {
        name:"SNS Pistol",
        image:"images/sns.jpeg",
        damage:45,
        accuracy:70,
        range:40
    },

    {
        name:"SNS Pistol Mk II",
        image:"images/sns mk.jpeg",
        damage:55,
        accuracy:75,
        range:45
    },

    {
        name:"Heavy Pistol",
        image:"images/heavy pistol.jpeg",
        damage:70,
        accuracy:70,
        range:60
    },

    {
        name:"Vintage Pistol",
        image:"images/vintage pistol.jpeg",
        damage:60,
        accuracy:75,
        range:55
    },

    {
        name:"Ceramic Pistol",
        image:"images/ceramic pistol.jpeg",
        damage:50,
        accuracy:70,
        range:45
    }

];







/* =========================
        TIER 1 WEAPONS
========================= */


const tier1Weapons = [

    ...tier0Weapons

];







/* =========================
   TIER 1 CARRY OVER FOR TIER 1.5
========================= */


const tier1CarryFor15 = [

    {
        name:"Heavy Pistol",
        image:"images/heavy pistol.jpeg",
        damage:70,
        accuracy:70,
        range:60
    },

    {
        name:"Combat Pistol",
        image:"images/combat pistol.jpeg",
        damage:55,
        accuracy:85,
        range:55
    },

    {
        name:"Pistol Mk II",
        image:"images/pistol mk.jpeg",
        damage:50,
        accuracy:80,
        range:50
    },

    {
        name:"Ceramic Pistol",
        image:"images/ceramic pistol.jpeg",
        damage:50,
        accuracy:70,
        range:45
    }

];
/* =========================
      TIER 1.5 WEAPONS
========================= */


/*
 Tier 1.5 Spin:
 60% chance = these weapons
 40% chance = Tier 1 carry-over
*/


const tier15Weapons = [

    {
        name:"SMG",
        image:"images/smg.jpeg",
        damage:70,
        accuracy:75,
        range:60
    },

    {
        name:"SMG Mk II",
        image:"images/smg mk.jpeg",
        damage:75,
        accuracy:80,
        range:65
    },

    {
        name:"Machine Pistol",
        image:"images/machine pistol.jpeg",
        damage:65,
        accuracy:70,
        range:50
    },

    {
        name:"AP Pistol",
        image:"images/ap pistol.jpeg",
        damage:80,
        accuracy:85,
        range:60
    },

    {
        name:"Pistol .50",
        image:"images/pistol 50..jpeg",
        damage:85,
        accuracy:80,
        range:70
    },

    {
        name:"WM 29 Pistol",
        image:"images/wm29 pistol.jpeg",
        damage:75,
        accuracy:80,
        range:65
    },

    {
        name:"Compact Rifle",
        image:"images/compact rifle.jpeg",
        damage:85,
        accuracy:70,
        range:65
    },

    {
        name:"Heavy Rifle",
        image:"images/heavy rifle.jpeg",
        damage:90,
        accuracy:85,
        range:75
    }

];








/* =========================
   TIER 2 CARRY OVER
========================= */


/*
 Tier 2:
 35% chance = these Tier 1 guns
*/


const tier1CarryFor2 = [

    {
        name:"Heavy Pistol",
        image:"images/heavy pistol.jpeg",
        damage:70,
        accuracy:70,
        range:60
    },

    {
        name:"Combat Pistol",
        image:"images/combat pistol.jpeg",
        damage:55,
        accuracy:85,
        range:55
    },

    {
        name:"Pistol Mk II",
        image:"images/pistol mk.jpeg",
        damage:50,
        accuracy:80,
        range:50
    }

];








/* =========================
        TIER 2 WEAPONS
========================= */


/*
 Tier 2:
 65% chance = these weapons
*/


const tier2Weapons = [

    {
        name:"Carbine Rifle",
        image:"images/carbine rifle.jpeg",
        damage:90,
        accuracy:85,
        range:85
    },

    {
        name:"Carbine Rifle Mk II",
        image:"images/carbine rifle mk.jpeg",
        damage:95,
        accuracy:90,
        range:90
    },

    {
        name:"Micro SMG",
        image:"images/micro smg.jpeg",
        damage:75,
        accuracy:80,
        range:50
    },

    {
        name:"Tactical SMG",
        image:"images/tacital smg.jpeg",
        damage:80,
        accuracy:75,
        range:55
    },

    {
        name:"Combat PDW",
        image:"images/combat pdw.jpeg",
        damage:85,
        accuracy:85,
        range:70
    }

];
/* =====================================
        SCRIPT.JS PART 3/6

        TIER SYSTEM + SPIN SETUP

===================================== */





/* =========================
      CURRENT SYSTEM DATA
========================= */


let currentTier = "tier0";

let currentPool = tier0Weapons;

let spinHistory = [];

let isSpinning = false;







/* =========================
        SELECT TIER
========================= */


function selectTier(tier){



    currentTier = tier;



    if(tier === "tier0"){


        currentPool = tier0Weapons;


    }



    else if(tier === "tier1"){


        currentPool = tier1Weapons;


    }



    else if(tier === "tier15"){


        currentPool = tier15Weapons;


    }



    else if(tier === "tier2"){


        currentPool = tier2Weapons;


    }




    updateCurrentPool();



}








/* =========================
      GET RANDOM WEAPON
========================= */



function getRandomWeapon(pool){



    return pool[

        Math.floor(

            Math.random()

            *

            pool.length

        )

    ];



}








/* =========================
      TIER 1.5 ROLL SYSTEM
========================= */


/*

60% Tier 1.5 weapons

40% Tier 1 carry-over


*/



function rollTier15(){



    let roll = Math.random();



    if(roll < 0.60){



        return getRandomWeapon(

            tier15Weapons

        );



    }



    else{



        return getRandomWeapon(

            tier1CarryFor15

        );



    }



}








/* =========================
        TIER 2 ROLL SYSTEM
========================= */


/*

65% Tier 2 weapons

35% Tier 1 carry-over


*/



function rollTier2(){



    let roll = Math.random();



    if(roll < 0.65){



        return getRandomWeapon(

            tier2Weapons

        );



    }



    else{



        return getRandomWeapon(

            tier1CarryFor2

        );



    }



}








/* =========================
        MAIN ROLL
========================= */



function getWinningWeapon(){



    if(currentTier === "tier0"){



        return getRandomWeapon(

            tier0Weapons

        );



    }





    if(currentTier === "tier1"){



        return getRandomWeapon(

            tier1Weapons

        );



    }






    if(currentTier === "tier15"){



        return rollTier15();



    }






    if(currentTier === "tier2"){



        return rollTier2();



    }



}
/* =====================================
        SCRIPT.JS PART 4/6

        WEAPON SPIN ENGINE

===================================== */






/* =========================
        START SPIN
========================= */



function startSpin(){



    if(isSpinning){

        return;

    }



    isSpinning = true;




    let weaponDisplay =

    document.getElementById("weaponImage");



    let weaponName =

    document.getElementById("weaponName");






    let duration = 4500;

    let speed = 80;

    let elapsed = 0;







    let finalWeapon = getWinningWeapon();






    let spin = setInterval(()=>{



        let randomWeapon;



        if(currentTier === "tier0"){



            randomWeapon = getRandomWeapon(

                tier0Weapons

            );



        }



        else if(currentTier === "tier1"){



            randomWeapon = getRandomWeapon(

                tier1Weapons

            );



        }



        else if(currentTier === "tier15"){



            randomWeapon = getRandomWeapon(

                tier15Weapons

            );



        }



        else if(currentTier === "tier2"){



            randomWeapon = getRandomWeapon(

                tier2Weapons

            );



        }







        weaponDisplay.src =

        randomWeapon.image;




        weaponName.innerHTML =

        randomWeapon.name;







        elapsed += speed;







        if(elapsed >= duration){



            clearInterval(spin);



            showWinner(finalWeapon);



        }





    },speed);




}









/* =========================
        SHOW WINNER
========================= */



function showWinner(weapon){



    let weaponDisplay =

    document.getElementById("weaponImage");



    let weaponName =

    document.getElementById("weaponName");






    weaponDisplay.src =

    weapon.image;




    weaponName.innerHTML =

    weapon.name;






    displayStats(weapon);





    spinHistory.push(weapon);





    updateHistory();





    isSpinning = false;



}









/* =========================
        WEAPON STATS
========================= */



function displayStats(weapon){



    let stats =

    document.getElementById("weaponStats");





    stats.innerHTML =



    `

    <h3>${weapon.name}</h3>

    <br>

    Damage: ${weapon.damage}

    <br>

    Accuracy: ${weapon.accuracy}

    <br>

    Range: ${weapon.range}

    `;



}/* =====================================
        SCRIPT.JS PART 5/6

        HISTORY + CURRENT POOL

===================================== */







/* =========================
      UPDATE SPIN HISTORY
========================= */



function updateHistory(){



    let historyBox =

    document.getElementById("spinHistory");





    historyBox.innerHTML = "";







    spinHistory.forEach((weapon)=>{



        let card =

        document.createElement("div");




        card.className =

        "history-card";







        card.innerHTML =



        `

        <img src="${weapon.image}">


        <h4>${weapon.name}</h4>


        `;







        historyBox.appendChild(card);



    });



}










/* =========================
        CLEAR HISTORY
========================= */



function clearHistory(){



    spinHistory = [];





    document.getElementById("spinHistory").innerHTML =

    "";



}









/* =========================
      CURRENT POOL DISPLAY
========================= */



function updateCurrentPool(){



    let poolBox =

    document.getElementById("currentPool");





    if(!poolBox){

        return;

    }






    poolBox.innerHTML = "";







    let displayPool;






    if(currentTier === "tier0"){



        displayPool = tier0Weapons;



    }



    else if(currentTier === "tier1"){



        displayPool = tier1Weapons;



    }



    else if(currentTier === "tier15"){



        displayPool = [

            ...tier15Weapons,

            ...tier1CarryFor15

        ];



    }



    else if(currentTier === "tier2"){



        displayPool = [

            ...tier2Weapons,

            ...tier1CarryFor2

        ];



    }







    displayPool.forEach((weapon)=>{



        let item =

        document.createElement("div");







        item.className =

        "pool-item";








        item.innerHTML =



        `

        <img src="${weapon.image}">


        <span>

        ${weapon.name}

        </span>


        `;








        poolBox.appendChild(item);



    });



}









/* =========================
       DEFAULT LOAD
========================= */



window.addEventListener(

"load",

()=>{



    selectTier("tier0");



}

);/* =====================================
        SCRIPT.JS PART 6/6

        GALLERY + FINAL CONNECTIONS

===================================== */








/* =========================
        OPEN GALLERY
========================= */



function openGallery(){



    let gallery =

    document.getElementById("galleryScreen");





    gallery.classList.remove("hidden");





    loadGallery();



}









/* =========================
        CLOSE GALLERY
========================= */



function closeGallery(){



    document

    .getElementById("galleryScreen")

    .classList.add("hidden");



}









/* =========================
        LOAD GALLERY
========================= */



function loadGallery(){



    let gallery =

    document.getElementById("weaponGallery");





    if(!gallery){

        return;

    }






    gallery.innerHTML = "";







    let weaponsToShow;






    if(currentTier === "tier0"){



        weaponsToShow = tier0Weapons;



    }



    else if(currentTier === "tier1"){



        weaponsToShow = tier1Weapons;



    }



    else if(currentTier === "tier15"){



        weaponsToShow = [

            ...tier15Weapons,

            ...tier1CarryFor15

        ];



    }



    else if(currentTier === "tier2"){



        weaponsToShow = [

            ...tier2Weapons,

            ...tier1CarryFor2

        ];



    }







    weaponsToShow.forEach((weapon)=>{



        let card =

        document.createElement("div");





        card.className =

        "weapon-card";








        card.onclick = function(){



            document

            .getElementById("weaponImage")

            .src = weapon.image;





            document

            .getElementById("weaponName")

            .innerHTML = weapon.name;





            displayStats(weapon);



            closeGallery();



        };








        card.innerHTML =



        `

        <img src="${weapon.image}">


        <h3>

        ${weapon.name}

        </h3>


        <p>

        Damage: ${weapon.damage}

        <br>

        Accuracy: ${weapon.accuracy}

        <br>

        Range: ${weapon.range}

        </p>


        `;







        gallery.appendChild(card);



    });



}









/* =========================
      BUTTON CONNECTIONS
========================= */



document.addEventListener(

"DOMContentLoaded",

()=>{





    let spinButton =

    document.getElementById("spinButton");





    if(spinButton){



        spinButton.onclick = startSpin;



    }








    let clearButton =

    document.getElementById("clearButton");





    if(clearButton){



        clearButton.onclick = clearHistory;



    }








    let galleryButton =

    document.getElementById("galleryButton");





    if(galleryButton){



        galleryButton.onclick = openGallery;



    }







});








/* =========================
      FINAL STARTUP
========================= */



selectTier("tier0");
