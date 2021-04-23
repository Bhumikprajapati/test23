import { useState } from 'react';
import './App.css';
import './likeButton.css';
function App() {

  const [likecount, setlikeCount] = useState(100)
  const [dislikecount,setdislikeCount]=useState(25)
  const [likeToggle, setLikeToggle] = useState(false)
  const [dislikeToggle, setdislikeToggle] = useState(false)

  const likeCountHandler = () => {
    if (likeToggle) {
      setlikeCount(likecount-1)
      setLikeToggle(false)
    }
    else {
    setlikeCount(likecount+1)
      setLikeToggle(true)
      if (dislikeToggle) {
        setdislikeToggle(false)
       setdislikeCount(dislikecount+1)
      }
    }
  }
  const dislikeCountHandler = () => {
    if (dislikeToggle) {
    setdislikeCount(dislikecount-1)
      setdislikeToggle(false)
    }
    else {
      
     setdislikeCount(dislikecount+1)
      setdislikeToggle(true)
      if (likeToggle) {
        setlikeCount(likecount-1)
        setLikeToggle(false)
      }
    }

  }
  return (
    <div className="App">

      <h2> <button className={likeToggle ? "like-button liked" : "like-button"}
        onClick={likeCountHandler}  >
        Like| <span className="likes-counter" >{likecount} </span></button>

      </h2>
      <h2> <button className={dislikeToggle ? "dislike-button disliked" : "dislike-button"}
        onClick={dislikeCountHandler} >
        Dislike|<span className="dislikes-counter" >{dislikecount} </span></button>

      </h2>
    </div>
  );
}

export default App;
