export default (_, { isFavorite }) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh'
	},

	container: {
		display: 'flex',
		flexWrap: 'wrap',
		marginBottom: 30
	},

	bookInfo: {
		padding: '20px 40px'
	},

	bookTitle: {
		color: '#FFFFEF',
		fontSize: 60
	},

	author: {
		color: '#FFFFEF',
		fontSize: 30
	},

	description: {
		color: '#FFFFEF',
		fontSize: 20,
		flex: '1 1 300px',
		minWidth: '200px',
		maxWidth: '500px',
	},

	notFound: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
		color: '#FFFFEF',
		fontSize: 60,
		textDecoration: 'none'
	},

	btnFavorite: {
			backgroundColor: isFavorite ? 'green' : 'transparent',
			color: 'white',
			border: '1px solid #CC6600',
			padding: '5px 10px',
			cursor: 'pointer',
			borderRadius: '5px'
	}
})
