const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
  }


  function showForm () {
    document.getElementById('student-info').style.display="block";
  };

 
