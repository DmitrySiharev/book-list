import React from 'react'
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import useClasses from 'hooks/useClasses'
import styles from './styles'

const BookCard = ({ book }) => {
	const classes = useClasses(styles)

	const {
		author,
		cover_image,
		description,
		id,
		publication_year,
		title
	} = book

	return (
		<Card
			className={classes.container}
			sx={{backgroundColor: '#DB4E3F'}}
		>
			<CardMedia
				component='img'
				image={cover_image}
				alt={book.title}
				className={classes.cardImage}
			/>

			<CardContent>
				<Typography
					gutterBottom
					variant='h4'
					component='div'
				>
					{title}
				</Typography>

				<Typography
					variant='body2'
					color='text.secondary'
					className={classes.text}
				>
					{author}
				</Typography>

				<Typography
					variant='body2'
					color='text.secondary'
					className={classes.text}
					noWrap
				>
					{description}
				</Typography>

				<Typography
					variant='body2'
					color='text.secondary'
					className={classes.text}
				>
					{publication_year}
				</Typography>

				<Link to={`/book/${id}`} className={classes.link}>
					More information
				</Link>

			</CardContent>
		</Card>
	)
}

export default BookCard
