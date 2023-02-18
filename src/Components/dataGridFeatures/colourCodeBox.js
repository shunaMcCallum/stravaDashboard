import { Box } from "@mui/material";

const CustomBox = ({text, textColour, backgroundColour}) => {
    return (
        <Box
        sx={{
            height: "1.8rem",
            width: "5.5rem",
            color: textColour,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: backgroundColour,
            borderRadius: "0.75rem",
            //boxShadow: "0rem 0rem 0.7rem 0rem #0B0A0A"
        }}
        >
        {text}
        </Box>
    )
}

const ColourCodeBox = ({params, high, mediumBottom, mediumTop, lowBottom, lowTop}) => {
    if (params.value === null) {
        return (
            <CustomBox text={'---'} textColour={"white"} backgroundColour={null} />
        )
    } else if (parseInt(params.value) >= high) {
        return (
            <CustomBox text={params.value} textColour={"black"} backgroundColour={"red"} />
        )
    } else if (parseInt(params.value) >= mediumBottom && parseInt(params.value) <= mediumTop) {
        return (
            <CustomBox text={params.value} textColour={"black"} backgroundColour={"orange"} />
        )
    } else if (parseInt(params.value) >= lowBottom && parseInt(params.value) <= lowTop) {
        return (
            <CustomBox text={params.value} textColour={"black"} backgroundColour={"yellow"} />
        )
    } else {
        return (
            <CustomBox text={params.value} textColour={"white"} colour={null} />
        )
    }
}  

// const ColourCodeBox = ({params, high, mediumBottom, mediumTop, lowBottom, lowTop}) => {
//     if (params.value === null) {
//         return (
//             <Box
//             sx={{
//             height: "1.8rem",
//             width: "5.5rem",
//             color: "white",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center"
//         }}
//         >
//             {'---'}
//         </Box>
//         )
//     } else if (parseInt(params.value) >= high) {
//         return (
//             <Box 
//             sx={{
//                 height: "1.8rem",
//                 width: "5.5rem",
//                 backgroundColor: "red",
//                 color: "black",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center"
//             }}
//             >
//                 {params.value}
//             </Box>
//         )
//     } else if (parseInt(params.value) >= mediumBottom && parseInt(params.value) <= mediumTop) {
//         return (
//             <Box 
//             sx={{
//                 height: "1.8rem",
//                 width: "5.5rem",
//                 backgroundColor: "orange",
//                 color: "black",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center"
//             }}
//             >
//                 {params.value}
//             </Box>
//         )
//     } else if (parseInt(params.value) >= lowBottom && parseInt(params.value) <= lowTop) {
//         return (
//             <Box 
//             sx={{
//                 height: "1.8rem",
//                 width: "5.5rem",
//                 backgroundColor: "yellow",
//                 color: "black",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center"
//             }}
//             >
//                 {params.value}
//             </Box>
//         )
//     } else {
//         return (
//             <Box
//                 sx={{
//                 height: "1.8rem",
//                 width: "5.5rem",
//                 color: "white",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center"
//             }}
//             >
//                 {params.value}
//             </Box>
//         )
//     }
// }  

export default ColourCodeBox;