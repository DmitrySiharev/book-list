import React from 'react'
import { Link } from 'react-router-dom'

import { BookContext } from 'context'

import { Pagination } from '@mui/material'
import { Skeleton } from '@mui/material'

import BookCard from 'components/BookCard'
import SearchBar from 'components/SearchBar'

import useClasses from 'hooks/useClasses'
import styles from './styles'

function HomePage() {
	const classes = useClasses(styles)
	const { books } = React.useContext(BookContext)
	const [searchResults, setSearchResults] = React.useState(books)
	const [page, setPage] = React.useState(1)
	const BOOKS_PER_PAGE = 10


	React.useEffect(() => {
		if (books.length > 0) {
			setSearchResults(books)
		}
	}, [books])

	const handleSearch = value => {
		const filteredBooks = books.filter(
			book =>
				book.title.toLowerCase().includes(value.toLowerCase()) ||
				book.author.toLowerCase().includes(value.toLowerCase())
		)
		setSearchResults(filteredBooks)
		setPage(1)
	}

	const handleBookSelect = selectedBook => {
		if (selectedBook !== null) {
			setSearchResults((prevSearchResults) => {
				const isBookInResults = prevSearchResults.some(book => book.id === selectedBook.id)
				if (!isBookInResults) {
					return [...prevSearchResults, selectedBook]
				}
				return prevSearchResults
			})
		}
	}

	const handleScrollToTopPage = (event, newPage) => {
		setPage(newPage)

		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const indexOfLastBook = page * BOOKS_PER_PAGE
	const indexOfFirstBook = indexOfLastBook - BOOKS_PER_PAGE
	const currentBooks = searchResults.slice(indexOfFirstBook, indexOfLastBook)

	const skeletons = new Array(BOOKS_PER_PAGE).fill('').map((_, index) => (
		<div
			key={index}
			style={{ width: '300px', marginBottom: '20px', backgroundColor: '#DB4E3F' }}
		>
			<Skeleton variant='rectangular' width='100%' height='200px' />
		</div>
	))

	return (
		<div className={classes.root}>
			<div className={classes.linksContainer}>
				<Link to='/' className={classes.link}>Books list</Link>

				<Link to='/favourite' className={classes.link}>Go to Favorites</Link>
			</div>

			<SearchBar
				books={books}
				handleSearch={handleSearch}
				handleBookSelect={handleBookSelect}
			/>

			<div className={classes.cardsContainer}>
				{currentBooks.length > 0 ? (
					currentBooks.map((book, index) => (
						<BookCard key={`${book.id}-${index}`} book={book} />
					))
				) : (
					skeletons
				)}
			</div>

			<Pagination
				count={Math.ceil(searchResults.length / BOOKS_PER_PAGE)}
				page={page}
				onChange={handleScrollToTopPage}
				color='secondary'
				shape='rounded'
				className={classes.pagination}
			/>
		</div>
	)
}

export default HomePage