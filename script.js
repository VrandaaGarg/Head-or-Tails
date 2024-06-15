let flipCoinBtn = document.querySelector(".flipBtn");
let heads = document.querySelector(".heads");
let tails = document.querySelector(".tails");
let headCount = document.getElementById("headCount");
let tailCount = document.getElementById("tailCount");

let headsNo = 1;
let tailsNo = 1;

flipCoinBtn.addEventListener("click", () => {
    coinFlip();
});

const genComChoice = () => {
    const options = ["heads", "tails"];
    const idx = Math.floor(Math.random() * 2);
    return options[idx];
};

const coinFlip = () => {
    const coinFace = genComChoice();
    
    heads.classList.remove("flip");
    tails.classList.remove("flip");

    void heads.offsetWidth;

    heads.classList.add("flip");
    tails.classList.add("flip");

    if (coinFace === "heads") {
        heads.style.zIndex = '1';
        tails.style.zIndex = '0';
        headCount.innerText = headsNo;
        headsNo++;
    } else {
        heads.style.zIndex = '0';
        tails.style.zIndex = '1';
        tailCount.innerText = tailsNo;
        tailsNo++;
    }
};
