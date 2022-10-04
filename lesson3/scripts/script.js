let d = new Date();
let year = d.getFullYear()
let dateString = "© " + year + " | Urias Miranda"

document.getElementById("year").textContent = dateString;

document.getElementById("lastModified").textContent = "Last Modified: " + new Date(document.lastModified)