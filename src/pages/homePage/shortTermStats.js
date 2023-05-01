import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ShortTermStatsWeek from "./shortTermStatsWeek";
import ShortTermStatsMonth from "./shortTermStatsMonth";

const ShortTermStats = ({thisWeekActivities, lastWeekActivities, thisMonthActivities, lastMonthActivities}) => {

    // declare state variables for catching numbers to be displayed in stat boxes    
    // would prefer not to use state for these but if I don't, the data doesn't display as the page renders before the calculations
    // to populate the variables are done, so without state the components render empty and then don't update themselves!
    const [thisWeekNum, setThisWeekNum] = useState([]);
    const [thisWeekDistance, setThisWeekDistance] = useState([]);
    const [thisWeekTime, setThisWeekTime] = useState([]);

    const [lastWeekNum, setLastWeekNum] = useState([]);
    const [lastWeekDistance, setLastWeekDistance] = useState([]);
    const [lastWeekTime, setLastWeekTime] = useState([]);

    const [thisMonthNum, setThisMonthNum] = useState([]);
    const [thisMonthDistance, setThisMonthDistance] = useState([]);
    const [thisMonthTime, setThisMonthTime] = useState([]);

    const [lastMonthNum, setLastMonthNum] = useState([]);
    const [lastMonthDistance, setLastMonthDistance] = useState([]);
    const [lastMonthTime, setLastMonthTime] = useState([]);

    // declare state lists - to be used in bar charts which will be filterable, therefore the data needs to be changeable
    // each of these variables will hold numbers of activities, distance travelled etc. for different time periods
    const [thisWeek, setThisWeek] = useState([]);
    const [lastWeek, setLastWeek] = useState([]);
    const [thisMonth, setThisMonth] = useState([]);
    const [lastMonth, setLastMonth] = useState([]);

    // feed default data to display in the stat boxes and bar charts on the page's first render
    useEffect(() => {
      setDefaults(thisWeekActivities);
    }, [thisWeekActivities]);

    useEffect(() => {
      setDefaults(lastWeekActivities);
    }, [lastWeekActivities]);

    useEffect(() => {
      setDefaults(thisMonthActivities);
    }, [thisMonthActivities]);

    useEffect(() => {
      setDefaults(lastMonthActivities);
    }, [lastMonthActivities]);

    // function for setting the default values - it works for all four of the bar charts displaying data for different time periods
    // as the activityList given to it will only contain activities from the appropriate time period
    // by default we want to see the number of activities completed during each time period, so this data is sorted into a list
    // along with the matching day
    const setDefaults = (activityList) => {
      // these variables are used to help sort through our raw data through this function
      const list = [];
      let act = 0;
      let dist = 0;
      let tim = 0;

      // the activityList contains more data than we need, and we need to format it correctly for feeding to the bar chart, so
      // we say we only want the name of the day of the week and the number of activities completed on each day - and we feed these
      // to the x and y axes
      for (var day of activityList) {
        list.push({
          x: day.DayOfTheWeek,
          y: day.NumActivities
        })

        // simultaneously we keep a running total of number of activities for all days in the list, plus distance and moving time
        act += day.NumActivities
        dist += day.Distance
        tim += day.MovingTime
      }

      // time is formatted in seconds by default, so here we wrangle it into HH:MM:SS format
      const totalMinutes = Math.floor(tim / 60);
      const seconds = tim % 60;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      
      tim = `${hours}hrs ${minutes}mins ${seconds}secs`
      dist = (dist * 1.60934).toFixed(2)

      // now we feed our running totals and correctly-formatted list for the bar charts back into our main variables which will
      // be fed to our components - we make the function dynamic by checking which list of activities it has been fed, and feeding
      // the variables that match with it
      if (activityList === thisWeekActivities) {
        setThisWeekNum(act);
        setThisWeekDistance(dist);
        setThisWeekTime(tim);
        setThisWeek(list);
      } else if (activityList === lastWeekActivities) {
        setLastWeekNum(act);
        setLastWeekDistance(dist);
        setLastWeekTime(tim);
        setLastWeek(list);
      } else if (activityList === thisMonthActivities) {
        setThisMonthNum(act);
        setThisMonthDistance(dist);
        setThisMonthTime(tim);
        setThisMonth(list);
      } else if (activityList === lastMonthActivities) {
        setLastMonthNum(act);
        setLastMonthDistance(dist);
        setLastMonthTime(tim);
        setLastMonth(list);
      }
    };

    // the variables for the stat boxes are fed into a bigger list which will format everything nicely for display
    const thisWeekStatList = [`No. of Activities: ${thisWeekNum}`, `Distance Travelled: ${thisWeekDistance}km`, `Time Spent: ${thisWeekTime}`]
    const lastWeekStatList = [`No. of Activities: ${lastWeekNum}`, `Distance Travelled: ${lastWeekDistance}km`, `Time Spent: ${lastWeekTime}`]
    const thisMonthStatList = [`No. of Activities: ${thisMonthNum}`, `Distance Travelled: ${thisMonthDistance}km`, `Time Spent: ${thisMonthTime}`]
    const lastMonthStatList = [`No. of Activities: ${lastMonthNum}`, `Distance Travelled: ${lastMonthDistance}km`, `Time Spent: ${lastMonthTime}`]
    
    // we hard code in filters for changing the data displayed in the bar charts
    const filters = [
      {Header: "No. of Activities"},
      {Header: "Distance Travelled"},
      {Header: "Time Spent"}
    ];

    // function for filtering the data in the bar charts - this will be called when the user chooses a different option from the filter
    // the function is given the "item" chosen from the filter list, and the "weekList," i.e. the list of activities required to populate
    // the particular bar chart that the filter is attached to 
    // there is a separate filter for each bar chart
    const filterList = ((item, weekList) => {
      // similar to the default function above, we need to format the data to feed into the chart, so again we need a blank list to help
      const list = [];

      // now we check which filter has been chosen - this then determines which bit of data we pull from our activity list next
      // and we format the data in the same way as before, separating it out into the x and y axes
      if (item.Header === "No. of Activities") {
        for (var day of weekList) {
          list.push({
            x: day.DayOfTheWeek,
            y: day.NumActivities
          })
         }
      } else if (item.Header === "Distance Travelled") {
        for (var day of weekList) {
          list.push({
            x: day.DayOfTheWeek,
            y: day.Distance
          })
         }
      } else if (item.Header === "Time Spent") {
        for (var day of weekList) {
          list.push({
            x: day.DayOfTheWeek,
            y: day.MovingTime
          })
         }
      }

      // once we have formatted the data correctly into our temporary list, we use that to populate our state lists
      // once the state list changes, the relevant component that it is fed to will re-render
      if (weekList === thisWeekActivities) {
        setThisWeek(list);
      } else if (weekList === lastWeekActivities) {
        setLastWeek(list);
      } else if (weekList === thisMonthActivities) {
        setThisMonth(list);
      } else if (weekList === lastMonthActivities) {
        setLastMonth(list);
      }
    })

  // these are the event handler functions which are attached to each filter displayed on the page - each is fed to the relevant
  // instance of the Filter component
  const handleListSelectThisWeek = ((item) => {
      setThisWeek([]);
      filterList(item, thisWeekActivities);
  });

  const handleListSelectLastWeek = ((item) => {
      setLastWeek([]);
      filterList(item, lastWeekActivities);
  });

  const handleListSelectThisMonth = ((item) => {
    setThisMonth([]);
    filterList(item, thisMonthActivities);
});

const handleListSelectLastMonth = ((item) => {
    setLastMonth([]);
    filterList(item, lastMonthActivities);
});

    return(
      <Box
      sx={{
        display: "flex",
      }}
      >
        <ShortTermStatsWeek thisWeekStatList={thisWeekStatList} lastWeekStatList={lastWeekStatList} filters={filters} handleListSelectThisWeek={handleListSelectThisWeek} handleListSelectLastWeek={handleListSelectLastWeek} thisWeek={thisWeek} lastWeek={lastWeek} />
        <ShortTermStatsMonth thisMonthStatList={thisMonthStatList} lastMonthStatList={lastMonthStatList} filters={filters} handleListSelectThisMonth={handleListSelectThisMonth} handleListSelectLastMonth={handleListSelectLastMonth} thisMonth={thisMonth} lastMonth={lastMonth} />
      </Box>

    );

}

export default ShortTermStats;