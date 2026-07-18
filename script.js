const playBtn = document.getElementById("playBtn");
const settingsBtn = document.getElementById("settingsBtn");
const exitBtn = document.getElementById("exitBtn");

const homeScreen = document.getElementById("homeScreen");
const levelScreen = document.getElementById("levelScreen");

const backBtn = document.getElementById("backBtn");

const levelButtons = document.querySelectorAll(".levelBtn");

const unlockedLevel = Number(localStorage.getItem("unlockedLevel")) || 1;

updateLevels();

playBtn.onclick = () => {
    homeScreen.style.display = "none";
    levelScreen.style.display = "flex";
};

settingsBtn.onclick = () => {
    alert("settings coming soon!");
};

exitBtn.onclick = () => {
    alert("thanks for playing ghost escape");
};

backBtn.onclick = () => {
    levelScreen.style.display = "none";
    homeScreen.style.display = "flex";
};

function updateLevels() {
    levelButtons.forEach(button =>{
        const level = Number(button.dataset.level);
        if(level <= unlockedLevel){
            button.classList.remove("locked");
            button.textContent = "Level" + level;
            button.onclick = ()=>{
                alert("starting level" + level);
            };

        }
        else{
            button.classList.add("locked");
            button.textContent = "Locked-level" + level;
            button.onclick =()=>{
                alert("Complete previous level first");
            };
        }
    });
}