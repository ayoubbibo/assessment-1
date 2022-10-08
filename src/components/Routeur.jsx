import Details from './Details';
import Home from './Home';
import {Route, Routes, useLocation} from 'react-router-dom';
import ErrorPage from './ErrorPage';

/**
 *  this function It enables the navigation among views of various components in a React 
 * Application, allows changing the browser URL, and keeps the UI in sync with the URL
 * it creates only tree routes the first one is for the home page of posts and the second is for
 * the details of the post and an error if the user trie a url that not exist for our applicaiton
 * @returns A router
 */
function Routeur()
{
    const location = useLocation();
    return(
        <Routes location={location} key={location.pathname}> 
            <Route path="/Home" exact element={<Home />}/>
            <Route path="/" exact element={<Home />}/>
            <Route path="/details/:authorName" element={<Details />}/>
            <Route path="*" element={<ErrorPage />}/>
        </Routes>
    );
}

export default Routeur;