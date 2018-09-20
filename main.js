
const printToDom = (stringToPrint, whereToPrint) => {
  document.getElementById(whereToPrint).innerHTML = stringToPrint;
}


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
printToDom(domString, 'sortingCardBegin');
});


// /* <img class="card-img-top" src=".../100px180/" alt="Card image cap"> */

//   // function showForm () {
//   //   document.getElementById('submit').style.display="block";
//   // };






