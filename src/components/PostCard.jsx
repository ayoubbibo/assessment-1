import {Card} from 'react-bootstrap';
import '../styles/PostCard.css'

function PostCard({ author,  id, publishDate, title})
{
    return(
        <li key={id} className="post-li">
            <Card>
                <Card.Img variant="top" src={author.avatar} className="post-cover__item"/>
                <Card.Body>
                    <Card.Title>{author.name}<br/>
                    </Card.Title>
                    <Card.Text>
                        {title}		
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">published : {publishDate}</small>
                </Card.Footer>
            </Card>
            
        </li>
    )
}

export default PostCard;