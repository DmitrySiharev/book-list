export default () => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh'
	},

	linksContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		padding: '40px 0',
	},

	link: {
		fontSize: 30,
		textDecoration: 'none',
		color: '#F6F6F6'
	},

	cardsContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	},

	pagination: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '20px auto',
		width: '50%',
		backgroundColor: '#DB4E3F',
		borderRadius: 10,
	}
})