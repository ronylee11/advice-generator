const adviceNumber = document.querySelector("#advice-num");
const advice = document.querySelector("#advice");
const button = document.querySelector(".button");

//alert("Started");
const getAdvice = async () => {
  //try {
  //const response = await fetch("https://api.adviceslip.com/advice");
  //const data = await response.json();
  //adviceNumber.innerHTML = data.slip.id;
  //advice.innerHTML = data.slip.advice;
  //} catch (error) {
  //console.log(error);
  //}
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://api.adviceslip.com/advice", config); // Note: axios.get("") returns html
    //adviceNumber.innerText = res.data.slip.id;
    //advice.innerText = res.data.slip.advice;
    //console.log(res);
    return res.data.slip;
    //return res.data;
  } catch (e) {
    //console.log(e);
    return "NO ADVICES AVAILABLE! :C";
  }
};

const showAdvice = async () => {
  const adviceObj = await getAdvice();
  adviceNumber.innerText = adviceObj.id;
  advice.innerText = '"' + adviceObj.advice + '"';
};

//getAdvice();
//console.log(getAdvice());
showAdvice();
button.addEventListener("click", showAdvice);
