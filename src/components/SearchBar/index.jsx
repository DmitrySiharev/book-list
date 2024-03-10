import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import useClasses from 'hooks/useClasses'
import styles from './styles'

const SearchBar = ({ books, handleSearch, handleBookSelect }) => {
	const classes = useClasses(styles)
	const [inputValue, setInputValue] = useState('');


	const handleChange = (event, value) => {
		setInputValue(value);

		if (value !== null) {
			handleSearch(value);
		}
	};

	return (
		<div className={classes.searchContainer}>
			<Autocomplete
				freeSolo
				options={books}
				getOptionLabel={book => `${book.title} - ${book.author}`}
				inputValue={inputValue}
				onInputChange={handleChange}
				onChange={(event, value) => handleBookSelect(value)}
				renderInput={params => <TextField
					{...params}
					label="Search by title or author"
					InputLabelProps={{ className: classes.inputMain }}
					InputProps={{
						className: classes.inputMain,
					}}
				/>
			}
				className={classes.root}
			/>
		</div>

	);
};

export default SearchBar;
