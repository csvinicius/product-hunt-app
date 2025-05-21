import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders buttons and handles tab change', () => {
    const setTabMock = jest.fn();
    render(<Header tab="POPULAR" setTab={setTabMock} />);

    const popularButton = screen.getByText('Popular');
    const newestButton = screen.getByText('Newest');

    expect(popularButton).toBeInTheDocument();
    expect(newestButton).toBeInTheDocument();

    fireEvent.click(newestButton);
    expect(setTabMock).toHaveBeenCalledWith('NEWEST');

    fireEvent.click(popularButton);
    expect(setTabMock).toHaveBeenCalledWith('POPULAR');
  });
});