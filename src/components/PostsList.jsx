import Post from './Post';
import Categories from './Categories';
import '../styles/PostsList.css';
import {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';

/**
 * this component render a list of posts , it will render
 * all the posts if there are no selected catergory Or the post witch matches 
 * to the selected categories 
 * @param data the data retrieved from the api by the fetch in the component app 
 * @returns 
 */
function PostsList({data})
{    
    const savedSelectedCategories = localStorage.getItem('selectedCategories');
    // table of the selected categories
	const [selectedCategories, setSelectedCategory] = useState(savedSelectedCategories ? JSON.parse(savedSelectedCategories) : [])
    useEffect(() => {
		localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories))
	}, [selectedCategories])
	
    // the number of posts to render at the start of the app 
    const [noOfElement,setnoOfElement] = useState(4);
    // text to render in the load more button 
    const [load, setLoad] = useState(""); 
    // the number of posts found when searching for the posts where there are a selected category 
    const [noOfElementFound,setnoOfElementFound] = useState(0);
    // table that contains the posts found after the selecting a category
    const [filteredPosts, setfilteredPosts] = useState([]); 
    
    /**
     * this Effect handle the pagination
     * at the beginning we will show only 4 posts and onClick on the load button we add 4 posts
     * the main idea heer is that we display only the same number of posts that was displayed before selecting
     * a category and show the user how much posts can be loaded
    */
    useEffect( () => {
        if(noOfElementFound > 0)
        {
            if(noOfElement < noOfElementFound )
            {
                setLoad("Load more - " + (noOfElementFound - noOfElement).toString()+" -"); 
            } else 
            {
                setLoad("No more element to Load (0)");    
            }
        }else {
            if(noOfElement < data.length )
            {
                setLoad("Load more - " + (data.length - noOfElement).toString()+" -");
            } else 
            {
                setLoad("No more element to Load (0)");    
            }
        }
    },[data.length,noOfElement,noOfElementFound]);
    
    // slicing the table of data to load more in the next time
    const slice = data.slice(0, noOfElement);


    /**
     * Test if at lest one of the categories of the post matches the selected categories
     * if there are no selected categories we render all the posts
     * else if no selected categories matches with the post categories we render nothing (null) 
     * @param  selectedCategories
     * @param  categories the categories of the post to test if we should render the post or not  
     * @returns 
     */
    function addToRender(selectedCategories, categories){
        const categoriesNames = categories.map(category => category.name);
        const found = categoriesNames.some((cat) => selectedCategories.includes(cat));
        return found;
    }

    /**
     * this Effect handle the search of the posts in the data table when a category is selected
     */
    useEffect(
    () => 
    {
        setfilteredPosts([...data.map(({author, categories, id, publishDate, summary,title}) =>
                addToRender(selectedCategories,categories) ? {author, categories, id, publishDate, summary,title} : null
            ).filter(c => c !== null)]);
        setnoOfElementFound(filteredPosts.length);
    }, [data, selectedCategories, filteredPosts.length])
    const slice2 = filteredPosts.slice(0, noOfElement);


    /**
     * this method is called to display the specific data to the user (all the posts or the selected ones)  
     * @param show the data to display
    */
    function postsToRender(show)
    {
        return (
            show.map(({author, categories, id, publishDate, summary,title}) =>        
                <Post
                    author={author}
                    categories={categories}
                    id={id}
                    publishDate={publishDate}
                    summary={summary}
                    title={title}
                    key={id}
                />    
            )
        )
    }

    return(
        <div className="posts-container">
            <div className="posts-categories">
                <Categories
                data={data}
                selectedCategories={selectedCategories} 
                setSelectedCategory={setSelectedCategory}
                />
            </div> 
            <ul className="post-display">
                {
                    selectedCategories.length === 0 ?  postsToRender(slice) : postsToRender(slice2)
                } 
            </ul>
            <Button variant="outline-info" onClick={() => setnoOfElement(noOfElement + 4)}>
                {load}
            </Button>
        </div>
    )
}
export default PostsList;