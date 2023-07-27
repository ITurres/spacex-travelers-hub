import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import MissionsList from '../missions/MissionsList';
import store from '../../redux/config-store';

const mockMissions = [
  {
    missionId: '1',
    missionName: 'Thaicom',
    description: 'Thaicom is the name of a series of...',
    reserved: false,
  },
  {
    missionId: '2',
    missionName: 'Telstar',
    description: 'Telstar 19V (Telstar 19 Vantage) is a...',
    reserved: false,
  },
];

describe('MissionsList Component', () => {
  it('Should render table rows based on missions data', () => {
    render(
      <Provider store={store}>
        <MissionsList missions={mockMissions} />
      </Provider>,
    );

    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(mockMissions.length + 1); // *Header row + mission rows

    mockMissions.forEach((mission) => {
      expect(screen.getByText(mission.missionName)).toBeInTheDocument();
    });
  });

  it('should render an empty table if no missions are provided', () => {
    render(<MissionsList missions={[]} />);

    const tableRows = screen.queryAllByRole('row');
    expect(tableRows).toHaveLength(1);
  });
});
