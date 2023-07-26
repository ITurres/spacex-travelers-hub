import missionsReducer, {
  joinMission,
  leaveMission,
  filterReservedMissions,
} from '../missions/missions-slice';

jest.mock('axios');
describe('missions slice', () => {
  describe('reducers', () => {
    const initialState = {
      missions: [
        {
          missionId: 'mission1',
          missionName: 'Mission 1',
          description: 'Mission 1 description',
          reserved: false,
        },
        {
          missionId: 'mission2',
          missionName: 'Mission 2',
          description: 'Mission 2 description',
          reserved: false,
        },
      ],
      filteredMissions: [],
      isLoading: false,
      error: null,
    };

    it('should handle join mission', () => {
      const action = joinMission('mission1');
      const newState = missionsReducer(initialState, action);

      expect(newState.missions[0].reserved).toBe(true);
    });

    it('should handle leave mission', () => {
      const action = leaveMission('mission1');
      const newState = missionsReducer(initialState, action);

      expect(newState.missions[0].reserved).toBe(false);
      expect(newState.filteredMissions).toEqual([]);
    });

    it('should handle filter reserved missions', () => {
      const action = joinMission('mission1');
      const newState = missionsReducer(initialState, action);
      const filterAction = filterReservedMissions();
      const filteredState = missionsReducer(newState, filterAction);

      expect(filteredState.filteredMissions).toEqual([
        { ...initialState.missions[0], reserved: true },
      ]);
    });
  });
});
