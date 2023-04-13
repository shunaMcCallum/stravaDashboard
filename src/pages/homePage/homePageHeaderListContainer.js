import React, {useState, useEffect} from "react";
import { Box } from "@mui/material";
import StatsList from "../../components/lists/statsList";
import BarChart2 from "../../components/charts/barChart/barChart2.js";
import Filter from "../../components/lists/filter";
//import '../../Styling/HomePageHeaderListContainer.css';

const HomePageHeaderListContainer = ({title, list, thisWeekActivities, lastWeekActivities}) => {

    const [thisWeekNum, setThisWeekNum] = useState(0);
    const [thisWeekDistance, setThisWeekDistance] = useState(0);
    const [thisWeekTime, setThisWeekTime] = useState(0);

    const [lastWeekNum, setLastWeekNum] = useState(0);
    const [lastWeekDistance, setLastWeekDistance] = useState(0);
    const [lastWeekTime, setLastWeekTime] = useState(0);

    const [thisWeek, setThisWeek] = useState([]);
    const [lastWeek, setLastWeek] = useState([]);

    useEffect(() => {
      setThisWeekDefault();
    }, [thisWeekActivities])

    useEffect(() => {
      setLastWeekDefault();
    }, [lastWeekActivities])

    const setThisWeekDefault = () => {
      const list = [];
      let act = 0;
      let dist = 0;
      let tim = 0;

      for (var day of thisWeekActivities) {
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

      setThisWeekNum(act);
      setThisWeekDistance(dist);
      setThisWeekTime(tim);
      setThisWeek(list);
    };

    const setLastWeekDefault = () => {
      const list = [];
      let act = 0;
      let dist = 0;
      let tim = 0;

      for (var day of lastWeekActivities) {
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

      setLastWeekNum(act);
      setLastWeekDistance(dist);
      setLastWeekTime(tim);
      setLastWeek(list);
    };

    const thisWeekList = [`No. of Activities: ${thisWeekNum}`, `Distance Travelled: ${thisWeekDistance}km`, `Time Spent: ${thisWeekTime}`]
    const lastWeekList = [`No. of Activities: ${lastWeekNum}`, `Distance Travelled: ${lastWeekDistance}km`, `Time Spent: ${lastWeekTime}`]
    
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
      }
    })


  const handleListSelectThisWeek = ((item) => {
      thisWeek.length = 0;
      filterList(item, thisWeekActivities);
  });

  const handleListSelectLastWeek = ((item) => {
      lastWeek.length = 0;
      filterList(item, lastWeekActivities);
  });

    return(
      <Box
      sx={{
        display:"grid",
        gridTemplateColumns:"repeat(3, 1fr)",
        gridTemplateRows:"auto",
        gridTemplateAreas:`"overall thisWeek lastWeek"
        "overall thisGraph lastGraph"`,
        gap:"0.9rem",
        justifyContent:"center",
        m:"1.5rem auto 0 auto",
        width:"98%"
      }}
        
      >
        <Box sx={{ gridArea: 'overall' }}>
          <StatsList list={list} listTitle={title}/>
        </Box>
        <Box sx={{ gridArea: 'thisWeek' }}>
          <StatsList list={thisWeekList} listTitle={"This Week Stats"}/>
        </Box>
        <Box sx={{ gridArea: 'lastWeek' }}>
          <StatsList list={lastWeekList} listTitle={"Last Week Stats"}/>
        </Box>
        <Box sx={{ gridArea: 'thisGraph' }}>
            <div id="stats-charts-container-header">
                <h3>Filter Data</h3>
                <Filter list={filters} handleListSelect={handleListSelectThisWeek} />
           </div>
          <BarChart2 header={"This Week Activities"} data={thisWeek} chartWidth={1000} />
        </Box>
        <Box sx={{ gridArea: 'lastGraph' }}>
            <div id="stats-charts-container-header">
                <h3>Filter Data</h3>
                <Filter list={filters} handleListSelect={handleListSelectLastWeek} />
            </div>
          <BarChart2 header={"Last Week Activities"} data={lastWeek} chartWidth={1000} />
        </Box>
      </Box>

    );

}

export default HomePageHeaderListContainer;