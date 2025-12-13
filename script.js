const translations = {
  en: {
    "translate-btn": "Vertaal naar Nederlands",
    "intro-hello": "Hello, my name is",
    "intro-role": "Communication and Multimedia Design Student",
    "intro-desc": "On this site, you can find information about me and the projects I have worked on.",
    "birth-date": "Born on February 3, 2004",
    "location": "Hoofddorp, The Netherlands",
    "about-title": "About Me",
    "about-desc": "My name is Julius Gerth, and I am a 21-year-old student in my second year of the Communication and Multimedia Design program. I enjoy working in teams but am also capable of working independently when needed. I am a creative student who is eager to learn and try new things.",
    "cv-link": "My CV",
    "contact-title": "Contact Me",
    "label-name": "Name:",
    "label-email": "Email:",
    "label-message": "Message:",
    "send-btn": "Send",
    "projects-title": "Projects",
    "rest-quest-title": "Rest Quest",
    "rest-quest-desc": "An interactive, screenless product to help students sleep better.",
    "movie-matching-title": "Movie Matching",
    "movie-matching-desc": "A web app for discovering movies and TV shows.",
    "movie-matching-title-h1": "Movie Matching",
    "movie-matching-desc-h2": "Description",
    "movie-matching-desc-p1": "Movie Matching is a web application that helps users discover movies and TV shows. Users can receive personalized recommendations based on their favorite genres and save their favorite titles to their account. The project leverages the TMDB API to fetch up-to-date movie and series data.",
    "movie-matching-features-h3": "Features",
    "movie-matching-features-li1": "Trending and Now Playing: Browse popular and currently playing movies.",
    "movie-matching-features-li2": "Personalized Recommendations: Get movie suggestions based on selected genres.",
    "movie-matching-features-li3": "Search Functionality: Search for movies and TV shows using an integrated search bar.",
    "movie-matching-features-li4": "User Account Management: Users can register, log in, and manage their profiles.",
    "movie-matching-features-li5": "Favorites: Users can save and manage a list of their favorite movies.",
    "movie-matching-features-li6": "Profile Picture Uploads: Users can upload and customize their profile pictures.",
    "movie-matching-tech-h3": "Technologies Used",
    "movie-matching-tech-li1": "Frontend: HTML, CSS, EJS (Embedded JavaScript Templates)",
    "movie-matching-tech-li2": "Backend: Node.js, Express.js",
    "movie-matching-tech-li3": "Database: MongoDB",
    "movie-matching-tech-li4": "Authentication: Bcrypt for password hashing and Express-session for session management",
    "movie-matching-tech-li5": "API: TMDB API for movie and series data",
    "movie-matching-tech-li6": "File Handling: Multer for profile picture uploads",
    "movie-matching-learning-h3": "Key Learning Outcomes",
    "movie-matching-learning-li1": "Working with external APIs (TMDB) and processing JSON data.",
    "movie-matching-learning-li2": "Implementing user authentication and session management.",
    "movie-matching-learning-li3": "Using MongoDB to store user data and favorites.",
    "movie-matching-learning-li4": "Dynamically rendering pages with EJS.",
    "movie-matching-learning-li5": "Handling file uploads and securely storing them.",
    "rest-quest-title-h1": "Rest Quest",
    "rest-quest-title-h2": "Project Beyond - Rest Quest",
    "rest-quest-desc-p1": "Rest Quest is an interactive, screenless product designed to help high school students preparing for final exams improve their sleep quality. The project addresses the challenge of reducing screen time before bed by engaging users in physical and mindful activities.",
    "rest-quest-role-h3": "My Role and Contributions",
    "rest-quest-role-p1": "As a member of team 4, I was actively involved in the entire design and development process. My key contributions include:",
    "rest-quest-role-li1": "<strong>User Research:</strong> I conducted interviews with students to understand their sleep habits and stress factors, which informed our design decisions.",
    "rest-quest-role-li2": "<strong>Prototyping and Testing:</strong> I contributed to the creation of low-fidelity, mid-fidelity, and high-fidelity prototypes. I also developed and executed test plans to gather user feedback and iterate on the design.",
    "rest-quest-role-li3": "<strong>Concept Development:</strong> I played a key role in brainstorming and defining the core features of the product, including the card-based interaction, the use of a distance sensor to initiate activities, and the audio timer.",
    "rest-quest-role-li4": "<strong>Technical Implementation:</strong> I worked on the hardware and software integration, connecting sensors (distance and pressure sensors) and an MP3 player to an Arduino board to create the interactive experience.",
    "rest-quest-role-li5": "<strong>Evaluation and Iteration:</strong> I led user feedback sessions to evaluate the product's effectiveness and usability. This feedback led to significant improvements, such as the addition of a physical button and a visual timer using LED strips.",
    "rest-quest-tech-h3": "Technologies Used",
    "rest-quest-tech-li1": "Hardware: Arduino, Distance Sensor, Pressure Sensor, MP3 Player, LED Strips",
    "rest-quest-tech-li2": "Software: C++ (for Arduino programming)",
    "rest-quest-tech-li3": "Design Tools: Figma, Adobe Illustrator",
    "rest-quest-learning-h3": "Key Takeaways",
    "rest-quest-learning-p1": "This project taught me the importance of a user-centered design process, from initial research to iterative prototyping and testing. I gained hands-on experience with hardware integration and programming, and I learned how to effectively collaborate in a multidisciplinary team to create a unique and engaging product."
  },
  nl: {
    "translate-btn": "Translate to English",
    "intro-hello": "Hallo, mijn naam is",
    "intro-role": "Communicatie en Multimedia Design Student",
    "intro-desc": "Op deze site kun je informatie vinden over mij en de projecten waaraan ik heb gewerkt.",
    "birth-date": "Geboren op 3 februari 2004",
    "location": "Hoofddorp, Nederland",
    "about-title": "Over Mij",
    "about-desc": "Mijn naam is Julius Gerth, en ik ben een 21-jarige student in mijn tweede jaar van de opleiding Communicatie en Multimedia Design. Ik werk graag in teams, maar kan ook zelfstandig werken wanneer dat nodig is. Ik ben een creatieve student die graag nieuwe dingen leert en uitprobeert.",
    "cv-link": "Mijn CV",
    "contact-title": "Neem Contact Op",
    "label-name": "Naam:",
    "label-email": "E-mail:",
    "label-message": "Bericht:",
    "send-btn": "Verstuur",
    "projects-title": "Projecten",
    "rest-quest-title": "Rest Quest",
    "rest-quest-desc": "Een interactief, schermloos product om studenten te helpen beter te slapen.",
    "movie-matching-title": "Movie Matching",
    "movie-matching-desc": "Een webapp voor het ontdekken van films en tv-shows.",
    "movie-matching-title-h1": "Movie Matching",
    "movie-matching-desc-h2": "Beschrijving",
    "movie-matching-desc-p1": "Movie Matching is een webapplicatie die gebruikers helpt films en tv-shows te ontdekken. Gebruikers kunnen gepersonaliseerde aanbevelingen ontvangen op basis van hun favoriete genres en hun favoriete titels op hun account opslaan. Het project maakt gebruik van de TMDB API om up-to-date film- en seriegegevens op te halen.",
    "movie-matching-features-h3": "Functies",
    "movie-matching-features-li1": "Trending en Now Playing: Blader door populaire en momenteel spelende films.",
    "movie-matching-features-li2": "Gepersonaliseerde aanbevelingen: Ontvang filmaanbevelingen op basis van geselecteerde genres.",
    "movie-matching-features-li3": "Zoekfunctionaliteit: Zoek naar films en tv-shows met behulp van een geïntegreerde zoekbalk.",
    "movie-matching-features-li4": "Gebruikersaccountbeheer: gebruikers kunnen zich registreren, inloggen en hun profielen beheren.",
    "movie-matching-features-li5": "Favorieten: gebruikers kunnen een lijst met hun favoriete films opslaan en beheren.",
    "movie-matching-features-li6": "Profielfoto-uploads: gebruikers kunnen hun profielfoto's uploaden en aanpassen.",
    "movie-matching-tech-h3": "Gebruikte Technologieën",
    "movie-matching-tech-li1": "Frontend: HTML, CSS, EJS (Embedded JavaScript Templates)",
    "movie-matching-tech-li2": "Backend: Node.js, Express.js",
    "movie-matching-tech-li3": "Database: MongoDB",
    "movie-matching-tech-li4": "Authenticatie: Bcrypt voor het hashen van wachtwoorden en Express-session for sessiebeheer",
    "movie-matching-tech-li5": "API: TMDB API voor film- en seriegegevens",
    "movie-matching-tech-li6": "Bestandsafhandeling: Multer voor het uploaden van profielfoto's",
    "movie-matching-learning-h3": "Belangrijkste Leerresultaten",
    "movie-matching-learning-li1": "Werken met externe API's (TMDB) en het verwerken van JSON-gegevens.",
    "movie-matching-learning-li2": "Implementeren van gebruikersauthenticatie en sessiebeheer.",
    "movie-matching-learning-li3": "MongoDB gebruiken om gebruikersgegevens en favorieten op te slaan.",
    "movie-matching-learning-li4": "Dynamisch pagina's weergeven met EJS.",
    "movie-matching-learning-li5": "Bestanden uploaden en veilig opslaan.",
    "rest-quest-title-h1": "Rest Quest",
    "rest-quest-title-h2": "Project Beyond - Rest Quest",
    "rest-quest-desc-p1": "Rest Quest is een interactief, schermloos product dat is ontworpen om middelbare scholieren die zich voorbereiden op eindexamens te helpen hun slaapkwaliteit te verbeteren. Het project pakt de uitdaging aan om de schermtijd voor het slapengaan te verminderen door gebruikers te betrekken bij fysieke en mindful activiteiten.",
    "rest-quest-role-h3": "Mijn Rol en Bijdragen",
    "rest-quest-role-p1": "Als lid van team 4 was ik actief betrokken bij het gehele ontwerp- en ontwikkelingsproces. Mijn belangrijkste bijdragen zijn:",
    "rest-quest-role-li1": "<strong>Gebruikersonderzoek:</strong> Ik heb interviews gehouden met studenten om hun slaapgewoonten en stressfactoren te begrijpen, wat onze ontwerpbeslissingen heeft geïnformeerd.",
    "rest-quest-role-li2": "<strong>Prototyping en Testen:</strong> Ik heb bijgedragen aan de creatie van low-fidelity, mid-fidelity en high-fidelity prototypes. Ik heb ook testplannen ontwikkeld en uitgevoerd om gebruikersfeedback te verzamelen en het ontwerp te herhalen.",
    "rest-quest-role-li3": "<strong>Conceptontwikkeling:</strong> Ik speelde een sleutelrol bij het brainstormen en definiëren van de kernfuncties van het product, inclusief de op kaarten gebaseerde interactie, het gebruik van een afstandssensor om activiteiten te starten en de audiotimer.",
    "rest-quest-role-li4": "<strong>Technische Implementatie:</strong> Ik heb gewerkt aan de hardware- en software-integratie, waarbij ik sensoren (afstands- en druksensoren) en een mp3-speler op een Arduino-bord heb aangesloten om de interactieve ervaring te creëren.",
    "rest-quest-role-li5": "<strong>Evaluatie en Iteratie:</strong> Ik heb gebruikersfeedbacksessies geleid om de effectiviteit en bruikbaarheid van het product te evalueren. Deze feedback leidde tot aanzienlijke verbeteringen, zoals de toevoeging van een fysieke knop en een visuele timer met LED-strips.",
    "rest-quest-tech-h3": "Gebruikte Technologieën",
    "rest-quest-tech-li1": "Hardware: Arduino, Afstandssensor, Druksensor, MP3-speler, LED-strips",
    "rest-quest-tech-li2": "Software: C++ (voor Arduino-programmering)",
    "rest-quest-tech-li3": "Ontwerptools: Figma, Adobe Illustrator",
    "rest-quest-learning-h3": "Belangrijkste Leerresultaten",
    "rest-quest-learning-p1": "Dit project heeft me het belang van een gebruikersgericht ontwerpproces geleerd, van initieel onderzoek tot iteratief prototypen en testen. Ik heb praktische ervaring opgedaan met hardware-integratie en programmeren, en ik heb geleerd hoe ik effectief kan samenwerken in een multidisciplinair team om een uniek en boeiend product te creëren."
  },
};

let currentLanguage = localStorage.getItem('language') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById("translate-btn");

    translateButton.addEventListener("click", () => {
        currentLanguage = currentLanguage === "en" ? "nl" : "en";
        localStorage.setItem('language', currentLanguage);
        updateText();
    });
    // Set initial text based on language
    updateText();
});


function updateText() {
  const elementsToTranslate = translations[currentLanguage];
  for (const id in elementsToTranslate) {
    const element = document.getElementById(id);
    if (element) {
        if (id.startsWith("rest-quest-role-li")) {
            element.innerHTML = elementsToTranslate[id];
        }
        else {
            element.innerText = elementsToTranslate[id];
        }
    }
  }
}
