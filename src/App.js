import { useState } from 'react';
import './App.css';
import './likeButton.css';
function App() {

  const [count, setCount] = useState({
    likeCount: 100,
    dislikeCount: 25
  })
let likeCss=["like-button"]
let dislikeCss=["dislike-button "]
const likeCountHandler=()=>{
  if(count.likeCount===101)
  {
    setCount({ ...count, likeCount: count.likeCount - 1 })
    likeCss.pop("liked")
  }
  else{
    setCount({ ...count, likeCount: count.likeCount + 1 })
    likeCss.push("liked")
  }
}
const dislikeCountHandler=()=>{
  if(count.dislikeCount===26)
  {
    setCount({ ...count, dislikeCount: count.dislikeCount - 1 })
    dislikeCss.pop("disliked")
  }
  else{
    setCount({ ...count, dislikeCount: count.dislikeCount + 1 })
    dislikeCss.push("disliked")
  }
} 


  return (
    <div className="App">
      <h1>Hii All</h1>
      <h2> <button className={likeCss}
       onClick={likeCountHandler}  >
         Like|</button>
        <span className="likes-counter" >{count.likeCount} </span>
      </h2>
      <h2> <button className={dislikeCss} 
      onClick={dislikeCountHandler} >
        Dislike|</button>
        <span className="dislikes-counter"   >{count.dislikeCount} </span>
      </h2>
    </div>
  );
}

export default App;
