import React from "react";

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
      
      ];
      
      const [searchTerm, setSearchTerm] = React.useState('');

      const handleChange = event => setSearchTerm(event.target.value);

      return(
          <div>
              <h1>Stories</h1>
              <label htmlFor="search">Search: </label>
              <input id="search" type="text" onChange={handleChange}/>
              <p>Searching for <strong>{searchTerm}</strong></p>

              <hr />

              <List list={stories}/>
          </div>
      );
}

const List = prop => prop.list.map(item => {
    <div className="itemBox" key={item.objectID}>
        <a href={item.url}>{item.title}</a>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>            
  </div>
})


export default App;