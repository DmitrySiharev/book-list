export default () => ({
	container: {
		maxWidth: '300px',
		padding: '25px 15px 1px 15px',
		marginBottom: 40,
		transition: 'transform 0.3s ease-in-out',
		'&:hover': {
			transform: 'scale(1.05)'
		},
		position: 'relative'
	},

	cardImage: {
		maxHeight: '200px'
	},

	title: {
		textDecoration: 'none'
	},

	link: {
		textDecoration: 'none',
		position: 'absolute',
		color: '#000000',
		fontSize: 18,
		bottom: 10,
		right: 10
	}
})
