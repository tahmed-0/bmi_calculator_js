function calculate() {

  //variables

  var category = document.getElementById("category");

  var bmi;
  var result = document.getElementById("result");

  var height = parseInt(document.getElementById("height").value);

  console.log("height: " + height);

  var weight = parseInt(document.getElementById("weight").value);

console.log("weight: " + weight);

  document.getElementById("weight-value").textContent = weight + " kg";

  document.getElementById("height-value").textContent = height + " cm";

  //calculate for bmi


  bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
  
  result.textContent = bmi;

  
//if else statements 

if(bmi < 18.5) {
  category.textContent = "Underweight"
  result.style.color = "##ffc44d";
} else if (bmi >= 18.5 && bmi <= 24.9){
  category.textContent = "Normal weight";
  result.style.color = "#0be881";


} else if(bmi >= 25 && bmi <= 29.9) {
  category.textContent = "Overweight";
  result.style.color = "#ff884d";


} else {
  category.textContent = "Obese";
  result.style.color = "#ff5e57";

}
}