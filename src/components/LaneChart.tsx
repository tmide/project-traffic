/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { laneChartData } from "@/Data";

const chartConfig = {
  chrome: {
    label: "Trucks",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Bikes",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Cars",
    color: "hsl(var(--chart-3))",
  },
}; // satisfies ChartConfig

export function LaneChart({ title }: { title: string }) {
  const totalVisitors = React.useMemo(() => {
    return laneChartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="flex flex-col border-none -mt-3">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="">
        <ChartContainer
          config={chartConfig}
          className="aspect-square w-full h-full lg:max-h-[180px] "
        >
          <PieChart className="relative">
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={laneChartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={45}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-secondary text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="lg:absolute lg:bottom-10 lg:left-48 lg:flex lg:flex-col lg:items-start"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
