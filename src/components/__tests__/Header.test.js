import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainHeader from '../header';

describe('MainHeader', () => {
  it('renders the header with the correct links', () => {
    render(
      <BrowserRouter>
        <MainHeader />
      </BrowserRouter>
    );

    const rocketsLink = screen.getByRole('link', { name: 'Rockets' });
    expect(rocketsLink).toBeInTheDocument();

    const missionsLink = screen.getByRole('link', { name: 'Missions' });
    expect(missionsLink).toBeInTheDocument();

    const profileLink = screen.getByRole('link', { name: 'My Profile' });
    expect(profileLink).toBeInTheDocument();
  });
});