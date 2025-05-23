const input = document.getElementById("user-input");
const clearButton = document.getElementById("clear-btn");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("results-div");
  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

const check = () => {
  if (input.value === ""){
    return alert("Please provide a phone number");
  }
  
  if (phoneRegex.test(input.value)){
     result.innerText = "Valid US number: " + input.value;
     return;
  }else if (!phoneRegex.test(input.value)){
     result.innerText = "Invalid US number: " + input.value;
  }
};


const clear = () => {
  result.textContent = ""; 
  input.value = "";
  return;
}

checkButton.addEventListener("click", check);
clearButton.addEventListener("click", clear);