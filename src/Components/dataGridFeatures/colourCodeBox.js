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


export default ColourCodeBox;