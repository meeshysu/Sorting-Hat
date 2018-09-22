
const printToDom = (stringToPrint, whereToPrint) => {
  document.getElementById(whereToPrint).innerHTML = stringToPrint;
};

const letsStartElem = document.getElementById('letsStartBtn');
const houses = ['Hufflepuff', 'Ravenclaw', 'Gryffindor', 'Slytherin'];
let counter = 0;


const sortingButton = document.getElementById('letsStartBtn');
sortingButton.addEventListener('click', () => {
  let newString =
    `<div class="form-group">
          <label for="studentsName">Enter Your Name Here:</label>
          <input type="text" class="form-control" id="muggle" placeholder="Student Name">
    </div>
          <button type="submit" id="sortingHat" class="btn btn-primary">Submit</button>
    </form>`;
  printToDom(newString, 'form');
});


const studentCardElemBuilder = () => {
 const muggleInput = document.getElementById('muggle').value;
  const whichHouse = houses[Math.floor(Math.random()*houses.length)];
    let newString = `<div class="card w-25 m-2">
    <div class="card-body">
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