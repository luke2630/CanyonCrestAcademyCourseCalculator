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

var junior = ['English 11', 'AP English Language and Composition', 'Journalism', 'Advanced Journalism', 'Creative Writing', 'Modern Epic', 'Speech and Debate', 'Academic Literacy', 'Reading for Success', 'Integrated Math 3', 'Integrated Math 3 Honors', 'Intro to Calculus', 'AP Calculus AB', 'AP Calculus BC', 'Calculus C', 'Statistics', 'AP Statistics', 'Linear Algebra', 'Advanced Topics in Mathematics', 'Advanced Math for Decision Making', 'AP Biology', 'Chemistry - In the Earth System', 'AP Chemistry', 'Organic Chemistry', 'Physics', 'AP Physics 1', 'AP Physics 2', 'Anatomy and Physiology', 'AP Environmental Science', 'Research Methods(QUEST)', 'Applied Science(QUEST)', 'Research Internship(QUEST)', 'US History', 'AP US History', 'Non-Western History', 'AP European History', 'AP Art History', 'Current Issues', 'Social Justice', 'American Pop Culture', 'Film and Society', 'Sociology', 'Psychology', 'AP Pscyhology', 'Spanish 1', 'Spanish 2', 'Spanish 3', 'Spanish 4', 'Spanish 5', 'AP Spanish Language', 'French 1', 'French 2', 'French 3', 'French 4', 'French 5', 'AP French Language', 'Japanese 1', 'Japanese 2', 'Japanese 3', 'Japanese 4', 'Japanese 5', 'AP Japanese Language and Culture', 'Chinese 1', 'Chinese 2', 'Chinese 3', 'Chinese 4', 'Chinese 5', 'AP Chinese Language and Culture', 'ASL 1', 'ASL 2', 'ASL 3', 'ASL 4', 'Computer Game Design', 'Computer Science Foundations', 'AP Computer Science Principles', 'AP Computer Science A', 'Introduction to Engineering Techniques Education', 'Digital Electronics', 'Advanced Engineering Techniques', 'Robotics and Engineering', 'Intro to Business', 'Marketing Principles', 'Advanced Business Management', 'Physical Education(Year 2 PE)', 'Weight Training', 'Fitness Walking', 'Sports Performance Training', 'Surf PE', 'Dance', 'Introduction to Dance 2', 'Intermediate Dance', 'Advanced Dance', 'Dance Choreography and Performance', 'Digital Composition', 'Rock Band Music Industry', 'Recording Arts', 'Advanced Recording Arts', 'Fine Art Digital Photography', 'Photo Imaging', 'Advanced Fine Art Digital Photography', 'Video Film', 'Advanced Video Film', 'Yearbook', 'Drawing and Design', 'Advanced Drawing', 'Painting', 'Sculpture', 'Advanced Sculpture', 'AP Studio Art 2D', 'AP Studio Art 3D', 'AP Studio Art Drawing', 'Seminar in Art', 'Chorus', 'Advanced Chorus', 'Acting 1', 'Intermediate Acting', 'Advanced Acting', 'Advanced Drama Honors', 'Orchestra', 'Chamber Orchestra', 'Symphonic Band', 'Wind Ensemble', 'Jazz Band', 'Musical Theater Production', 'Advanced Musical Theater Production', 'Academic Support', 'Internship', 'Work Experience'];

autocomplete(document.getElementById("J Sem 1 Period 1"), junior);
autocomplete(document.getElementById("J Sem 1 Period 2"), junior);
autocomplete(document.getElementById("J Sem 1 Period 3"), junior);
autocomplete(document.getElementById("J Sem 1 Period 4"), junior);
autocomplete(document.getElementById("J Sem 2 Period 1"), junior);
autocomplete(document.getElementById("J Sem 2 Period 2"), junior);
autocomplete(document.getElementById("J Sem 2 Period 3"), junior);
autocomplete(document.getElementById("J Sem 2 Period 4"), junior);
