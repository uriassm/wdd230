// Hamburger button
function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// Footer datestring
let d = new Date();
let year = d.getFullYear();
let modifiedTime = document.lastModified;
let dateString = "© " + year + " | Urias Miranda | WDD 230 Project | Last Modificiation: " + modifiedTime;

document.getElementById("footerString").textContent = dateString;

// header current date
const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;
