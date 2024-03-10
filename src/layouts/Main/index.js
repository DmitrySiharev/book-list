import React from 'react'

import { Container } from '@mui/material'

import useClasses from 'hooks/useClasses'
import styles from './styles'

import 'normalize.css'

function MainLayout({ children }) {
	const classes = useClasses(styles)

	return (
		<div className={classes.root}>
			<Container>
				{children}
			</Container>
		</div>
	)
}

export default MainLayout
