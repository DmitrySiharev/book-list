import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './index';

describe('SearchBar Component', () => {
	test('renders text field with correct label', () => {
		render(<SearchBar books={[]} handleSearch={() => {}} handleBookSelect={() => {}} />);
		expect(screen.getByLabelText('Search by title or author')).toBeInTheDocument();
	});
});
