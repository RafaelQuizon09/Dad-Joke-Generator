async function joke(){
    let config = {
        headers: {
            Accept: "application/json",
        }
    }

    let response = await fetch("https://icanhazdadjoke.com/", config);
    let data = await response.json();
    document.getElementById("quoteGen").innerHTML = data.joke;

}

document.getElementById('btnGenerate').addEventListener('click', joke)

function generateJoke() {
    var quoteGen = document.getElementById("quoteGen");

    quoteGen.style.animation = "none";
    void quoteGen.offsetWidth; 
    
    quoteGen.style.animation = "myAnim 2s ease 0s 1 normal forwards";
}
