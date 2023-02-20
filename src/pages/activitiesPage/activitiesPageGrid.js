import { useCallback } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {Box} from "@mui/material";


const ActivitiesPageGrid = ({columns, rowData}) => {

  //Takes the data from the Notes column and updates the corresponding record in the database
  const handleSubmit = async (id, payload) => {
    try {
      fetch(`http://localhost:5000/activities/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    } catch(error) {
      console.log(error);
    }
}

  //Handles the submission of new data into the Notes column in the data grid
  //Calls the handlesubmit function above which sends that data to the database
  const onCellValueChanged = useCallback((event) => {
    handleSubmit(event.id, { Id: event.id, Notes: event.value });
  }, []);

//<button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall MuiDataGrid-menuIconButton css-1pe4mpk-MuiButtonBase-root-MuiIconButton-root" tabindex="-1" type="button" aria-label="Menu" title="Menu" aria-haspopup="true" aria-controls=":rg:" id=":rh:"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-ptiqhd-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TripleDotsVerticalIcon"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg><span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>

    return (
            <Box
                 m="0.4rem 0 0 0"
                 sx={{
                    height: '100%', width: '100%',
                    "& .MuiDataGrid-root": {border: "none", color: "white"},
                    "& .name-column--cell": {color: "white"},
                    "& .MuiDataGrid-columnHeaders": {color: "white"},
                    "& .MuiDataGrid-virtualScroller": {color: "white"},
                    "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {width: "1rem"},
                    "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {background: "#1c0f26"},
                    "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {backgroundColor: "#888", borderRadius: "0.5rem"},
                    "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover": {background: '#555'},
                    "& .MuiDataGrid-footerContainer": {borderTop: "none", color: "white", height: "50%", backgroundColor: "#332240"},
                    "& .MuiTablePagination-root": {color: "white"},
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {color: "white"}
                  }}
                  
            >
               <DataGrid
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
                  onCellEditCommit={onCellValueChanged}
                />
            </Box>

    );
};

export default ActivitiesPageGrid;