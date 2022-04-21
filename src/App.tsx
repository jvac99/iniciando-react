import {useState} from "React"
import {Tweet} from "./components/Tweet"

function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
  ])
  return ( 
    <div>
      {
        tweets.map(tweet => {
          return <Tweet text={tweet}/>
        })
      }
    </div>
  )
}

export default App
