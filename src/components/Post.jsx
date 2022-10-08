import PostCard from './PostCard';
import {Link} from 'react-router-dom';

/**
 * Using bootstrap this component will be able to render a card witch containes
 * some of the post informations and onclick wich link to the page where all the details
 * will be showen
 * @param author containes the name and the cover avatar of the author of the post 
 * @param categories array of the categories of the post
 * @param id id of the author of the post
 * @param summary summary of the post
 * @param publishDate publishDate of the post
 * @param title title of the post 
 * @returns 
 */
function Post({ author, categories, id, publishDate, summary,title})
{
    return (
		<Link style={{ textDecoration: 'none' }} to={"/details/" + author.name} state={{data:{author: author, categories: categories, id: id, summary: summary, title: title,publishDate: publishDate}}}>
			<PostCard  
				author={author}
				categories={[]}
				id={id}
				publishDate={publishDate}
				summary={""}
				title={title}
			/>
		</Link>
	)
}

export default Post;