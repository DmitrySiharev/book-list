import React from 'react'
import { Link } from 'react-router-dom'

import useClasses from 'hooks/useClasses'
import styles from './styles'

function FavouriteBooksPage() {
	const classes = useClasses(styles)
	const [favoriteBooks, setFavoriteBooks] = React.useState([])

	React.useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem('favorites')) || []
		setFavoriteBooks(favorites)
	}, [])

	return (
		<div className={classes.container}>
			{favoriteBooks.length > 0 ? (
				<div>
					<h2 className={classes.title}>Favorite Books</h2>
					{favoriteBooks.map(book => (
						<div key={book.id} className={classes.card}>
							<p>Author: {book.author}</p>
							<p>Name: {book.title}</p>

							<Link to={`/book/${book.id}`} className={classes.link}>
								To the book
							</Link>
						</div>
					))}
				</div>
			) : (
				<div className={classes.notFound}>
					<p>No favorite books found</p>
				</div>
			)}
		</div>
	)
}

export default FavouriteBooksPage
