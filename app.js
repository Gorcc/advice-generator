changeAdvice = document.getElementById("advices");
changeId = document.getElementById("ids");
button = document.getElementById("dice");




button.addEventListener("click",()=> {fetch("https://api.adviceslip.com/advice")
.then((res) => res.json())
.then((data) => {
  changeAdvice.innerHTML = data.slip.advice;
  changeId.innerHTML = `Advice #${data.slip.id}`;

  console.log(data);
});})



