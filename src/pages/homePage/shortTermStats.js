import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ShortTermStatsWeek from "./shortTermStatsWeek";
import ShortTermStatsMonth from "./shortTermStatsMonth";

const ShortTermStats = ({thisWeekActivities, lastWeekActivities, thisMonthActivities, lastMonthActivities}) => {

    const [thisWeekNum, setThisWeekNum] = useState(0);
    const [thisWeekDistance, setThisWeekDistance] = useState(0);
    const [thisWeekTime, setThisWeekTime] = useState(0);

    const [lastWeekNum, setLastWeekNum] = useState(0);
    const [lastWeekDistance, setLastWeekDistance] = useState(0);
    const [lastWeekTime, setLastWeekTime] = useState(0);

    const [thisWeek, setThisWeek] = useState([]);
    const [lastWeek, setLastWeek] = useState([]);

    const [thisMonthNum, setThisMonthNum] = useState(0);
    const [thisMonthDistance, setThisMonthDistance] = useState(0);
    const [thisMonthTime, setThisMonthTime] = useState(0);

    const [lastMonthNum, setLastMonthNum] = useState(0);
    const [lastMonthDistance, setLastMonthDistance] = useState(0);
    const [lastMonthTime, setLastMonthTime] = useState(0);

    const [thisMonth, setThisMonth] = useState([]);
    const [lastMonth, setLastMonth] = useState([]);

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

    const setDefaults = (activityList) => {
      const list = [];
      let act = 0;
      let dist = 0;
      let tim = 0;

      for (var day of activityList) {
        list.push({
          x: day.DayOfTheWeek,
          y: day.NumActivities
        })

        act += day.NumActivities
        dist += day.Distance
        tim += day.MovingTime
      }

      const totalMinutes = Math.floor(tim / 60);
      const seconds = tim % 60;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      
      tim = `${hours}hrs ${minutes}mins ${seconds}secs`
      dist = (dist * 1.60934).toFixed(2)

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

    const thisWeekStatList = [`No. of Activities: ${thisWeekNum}`, `Distance Travelled: ${thisWeekDistance}km`, `Time Spent: ${thisWeekTime}`]
    const lastWeekStatList = [`No. of Activities: ${lastWeekNum}`, `Distance Travelled: ${lastWeekDistance}km`, `Time Spent: ${lastWeekTime}`]
    const thisMonthStatList = [`No. of Activities: ${thisMonthNum}`, `Distance Travelled: ${thisMonthDistance}km`, `Time Spent: ${thisMonthTime}`]
    const lastMonthStatList = [`No. of Activities: ${lastMonthNum}`, `Distance Travelled: ${lastMonthDistance}km`, `Time Spent: ${lastMonthTime}`]
    
    const filters = [
      {Header: "No. of Activities"},
      {Header: "Distance Travelled"},
      {Header: "Time Spent"}
    ];

    const filterList = ((item, weekList) => {
      const list = [];

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