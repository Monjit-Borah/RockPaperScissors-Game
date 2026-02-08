let pyou = 0;
let pcomp = 0;

let choices = document.querySelectorAll(".choice");
let you = document.getElementById("you");
let comp = document.getElementById("comp");
let mgss = document.getElementById("msg"); // FIXED ID

choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        // NEW random number each click
        const randomNumber = Math.random();
        console.log(randomNumber);

        if (randomNumber > 0.5) {
            pyou++;
            you.innerText = pyou;
            mgss.innerText = 'You Won 🎉';
        } else {
            pcomp++;
            comp.innerText = pcomp;
            mgss.innerText = 'Computer Won 🤖';
        }

    });
});
