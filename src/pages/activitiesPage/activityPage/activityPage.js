import React, {useState, useEffect} from "react";
import {Box} from "@mui/material";
import { useParams } from 'react-router-dom';
import polyline from "@mapbox/polyline";
import SectionHeaderSubHeader from "../../../components/headers/sectionHeaderSubHeader";
import SectionHeader from "../../../components/headers/sectionHeader";
import StatsList from "../../../components/lists/statsList";
import LineChart2 from "../../../components/charts/lineChart/lineChart2";
import Map from "../../../components/maps/map";

const ActivityPage = ({activities}) => {

    const { id } = useParams();
    const activity = activities.find((a) => a.id == id);

    let n = 0;

    let stats = [];
    let timeList = [];
    let hrList = [];
    let distanceList = [];
    let cadenceList = [];

    if (activity.TimeList != null) {
        timeList = activity.TimeList.split(',');
    }

    if (activity.HRList != null) {
        hrList = activity.HRList.split(',');
    }

    if (activity.DistanceList != null) {
        distanceList = activity.DistanceList.split(',');
    }

    if (activity.CadenceList != null) {
        cadenceList = activity.CadenceList.split(',');
    }

    const setData = () => {
        let x = 0;

        for(var t of timeList) {
            x = timeList.indexOf(t);
            
            if (x === 0) {
                stats.push({
                    Time: t,
                    Heartrate: hrList[x]
                })
            } else if (hrList[x] === hrList[x - 1]) {
                n ++;
            } else {
                stats.push({
                    Time: t,
                    Heartrate: hrList[x]
                })
            } 
        };
    }

        setData();

        const list1 = [`Elapsed Time: ${activity.ElapsedTime}`, `Stress Score: ${activity.StressScore}`]
        const list2 = [`Distance: ${activity.Distance}`, `Elevation Gain: ${activity.ElevationGain}`]
        const list3 = [`Average Speed: ${activity.AvgSpeed}`, `Average Power: ${activity.AvgPower}`]
        const list4 = [`Average Cadence: ${activity.AvgCadence}`, `Average HeartRate: ${activity.AvgHeartRate}`]

        const pol = polyline.decode(activity.MapPolyline);

    return(
        <Box
        sx={{
            display:"flex",
            flexDirection: "column",
            justifyContent:"space-evenly",
            m:"1.5rem 1rem 1.5rem 1rem",
            width:"98%"
          }}>
            {activity.SportType === "VirtualRide" || activity.SportType === "Ride" ? 
            // If Activity is a ride
            <Box>
            {/* ROW 1 */}
            <Box>
                <SectionHeaderSubHeader header={activity.Name} subheader={activity.RideType} />
            </Box>

            {/* ROW 2 */}
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1.5rem"
            }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly"
                    }}>
                        <Box>
                            <SectionHeader text={`Activity ID: ${activity.id}`} />
                        </Box>
                        <Box>
                            <SectionHeader text={`Date: ${activity.Date}`} />
                        </Box>
                        <Box>
                            <SectionHeader text={`Time: ${activity.StartTime}`} />
                        </Box>
                    </Box>
                </Box>
            <Box
            sx={{
                height: "21rem",
                backgroundColor:"#332240",
                boxShadow:"0rem 0.15rem 1.5rem black",
                padding:"0.5rem 1rem 0.5rem -0.5rem",
                overflow: "auto",
                marginTop: "1.5rem",
                marginLeft: "1.5rem",
                marginRight: "1.5rem",
                marginBottom: "0rem",
                '&:hover::-webkit-scrollbar': {
                    display: 'block',
                    },
                '&::-webkit-scrollbar': {
                    width: '0.512rem',
                    },
                '&::-webkit-scrollbar-track': {
                    boxShadow: 'inset 0 0 2rem rgba(0,0,0,0.00)',
                    webkitBoxShadow: 'inset 0 0 2rem rgba(0,0,0,0.00)',
                    },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#8d8e90',
                    height: '3rem',
                    borderRadius: '1rem',
                    },
            }}
            >
                <LineChart2 header={"Performance Stats"} data={stats} chartWidth={1400} xDataKey={"Time"} lineDataKey={"Heartrate"} lineName={"Heartrate"} />
            </Box>

            {/* ROW 3 */}
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1.5rem"
            }}>
                <Box
                sx={{
                    marginTop: "1.5rem",
                    display: "flex",
                    justifyContent: "space-evenly"
                }}>
                    <Box
                    sx={{
                        marginLeft: "1.5rem",
                        marginRight: "1.5rem",
                    }}
                    >
                        <StatsList list={list1} />
                    </Box>
                    <Box
                    sx={{
                        marginLeft: "1.5rem",
                        marginRight: "1.5rem",
                    }}
                    >
                        <StatsList list={list2} />
                    </Box>
                    <Box
                    sx={{
                        marginLeft: "1.5rem",
                        marginRight: "1.5rem",
                    }}
                    >
                        <StatsList list={list3} />
                    </Box>
                    <Box
                    sx={{
                        marginLeft: "1.5rem",
                        marginRight: "1.5rem",
                    }}
                    >
                        <StatsList list={list4} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        m: "1.5rem"
                    }}
                    >
                        <StatsList list={[`Notes: ${activity.Notes}`]} />
                    </Box>
            </Box>

            {/* ROW 4 */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "2rem"
                }}
            >
                <Map polyline={pol} />
            </Box>
            </Box> :

            // If Activity is not a ride
            <Box>
            <Box>
            {/* ROW 1 */}
            <Box>
                <SectionHeaderSubHeader header={activity.Name} subheader={activity.SportType} />
            </Box>

            {/* ROW 2 */}
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1.5rem"
            }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly"
                    }}>
                        <Box>
                            <SectionHeader text={`Activity ID: ${activity.id}`} />
                        </Box>
                        <Box>
                            <SectionHeader text={`Date: ${activity.Date}`} />
                        </Box>
                        <Box>
                            <SectionHeader text={`Time: ${activity.StartTime}`} />
                        </Box>
                    </Box>
                </Box>
                </Box>

            {/* ROW 3 */}
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1.5rem"
            }}>
                <Box
                sx={{
                    marginTop: "1.5rem",
                    display: "flex",
                    justifyContent: "space-evenly"
                }}>
                    <Box
                    sx={{
                        marginLeft: "1.5rem",
                        marginRight: "1.5rem",
                    }}
                    >
                        <StatsList list={list1} />
                    </Box>
                    <Box
                    sx={{
                        marginLeft: "1.5rem",
                        marginRight: "1.5rem",
                    }}
                    >
                        <StatsList list={list2} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        m: "1.5rem"
                    }}
                    >
                        <StatsList list={[`Notes: ${activity.Notes}`]} />
                    </Box>
            </Box>
            </Box> }
        </Box>
    );
}

export default ActivityPage;