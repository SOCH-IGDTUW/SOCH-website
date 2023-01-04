
const showPopUp = () => {
    const popup = document.getElementById("PopUp");
    setTimeout(() => {
        popup.style.display = "flex";
    }, 1000);
};

const togglePopUp = () => {
    const popup = document.getElementById("PopUp");
    popup.style.display = "none";
};

showPopUp();