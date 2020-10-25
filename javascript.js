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

/*An array containing all the country names in the world:*/

var classes = ["Academic Literacy", "Advanced Journalism", "AP English Language and Composition", "AP English Literature", "College Application Seminar", "Creative Writing", "English 10", "English 10 Honors", "English 11", "English 11", "English 12", "English 9", "English 9 Honors", "Journalism", "Modern Epic", "Reading for Sucess", "Speech and Debate", "Advanced Math for Decision Making", "Advanced Topic in Mathematics", "AP Calculus AB", "AP Calculus BC", "AP Statistics", "Business Math", "Calculus 3", "Integrated Math 1 Honors", "Integrated Math 2 Readiness", "Integrated Math 1", "Integrated 1/2 Essentials", "Integrated Math 2 Honors", "Integrated Math 2", "Integrated Math 3 Honors", "Integrated Math 3", "Intro to Calculus", "Linear Algebra", "Statistics", "Anatomy and Physiology", "AP Biology", "AP Chemistry", "AP Environmental Science", "AP Physics 1", "AP Physics 2", "AP Physics C", "Applied Science(Quest)", "Biology - The Living Earth", "Chemistry - In the Earth System", "Honors Chemistry - In the Earth System", "Organic Chemistry", "Research Internship(Quest)", "Research Methods(Quest)", "American Pop Culture", "AP Art History", "AP Economics", "AP European History", "AP Psychology", "AP US Government", "AP US History", "AP World History", "Current Issues", "Economics", "Film and Society", "Government", "Non-Western World History", "Psychology", "Social Justice", "Sociology", "US History", "World History", "AP Chinese Language Culture", "Chinese 5", "Chinese 4", "Chinese 3", "Chinese 2", "Chinese 1", "AP French Language", "French 5", "French 4", "French 3", "French 2", "French 1", "AP Japanese Language Culture", "Japanese 4", "Japanese 3", "Japanese 2", "Japanese 1", "AP Spanish Language", "Spanish 5", "Spanish 4", "Spanish 3", "Spanish 2", "Spanish 1", "ASL 4", "ASL 3", "ASL 2", "ASL 1", "Dance", "Fitness Walking", "Introduction to Dance 2", "Physical Education (Year 2 PE)", "Sports Performance", "Surf PE", "Weight Training", "Year 1 PE", "Advanced Digital Photo", "Photo Imaging", "Advanced Drawing", "Drawing and Design", "Painting", "Acting 1", "Advanced Sculpture", "Advanced Video Film", "Advanced Acting", "Advanced Chorus", "Advanced Drama Honors", "Advanced Digital Art and Design", " AP Studio Art 2D", "AP Studio Art 3D", "AP Studio Art Drawing", "Chamber Orchestra", "Chorus", "Cinema Lab", "Dance Choreography & Performance", "Digital Media Production", "Digital Art and Design", "Envision Course Progression", "EVA Conservatory", "Intermediate Dance", "Intermediate Acting", "Introduction to Dance", "Jazz Band", "Musical Theater Production", "Orchestra", "Rock Band Music Industry", "Sculpture", "Seminar in Art", "Symphonic Band", "Video Film", "Wind Ensemble", "Yearbook", "Stagehand Technician", "Advanced Engineering Technology", "AP Computer Science Principles", "Digital Elctronics", "Computer Science Foundations", "Introduction to Engineering Techniques", "Robotics and Engineering", "AP Computer Science A", "Computer Game Design", "Advanced Business Management", "Internship", "Intro to Business", "Marketing Principles", "Work Experience", "Recording Arts", "Fine Art Digital Photography", "Digital Composition", "Advanced Recording Arts", "Academic Support", "Unscheduled"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("Sem1P1"), classes);
autocomplete(document.getElementById("Sem1P2"), classes);
autocomplete(document.getElementById("Sem1P3"), classes);
autocomplete(document.getElementById("Sem1P4"), classes);
autocomplete(document.getElementById("Sem2P1"), classes);
autocomplete(document.getElementById("Sem2P2"), classes);
autocomplete(document.getElementById("Sem2P3"), classes);
autocomplete(document.getElementById("Sem2P4"), classes);
