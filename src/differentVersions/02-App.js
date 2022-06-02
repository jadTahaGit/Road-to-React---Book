import './App.css';
const list = [
  {
    title : 'React',
    url: 'https://reactjs.org',
    author: 'Jad Taha',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title : 'Redux',
    url: 'https://redux.js.org',
    author: 'Jad Taha',
    num_comments: 2,
    points: 55,
    objectID: 1,
  }

]
function App() {
  return (
    <div className="dynamicList">
      <h1>Render The List Dynamicly</h1>
      
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />

      <div className="collection-list">

      {list.map((item)=>{
        return (
          <div className="itemBox" key={item.objectID}>
            
              <a href={item.url}>
                {item.title}
              </a>
        
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>            
            </div>
        )  
      })}
      </div>
    </div>
  );
}

export default App;
