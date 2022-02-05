const competitionsService = (rest) => ({
  fetchCompetitions: async () => {
    const response = await rest('https://api.football-data.org/v2/competitions?plan=TIER_ONE&areas=2077', {
      method: 'GET',
      headers: {
        'X-Auth-Token': process.env.REACT_APP_API_KEY,
      },
    });
    // eslint-disable-next-line no-return-await
    return await response.json();
  },
});

export default competitionsService;
