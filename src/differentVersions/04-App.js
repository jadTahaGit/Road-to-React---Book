import './App.css';
// It problematic to create global refernces in React;
const outputBox = document.querySelector(".outputBox");

// Doesnt work always wait to learn REAct Dom
const printTheValue = (e) => {
  if(e) outputBox.classList.add("border"); 
  outputBox.innerText = e;
}

const App = () => {
  const handleChange = event => {
    console.log(event.target.value);
    // printTheValue(event.target.value);
  }

  return (
    <div>
      <h1>Hey All </h1>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleChange} />

      <div className="outputBox">
      </div>
    </div>
  );
}

export default App;
