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
