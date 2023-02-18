import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {Box} from "@mui/material";


const ActivitiesPageGrid = ({columns, rowData}) => {



    return (
            <Box
                 m="0.5rem 0 0 0"
                 sx={{
                    height: '98%', width: '100%',
                    "& .MuiDataGrid-root": {border: "none"},
                    "& .name-column--cell": {color: "white"},
                    "& .MuiDataGrid-columnHeaders": {color: "white"},
                    "& .MuiDataGrid-virtualScroller": {color: "white"},
                    "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {width: "1rem"},
                    "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {background: "#1c0f26"},
                    "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {backgroundColor: "#888", borderRadius: "0.5rem"},
                    "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover": {background: '#555'},
                    "& .MuiDataGrid-footerContainer": {borderTop: "none", color: "white", height: "50%"},
                    "& .MuiTablePagination-root": {color: "white"},
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {color: "white"},
                    "& .suffer-score.high": {backgroundColor: "red", color: "black"},
                    "& .suffer-score.medium": {backgroundColor: "orange", color: "black"},
                    "& .suffer-score.low": {backgroundColor: "yellow", color: "black"},
                    "& .max-heart-rate.high": {backgroundColor: "red", color: "black"},
                    "& .max-heart-rate.medium": {backgroundColor: "orange", color: "black"},
                    "& .max-heart-rate.low": {backgroundColor: "yellow", color: "black"},
                    "& .avg-heart-rate.high": {backgroundColor: "red", color: "black"},
                    "& .avg-heart-rate.medium": {backgroundColor: "orange", color: "black"},
                    "& .avg-heart-rate.low": {backgroundColor: "yellow", color: "black"},
                    "& .max-watts.high": {backgroundColor: "red", color: "black"},
                    "& .max-watts.medium": {backgroundColor: "orange", color: "black"},
                    "& .max-watts.low": {backgroundColor: "yellow", color: "black"},
                    "& .avg-power.high": {backgroundColor: "red", color: "black"},
                    "& .avg-power.medium": {backgroundColor: "orange", color: "black"},
                    "& .avg-power.low": {backgroundColor: "yellow", color: "black"}
                  }}
                  
            >
               <DataGrid
                  disableColumnMenu
                  rows={rowData}
                  columns={columns}
                  rowHeight={38}
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
                        MapPolyline: false,
                        MaxHeartRate: false,
                        ElapsedTime: false,
                        MaxSpeed: false,
                        AvgSpeed: false,
                        Commute: false,
                        SportType: false
                    }
                  }}}

                />
            </Box>

    );
};

export default ActivitiesPageGrid;