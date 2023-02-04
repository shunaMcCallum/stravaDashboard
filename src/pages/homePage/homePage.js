import React from "react";
import SectionHeader from '../../components/headers/sectionHeader.jsx';
import HomePageHeaderListContainer from "./homePageHeaderListContainer.js";
import HomeStatsChartsContainer from './homeStatsChartsContainer.js';

const HomePage = ({userDetails, userStats, initialStats}) => {
    console.log(userDetails);
    const text = `Welcome, ${userDetails.Firstname}!`;
    const headlineTitle = 'Current Statistics';
    const headlineList = [`FTP: ${userDetails.Ftp}W`, `Weight: ${userDetails.Weight}kg`, `Account Created: ${userDetails.AccountCreatedAt}`]
    
    const rideTypesPieChartArray = [
            ["Total number of rides", "Number of rides"], 
            ["Workout rides", initialStats.RideWorkout], 
            ["Commutes", initialStats.RideCommute], 
            ["Virtual fun rides", initialStats.RideVirtual],
            ["Outdoor fun rides", initialStats.RideOutdoor]
    ];

    const workoutScoresPieChartArray = [
            ["Total Number of Scores", "Score"], 
            ["Score 0 - 70", initialStats.Score0to70], 
            ["Score 71 - 90", initialStats.Score71to90], 
            ["Score 91 - 110", initialStats.Score91to110],
            ["Score 111 and above", initialStats.Score111Plus]
    ];

    const rideTimePieChartArray = [
            ["Total Time", "Time Spent on Each Ride Type"], 
            ["Workout ride time", initialStats.RideWorkout_Time], 
            ["Commute ride time", initialStats.RideCommute_Time], 
            ["Virtual fun ride time", initialStats.RideVirtual_Time],
            ["Outdoor fun ride time", initialStats.RideOutdoor_Time]
    ];

    const rideTotalsTitle = `Ride Totals for ${initialStats.Header}`;
    const rideTotalsArray = [
            `Total distance ridden (miles): ${initialStats.DistanceMiles}`,
            `Total distance ridden (kilometers): ${initialStats.DistanceKM}`,
            `Total moving time: ${initialStats.MovingTime}`,
            `Total elapsed time: ${initialStats.ElapsedTime}`,
            `Total ascent (ft): ${initialStats.ElevationGainFt}`,
            `Total ascent (metres): ${initialStats.ElevationGainMetres}`
    ];

    const longestRideTitle = `Longest Ride for ${initialStats.Header}`;
    const longestRideArray = [
            `Date: ${initialStats.LongestRideDate}`,
            `Title: ${initialStats.LongestRideTitle}`,
            `Distance: ${initialStats.LongestRideDistance}`,
            `Time: ${initialStats.LongestRideTime}`
    ];

    const farthestRideTitle = `Farthest Ride for ${initialStats.Header}`;
    const farthestRideArray = [
            `Date: ${initialStats.FarthestRideDate}`,
            `Title: ${initialStats.FarthestRideTitle}`,
            `Distance: ${initialStats.FarthestRideDistance}`,
            `Time: ${initialStats.FarthestRideTime}`
    ];


    return(
    <div id="homepage-container">
        <SectionHeader text={text} />
        <HomePageHeaderListContainer title={headlineTitle} list={headlineList} />
        <HomeStatsChartsContainer 
          userStats={userStats} 
          initialRideTypesPieChartArray={rideTypesPieChartArray} 
          initialWorkoutScoresPieChartArray={workoutScoresPieChartArray} 
          initialRideTimePieChartArray={rideTimePieChartArray}
          initialRideTotalsTitle={rideTotalsTitle} 
          initialRideTotalsArray={rideTotalsArray}
          initialLongestRideTitle={longestRideTitle}
          initialLongestRideArray={longestRideArray}
          initialFarthestRideTitle={farthestRideTitle}
          initialFarthestRideArray={farthestRideArray}
          initialLongestRidePolyline={initialStats.LongestRidePolyline}
          initialFarthestRidePolyline={initialStats.FarthestRidePolyline}
        />
    </div>
    
    );
    
}

export default HomePage;