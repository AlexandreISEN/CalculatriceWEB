const addToCalc = (value) => {
    document.getElementById('input').value += value;
  }
  
  const clearInput = () => {
    if (document.getElementById('input').value === "") {
      document.getElementById('output').value = '';
    }
    document.getElementById('input').value = '';
  }
  
  const clearSingle = () => {
      const input = document.getElementById('input').value;
      document.getElementById('input').value = input.slice(0, -1);
  }
  
  const calculate = () => {
    const toCalc = document.getElementById('input').value;
    let result = eval(toCalc);
    if (!Number.isInteger(result)) {
      result = eval(toCalc).toFixed(2)
    }
    document.getElementById('output').value +=(`\n${toCalc} = ${result}`);
    const textarea = document.getElementById('output');
    textarea.scrollTop = textarea.scrollHeight;
    document.getElementById('input').value = '';
  }