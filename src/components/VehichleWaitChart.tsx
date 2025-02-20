"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart";
import { chartData } from "@/Data";

const chartConfig = {
  desktop: {
    label: "Time",
    color: "hsl(var(--chart-1))",
  },
  //   mobile: {
  //     label: "Mobile",
  //     color: "hsl(var(--chart-2))",
  //   },
}; // satisfies ChartConfig

export function VehicleWaitChart() {
  return (
    <div className="w-full">
      <Card className="bg-card border-2 border-card-outline">
        <CardHeader>
          <CardTitle className="text-center text-lg font-bold text-secondary">
            Vehicle Wait Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} horizontal={false} />
              <XAxis
                dataKey="time"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <Bar dataKey="desktop" fill="#BDFE36" radius={4} />
              {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} /> */}
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
