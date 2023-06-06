import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const IncomeChart = ({ data, color, strokeColor }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis type="number" />
                <Tooltip />
                <Legend />
                <Area dataKey="amount" stroke={strokeColor} fill={color}/>
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default IncomeChart;