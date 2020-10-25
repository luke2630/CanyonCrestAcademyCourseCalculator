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

var junior = ['Academic Litearcy', 'Advanced Journalism', 'AP English Language and Composition', 'Creative Writing', 'English 11', 'Journalism', 'Modern Epic', 'Reading for Success', 'Speech and Debate', 'Advanced Math for Decision Making', 'Advanced Topics in Mathematics', 'AP Calculus AB', 'AP Calculus BC', 'AP Statistics', 'Calculus 3', 'Integrated Math 3', 'Integrated Math 3 Honors', 'Intro to Calculus', 'Linear Algebra', 'Statistics', 'Anatomy and Physiology', 'AP Biology', 'AP Chemistry', 'AP Environmental Science', 'AP Physics 1', 'AP Physics 2', 'Research Methods (Quest)', 'Applied Science (Quest)', 'Research Internship (Quest)', 'Organic Chemistry', 'American Pop Culture', 'AP Art History', 'AP European History', 'AP Psychology', 'AP US History', 'Current Issues', 'Film and Society', 'Non-Western World History', 'Psychology', 'Social Justice', 'Sociology', 'US History', 'Chinese 1', 'Chinese 2', 'Chinese 3', 'Chinese 4', 'Chinese 5', 'AP Chinese Language and Culture', 'French 1', 'French 2', 'French 3', 'French 4', 'French 5', 'AP French Language', 'Japanese 1', 'Japanese 2', 'Japanese 3', 'Japanese 4', 'Japanese 5', 'AP Japanese Language and Culture', 'Spanish 1', 'Spanish 2', 'Spanish 3', 'Spanish 4', 'Spanish 5', 'AP Spanish Language', 'ASL 1', 'ASL 2', 'ASL 3', 'ASL 4', 'Introduction to Dance 1', 'Introduction to Dance 2', 'Fitness Walking', 'Physical Education (Year 2 PE)', 'Sports Performance Training', 'Surf PE', 'Weight Training', 'Digital Photography', 'Advanced Digital Photography', 'Photo Imaging', 'Drawing and Design', 'Advanced Drawing', 'Painting', 'Sculpture', 'Advanced Sculpture', 'Video Film', 'Advanced Video Film', 'Digital Media Production', 'Chorus', 'Advanced Chorus', 'Cinema Lab', 'Digital Art and Design', 'Acting 1', 'Intermediate Acting', 'Advanced Acting', 'Advanced Dance', 'Advanced Drama Honors', 'Musical Theather Production', 'Advanced Musical Theater Production', 'Advanced Digital Art and Design', 'AP Studio Art 2D', 'AP Studio Art 3D', 'AP Studio Art Drawing', 'Dance Choreography and Performance', 'Intermediate Dance', 'Rock Band Music Industry', 'Seminar in Art', 'Chamber Orchestra', 'Jazz Band', 'Orchestra', 'Symphonic Band', 'Wind Ensemble', 'Yearbook', 'Stagehand Technician', 'Computer Science Foundations', 'Introduction to Engineering Techniques', 'Robotics and Engineering', 'Computer Game Design', 'AP Computer Science Principles', 'Advanced Engineering Techniques', 'Digital Electroncs', 'AP Computer Science A', 'Intro to Business', 'Marketing Principles', 'Advanced Business Management', 'Recording Arts', 'Fine Art Digital Photography', 'Digital Composition', 'Advanced Recording Arts', 'Internship', 'Work Experience', 'Academic Support'];

autocomplete(document.getElementById("J Sem 1 Period 1"), junior);
autocomplete(document.getElementById("J Sem 1 Period 2"), junior);
autocomplete(document.getElementById("J Sem 1 Period 3"), junior);
autocomplete(document.getElementById("J Sem 1 Period 4"), junior);
autocomplete(document.getElementById("J Sem 2 Period 1"), junior);
autocomplete(document.getElementById("J Sem 2 Period 2"), junior);
autocomplete(document.getElementById("J Sem 2 Period 3"), junior);
autocomplete(document.getElementById("J Sem 2 Period 4"), junior);
