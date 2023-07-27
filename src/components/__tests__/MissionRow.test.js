import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import MissionRow from '../missions/MissionRow';
import { leaveMission, joinMission } from '../../redux/missions/missions-slice';

const mockMission = {
  missionId: '1',
  missionName: 'Thaicom',
  description: 'Thaicom is the name of a series of...',
  reserved: false,
};

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('MissionRow Component', () => {
  it('Should dispatch "joinMission" action when "Join Mission" button is clicked', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    render(<MissionRow mission={mockMission} />);

    const joinButton = screen.getByRole('button', { name: /join mission/i });

    fireEvent.click(joinButton);

    expect(mockDispatch).toHaveBeenCalledWith(
      joinMission(mockMission.missionId),
    );
  });

  it('Should dispatch "leaveMission" action when "Leave Mission" button is clicked', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    const reservedMission = { ...mockMission, reserved: true };
    render(<MissionRow mission={reservedMission} />);

    const leaveButton = screen.getByRole('button', { name: /leave mission/i });

    fireEvent.click(leaveButton);

    expect(mockDispatch).toHaveBeenCalledWith(
      leaveMission(reservedMission.missionId),
    );
  });
});
