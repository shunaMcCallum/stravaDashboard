import React, {useState} from "react";
import { Box } from "@mui/material";
import OverallStats from "./overallStats.js";
import ShortTermStats from "./shortTermStats.js";
import Commutes from "./commutes.js";
import LongTermStats from "./longTermStats.js";
import SegmentStats from "./segmentStats.js";

const HomePage = ({userDetails, userStats, initialStats, activities, alpeDuZwiftEfforts, thisWeekActivities, lastWeekActivities, thisMonthActivities, lastMonthActivities}) => {

    return(
    <Box>
        {/* ROW 1 */}
        <OverallStats userDetails={userDetails} />

        {/* ROW 2 */}
        <ShortTermStats thisWeekActivities={thisWeekActivities} lastWeekActivities={lastWeekActivities} thisMonthActivities={thisMonthActivities} lastMonthActivities={lastMonthActivities} />
        
        {/* ROW 3 */}
        <Commutes activities={activities} />

        {/* ROW 4 */}
        <LongTermStats userStats={userStats} initialStats={initialStats} activities={activities} />

         {/* ROW 5 */}
        <SegmentStats alpeDuZwiftEfforts={alpeDuZwiftEfforts} />
    </Box>
    
    );
    
}

export default HomePage;