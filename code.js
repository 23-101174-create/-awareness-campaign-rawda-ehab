
document.getElementById("Home").innerHTML = "Home";
document.getElementById("Gallery").innerHTML = "Gallery";
document.getElementById("Contact-us").innerHTML = "Contact us";
document.getElementById("login").innerHTML = "Login";
document.getElementById("dark").innerHTML = "Dark Mode";
document.getElementById("title").innerHTML = "Your Voice Matters Your Story Counts";
document.getElementById("sub-1").innerHTML = "Bullying can hurt, but speaking up can heal We're here to support you through your journey to mental wellness";
document.getElementById("button-3").innerHTML = "Learn More";
document.getElementById("title-2").innerHTML = "What is Bullying?";
document.getElementById("sub-2").innerHTML = "Bullying is when someone repeatedly hurts, threatens, or excludes you on purpose. It's not your fault and you deserve to feel safe and respected";
document.getElementById("reg-text").innerHTML = "Remember: If someone's behavior makes you feel scared, sad or unsafe it's not okay and it's not something you should deal with alone";
document.getElementById("sub-3").innerHTML = "Understanding the causes can help us prevent bullying and create a kinder community";
document.getElementById("title-3").innerHTML = "Why Does Bullying Happen ?";
document.getElementById("reg-text-2").innerHTML = "Important to know:";
document.getElementById("reg-text-3").innerHTML = "Understanding why bullying happens doesn't excuse the behavior. No matter the reason, bullying is never acceptable, and everyone deserves to be treated with kindness and respect";
document.getElementById("button-4").innerHTML = "Serious Concern";
document.getElementById("title-4").innerHTML = "Depression: A Common Result";
document.getElementById("sub-4").innerHTML = "Ongoing bullying can lead to depression a serious mental health condition that affects how you feel, think and handle daily activities";
document.getElementById("text-4").innerHTML = "Symptoms may include:";
document.getElementById("sub-5").innerHTML = "Persistent sadness or emptiness";
document.getElementById("sub-5-2").innerHTML = "Loss of interest in things you used to enjoy";
document.getElementById("sub-5-3").innerHTML = "Changes in sleep or appetite";
document.getElementById("sub-5-4").innerHTML = "Feeling hopeless or thinking about self-harm";
document.getElementById("title-icon").innerHTML = "Safety";
document.getElementById("sub-icon").innerHTML = "Every young person deserves to feel safe";
document.getElementById("title-icon-2").innerHTML = "Wellbeing";
document.getElementById("sub-icon-2").innerHTML = "Mental and emotional health matters";
document.getElementById("title-icon-3").innerHTML = "Awareness";
document.getElementById("sub-icon-3").innerHTML = "Understanding and prevention";
document.getElementById("title-icon-4").innerHTML = "Community";
document.getElementById("sub-icon-4").innerHTML = "Creating supportive environments";
document.getElementById("re").innerHTML = "Related Concerns";
document.getElementById("sub-6").innerHTML = "Bullying is part of a larger conversation about protecting young people and their wellbeing";
document.getElementById("fe").innerHTML = "Feelings We Don't Say";

const bullyingTypes = [
    {
      title: "Verbal Bullying",
      description:
        "Name-calling, teasing, or saying hurtful things. Words can hurt just as much as actions."
    },
    {
      title: "Physical Bullying",
      description:
        "Hitting, pushing, or any unwanted physical contact that makes you feel unsafe."
    },
    {
      title: "Cyberbullying",
      description:
        "Bullying through texts, social media, or online platforms. It can happen 24/7."
    }
  ];
  
  const bullyingCauses = [
    {
      title: "Lack of Awareness",
      description:
        "Not everyone understands how their words and actions affect others emotionally."
    },
    {
      title: "Emotional Issues",
      description:
        "Sometimes bullies are dealing with their own pain, anger, or problems at home."
    },
    {
      title: "Social Pressure",
      description:
        "Some people bully to fit in with a group or to feel more popular and powerful."
    }
  ];
  
  function renderCards(dataArray, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
  
    dataArray.forEach(item => {
      container.innerHTML += `
        <div class="bullying-card">
          <div class="inner-card">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </div>
      `;
    });
  }
  renderCards(bullyingTypes, "bullying-types");
  renderCards(bullyingCauses, "bullying-causes");

// Dark Mode Toggle
const darkModeBtn = document.querySelector('.button-2');
const htmlElement = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);
if (currentTheme === 'dark') {
    darkModeBtn.textContent = 'Light Mode';
} else {
    darkModeBtn.textContent = 'Dark Mode';
}

darkModeBtn.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    darkModeBtn.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
});



const scrollBtn = document.createElement('div');
scrollBtn.innerHTML = '↑';
scrollBtn.classList.add('scroll');

document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollBtn.style.display = 'flex';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const galleryImages = [
    "imgs/g-1.png",
    "imgs/g-2.png",
    "imgs/g-3.png"
];

const galleryContainer = document.getElementById("galleryContainer");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

function loadGallery(){
    galleryContainer.innerHTML = "";
    galleryImages.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("img-gallery");
        img.addEventListener("click", () => openLightbox(src));
        galleryContainer.appendChild(img);
    });
}

function openLightbox(src){
    lightboxImg.src = src;
    lightbox.style.display = "flex";
}

closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if(e.target === lightbox){
        lightbox.style.display = "none";
    }
});

loadGallery();

