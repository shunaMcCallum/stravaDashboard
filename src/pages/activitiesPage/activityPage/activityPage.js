import React, {useState, useEffect} from "react";
import {Box} from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useParams } from 'react-router-dom';
import polyline from "@mapbox/polyline";
import SectionHeaderSubHeader from "../../../components/headers/sectionHeaderSubHeader";
import SectionHeader from "../../../components/headers/sectionHeader";
import StatsList from "../../../components/lists/statsList";
import LineChart3 from "../../../components/charts/lineChart/lineChart3";
import Map from "../../../components/maps/map";

const ActivityPage = ({activities}) => {

    // declare variables for passing to the activity line graph, when it renders
    // "checked" variables are used to rendering lines on the graph - if a corresponding check box is checked, the line appears and vice versa
    const [hrChecked, setHrChecked] = useState(true);
    const [pwrChecked, setPwrChecked] = useState(true);
    const [cadenceChecked, setCadenceChecked] = useState(true);
    const [distanceChecked, setDistanceChecked] = useState(true);

    // the activity displayed corresponds with the one clicked on on the AcitivitesPageGrid - the id of this activity is used to find the
    // corresponding activity from the activities list
    const { id } = useParams();
    const activity = activities.find((a) => a.id == id);

    // declare variables which are again passed through to the line graph - the data in the graph must be formatted correctly, so these
    // empty lists are used, as elsewhere in the program, to fill with data that has been re-formatted from the activities list
    let stats = [];
    let timeList = [];
    let hrList = [];
    let pwrList = [];
    let distanceList = [];
    let cadenceList = [];

    // here we split each list for the line graph into an array, broken after each , plus the trailing [] symbols are removed
    // this is only done where each list exists - i.e. is not null - as each list does not exist for every ride
    if (activity.TimeList != null) {
        activity.TimeList = activity.TimeList.replace('[', '');
        activity.TimeList = activity.TimeList.replace(']', '');
        timeList = activity.TimeList.split(',');
    }

    if (activity.PowerList != null) {
        activity.PowerList = activity.PowerList.replace('[', '');
        activity.PowerList = activity.PowerList.replace(']', '');
        pwrList = activity.PowerList.split(',');
    }

    if (activity.HRList != null) {
        activity.HRList = activity.HRList.replace('[', '');
        activity.HRList = activity.HRList.replace(']', '');
        hrList = activity.HRList.split(',');
    }

    if (activity.DistanceList != null) {
        activity.DistanceList = activity.DistanceList.replace('[', '');
        activity.DistanceList = activity.DistanceList.replace(']', '');
        distanceList = activity.DistanceList.split(',');
    }

    if (activity.CadenceList != null) {
        activity.CadenceList = activity.CadenceList.replace('[', '');
        activity.CadenceList = activity.CadenceList.replace(']', '');
        cadenceList = activity.CadenceList.split(',');
    }

    // this function now formats the data that we have split into each of our lists for the line graph
    // in particular, it changes the time from seconds into HH:MM:SS format and it turns the distance into miles from metres
    // finally, it combines each of the lists we created above into objects which represent each item in the list - the items are
    // matched together between the lists so the first item goes with all the other first items, all 2nd items go together, etc.
    // the list of objects is passed to the line graph, and the graph can then generate all of the data lines, and switch them on
    // and off as necessary
    const setData = () => {
        let x = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        let time;

        for(var t of timeList) {
            x = timeList.indexOf(t);

            hours = Math.floor((t % (3600 * 24)) / 3600);
            minutes = Math.floor((t % 3600) / 60);
            seconds = Math.floor(t % 60);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            time = hours + ":" + minutes + ":" + seconds;
            
                stats.push({
                    Time: time,
                    Power: pwrList[x],
                    Heartrate: hrList[x],
                    Cadence: cadenceList[x],
                    Distance: (distanceList[x] / 1609).toFixed(2)
                })
        };
    }

        setData();

        // more lists created for displaying data in data boxes
        const list1 = [`Elapsed Time: ${activity.ElapsedTime}`, `Stress Score: ${activity.StressScore}`]
        const list2 = [`Distance: ${activity.Distance} miles`, `Elevation Gain: ${activity.ElevationGain} ft`]
        const list3 = [`Average Speed: ${activity.AvgSpeed} mph`, `Average Power: ${activity.AvgPower} W`]
        const list4 = [`Average Cadence: ${activity.AvgCadence} rpm`, `Average HeartRate: ${activity.AvgHeartRate} bpm`]

        // and a polyline variable created to store the polyline for activities that have one
        const pol = polyline.decode(activity.MapPolyline);

        // now we create change event functions which control what happens when the line graph check boxes are clicked
        // each one switches whether the corresponding "checked" state is true or false - this will then affect whether the 
        // corresponding line is displayed or not
        const handleHeartRateChange = (event) => {
            if (event.target.checked === true) {
                setHrChecked(true);
            } else {
                setHrChecked(false);
            }
        }

        const handlePowerChange = (event) => {
            if (event.target.checked === true) {
                setPwrChecked(true);
            } else {
                setPwrChecked(false);
            }
        }

        const handleCadenceChange = (event) => {
            if (event.target.checked === true) {
                setCadenceChecked(true);
            } else {
                setCadenceChecked(false);
            }
        }

        const handleDistanceChange = (event) => {
            if (event.target.checked === true) {
                setDistanceChecked(true);
            } else {
                setDistanceChecked(false);
            }
        }

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
            // If Activity is a ride display this:
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
                height: "22rem",
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
                <Box 
                sx={{
                    display: "flex",
                    marginLeft: "3.5rem"
                }}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Power" onChange={handlePowerChange} />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Heart Rate" onChange={handleHeartRateChange} />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Cadence" onChange={handleCadenceChange} />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Distance" onChange={handleDistanceChange} />
                </Box>
                <LineChart3 header={"Performance Stats"} data={stats} chartWidth={1400} pwrChecked={pwrChecked} hrChecked={hrChecked} cadenceChecked={cadenceChecked} distanceChecked={distanceChecked} />
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

            // If Activity is not a ride display this instead:
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