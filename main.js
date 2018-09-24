
const printToDom = (stringToPrint, whereToPrint) => {
  document.getElementById(whereToPrint).innerHTML = stringToPrint;
};

const letsStartElem = document.getElementById('letsStartBtn');
const houses = ['Hufflepuff', 'Ravenclaw', 'Gryffindor', 'Slytherin'];
let counter = 0;


const sortingButton = document.getElementById('letsStartBtn');
sortingButton.addEventListener('click', () => {
  let newString =
  `<div id="imTired">
  <div class="form-group-one m-6 w-60">
          <label for="studentsName">Enter Your Name Here:</label>
          <input type="text" class="form-control w-20" id="muggle" placeholder="Student Name">
    </div>
          <button type="submit" id="sortingHat" class="d-inline-flex btn btn-primary w-20">Submit</button>
    </form>
    </div>`;
  printToDom(newString, 'form');
});


const studentCardElemBuilder = () => {
 const muggleInput = document.getElementById('muggle').value;
  const whichHouse = houses[Math.floor(Math.random()*houses.length)];
    let newString = `<div class="card w-25 m-6">
    <div class="card-body center-block">
        <h5 class="card-title">${muggleInput}</h5>
        <p class="card-text">${whichHouse}</p>
        <button id="expel" class="btn btn-danger expelButton">Expel</button>
    </div>
  </div>`;
counter++;
printToDom(newString, 'card');
activateExpels();
};

const studentCardBody = () => {
  const sortingHatButtonElem = document.getElementById('sortingHat');
  sortingHatButtonElem.addEventListener('click', (event) => {
    event.preventDefault();
    studentCardElemBuilder();
 
  });
}

letsStartElem.addEventListener('click', (event) => {
  event.preventDefault();
  studentCardBody();
})

// const activateExpels = () => {
//   const expelButtons = document.getElementById('expelButton');

// for (let i = 0; i < expelButtons.length; i++) {
//   const element = expelButtons[i];
//   element.addEventListener('click', (event) => {
//     const buttonIClicked = event.target;
//     const cardToDelete = buttonIClicked.parentNode.parentNode;
//     cardToDelete.remove();
//   })
// }
// }
const activateExpels = () => {
document.querySelector("body").addEventListener("click", function(event) {
    if (event.target.classList.contains('expelButton')) {
      const buttonIClicked = event.target;
        const cardToDelete = buttonIClicked.parentNode.parentNode;
        cardToDelete.remove();
    }
  })
}