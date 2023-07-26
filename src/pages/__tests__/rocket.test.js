// rocket.test.js
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import RocketsPage from '../RocketPage';
import store from '../../redux/config-store';

describe('RocketsPage component', () => {
  it('should render the rocket list', () => {
    const rockets = [
      {
        id: 1,
        name: 'Falcon 1',
        description: 'Small launch vehicle',
        flickrImages: ['https://farm1.staticflickr.com/578/23451156376_8983a8ebc7_b.jpg'],
      },
      {
        id: 2,
        name: 'Falcon 9',
        description: 'Medium lift launch vehicle',
        flickrImages: ['https://farm1.staticflickr.com/330/18848515590_6a5727a479_b.jpg'],
      },
    ];

    const { getByText } = render(
      <Provider store={store}>
        <RocketsPage state={rockets} />
      </Provider>
    );

    expect(getByText('Falcon 1')).toBeInTheDocument();
    expect(getByText('Falcon 9')).toBeInTheDocument();
  });
});