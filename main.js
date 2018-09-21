
const printToDom = (stringToPrint, whereToPrint) => {
  document.getElementById(whereToPrint).innerHTML = stringToPrint;
};

const houses = [
  'Hufflepuff',
  'Ravenclaw',
  'Gryffindor',
  'Slytherin'
];

const sortingButton = document.getElementById("letsStartBtn");

sortingButton.addEventListener('click', () => {
        let domString = `<div class="form-group">
          <label for="exampleInputEmail1">StudentName</label>
          <input type="text" class="form-control" id="stendt-name" aria-describedby="emailHelp" placeholder="Student Name">
        </div>
        <button type="submit" id="begin" class="btn btn-primary">Submit</button>
      </form>`;
        printToDom(domString, 'sortingForm'); 
});
const sortingButton2 = document.getElementById("sortingForm");

sortingButton2.addEventListener('click', () => {
  let domString = `<div class="card" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
  if (stendt-name === houses[0]) {

  }
printToDom(domString, 'sortingCardBegin');
});

// let outputHouse = '';
// const houseDecider = (whichHouse) => {
//   outputHouse = ' ';
//   let inputHouse = document.getElementById('sortingCardBegin').value.toLowerCase();
//   for (let i = 0; i <inputHouse.length; i++) {
//     outputHouse += `${houses[inputHouses[i]]}`;
//     if (houses === inputHouses[i]) {
//       printToDom(domString, 'sortingCardBegin');
//     }
//   }
// }

// /* <img class="card-img-top" src=".../100px180/" alt="Card image cap"> */

//   // function showForm () {
//   //   document.getElementById('submit').style.display="block";
//   // };






sortingButton2 = Math.floor(Math.random()*4);
  if (sortingButton2 === [0]) {
    printToDom(houses, 'sortingCardBegin');
  }
