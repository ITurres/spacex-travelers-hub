import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import RocketsList from '../rockets/RocketList';
import store from '../../redux/config-store'; // Import your Redux store

describe('RocketsList', () => {
  it('renders a list of rockets', () => {
    const rocketList = [
      {
        id: 1,
        name: 'Falcon 1',
        description:
          'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.',
        flickrImages: [
          'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
        ],
        reserved: false,
      },
      {
        id: 2,
        name: 'Falcon 9',
        description:
          'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
        flickrImages: [
          'https://farm9.staticflickr.com/8619/16511407538_9a25c5d8c6_b.jpg',
        ],
        reserved: true,
      },
    ];

    const { getAllByText } = render(
      <Provider store={store}>
        {' '}
        {/* Wrap your component with Provider */}
        <RocketsList rocketList={rocketList} />
        {' '}
        {/* Pass in your mock rocket list as a prop */}
      </Provider>,
    );

    const reservedButtons = getAllByText('Cancel Reservation');
    const reserveButtons = getAllByText('Reserve Rocket');

    expect(reservedButtons).toHaveLength(1);
    expect(reserveButtons).toHaveLength(1);
  });
});
