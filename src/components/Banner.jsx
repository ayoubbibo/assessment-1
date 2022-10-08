import '../styles/Banner.css';

/**
 * the header of the applicaton
 */
function Banner({title}) {
	return ( 
		<header >
			<h1 className='banner'>{title}</h1>
		</header>
	)
}

export default Banner