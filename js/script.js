const translateBtn = document.getElementById("translateBtn");
const myH1 = document.getElementById("myh1");
let originalText = myH1.textContent;
let originalBtn = translateBtn.textContent;
translateBtn.addEventListener("click", function() {
    if (myH1.textContent === originalText & translateBtn.textContent === originalBtn ) {
        myH1.textContent = "I AM NOT A DESIGNER!! I DONOT CARE ABOUT DISIGN!! THE MEAN IS THAT IT COULD WORK!!";
        translateBtn.textContent = "Перевести";
    } else {
        myH1.textContent = originalText;
        translateBtn.textContent = originalBtn;
    }
});
