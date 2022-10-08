import { useNavigate, useLocation } from "react-router-dom";
import PostCard from './PostCard';
import Banner from './Banner';
import { ListGroup,Card, Button} from 'react-bootstrap';
import '../styles/Details.css'

/**
 * this component render all the details of a post 
 * @param props the data of the author  

 */
function Details(){
    //we use navigate to le the user change the url and go to the home page
    let navigate = useNavigate();
    //This hook returns the current location object
    const location = useLocation();
    // the data to display
    const data = location.state?.data;
    return (
        <div className="App">
            <Banner title={data.author.name} onClick={()=> {navigate("/Home")}}/>
            <div className="details-container">
                <PostCard  
                    author={data.author}
                    id={data.id}
                    publishDate={data.publishDate}
                    title={data.title}
                />
                <div className="details">
                    <Card border="info">
                        <Card.Header>id</Card.Header>
                        <Card.Body>
                            <Card.Text>#{data.id}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="info">
                        <Card.Header>Summary</Card.Header>
                        <Card.Body>
                            <Card.Text>{data.summary}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="info">
                        <Card.Header>Categories</Card.Header>
                        <Card.Body>
                            <ListGroup variant="info">
                                {
                                    data.categories.map(category => 
                                        <ListGroup.Item key={category.id}>
                                            {category.name}        		
                                        </ListGroup.Item>
                                    )}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Button variant="outline-light" onClick={()=> {navigate("/Home")}}>return to Home</Button>
                </div>
            </div>
        </div> 
    )    
}

export default Details;