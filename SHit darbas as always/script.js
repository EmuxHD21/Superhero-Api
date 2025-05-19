async function fetchData(){

    try{

        const SuperHeroname = document.getElementById("SuperHeroname").value.toLowerCase();
        const response = await fetch(`https://www.superheroapi.com/api.php/f0f8501b1986fd76443209c4436c9476/search/${SuperHeroname}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const hero = data.results[0];
        const imgElement = document.getElementById("SuperHeroImg");
        const infoElement = document.getElementById("SuperHeroInfoText");

        imgElement.src = hero.image.url;
        imgElement.style.display = "block";

      
        infoElement.innerHTML = `
            <p>Name: ${hero.name}</p>
            <p>Full name: ${hero.biography["full-name"]}</p>
            <p>Strength: ${hero.powerstats.strength}</p>
            <p>Speed: ${hero.powerstats.speed}</p>
            <p>Durability: ${hero.powerstats.durability}</p>
            <p>Publisher: ${hero.biography.publisher}</p>
            <p>First appearance ${hero.biography["first-appearance"]}</p>
            

        `;
        document.querySelector(".heroinfo").style.display = "flex";
    }
    catch(error){
        console.error(error);
        document.querySelector(".heroinfo").style.display = "none";
    }
}

async function fetchRandomHero() {
    const randomId = Math.floor(Math.random() * 731) + 1;

    try {
        const response = await fetch(`https://www.superheroapi.com/api.php/f0f8501b1986fd76443209c4436c9476/${randomId}`);

        if (!response.ok) {
            throw new Error("Failed to fetch random hero.");
        }

        const hero = await response.json();
        const imgElement = document.getElementById("SuperHeroImg");
        const infoElement = document.getElementById("SuperHeroInfoText");

        imgElement.src = hero.image.url;
        imgElement.style.display = "block";

        infoElement.innerHTML = `
            <p>Name: ${hero.name}</p>
            <p>Full name: ${hero.biography["full-name"]}</p>
            <p>Strength: ${hero.powerstats.strength}</p>
            <p>Speed: ${hero.powerstats.speed}</p>
            <p>Durability: ${hero.powerstats.durability}</p>
            <p>Publisher: ${hero.biography.publisher}</p>
            <p>First appearance: ${hero.biography["first-appearance"]}</p>
        `;

        document.querySelector(".heroinfo").style.display = "flex";
    } catch (error) {
        console.error(error);
        document.querySelector(".heroinfo").style.display = "none";
    }
}

async function loadDuel() {
    const hero1 = document.getElementById("hero1").value.trim().toLowerCase();
    const hero2 = document.getElementById("hero2").value.trim().toLowerCase();

    if (!hero1 || !hero2) return;

    await fetchHeroData(hero1, "left");
    await fetchHeroData(hero2, "right");
}

async function fetchHeroData(name, side) {
    try {
        const response = await fetch(`https://www.superheroapi.com/api.php/f0f8501b1986fd76443209c4436c9476/search/${name}`);
        const data = await response.json();
        const hero = data.results[0];

        const img = document.getElementById(`${side}HeroImg`);
        const info = document.getElementById(`${side}HeroInfo`);
        const container = document.getElementById(`${side}Hero`);

        img.src = hero.image.url;
        img.style.display = "block";

        info.innerHTML = `
            <p><strong>Name:</strong> ${hero.name}</p>
            <p><strong>Full name:</strong> ${hero.biography["full-name"]}</p>
            <p><strong>Strength:</strong> ${hero.powerstats.strength}</p>
            <p><strong>Speed:</strong> ${hero.powerstats.speed}</p>
            <p><strong>Durability:</strong> ${hero.powerstats.durability}</p>
            <p><strong>Publisher:</strong> ${hero.biography.publisher}</p>
            <p><strong>First appearance:</strong> ${hero.biography["first-appearance"]}</p>
        `;

    } catch (err) {
        console.error(err);
    }
}
