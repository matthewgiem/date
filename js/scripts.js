//back end logic
var dob;
var name;
var pref;
var place;
var age;
// find the age of the person
var years = function(date)  {
  var born1 = parseInt(dob.substr(0, 4));
  age = ((new Date()).getFullYear()) - born1;
  return age;
}
// matching function
var match = function()  {

  if ( age <= 25 && place === "canada" && pref === "male" || age <= 25 && place === "westCoast" && pref === "male" ) {
    window.location.replace("bieber.html");
  } else if ( age >= 45 && pref === "female") {
    window.location.replace("berry.html");
  } else if ( pref === "male" && age === 50 ) {
    window.location.replace("Jay-Z.html");
  } else if ( pref === "female" && place === "eastCoast" || pref === "female" && place === "international") {
      window.location.replace("wattson.html");
    } else {
    window.location.replace("single.html");
  }
}

//front end logic

$(function()  {
  $("form.blank").submit(function(event) {
    dob = $("#born").val();
    name = $("#name").val();
    pref = $("input:radio[name=pref]:checked").val();
    place = $("#local").val();

    years(dob);
    match();
    event.preventDefault();
  });
  $(".person1").text(name);
});
