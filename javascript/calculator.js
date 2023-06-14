function runActivity() {
  alert("Hi there!");
  let name = prompt("Please enter your complete name");
  console.log("Hi, " + name + "!");
  alert("Let's play some games!");
  alert("Choose two number from 1 to 10.");
  let num1 = Number(prompt("Enter the first number."));
  let num2 = Number(prompt("Enter the second number."));
  let answer = num1 + num2;
  alert(
    "In your mind add the two numbers and i wiill try to guess the answer."
  );
  console.log(num1 + num2);
  alert("The answer is " + answer + ".");
}
