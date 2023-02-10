import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {Box} from "@mui/material";
import "../../Styling/ActivitiesPageGrid.css";

const ActivitiesPageGrid = ({columns, rowData}) => {



    return (
        <div id="activities-page-grid">
            <Box
                 m="40px 0 0 0"
                 height="75vh"
                 sx={{
                   "& .MuiDataGrid-root": {border: "none"},
                   "& .MuiDataGrid-cell": {borderBottom: "none"},
                   "& .name-column--cell": {color: "white"},
                   "& .MuiDataGrid-columnHeaders": {borderBottom: "none", color: "white"},
                   "& .MuiDataGrid-virtualScroller": {color: "white"},
                   "& .MuiDataGrid-footerContainer": {borderTop: "none", backgroundColor: "white"},
                   "& .MuiDataGrid-toolbarContainer .MuiButton-text": {color: "white"},
                   "& .suffer-score.high": {backgroundColor: "red", color: "black"},
                   "& .suffer-score.medium": {backgroundColor: "orange", color: "black"},
                   "& .suffer-score.low": {backgroundColor: "yellow", color: "black"}
                 }}
            >
               <DataGrid
                  disableColumnMenu
                  rows={rowData}
                  columns={columns}
                  components={{Toolbar: GridToolbar}}
                  initialState={{columns: {
                    columnVisibilityModel: {
                        type: false,
                        id: false,
                        achievement_count: false,
                        location_city: false,
                        manual: false,
                        weighted_average_wattes: false,
                        kilojoules: false,
                        device_watts: false,
                        has_heartrate: false,
                        heartrate_opt_out: false,
                        upload_id: false,
                        elev_high: false,
                        elev_low: false,
                        map_polyline: false
                    }
                  }}}
                />
            </Box>

        </div>
    );
};

export default ActivitiesPageGrid;