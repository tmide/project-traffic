"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { sensorData } from "@/Data";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
}; // satisfies ChartConfig

export function SensorChart() {
  return (
    <Card className="border-none md:-mt-6">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-center text-secondary">
          Infrared Sensor Health
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={sensorData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="#BCFF34"
              fillOpacity={0.8}
              stroke="#E7F8B100"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
