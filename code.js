document.getElementById("Home").innerHTML = "Home";
document.getElementById("Gallery") .innerHTML = "Gallery";
document.getElementById("Contact-us") .innerHTML = "Contact us";
document.getElementById("login") .innerHTML = "Login";
document.getElementById("dark") .innerHTML = "Dark Mode";
document.getElementById("title") .innerHTML = "Your Voice Matters Your Story Counts";
document.getElementById("sub-1") .innerHTML = "Bullying can hurt, but speaking up can heal We're here to support you through your journey to mental wellness";
document.getElementById("button-3") .innerHTML = "Learn More";
document.getElementById("title-2") .innerHTML = "What is Bullying?";
document.getElementById("sub-2") .innerHTML = "Bullying is when someone repeatedly hurts, threatens, or excludes you on purpose. It's not your fault and you deserve to feel safe and respected";
document.getElementById("reg-text") .innerHTML = "Remember: If someone's behavior makes you feel scared, sad or unsafe it's not okay and it's not something you should deal with alone";
document.getElementById("sub-3") .innerHTML = "Understanding the causes can help us prevent bullying and create a kinder community";
document.getElementById("title-3") .innerHTML = "Why Does Bullying Happen ?";
document.getElementById("reg-text-2") .innerHTML = "Important to know:";
document.getElementById("reg-text-3") .innerHTML = "Understanding why bullying happens doesn't excuse the behavior. No matter the reason, bullying is never acceptable, and everyone deserves to be treated with kindness and respect";

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
  
  
  