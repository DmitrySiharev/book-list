import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'
import FavouriteBooksPage from './pages/FavouriteBooksPage'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/book/:id' element={<BookPage />} />
				<Route path='/favourite' element={<FavouriteBooksPage />} />
			</Routes>
		</Router>
	)
}

export default App
