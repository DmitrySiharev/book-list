import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '@mui/material/styles'

import App from './app'
import { BookProvider } from 'context'
import MainLayout from 'layouts/Main'

import theme from './constants/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BookProvider>
			<ThemeProvider theme={theme}>
				<MainLayout>
					<App />
				</MainLayout>
			</ThemeProvider>
		</BookProvider>
	</React.StrictMode>
)


