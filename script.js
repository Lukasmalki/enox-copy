const date = document.getElementById('date');
const time = document.getElementById('time');

const dateInterval = setInterval(() => {
    const newDate = new Date();
    let currentMonth = (newDate.getMonth() + 1);
    let currentDate = newDate.getDate();

    let currentHour = newDate.getHours();
    let currentMinute = newDate.getMinutes();

    if (currentMonth + 1 < 10) {
        currentMonth = '0' + (newDate.getMonth() + 1);
    }

    if (currentDate < 10) {
        currentDate = '0' + newDate.getDate();
    }

    if (currentHour < 10) {
        currentHour = '0' + newDate.getHours();
    }

    if (currentMinute < 10) {
        currentMinute = '0' + newDate.getMinutes();
    }


    date.innerText = newDate.getFullYear() + '-' + currentMonth + '-' + currentDate;

    time.innerText = currentHour + ':' + currentMinute;
}, 100)


const dropdownBtn = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});


let groups = [
    {
    name: "Startsida"
    },
    {
    name: "Pizzor",
    moms: 12
    },
    {
    name: "Förrätter",
    moms: 12
    },
    {
    name: "Sprit",
    moms: 25
    }]

const rightSection = document.querySelector(".right-section");
    rightSection.insertAdjacentHTML("beforeend",
    `<button class="mainpage-btn" onclick="huvudgruppClick()">${groups[0].name}</button>
     <button class="group-pizzor">${groups[1].name}</button>
     <button class="group-förrätter">${groups[2].name}</button>
     <button class="group-sprit">${groups[3].name}</button>`);


const enoxContainer = document.querySelector(".enox-container");
const mainContainer = document.querySelector(".main");
const loginContainer = document.querySelector(".login-page");

const logoutBtn = document.querySelector(".loggaut");
    logoutBtn.addEventListener('click', () => {
        mainContainer.style.display = 'none';
        loginContainer.style.display = 'flex';
        
        document.addEventListener("keydown", event => {
            const digitRegex = /^\d$/;
        
            if (digitRegex.test(event.key) && password.length < 4) {
                password += event.key;
                console.log(password);
                }
                if (password.length == 1) {
                    passwordDot1.style.color = 'rgb(68, 150, 132)';
                    passwordDot2.style.color = '';
                    passwordDot3.style.color = '';
                    passwordDot4.style.color = '';
                }
                else if (password.length == 2) {
                    passwordDot2.style.color = 'rgb(68, 150, 132)';
                }
                else if (password.length == 3) {
                    passwordDot3.style.color = 'rgb(68, 150, 132)';
                }
                else if (password.length == 4) {
                    passwordDot4.style.color = 'rgb(68, 150, 132)';
                }
        })
    })

console.log(logoutBtn)

let buttons = [
    {
    name: "Kebabpizza",
    price: 120,
    huvudgruppIndex: 1
    },
    {
    name: "Capricciosa",
    price: 100,
    huvudgruppIndex: 1
    },
    {
    name: "Hawaii",
    price: 100,
    huvudgruppIndex: 1
    },
    {
    name: "Mexicana",
    price: 100,
    huvudgruppIndex: 1
    },
    {
    name: "Vitlöksbröd",
    price: 59,
    huvudgruppIndex: 2
    },
    {
    name: "Kycklingvingar",
    price: 79,
    huvudgruppIndex: 2
    },
    {
    name: "Toast Skagen",
    price: 59,
    huvudgruppIndex: 2
    },
    {
    name: "Vårrullar",
    price: 69,
    huvudgruppIndex: 2
    },
    {
    name: "Vodka Redbull",
    price: 109,
    huvudgruppIndex: 3
    },
    {
    name: "Gin & Tonic",
    price: 119,
    huvudgruppIndex: 3
    },
    {
    name: "Irish Coffee",
    price: 119,
    huvudgruppIndex: 3
    },
    {
    name: "Dry Martini",
    price: 129,
    huvudgruppIndex: 3
    }];


const articleSection = document.querySelector(".article-section");
const mainpageBtn = document.querySelector(".mainpage-btn");

articleSection.insertAdjacentHTML("beforeend",
`<div class="article">
    <button class="btnrow1">${buttons[0].name}</button>
    <button class="btnrow1">${buttons[1].name}</button>
    <button class="btnrow1">${buttons[2].name}</button>
    <button class="btnrow1">${buttons[3].name}</button>
    <button class="btnrow2">${buttons[4].name}</button>
    <button class="btnrow2">${buttons[5].name}</button>
    <button class="btnrow2">${buttons[6].name}</button>
    <button class="btnrow2">${buttons[7].name}</button>
    <button class="btnrow3">${buttons[8].name}</button>
    <button class="btnrow3">${buttons[9].name}</button>
    <button class="btnrow3">${buttons[10].name}</button>
    <button class="btnrow3">${buttons[11].name}</button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
</div>`)

function huvudgruppClick() {
    articleSection.innerHTML = "";
    articleSection.insertAdjacentHTML("beforeend",
    `<div class="article">
        <button class="btnrow1">${buttons[0].name}</button>
        <button class="btnrow1">${buttons[1].name}</button>
        <button class="btnrow1">${buttons[2].name}</button>
        <button class="btnrow1">${buttons[3].name}</button>
        <button class="btnrow2">${buttons[4].name}</button>
        <button class="btnrow2">${buttons[5].name}</button>
        <button class="btnrow2">${buttons[6].name}</button>
        <button class="btnrow2">${buttons[7].name}</button>
        <button class="btnrow3">${buttons[8].name}</button>
        <button class="btnrow3">${buttons[9].name}</button>
        <button class="btnrow3">${buttons[10].name}</button>
        <button class="btnrow3">${buttons[11].name}</button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
    </div>`)
}

let password = "";
const passwordDot1 = document.querySelector(".passworddot-1");
const passwordDot2 = document.querySelector(".passworddot-2");
const passwordDot3 = document.querySelector(".passworddot-3");
const passwordDot4 = document.querySelector(".passworddot-4");

function managePassword(loginDigit) {

    if (password.length < 4) {
        password += loginDigit;
        felKod.innerText = "";
        console.log(password)
    }
    if (password.length == 1) {
        passwordDot1.style.color = 'rgb(68, 150, 132)';
        passwordDot2.style.color = '';
        passwordDot3.style.color = '';
        passwordDot4.style.color = '';
    }
    else if (password.length == 2) {
        passwordDot2.style.color = 'rgb(68, 150, 132)';
    }
    else if (password.length == 3) {
        passwordDot3.style.color = 'rgb(68, 150, 132)';
    }
    else if (password.length == 4) {
        passwordDot4.style.color = 'rgb(68, 150, 132)';
    }
}


function eraseDigit() {
    if (password.length > 0) {
        password = password.slice(0, -1);
        console.log(password)
    }
    if (password.length == 1) {
        passwordDot2.style.color = '';
    }
    else if (password.length == 2) {
        passwordDot3.style.color = '';
    }
    else if (password.length == 3) {
        passwordDot4.style.color = '';
    }
    else if (password.length == 0) {
        passwordDot1.style.color = '';
        passwordDot2.style.color = '';
        passwordDot3.style.color = '';
        passwordDot4.style.color = '';
        felKod.innerText = "";
    }
}

const felKod = document.querySelector(".felkod p");

function login() {
    if (password == 1) {
        password = "";
        mainContainer.style.display = 'flex';
        loginContainer.style.display = 'none';
        passwordDot1.style.color = '';
        passwordDot2.style.color = '';
        passwordDot3.style.color = '';
        passwordDot4.style.color = '';
    }
    else 
    {
        password = "";
        felKod.innerText = "Fel kod!";
        passwordDot1.style.color = 'red';
        passwordDot2.style.color = 'red';
        passwordDot3.style.color = 'red';
        passwordDot4.style.color = 'red';
    }
}





// let zRapporter = [{
//     zRapporterNr: 1,
    
// }]