import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const ReChart = ({ data }) => {
    // console.log(data);
    return (
        <div>
            <BarChart width={500} height={250} data={data}>
                <Bar fill="green" dataKey='price'></Bar>
                <XAxis ></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default ReChart;