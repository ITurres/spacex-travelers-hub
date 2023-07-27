import rocketsReducer, {
  reserveRocket,
  cancelRocket,
  filterReservedRockets,
} from '../rockets/rockets-slice';

describe('rockets slice', () => {
  describe('reducers', () => {
    const initialState = {
      rockets: [
        {
          id: 'falcon1',
          name: 'Falcon 1',
          description: 'Small launch vehicle',
          flickrImages: ['https://...', 'https://...'],
          reserved: false,
        },
        {
          id: 'falcon9',
          name: 'Falcon 9',
          description: 'Medium-lift launch vehicle',
          flickrImages: ['https://...', 'https://...'],
          reserved: true,
        },
      ],
      filteredRockets: [],
      loading: false,
      error: null,
    };

    it('should handle reserveRocket', () => {
      const rocketId = 'falcon1';
      const action = reserveRocket(rocketId);
      const newState = rocketsReducer(initialState, action);

      expect(newState.rockets[0].reserved).toBe(true);
    });

    it('should handle cancelRocket', () => {
      const rocketId = 'falcon9';
      const action = cancelRocket(rocketId);
      const newState = rocketsReducer(initialState, action);

      expect(newState.rockets[1].reserved).toBe(false);
      expect(newState.filteredRockets).toEqual([]);
    });

    it('should handle filterReservedRockets', () => {
      const action = filterReservedRockets();
      const newState = rocketsReducer(initialState, action);

      expect(newState.filteredRockets).toEqual([initialState.rockets[1]]);
    });
  });
});
