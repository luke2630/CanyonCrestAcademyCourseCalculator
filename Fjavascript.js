function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function(e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function(e) {
    closeAllLists(e.target);
  });
}

var freshman = ['Academic Literacy', 'Advanced Journalism', 'Creative Writing', 'English 9', 'English 9 Honors', 'Journalism', 'Modern Epic', 'Reading for Success', 'Speech and Debate', 'Integrated Math 1 Readiness', 'Integrated Math 1', 'Integrated Math 1 Honors', 'Integrated Math 2', 'Integrated Math 2 Honors', 'Integrated Math 3', 'Integrated Math 3 Honors', 'Research Methods (Quest)', 'Biology-The Living Earth', 'American Pop Culture', 'Current Issues', 'Film and Society', 'Non-Western Worled History', 'Psychology', 'Social Justice', 'Sociology', 'Chinese 1', 'Chinese 2', 'Chinese 3', 'Chinese 4', 'French 1', 'French 2', 'French 3', 'French 4', 'Japanese 1', 'Japanese 2', 'Japanese 3', 'Japanese 4', 'Spanish 1', 'Spanish 2', 'Spanish 3', 'Spanish 4', 'ASL 1', 'ASL 2', 'ASL 3', 'ASL 4', 'Year 1 PE', 'Introduction to Dance 1', 'Introduction to Dance 2', 'Fitness Walking', 'Physical Education (Year 2 PE)', 'Sports Performance Training', 'Surf PE', 'Weight Training', 'Digital Photography', 'Photo Imaging', 'Drawing and Design', 'Painting', 'Sculpture', 'Video Film', 'Chorus', 'Advanced Chorus', 'Cinema Lab', 'Digital Art and Design', 'Acting 1', 'Advanced Dance', 'Musical Theater Production', 'Intermediate Dance', 'Rock Band Music Industry', 'Seminar in Art', 'Jazz Band', 'Orchestra', 'Symphonic Band', 'Wind Ensemble', 'Yearbook', 'Stagehand Technician', 'Computer Science Foundations', 'Introduction to Engineering Techniques', 'Robotics and Engineering', 'Computer Game Design', 'Intro to Business', 'Recording Arts', 'Fine Art Digital Photography', 'Digital Composition', 'Advanced Recording Arts', 'Academic Support'];

autocomplete(document.getElementById("F Sem 1 Period 1"), freshman);
autocomplete(document.getElementById("F Sem 1 Period 2"), freshman);
autocomplete(document.getElementById("F Sem 1 Period 3"), freshman);
autocomplete(document.getElementById("F Sem 1 Period 4"), freshman);
autocomplete(document.getElementById("F Sem 2 Period 1"), freshman);
autocomplete(document.getElementById("F Sem 2 Period 2"), freshman);
autocomplete(document.getElementById("F Sem 2 Period 3"), freshman);
autocomplete(document.getElementById("F Sem 2 Period 4"), freshman);
