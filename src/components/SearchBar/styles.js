export default () => ({
	searchContainer: {
		marginBottom: 20
	},

	root: {
		".MuiOutlinedInput-notchedOutline": {
			borderColor: "#d2d2e6",
			borderRadius: 10,
		},

		":hover .MuiOutlinedInput-notchedOutline": {
			borderColor: "red",
		},

		".MuiInputLabel-root" :{
			color: '#8588A4',
			fontSize: 20,
			padding: '0 15px',
		}
	},

	inputMain: {
		".MuiAutocomplete-input": {
			color: '#8588A4',
			fontSize: 20
		}
	}
})
