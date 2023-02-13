import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {Box} from "@mui/material";


const ActivitiesPageGrid = ({columns, rowData}) => {



    return (
        <div id="activities-page-grid">
            <Box
                 m="0.5rem 0 0 0"
                 height="75vh"
                 sx={{
                   "& .MuiDataGrid-root": {border: "none"},
                   "& .name-column--cell": {color: "white"},
                   "& .MuiDataGrid-columnHeaders": {color: "white"},
                   "& .MuiDataGrid-virtualScroller": {color: "white"},
                   "& .MuiDataGrid-footerContainer": {borderTop: "none", color: "white"},
                   "& .MuiTablePagination-root": {color: "white"},
                   "& .MuiDataGrid-toolbarContainer .MuiButton-text": {color: "white"},
                   "& .suffer-score": {maxHeight: "0.5rem"},
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
                        id: false,
                        start_date_local: false,
                        MaxWatts: false,
                        Kilojoules: false,
                        DeviceWatts: false, 
                        ElevationHigh: false,
                        ElevationLow: false,
                        AchievementCount: false,
                        LocationCity: false,
                        UploadId: false,
                        MapPolyline: false
                    }
                  }}}
                />
            </Box>

        </div>
    );
};

export default ActivitiesPageGrid;