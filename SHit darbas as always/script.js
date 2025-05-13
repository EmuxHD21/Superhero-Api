async function fetchData(){

    try{

        const SuperHeroname = document.getElementById("SuperHeroname").value.toLowerCase();
        const response = await fetch(`https://www.superheroapi.com/api.php/f0f8501b1986fd76443209c4436c9476/search/${SuperHeroname}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const SuperHeroImg = data.results[0].image.url;
        const imgElement = document.getElementById("SuperHeroImg");

        imgElement.src = SuperHeroImg;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}

