/* =====================================
   WINDY CITY WEAPONS
   GTA ONLY WEAPON SPIN SYSTEM

   PART 1/3
===================================== */


const weapons = {



/* =========================
        TIER 0
========================= */


tier0:[

{
name:"Pistol",
image:"images/pistol.jpeg",
damage:45,
accuracy:70,
range:45
},

{
name:"Pistol Mk II",
image:"images/pistol_mk2.jpeg",
damage:50,
accuracy:80,
range:50
},

{
name:"Combat Pistol",
image:"images/combat_pistol.jpeg",
damage:55,
accuracy:85,
range:55
},

{
name:"SNS Pistol",
image:"images/sns_pistol.jpeg",
damage:45,
accuracy:70,
range:40
},

{
name:"SNS Pistol Mk II",
image:"images/sns_pistol_mk2.jpeg",
damage:55,
accuracy:75,
range:45
},

{
name:"Heavy Pistol",
image:"images/heavy_pistol.jpeg",
damage:70,
accuracy:70,
range:60
},

{
name:"Vintage Pistol",
image:"images/vintage_pistol.jpeg",
damage:60,
accuracy:75,
range:55
},

{
name:"Ceramic Pistol",
image:"images/ceramic_pistol.jpeg",
damage:50,
accuracy:70,
range:45
}

],







/* =========================
        TIER 1
========================= */


tier1:[

{
name:"Pistol",
image:"images/pistol.jpeg",
damage:45,
accuracy:70,
range:45
},

{
name:"Pistol Mk II",
image:"images/pistol_mk2.jpeg",
damage:50,
accuracy:80,
range:50
},

{
name:"Combat Pistol",
image:"images/combat_pistol.jpeg",
damage:55,
accuracy:85,
range:55
},

{
name:"SNS Pistol",
image:"images/sns_pistol.jpeg",
damage:45,
accuracy:70,
range:40
},

{
name:"SNS Pistol Mk II",
image:"images/sns_pistol_mk2.jpeg",
damage:55,
accuracy:75,
range:45
},

{
name:"Heavy Pistol",
image:"images/heavy_pistol.jpeg",
damage:70,
accuracy:70,
range:60
},

{
name:"Vintage Pistol",
image:"images/vintage_pistol.jpeg",
damage:60,
accuracy:75,
range:55
},

{
name:"Ceramic Pistol",
image:"images/ceramic_pistol.jpeg",
damage:50,
accuracy:70,
range:45
}

],







/* =========================
        TIER 1.5
========================= */


tier15:[

{
name:"SMG",
image:"images/smg.jpeg",
damage:70,
accuracy:75,
range:60
},

{
name:"SMG Mk II",
image:"images/smg_mk2.jpeg",
damage:75,
accuracy:80,
range:65
},

{
name:"Machine Pistol",
image:"images/machine_pistol.jpeg",
damage:65,
accuracy:70,
range:50
},

{
name:"AP Pistol",
image:"images/ap_pistol.jpeg",
damage:80,
accuracy:85,
range:60
},

{
name:"Pistol .50",
image:"images/pistol50.jpeg",
damage:85,
accuracy:80,
range:70
},

{
name:"Heavy Pistol",
image:"images/heavy_pistol.jpeg",
damage:70,
accuracy:70,
range:60
},

{
name:"WM 29 Pistol",
image:"images/wm29.jpeg",
damage:75,
accuracy:80,
range:65
},

{
name:"Compact Rifle",
image:"images/compact_rifle.jpeg",
damage:85,
accuracy:70,
range:65
},

{
name:"Heavy Rifle",
image:"images/heavy_rifle.jpeg",
damage:90,
accuracy:85,
range:75
}

],







/* =========================
        TIER 2
========================= */


tier2:[

{
name:"Carbine Rifle",
image:"images/carbine_rifle.jpeg",
damage:90,
accuracy:85,
range:85
},

{
name:"Carbine Rifle Mk II",
image:"images/carbine_rifle_mk2.jpeg",
damage:95,
accuracy:90,
range:90
},

{
name:"Compact Rifle",
image:"images/compact_rifle.jpeg",
damage:85,
accuracy:70,
range:65
},

{
name:"AP Pistol",
image:"images/ap_pistol.jpeg",
damage:80,
accuracy:85,
range:60
},

{
name:"Micro SMG",
image:"images/micro_smg.jpeg",
damage:75,
accuracy:80,
range:50
},

{
name:"Tactical SMG",
image:"images/tactical_smg.jpeg",
damage:80,
accuracy:75,
range:55
},

{
name:"Combat PDW",
image:"images/combat_pdw.jpeg",
damage:85,
accuracy:85,
range:70
}

],






/* =========================
       SETTINGS
========================= */


currentTier:"tier0",

currentWeaponPool:[],

spinHistory:[]


};/* =========================
      WEAPON SPIN SYSTEM
========================= */



weapons.currentWeaponPool = weapons.tier0;



let spinning = false;





function randomizeWeapon(){



    if(spinning){

        return;

    }



    if(weapons.currentWeaponPool.length === 0){


        alert("Select a tier first!");

        return;


    }





    spinning = true;




    let spinTime = 4500;

    let speed = 80;

    let elapsed = 0;





    let winner =

    weapons.currentWeaponPool[

        Math.floor(

            Math.random()

            *

            weapons.currentWeaponPool.length

        )

    ];








    let spinAnimation = setInterval(()=>{



        let randomWeapon =

        weapons.currentWeaponPool[

            Math.floor(

                Math.random()

                *

                weapons.currentWeaponPool.length

            )

        ];





        displayWeapon(randomWeapon);






        elapsed += speed;





        if(elapsed >= spinTime){



            clearInterval(spinAnimation);



            displayWinner(winner);



            spinning = false;



        }



    },speed);



}










/* =========================
      DISPLAY ROLLING WEAPON
========================= */



function displayWeapon(weapon){



    document.getElementById("weaponImage").src =

    weapon.image;




    document.getElementById("weaponName").innerHTML =

    weapon.name;



}










/* =========================
      FINAL WINNER
========================= */



function displayWinner(weapon){



    document.getElementById("weaponImage").src =

    weapon.image;




    document.getElementById("weaponName").innerHTML =

    weapon.name;







    document.getElementById("weaponStats").innerHTML =



    `

    <h3>${weapon.name}</h3>


    Damage: ${weapon.damage}


    <br>


    Accuracy: ${weapon.accuracy}


    <br>


    Range: ${weapon.range}


    `;







    weapons.spinHistory.push(weapon);



    updateHistory();



}










/* =========================
      SPIN HISTORY DISPLAY
========================= */



function updateHistory(){



    let historyBox =

    document.getElementById("spinHistory");




    historyBox.innerHTML = "";







    weapons.spinHistory.forEach((weapon)=>{



        let card =

        document.createElement("div");




        card.className = "history-card";






        card.innerHTML =



        `

        <img src="${weapon.image}">


        <p>${weapon.name}</p>


        `;






        historyBox.appendChild(card);



    });



}










/* =========================
      CLEAR HISTORY
========================= */



function clearHistory(){



    weapons.spinHistory = [];




    document.getElementById("spinHistory").innerHTML =

    "No weapons spun yet.";



}/* =========================
      RANDOMIZE MENU
========================= */


function openRandomizer(){


    const menu = document.getElementById("tierMenu");


    menu.classList.toggle("hidden");


}









/* =========================
      SELECT TIER
========================= */


function selectTier(tier){



    weapons.currentTier = tier;



    weapons.currentWeaponPool = weapons[tier];



    updateCurrentPool();



    document.getElementById("tierMenu")

    .classList.add("hidden");



}









/* =========================
      CURRENT WEAPON POOL
========================= */


function updateCurrentPool(){



    let pool = document.getElementById("currentPool");



    pool.innerHTML = "";





    weapons.currentWeaponPool.forEach((weapon)=>{



        let item = document.createElement("div");



        item.innerHTML =



        `

        🔫 ${weapon.name}

        `;



        pool.appendChild(item);



    });



}









/* =========================
      WEAPON GALLERY
========================= */


function openGallery(){



    let galleryScreen =

    document.getElementById("galleryScreen");



    galleryScreen.classList.remove("hidden");



    loadGallery();



}







function closeGallery(){



    document.getElementById("galleryScreen")

    .classList.add("hidden");



}









function loadGallery(){



    let gallery =

    document.getElementById("weaponGallery");



    gallery.innerHTML = "";





    weapons.currentWeaponPool.forEach((weapon)=>{



        let card =

        document.createElement("div");



        card.className = "weapon-card";







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
      WEBSITE START
========================= */



window.onload = function(){



    weapons.currentWeaponPool = weapons.tier0;



    updateCurrentPool();



};
