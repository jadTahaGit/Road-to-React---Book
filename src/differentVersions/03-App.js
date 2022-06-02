import './App.css';
// class List{
//   constructor(title,url,author, num_comments, points){
//     this.title = title;
//     this.url = url;
//     this.author = author;
//     this.num_comments = num_comments;
//     this.points = points;
//   };

//   getTitle (){
//     return this.title;
//   }
//   getUrl (){
//     return this.url;
//   }
//   getAuthor (){
//     return this.author;
//   }
//   getNumComments (){
//     return this.num_comments;
//   }
//   getPoints (){
//     return this.points;
//   }

// }

// const list = new List("JS", "https://js.com", "Jad Taha", 1_000_000, 12_000_000 );


// //Einschub OOP
// //class Definition
// class Developer {
//   constructor(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getName(){
//     return this.firstName + " " + this.lastName;
//   }
// }

// // class Instantion
// const jad = new Developer("Jad", "Taha");
// console.log(jad.getName);

// // another class Instantion:
// const sarah = new Developer("Sarah", "Ezz");
// console.log(sarah.getName);

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
  } ,
   {
    title : 'JS',
    url: 'https://js.com',
    author: 'Jad Taha',
    num_comments: 2,
    points: 556,
    objectID: 2,
  } ,
   {
    title : 'PHP',
    url: 'https://php.net',
    author: 'Jad Taha',
    num_comments: 2,
    points: 15,
    objectID: 3,
  } ,
   {
    title : 'JT',
    url: 'https://jadtaha.com',
    author: 'Jad Taha',
    num_comments: 2,
    points: 55,
    objectID: 4,
  }

]

const List = () => {
  return list.map((item)=>{
    return (
      <div className="itemBox" key={item.objectID}>
        
          <a href={item.url}>
            {item.title}
          </a>
    
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>            
        </div>
    );  
  });
}

const App = () => {
  return (
    <div className="dynamicList">
      <h1>Render The List Dynamicly</h1>
      
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />

      <div className="collection-list">
      {List()}
      </div>
    </div>
  );
}

export default App;
