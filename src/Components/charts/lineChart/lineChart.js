import { ResponsiveLine } from '@nivo/line';

const LineChart = ({data}) => {

    const data2 = [
        {
            id: "Commutes",
            data: [
                {
                    x: "11/02/2023",
                    y: 4000
                },
                {
                    x: "12/02/2023",
                    y: 4100
                },
                {
                    x: "13/02/2023",
                    y: 4200
                }, 
                {
                    x: "14/02/2023",
                    y: 4300
                },
                {
                    x: "15/02/2023",
                    y: 4400
                }
            ]
        }
    ]

    return (
            <ResponsiveLine
        data={data}
        //width={'100rem'}
        //height={'15rem'}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ 
            type: 'point'
        }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'rides',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: "5rem",
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={"red"}
        pointSize={10}
        pointColor={ 'red' }
        pointBorderWidth={2}
        pointBorderColor={ 'blue' }
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'white',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'white',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    );

}

export default LineChart;