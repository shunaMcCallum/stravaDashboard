import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {Box} from "@mui/material";
import "../../Styling/ActivitiesPageGrid.css";

const ActivitiesPageGrid = ({columnHeaders, rowData}) => {

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
                   "& .MuiDataGrid-toolbarContainer .MuiButton-text": {color: "white"}
                 }}
            >
               <DataGrid
                  rows={rowData}
                  columns={columnHeaders}
                components={{Toolbar: GridToolbar}}
                />
            </Box>

        </div>
    );
};

export default ActivitiesPageGrid;