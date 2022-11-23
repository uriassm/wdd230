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

//Join banner on Mondays and Tuesdays
let join = document.querySelector('.joinBanner');
let day = now.getDay();

if ((day == 1) || (day == 2)) {
    join.textContent = 'Come join us for the Chamber meet and greet Wednesday at 7:00pm'
}
else {
    join.textContent = ''
}

//Lazy Loading

let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }