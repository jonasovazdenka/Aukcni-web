const getValueInput = () =>{
    let inputValue = document.getElementById("domTextElement").value; 
    document.getElementById("domTextElement").innerHTML = inputValue;
    console.log(document.getElementById('domTextElement').value); 
  }