
const printToDom = (stringToPrint, whereToPrint) => {
  document.getElementById(whereToPrint).innerHTML = stringToPrint;
};

const houses = ['Hufflepuff', 'Ravenclaw', 'Gryffindor', 'Slytherin'];
let counter = 0;


const sortingButton = document.getElementById('letsStartBtn');
sortingButton.addEventListener('click', () => {
  let newString =
    `<div class="form-group">
          <label for="exampleInputEmail1">Enter Your Name Here:</label>
          <input type="text" class="form-control" id="muggle" placeholder="Student Name">
    </div>
          <button type="submit" id="begin" class="btn btn-primary id="sortingHat">Submit</button>
    </form>`;
  printToDom(newString, 'form');
});


const studentCardElem = () => {
 const muggleInput = document.getElementById('muggle').value;
  const whichHouse = houses[Math.floor(Math.random()*houses.length)];
    let newString = `<div class="card w-25 m-2 ">
    <div class="card-body">
        <h5 class="card-title">${muggleInput}</h5>
        <p class="card-text">${whichHouse}</p>
        <button href="#" class="btn btn-danger expelButton">Expel</button>
    </div>
  </div>`;
counter++;
printToDom(newString, 'card');
};

const studentsFutureHouse = () => {
  const runningOutOfNameIdeas = document.getElementById('sortingHat');
  runningOutOfNameIdeas.addEventListener('click', (e) => {
    e.preventDefault();
    studentCardElem();
  }
  )
}


//   // function showForm () {
//   //   document.getElementById('submit').style.display="block";
//   // };
// const studentCardElem = document.getElementById('');
// studentCardElem.addEventListener('click', () => {
//   const studentName = document.getElementById('muggle').value;
