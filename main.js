
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


const studentCardElem = () => {
  //student's name:
 const muggleInput = document.getElementById('muggle').value;
 //student's houses by random:
  const whichHouse = houses[Math.floor(Math.random()*houses.length)];
    let newString = `<div class="card w-25 m-2">
    <div class="card-body">
        <h5 class="card-title">${muggleInput}</h5>
        <p class="card-text">${whichHouse}</p>
        <button href="#" class="btn btn-danger expelButton">Expel</button>
    </div>
  </div>`;
counter++;
printToDom(newString, 'card');
};


const studentCardBody = () => {
  const sortingHatButtonElem = document.getElementById('sortingHat');
  sortingHatButtonElem.addEventListener('click', (event) => {
    event.preventDefault();
    studentCardElem();
  });
}

letsStartElem.addEventListener('click', (event) => {
  event.preventDefault();
  studentCardBody();
})


//   // function showForm () {
//   //   document.getElementById('submit').style.display="block";
//   // };
// const studentCardElem = document.getElementById('');
// studentCardElem.addEventListener('click', () => {
//   const studentName = document.getElementById('muggle').value;
