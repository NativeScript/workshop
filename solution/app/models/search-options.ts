export interface FixtureSearchOptions {
  /** the index number of the rixture round. Should be between 1 and numberOfMatchdays for a given competition */
  matchday?: number;

  /** The value of the timeFrame argument must start with either p(ast) or n(ext), representing a timeframe either in the past or future.
   * It is followed by a number in the range 1..99. It defaults to n7 in the fixture resource and is unset for fixture as a subresource.
   * For instance: p6 would return all fixtures in the last 6 days, whereas n23 would result in returning all fixtures in the next 23 days.
   */
  timeFrame?: string;
}