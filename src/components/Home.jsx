import '../styles/App.css';
import Axios from "axios";
import { useEffect, useState } from 'react';
import PostsList from './PostsList';
import Banner from './Banner';

/**
 * this is the main component where the request for fetching data from the api is done
 * it containes the posts list
 */
function Home(){
const [data, setData] = useState([]);
useEffect(() => {
    Axios.get('http://localhost:3000/api/posts')
    .then(res => { 
    //console.log("We got the data that we need ",res.data.posts)
    setData(res.data.posts);
    }
    )
    .catch(err => console.log(err));
}, [])
return(
    <div className="App">
        <Banner title={"POSTS"}/>     
        <PostsList data={data}/>
    </div>
)
}

export default Home;
  