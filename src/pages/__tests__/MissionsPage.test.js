import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import MissionsPage from '../MissionsPage';
import store from '../../redux/config-store';

describe('MissionsPage component', () => {
  it('Should render "Loading..." when missions are being fetched', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MissionsPage />
      </Provider>,
    );
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
