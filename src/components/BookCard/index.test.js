import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import BookCard from './index'

describe('BookCard Component', () => {
	const book = {
		id: 1,
		title: 'Test Book',
		author: 'Test Author',
		cover_image: 'test-image.jpg',
		description: 'Test description'
	}

	test('renders book details correctly', () => {
		render(
			<MemoryRouter>
				<BookCard book={book} />
			</MemoryRouter>
		)

		expect(screen.getByText('Test Book')).toBeInTheDocument()

		expect(screen.getByText('Test Author')).toBeInTheDocument()

		expect(screen.getByAltText('Test Book')).toBeInTheDocument()

		expect(screen.getByText('Test description')).toBeInTheDocument()
	})
})
