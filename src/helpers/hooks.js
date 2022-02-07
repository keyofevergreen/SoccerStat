import { useEffect, useState } from 'react';
import moment from 'moment';

const UTC_FORMAT = moment.ISO_8601;
const YEAR_FORMAT = 'YYYY-MM-DD';
// eslint-disable-next-line
const getMatchesWithSearchQuery = (string1, string2) => string1.toLowerCase().includes(string2.toLowerCase());

// eslint-disable-next-line
export const useSortedList = (list, searchQuery) => {
  const [sortedList, setSortedList] = useState(list);

  useEffect(() => {
    setSortedList(
      list
        // eslint-disable-next-line
        .filter((item) => getMatchesWithSearchQuery(item.name, searchQuery) || getMatchesWithSearchQuery(item.area.name, searchQuery)),
    );
  }, [list, searchQuery]);

  return [sortedList];
};

export const useSortedMatchesByDateRange = (dateRange, matches) => {
  const [sortedMatches, setSortedMatches] = useState(matches);

  useEffect(() => {
    if (dateRange.includes('')) {
      setSortedMatches(matches);
    } else {
      setSortedMatches(
        matches.filter((match) => {
          const matchDate = moment(match.utcDate, UTC_FORMAT);
          // eslint-disable-next-line max-len
          return matchDate.diff(moment(dateRange[0], YEAR_FORMAT), 'days') >= 0 && matchDate.diff(moment(dateRange[1], YEAR_FORMAT), 'days') <= 0;
        }),
      );
    }
  }, [dateRange, matches]);

  return [sortedMatches];
};
