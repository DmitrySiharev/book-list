import React from 'react'
import { useParams, Link } from 'react-router-dom'

import { BookContext } from 'context'

import useClasses from 'hooks/useClasses'
import styles from './styles'

function BookPage() {
	const { id } = useParams()
	const { books } = React.useContext(BookContext)
	const [isFavorite, setIsFavorite] = React.useState(false)

	const classes = useClasses(styles, {isFavorite})

	React.useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
		setIsFavorite(favorites.some(item => item.id === parseInt(id, 10)));
	}, [id]);

	const book = books.find(book => book.id === parseInt(id))
	const {
		title,
		author,
		publication_year,
		cover_image,
		description
	} = book || {}

	if (!book) {
		return (
			<Link to='/' className={classes.notFound}>
				Book not found :(
			</Link>
		)
	}

	const addToFavorites = () => {
		const favorites = JSON.parse(localStorage.getItem('favorites')) || []
		const isBookInFavorites = favorites.some(book => book.id === parseInt(id, 10))

		if (!isBookInFavorites) {
			const bookToAdd = { id: parseInt(id, 10), title, author }
			favorites.push(bookToAdd)
			localStorage.setItem('favorites', JSON.stringify(favorites))
			setIsFavorite(true)
		} else {
			alert('The book has already been added to favorites')
		}
	}

	const removeFromFavorites = () => {
		const favorites = JSON.parse(localStorage.getItem('favorites')) || []
		const updatedFavorites = favorites.filter(book => book.id !== parseInt(id, 10))
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
		setIsFavorite(false)
		alert('Book removed from favorites')
	}

	return (
		<div className={classes.root}>
			<h2 className={classes.bookTitle}>{title}</h2>

			<div className={classes.container}>
				<div className={classes.bookImage}>
					<img src={cover_image} alt={title} style={{ maxWidth: '300px' }} />
				</div>

				<div className={classes.bookInfo}>
					<p className={classes.author}>{author}</p>
					<p className={classes.description}>Description: {description}</p>
					<p className={classes.description}>Publication Year: {publication_year}</p>
				</div>
			</div>

			<button
				onClick={isFavorite ? removeFromFavorites : addToFavorites}
				className={classes.btnFavorite}
			>
				{isFavorite ? 'Remove from favorites' : 'Add to favorites'}
			</button>
		</div>
	)
}

export default BookPage
