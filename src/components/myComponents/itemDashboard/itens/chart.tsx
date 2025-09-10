"use client"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { CrudApi } from "@/features/hooks/crudApi";
import { type Task } from "@/types"; // Import the Task type
import { type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Corrected getChartData function
const getChartData = (tasks: Task[]) => {
    const dailyCounts: { [key: string]: { completed: number; pending: number; date: string } } = {};

    tasks.forEach(task => {
        const dateKey = task.date;
        // Check if the dateKey exists, if not, initialize it. This is the fix.
        if (!dailyCounts[dateKey]) {
            dailyCounts[dateKey] = { date: dateKey, completed: 0, pending: 0 };
        }

        if (task.completed) {
            dailyCounts[dateKey].completed += 1;
        } else {
            dailyCounts[dateKey].pending += 1;
        }
    })
    return Object.values(dailyCounts);
}

const chartConfig = {
    tasks: {
        label: "Tasks",
        color: "#097a5aff",
    },
    completed: {
        label: "Completed",
        color: "#059669", // teal-600
    },
    pending: {
        label: "Pending",
        color: "#04573fff", // teal-400
    },
};

export default function ChartDashboard() {
    // 1. Fetch the data using your custom hook
    const { tasks, loading } = CrudApi();

    // 2. Transform the data for the chart
    const chartData = getChartData(tasks);

    // Show a loading message while data is being fetched
    if (loading) {
        return <p>Carregando dados do gráfico...</p>;
    }

    // 3. Render the chart with the transformed data
    return (

        <>
            <ChartContainer config={chartConfig} className="flex self-end max-h-[700px] w-[80%] dark">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={true} />
                    <XAxis
                        dataKey="date" // Use the 'date' key from the new data
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 10)}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend className="text-white" content={<ChartLegendContent />} />
                    <Bar dataKey="completed" fill="var(--color-completed)" radius={4} />
                    <Bar dataKey="pending" fill="var(--color-pending)" radius={4} />
                </BarChart>
            </ChartContainer>
        </>



    );
}