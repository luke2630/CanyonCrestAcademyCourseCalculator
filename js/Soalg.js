// Difficulty Level 3
let diff1 = ["Academic Literacy", "Advanced Journalism", "College Application Seminar", "Creative Writing", "English 9", "English 10", "English 11", "English 12", "Journalism", "Reading for Success", "Speech and Debate", "Business Math", "Integrated Math 1 Readiness", "Integrated Math 1/2 Essentials", "Biology - The Living Earth", "Chemistry - In the Earth System", "Physics", "Research Methods (QUEST)", "American Pop Culture", "Current Issues", "Economics", "Government", "Non-Western World History", "Psychology", "Social Justice", "Sociology", "Psychology", "US History", "World History", "Chinese 1", "Chinese 2","French 1", "French 2", "Japanese 1", "Japanese 2", "Japanese 4", "Japanese 5", "AP Japanese Language Culture", "Spanish 1", "Spanish 4", "ASL 1", "ASL 2", "ASL 3", "Dance", "Fitness Walking", "Introduction to Dance 2", "Physical Education (Year 2 PE)", "Surf PE", "Weight Training", "Year 1 PE", "Digital Photography", "Drawing and Design", "Painting", "Acting 1", "Advanced Video Film", "Cinema Lab", "Digital Media Production", "Digital Art and Design", "Intermediate Dance", "Introduction to Dance", "Rock Band Music Industry", "Sculpture", "Video Film", "Yearbook", "Stagehand Technician", "Computer Science Foundations", "Introduction to Engineering Techniques", "Computer Game Design", "Advanced Business Management", "Internship", "Intro to Business", "Marketing Principles", "Work Experience", "Recording Arts", "Fine Art Digital Photography", "Advanced Recording Arts", "Academic Support"];
// Difficulty Level 2
let diff2 = ["Modern Epic", "Advanced Math for Decision Making", "Advanced Topics in Mathematics", "Integrated Math 1", "Integrated Math 2", "Integrated Math 3", "Intro to Calculus", "Statistics", "Anatomy and Physiology", "AP Environmental Science", "AP Physics 1", "AP Physics 2", "Applied Science (QUEST)", "Honors Chemistry - In the Earth System", "Research Internship (QUEST)", "AP Psychology", "AP US Government","Film and Society", "AP Chinese Language Culture", "Chinese 5", "Chinese 4", "Chinese 3", "AP French Language", "French 5", "French 4", "French 3", "Japanese 3", "AP Spanish Language", "Spanish 5", "Spanish 3", "Spanish 2", "ASL 4", "Advanced Digital Photo", "Photo Imaging", "Advanced Drawing", "Advanced Sculpture", "Advanced Digital Art and Design", "Chorus", "Intermediate Acting", "Musical Theater Production", "Seminar in Art", "Symphonic Band", "Adfvanced Engineering Technology", "AP Computer Science Principles", "Digital Electronics", "Robotics and Engineering", "Digital Composition"];
// Difficulty Level 3
let diff3 = ["AP English Language and Composition", "AP English Literature", "English 10 Honors", "English 9 Honors", "AP Calculus AB", "AP Calculus BC", "AP Statistics", "Calculus 3", "Integrated Math 1 Honors", "Integrated Math 2 Honors", "Integrated Math 3 Honors", "Linear Algebra", "AP Biology", "AP Chemistry", "AP Physics C", "Organic Chemistry", "AP Art History", "AP Economics", "AP European History", "AP US History", "AP World History", "Sports Performance Training", "Advanced Acting", "Advanced Chorus", "Advanced Dance", "Advanced Drama Honors", "Advanced Musical Theater Production", "AP Studio Art 2D", "AP Studio Art 3D", "AP Studio Art Drawing", "Chamber Orchestra", "Dance Choreography and Performance", "Jazz Band", "Orchestra", "Wind Ensemble", "AP Computer Science A"];
// Unscsheduled
let un = ["Unscheduled"];
// 10-15 Minutes of homework
let hw1015 = ["Chinese 1"];
// 0-20 Minutes of homework
let hw020 = ["Business Math"];
// 12-24 Minutes of homework
let hw1224 = ["Yearbook"];
// 0-30 Minutes of homework
let hw030 = ["Academic Literacy", "Advanced Journalism", "College Application Seminar", "Creative Writing", "English 10", "Journalism", "Reading for Success", "Speech and Debate", "Advanced Topics in Mathematics", "Integrated Math 1 Readiness", "Integrated Math 1/2 Essentials", "Research Methods (QUEST)", "Current Issues", "Social Justice", "French 1", "AP Japanese Language Culture", "Japanese 5", "Japanese 2", "Japanese 1", "Spanish 1", "ASL 4", "ASL 3", "ASL 2", "ASL 1", "Dance", "Fitness Walking", "Introduction to Dance 2", "Physical Education (Year 2 PE)", "Sport Performance Training", "Surf PE", "Weight Training", "Year 1 PE", "Digital Photography", "Photo Imaging", "Drawing and Design", "Painting", "Acting 1", "Advanced Video Film", "Advanced Chorus", "Advanced Dance", "Advanced Digital Art and Design", "AP Studio Art 2D", "AP Studio Art Drawing", "Cinema Lab", "Dance Choreography and Performance", "Digital Media Production", "Digital Art and Design", "Intermediate Dance", "Intermediate Acting", "Introduction to Dance", "Rock Band Music Industry", "Seminar in Art", "Video Film", "Stagehand Technician", "Advanced Business Management", "Internship", "Intro to Business", "Marketing Principles", "Work Experience", "Recording Arts", "Fine Art Digital Photography", "Digital Composition", "Advanced Recording Arts", "Acadmeic Support", "American Popular Culture", "Non-Western World History", "Psychology", "Advanced Sculpture", "Musical Theater Production", "Sculpture", "Computer Science Foundations", "Introduction to Engineering Technique", "Robotics and Engineering", "Computer Game Design"];
// 30-30 Minutes of homework
let hw3030 = ["Chemistry - In the Earth System", "AP Art History"];
// 30-45 Minutes of homework
let hw3045 = ["Biology - The Living Earth", "Physics", "Chinese 3"];
// 30-60 Minutes of homework
let hw3060 = ["AP English Language and Composition", "English 11", "English 12", "English 9", "English 9 Honors", "Advanced Math for Decision Making", "Integrated Math 1", "Integrated Math 2", "Integrated Math 3", "Intro to Calculus", "Statistics", "Applied Science (QUEST)", "Economics", "Film and Society", "Government", "Sociology", "World History", "AP Chinese Language Culture", "Chinese 5", "Chinese 4", "AP French Language", "French 5", "French 4", "French 3", "French 2", "Japanese 4", "Japanese 3", "AP Spanish Language", "Spanish 5", "Spanish 4", "Spanish 3", "Spanish 2", "Advanced Digital Photo", "Advanced Drawing", "Advanced Acting", "Advanced Drama Honors", "Advanced Musical Theater Production", "AP Studio Art 3D", "Chamber Orchestra", "Chorus", "Jazz Band", "Symphonic Band", "Wind Ensemble", "AP Art History", "AP Psychology", "US History", "Advaned Engineering Technology", "AP Computer Science Principles", "Digital Electronics"];
// 60-60 Minutes of homework
let hw6060 = ["Anatomy and Physiology", "AP Physics 1", "AP Physics 2", "AP Physics C", "Honors Chemistry - In the Earth System"];
// 60-90 Minutes of homework
let hw6090 = ["AP English Literature", "English 10 Honors", "Modern Epic", "AP Calculus AB", "AP Calculus BC", "AP Statistics", "Calculus 3", "Integrated Math 1 Honors", "Integrated Math 2 Honors", "Integrated Math 3 Honors", "Linear Algebra", "AP Economics", "AP US Government", "AP European History", "AP US History", "AP World History", "AP Computer Science A"];
// 90-90 Minutes of homework
let hw9090 = ["AP Chemistry", "AP Environmental Science", "Organic Chemistry"];
// 90-120 Minutes of homework
let hw90120 = ["Research Internship (QUEST)"];
// 120-120 Minutes of homework
let hw120120 = ["AP Biology"];

function changeText(id) {
  let diff = 0
  let div = 0;
  let sem1p1 = document.getElementById("So Sem 1 Period 1").value;
  let sem1p2 = document.getElementById("So Sem 1 Period 2").value;
  let sem1p3 = document.getElementById("So Sem 1 Period 3").value;
  let sem1p4 = document.getElementById("So Sem 1 Period 4").value;
  let sem2p1 = document.getElementById("So Sem 2 Period 1").value;
  let sem2p2 = document.getElementById("So Sem 2 Period 2").value;
  let sem2p3 = document.getElementById("So Sem 2 Period 3").value;
  let sem2p4 = document.getElementById("So Sem 2 Period 4").value;
// calculate average class difficulty throughout the year (add another one to calculate one for the semester)
  if (diff1.indexOf(sem1p1) > -1) {
    diff = diff + 1
    div++;
  } else if (diff2.indexOf(sem1p1) > -1) {
    diff = diff + 2
    div++;
  } else if (diff3.indexOf(sem1p1) > -1) {
    diff = diff + 3
    div++;
  } else if (un.indexOf(sem1p1) > -1){
    diff = diff;
  }
  console.log(diff);
  console.log(sem1p1);
  if (diff1.indexOf(sem1p2) > -1) {
    diff = diff + 1
    div++;
  } else if (diff2.indexOf(sem1p2) > -1) {
    diff = diff + 2
    div++;
  } else if (diff3.indexOf(sem1p2) > -1) {
    diff = diff + 3
    div++;
  } else if (un.indexOf(sem1p2) > -1){
    diff = diff;
  }
  console.log(diff);
  console.log(sem1p2);
  if (diff1.indexOf(sem1p3) > -1) {
    diff = diff + 1;
    div++;
  } else if (diff2.indexOf(sem1p3) > -1) {
    diff = diff + 2;
    div++;
  } else if (diff3.indexOf(sem1p3) > -1) {
    diff = diff + 3;
    div++;
  } else if (un.indexOf(sem1p3) > -1){
    diff = diff;
  }
  console.log(diff);
  console.log(sem1p3);
  if (diff1.indexOf(sem1p4) > -1) {
    diff = diff + 1
    div++;
  } else if (diff2.indexOf(sem1p4) > -1) {
    diff = diff + 2
    div++;
  } else if (diff3.indexOf(sem1p4) > -1) {
    diff = diff + 3
    div++;
  } else if (un.indexOf(sem1p4) > -1){
    diff = diff;
  }
  console.log(diff);
  console.log(sem1p4);
  if (diff1.indexOf(sem2p1) > -1) {
    diff = diff + 1
    div++;
  } else if (diff2.indexOf(sem2p1) > -1) {
    diff = diff + 2
    div++;
  } else if (diff3.indexOf(sem2p1) > -1) {
    diff = diff + 3
    div++;
  } else if (un.indexOf(sem2p1) > -1){
    diff = diff;
  }
  console.log(diff);
  console.log(sem2p1);
  if (diff1.indexOf(sem2p2) > -1) {
    diff = diff + 1
    div++;
  } else if (diff2.indexOf(sem2p2) > -1) {
    diff = diff + 2
    div++;
  } else if (diff3.indexOf(sem2p2) > -1) {
    diff = diff + 3
    div++;
  } else if (un.indexOf(sem2p2) > -1){
    diff = diff;
  }
  console.log(diff);
  console.log(sem2p2);
  if (diff1.indexOf(sem2p3) > -1) {
    diff = diff + 1
    div++;
  } else if (diff2.indexOf(sem2p3) > -1) {
    diff = diff + 2
    div++;
  } else if (diff3.indexOf(sem2p3) > -1) {
    diff = diff + 3
    div++;
  } else if (un.indexOf(sem2p3) > -1){
    diff = diff;
  }
  console.log(diff);
  console.log(sem2p3);
  if (diff1.indexOf(sem2p4) > -1) {
    diff = diff + 1
    div++;
  } else if (diff2.indexOf(sem2p4) > -1) {
    diff = diff + 2
    div++;
  } else if (diff3.indexOf(sem2p4) > -1) {
    diff = diff + 3
    div++;
  } else if (un.indexOf(sem2p4) > -1){
    diff = diff;
  }
  console.log(diff);
  console.log(sem2p4);
  diff = diff/div;
  console.log(diff);
//Calculate homework averages of the entire year (add another to calculate per semester)
// hw1015 hw020 hw1224 hw030 hw3030 hw3045 hw3060 he6060 hw6090 hw9090 hw90120 hw120120

  let lhw = 0;
  let hhw = 0;
  if(hw1015.indexOf(sem1p1) > -1) {
    lhw = lhw + 10;
    hhw = hhw + 15;
  } else if(hw020.indexOf(sem1p1) > -1) {
    lhw = lhw + 0;
    hhw = hhw + 20;
  } else if(hw030.indexOf(sem1p1) > -1) {
    hhw = hhw + 30;
  } else if(hw3030.indexOf(sem1p1) > -1) {
    lhw = lhw + 30;
    hhw = hhw + 30;
  } else if(hw3045.indexOf(sem1p1) > -1) {
    lhw = lhw + 30;
    hhw = hhw + 45;
  } else if(hw3060.indexOf(sem1p1) > -1) {
    lhw = lhw + 30;
    hhw = hhw + 60;
  } else if(hw6060.indexOf(sem1p1) > -1) {
    lhw = lhw + 60;
    hhw = hhw + 60;
  } else if(hw6090.indexOf(sem1p1) > -1) {
    lhw = lhw + 60;
    hhw = hhw + 90;
  } else if(hw9090.indexOf(sem1p1) > -1) {
    lhw = lhw + 90;
    hhw = hhw + 90;
  } else if(hw90120.indexOf(sem1p1) > -1) {
    lhw = lhw + 90;
    hhw = hhw + 120;
  } else if(hw120120.indexOf(sem1p1) > -1) {
    lhw = lhw + 120;
    hhw = hhw + 120;
  } else if (un.indexOf(sem1p1) > -1) {
    lhw = lhw;
    hhw = hhw;
  }

  if(hw1015.indexOf(sem1p2) > -1) {
    lhw = lhw + 10;
    hhw = hhw + 15;
  } else if(hw020.indexOf(sem1p2) > -1) {
    lhw = lhw + 0;
    hhw = hhw + 20;
  } else if(hw030.indexOf(sem1p2) > -1) {
    hhw = hhw + 30;
  } else if(hw3030.indexOf(sem1p2) > -1) {
    lhw = lhw + 30;
    hhw = hhw + 30;
  } else if(hw3045.indexOf(sem1p2) > -1) {
    lhw = lhw + 30;
    hhw = hhw + 45;
  } else if(hw3060.indexOf(sem1p2) > -1) {
    lhw = lhw + 30;
    hhw = hhw + 60;
  } else if(hw6060.indexOf(sem1p2) > -1) {
    lhw = lhw + 60;
    hhw = hhw + 60;
  } else if(hw6090.indexOf(sem1p2) > -1) {
    lhw = lhw + 60;
    hhw = hhw + 90;
  } else if(hw9090.indexOf(sem1p2) > -1) {
    lhw = lhw + 90;
    hhw = hhw + 90;
  } else if(hw90120.indexOf(sem1p2) > -1) {
    lhw = lhw + 90;
    hhw = hhw + 120;
  } else if(hw120120.indexOf(sem1p2) > -1) {
    lhw = lhw + 120;
    hhw = hhw + 120;
  } else if (un.indexOf(sem1p2) > -1) {
    lhw = lhw;
    hhw = hhw;
  }

  if(hw1015.indexOf(sem1p3) > -1) {
    lhw = lhw + 10;
    hhw = hhw + 15;
  } else if(hw020.indexOf(sem1p3) > -1) {
    lhw = lhw + 0;
    hhw = hhw + 20;
  } else if(hw030.indexOf(sem1p3) > -1) {
    hhw = hhw + 30;
  } else if(hw3030.indexOf(sem1p3) > -1) {
    lhw = lhw + 30;
    hhw = hhw + 30;
  } else if(hw3045.indexOf(sem1p3) > -1) {
    lhw = lhw + 30;
    hhw = hhw + 45;
  } else if(hw3060.indexOf(sem1p3) > -1) {
    lhw = lhw + 30;
    hhw = hhw + 60;
  } else if(hw6060.indexOf(sem1p3) > -1) {
    lhw = lhw + 60;
    hhw = hhw + 60;
  } else if(hw6090.indexOf(sem1p3) > -1) {
    lhw = lhw + 60;
    hhw = hhw + 90;
  } else if(hw9090.indexOf(sem1p3) > -1) {
    lhw = lhw + 90;
    hhw = hhw + 90;
  } else if(hw90120.indexOf(sem1p3) > -1) {
    lhw = lhw + 90;
    hhw = hhw + 120;
  } else if(hw120120.indexOf(sem1p3) > -1) {
    lhw = lhw + 120;
    hhw = hhw + 120;
  } else if (un.indexOf(sem1p3) > -1) {
    lhw = lhw;
    hhw = hhw;
  }

  if(hw1015.indexOf(sem1p4) > -1) {
    lhw = lhw + 10;
    hhw = hhw + 15;
  } else if(hw020.indexOf(sem1p4) > -1) {
    lhw = lhw + 0;
    hhw = hhw + 20;
  } else if(hw030.indexOf(sem1p4) > -1) {
    hhw = hhw + 30;
  } else if(hw3030.indexOf(sem1p4) > -1) {
    lhw = lhw + 30;
    hhw = hhw + 30;
  } else if(hw3045.indexOf(sem1p4) > -1) {
    lhw = lhw + 30;
    hhw = hhw + 45;
  } else if(hw3060.indexOf(sem1p4) > -1) {
    lhw = lhw + 30;
    hhw = hhw + 60;
  } else if(hw6060.indexOf(sem1p4) > -1) {
    lhw = lhw + 60;
    hhw = hhw + 60;
  } else if(hw6090.indexOf(sem1p4) > -1) {
    lhw = lhw + 60;
    hhw = hhw + 90;
  } else if(hw9090.indexOf(sem1p4) > -1) {
    lhw = lhw + 90;
    hhw = hhw + 90;
  } else if(hw90120.indexOf(sem1p4) > -1) {
    lhw = lhw + 90;
    hhw = hhw + 120;
  } else if(hw120120.indexOf(sem1p4) > -1) {
    lhw = lhw + 120;
    hhw = hhw + 120;
  } else if (un.indexOf(sem1p4) > -1) {
    lhw = lhw;
    hhw = hhw;
  }

  let lhw2 = 0;
  let hhw2 = 0;


  if(hw1015.indexOf(sem2p1) > -1) {
    lhw2 = lhw2 + 10;
    hhw2 = hhw2 + 15;
  } else if(hw020.indexOf(sem2p1) > -1) {
    lhw2 = lhw2 + 0;
    hhw2 = hhw2 + 20;
  } else if(hw030.indexOf(sem2p1) > -1) {
    hhw2 = hhw2 + 30;
  } else if(hw3030.indexOf(sem2p1) > -1) {
    lhw2 = lhw2 + 30;
    hhw2 = hhw2 + 30;
  } else if(hw3045.indexOf(sem2p1) > -1) {
    lhw2 = lhw2 + 30;
    hhw2 = hhw2 + 45;
  } else if(hw3060.indexOf(sem2p1) > -1) {
    lhw2 = lhw2 + 30;
    hhw2 = hhw2 + 60;
  } else if(hw6060.indexOf(sem2p1) > -1) {
    lhw2 = lhw2 + 60;
    hhw2 = hhw2 + 60;
  } else if(hw6090.indexOf(sem2p1) > -1) {
    lhw2 = lhw2 + 60;
    hhw2 = hhw2 + 90;
  } else if(hw9090.indexOf(sem2p1) > -1) {
    lhw2 = lhw2 + 90;
    hhw2 = hhw2 + 90;
  } else if(hw90120.indexOf(sem2p1) > -1) {
    lhw2 = lhw2 + 90;
    hhw2 = hhw2 + 120;
  } else if(hw120120.indexOf(sem2p1) > -1) {
    lhw2 = lhw2 + 120;
    hhw2 = hhw2 + 120;
  } else if (un.indexOf(sem2p1) > -1) {
    lhw2 = lhw2;
    hhw2 = hhw2;
  }

  if(hw1015.indexOf(sem2p2) > -1) {
    lhw2 = lhw2 + 10;
    hhw2 = hhw2 + 15;
  } else if(hw020.indexOf(sem2p2) > -1) {
    lhw2 = lhw2 + 0;
    hhw2 = hhw2 + 20;
  } else if(hw030.indexOf(sem2p2) > -1) {
    hhw2 = hhw2 + 30;
  } else if(hw3030.indexOf(sem2p2) > -1) {
    lhw2 = lhw2 + 30;
    hhw2 = hhw2 + 30;
  } else if(hw3045.indexOf(sem2p2) > -1) {
    lhw2 = lhw2 + 30;
    hhw2 = hhw2 + 45;
  } else if(hw3060.indexOf(sem2p2) > -1) {
    lhw2 = lhw2 + 30;
    hhw2 = hhw2 + 60;
  } else if(hw6060.indexOf(sem2p2) > -1) {
    lhw2 = lhw2 + 60;
    hhw2 = hhw2 + 60;
  } else if(hw6090.indexOf(sem2p2) > -1) {
    lhw2 = lhw2 + 60;
    hhw2 = hhw2 + 90;
  } else if(hw9090.indexOf(sem2p2) > -1) {
    lhw2 = lhw2 + 90;
    hhw2 = hhw2 + 90;
  } else if(hw90120.indexOf(sem2p2) > -1) {
    lhw2 = lhw2 + 90;
    hhw2 = hhw2 + 120;
  } else if(hw120120.indexOf(sem2p2) > -1) {
    lhw2 = lhw2 + 120;
    hhw2 = hhw2 + 120;
  } else if (un.indexOf(sem2p2) > -1) {
    lhw2 = lhw2;
    hhw2 = hhw2;
  }

  if(hw1015.indexOf(sem2p3) > -1) {
    lhw2 = lhw2 + 10;
    hhw2 = hhw2 + 15;
  } else if(hw020.indexOf(sem2p3) > -1) {
    lhw2 = lhw2 + 0;
    hhw2 = hhw2 + 20;
  } else if(hw030.indexOf(sem2p3) > -1) {
    hhw2 = hhw2 + 30;
  } else if(hw3030.indexOf(sem2p3) > -1) {
    lhw2 = lhw2 + 30;
    hhw2 = hhw2 + 30;
  } else if(hw3045.indexOf(sem2p3) > -1) {
    lhw2 = lhw2 + 30;
    hhw2 = hhw2 + 45;
  } else if(hw3060.indexOf(sem2p3) > -1) {
    lhw2 = lhw2 + 30;
    hhw2 = hhw2 + 60;
  } else if(hw6060.indexOf(sem2p3) > -1) {
    lhw2 = lhw2 + 60;
    hhw2 = hhw2 + 60;
  } else if(hw6090.indexOf(sem2p3) > -1) {
    lhw2 = lhw2 + 60;
    hhw2 = hhw2 + 90;
  } else if(hw9090.indexOf(sem2p3) > -1) {
    lhw2 = lhw2 + 90;
    hhw2 = hhw2 + 90;
  } else if(hw90120.indexOf(sem2p3) > -1) {
    lhw2 = lhw2 + 90;
    hhw2 = hhw2 + 120;
  } else if(hw120120.indexOf(sem2p3) > -1) {
    lhw2 = lhw2 + 120;
    hhw2 = hhw2 + 120;
  } else if (un.indexOf(sem2p3) > -1) {
    lhw2 = lhw2;
    hhw2 = hhw2;
  }

  if(hw1015.indexOf(sem2p4) > -1) {
    lhw2 = lhw2 + 10;
    hhw2 = hhw2 + 15;
  } else if(hw020.indexOf(sem2p4) > -1) {
    lhw2 = lhw2 + 0;
    hhw2 = hhw2 + 20;
  } else if(hw030.indexOf(sem2p4) > -1) {
    hhw2 = hhw2 + 30;
  } else if(hw3030.indexOf(sem2p4) > -1) {
    lhw2 = lhw2 + 30;
    hhw2 = hhw2 + 30;
  } else if(hw3045.indexOf(sem2p4) > -1) {
    lhw2 = lhw2 + 30;
    hhw2 = hhw2 + 45;
  } else if(hw3060.indexOf(sem2p4) > -1) {
    lhw2 = lhw2 + 30;
    hhw2 = hhw2 + 60;
  } else if(hw6060.indexOf(sem2p4) > -1) {
    lhw2 = lhw2 + 60;
    hhw2 = hhw2 + 60;
  } else if(hw6090.indexOf(sem2p4) > -1) {
    lhw2 = lhw2 + 60;
    hhw2 = hhw2 + 90;
  } else if(hw9090.indexOf(sem2p4) > -1) {
    lhw2 = lhw2 + 90;
    hhw2 = hhw2 + 90;
  } else if(hw90120.indexOf(sem2p4) > -1) {
    lhw2 = lhw2 + 90;
    hhw2 = hhw2 + 120;
  } else if(hw120120.indexOf(sem2p4) > -1) {
    lhw2 = lhw2 + 120;
    hhw2 = hhw2 + 120;
  } else if (un.indexOf(sem2p4) > -1) {
    lhw2 = lhw2;
    hhw2 = hhw2;
  }

  console.log(lhw);
  console.log(hhw);

  document.getElementById("diff").innerHTML = diff;
  document.getElementById("lhw").innerHTML = lhw;
  document.getElementById("hhw").innerHTML = hhw;
  document.getElementById("lhw2").innerHTML = lhw2;
  document.getElementById("hhw2").innerHTML = hhw2;

}
/* testing to see if all values are accounted for
console.log(document.getElementById("Sem1P1").value);
console.log(document.getElementById("Sem1P2").value);
console.log(document.getElementById("Sem1P3").value);
console.log(document.getElementById("Sem1P4").value);
console.log(document.getElementById("Sem2P1").value);
console.log(document.getElementById("Sem2P2").value);
console.log(document.getElementById("Sem2P3").value);
console.log(document.getElementById("Sem2P4").value);
*/

/* testing if the diff value can be matched with a class;
let sem1p1 = document.getElementById("Sem1P1").value;
if (diff1.indexOf(sem1p1) > -1) {
  console.log(diff1.indexOf(sem1p1) > -1);
  console.log("Difficulty 1");
} else if (diff2.indexOf(sem1p1) > -1) {
  console.log("Difficulty 2");
} else if (diff3.indexOf(sem1p1) > -1) {
  console.log("Difficulty 3");
} else {
  console.log("No class found");
}
*/
