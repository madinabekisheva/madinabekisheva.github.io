/// NAVIGATION BAR ///
// Add nav-bar dynamically (programmatically)
function insertNavBar() {
    // create header for name
    let nav = document.getElementById("nav");
    let logo = document.createElement("a");
    // logo.setAttribute("href", "../index.html");
    logo.innerHTML = "Madina&nbsp;Bekisheva";
    logo.setAttribute("id", "logo");
    nav.appendChild(logo);

    // elements for hambeger menu
    let div = document.createElement("div");
    div.classList.add("hamburger");

    let lab = document.createElement("label");
    lab.classList.add("hamburger-icon");
    lab.setAttribute("for", "hamburger-checkbox");
    div.appendChild(lab);

    let chk = document.createElement("input");
    chk.setAttribute("type", "checkbox");
    chk.setAttribute("class", "checkbox");
    chk.setAttribute("id", "hamburger-checkbox");
    div.appendChild(chk);

    // create menu list
    let ul = document.createElement("ul");
    ul.setAttribute("class", "nav-set");
    ul.setAttribute("id", "menu");

    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerHTML = "<span id='me'>Resume</span>";
    a.classList.add("a-nav");
    a.setAttribute("href", "https://aishabay.github.io/index.html");
    li.appendChild(a);
    ul.appendChild(li);

    li = document.createElement("li");
    a = document.createElement("a");
    a.innerHTML = "<span id='me'>Requests</span>";
    a.classList.add("a-nav");
    a.setAttribute("href", "https://aishabay.github.io/pages/requests.html");
    li.appendChild(a);
    ul.appendChild(li);

    div.appendChild(ul);
    nav.appendChild(div);
}

insertNavBar();
////////////////////////////////////////////////

/// FOOTER ///
// Add footer dynamically (programmatically)
function insertFooter() {
    // create header for name
    let ft = document.getElementById("footer");
    ft.classList.add("footer");

    let fol = document.createElement("div");
    fol.innerHTML = "Follow Me";
    fol.classList.add("follow");
    ft.appendChild(fol);

    let soc_box = document.createElement("div");
    soc_box.classList.add("soc-box");
    ft.appendChild(soc_box);

    // create social buttons
    let soc = document.createElement("div");
    let a = document.createElement("a");
    let fb = "<i class='fa-brands fa-facebook fa-inverse fa-2xl'></i>";
    a.innerHTML = fb;
    a.classList.add("social");
    a.classList.add("fb");
    a.setAttribute("href", "https://facebook.com");
    soc.appendChild(a);
    soc_box.appendChild(soc);

    // create social buttons
    soc = document.createElement("div");
    a = document.createElement("a");
    let insta = "<i class='fa-brands fa-instagram fa-inverse fa-2xl'></i>";
    a.innerHTML = insta;
    a.classList.add("social");
    a.classList.add("insta");
    a.setAttribute("href", "https://instagram.com");
    soc.appendChild(a);
    soc_box.appendChild(soc);

    // create social buttons
    soc = document.createElement("div");
    a = document.createElement("a");
    let git = "<i class='fa-brands fa-github-square fa-inverse fa-2xl'></i>";
    a.innerHTML = git;
    a.classList.add("social");
    a.classList.add("git");
    a.setAttribute("href", "https://github.com");
    soc.appendChild(a);
    soc_box.appendChild(soc);

    ft.appendChild(soc_box);

    let address = document.createElement("div");
    address.innerHTML = "Nazarbayev University, Qabanbay Batyr Ave 53, Astana, Kazakhstan, 010000";
    address.classList.add("footer-address");
    ft.appendChild(address);
  
    let email = document.createElement("div");
    email.innerHTML = "madina.bekisheva@nu.edu.kz";
    email.classList.add("footer-email");
    ft.appendChild(email);
}

insertFooter();
////////////////////////////////////////////////

/// EVENT LISTENERS ///
// h1 style
let h = document.getElementById("title");
if (h) {
    h.addEventListener("click", function (e) {
        this.style.color = "red";
    });
}

// text3 style
let t = document.getElementById("text3");
if (t) {
    t.addEventListener("mouseenter", function (e) {
        this.style.backgroundColor = "yellow";
    });
    t.addEventListener("mouseout", function (e) {
        this.style.backgroundColor = "white";
    });
}

// text4 style
let t4 = document.getElementById("text4");
if (t4) {
    t4.addEventListener("click", changeFont);
}

function changeFont() {
    let p = this;
    p.style.fontSize = "26pt";
    p.style.color = "red";
    p.style.backgroundColor = "black";
}

// uppercase
let caps = document.getElementById("caps");
if (caps) {
    caps.addEventListener("keyup", upperCase);
}

function upperCase() {
    let x = this;
    x.value = x.value.toUpperCase();
}
////////////////////////////////////////////////

//getting mails

function getMails() {
    const mailsString = localStorage.getItem('mails');
    const mails = mailsString?.length ? JSON.parse(mailsString) : [];

    document.getElementById('mails').innerHTML = `
            <div class="mail">
                <div class="email">email</div>
                <div class="number">number</div>
                <div class="name">name</div>
                <div class="message">message</div>
                <div class="message"></div></div>
        ` + mails.map(mail => `
            <div class="mail">
                <div class="email">${mail.email}</div>
                <div class="number">${mail.number}</div>
                <div class="name">${mail.name}</div>
                <div class="message">${mail.message}</div>
                <button class="delete" onclick="deleteMail(${mail.id})">DELETE</button>
            </div>`).join('')
}

function deleteMail(id) {
    const mails = JSON.parse(localStorage.getItem('mails'));
    const newMails = mails.filter(m => m.id !== id);
    localStorage.setItem('mails', JSON.stringify(newMails));
    getMails();
}

getMails();

