import React from 'react'

export const BookContext = React.createContext()

export const BookProvider = props => {
	const [books, setBooks] = React.useState([])
	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState(null)

	const fetchBooks = async () => {
		try {
			const response = await fetch('https://freetestapi.com/api/v1/books')
			if (!response.ok) {
				throw new Error('Failed to fetch data')
			}
			const data = await response.json()
			setBooks(data)
			setLoading(false)
		} catch (error) {
			setError(error.message)
			setLoading(false)
		}
	}

	React.useEffect(() => {
		fetchBooks()
	}, [])

	return (
		<BookContext.Provider value={{ books, loading, error }}>
			{props.children}
		</BookContext.Provider>
	)
}
