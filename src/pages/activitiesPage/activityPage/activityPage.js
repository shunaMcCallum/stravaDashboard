import React, {useState} from "react";
import { useParams } from 'react-router-dom';
import {Box} from "@mui/material";
import polyline from "@mapbox/polyline";
import ActivityPageHeaders from "./activityPageHeaders";
import ActivityPageHeaderStats from "./activityPageHeaderStats";
import ActivityPageLineGraph from "./activityPageLineGraph";
import ActivityPageBottomStats from "./activityPageBottomStats";
import ActivityPageMap from "./activityPageMap";

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
        const list5 = [`Notes: ${activity.Notes}`]

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
                <ActivityPageHeaders activity={activity} />

                <ActivityPageHeaderStats activity={activity} />

                <ActivityPageLineGraph stats={stats} pwrChecked={pwrChecked} hrChecked={hrChecked} cadenceChecked={cadenceChecked} distanceChecked={distanceChecked} handlePowerChange={handlePowerChange} handleHeartRateChange={handleHeartRateChange} handleCadenceChange={handleCadenceChange} handleDistanceChange={handleDistanceChange} />

                <ActivityPageBottomStats list1={list1} list2={list2} list3={list3} list4={list4} list5={list5} />

                <ActivityPageMap pol={pol} />

            </Box> :

            // If Activity is not a ride display this instead:
            <Box>
                <ActivityPageHeaders activity={activity} />

                <ActivityPageHeaderStats activity={activity} />

                <ActivityPageBottomStats list1={list1} list2={list2} list3={list3} list4={list4} list5={list5} />
            </Box> }
        </Box>
    );
}

export default ActivityPage;