import './App.css';

const List = props => props.list.map(item => (
  <div className="itemBox" key={item.objectID}>
        <a href={item.url}>{item.title}</a>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>            
  </div>
) )

const App = () => {
  const stories = [
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
  
  const handleChange = event => {
    console.log(event.target.value);
  }

  return (
    <div>
      <h1>Hey All </h1>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleChange} />
      <div className="collection-list">
      <List list = {stories}></List>
      </div>

    </div>
  );
}

export default App;
