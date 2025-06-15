
import * as React from "react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const chartData = [
  { cycle: "1", quantity: 326000 },
  { cycle: "2", quantity: 359000 },
  { cycle: "3", quantity: 326000 },
  { cycle: "4", quantity: 352000 },
];

const chartConfig = {
  quantity: {
    label: "Quantity (Kg)",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export const TunaProductionCard = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader className="flex flex-row items-center space-x-4">
        <div className="text-6xl">🐟</div>
        <div className="space-y-1.5">
          <CardTitle className="text-3xl">Mackarel Tuna Fish Production</CardTitle>
          <CardDescription>Quantity (Kg) based on Cycle</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
          <BarChart
            data={chartData}
            margin={{ top: 30, right: 30, bottom: 40, left: 60 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="cycle"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              label={{
                value: "Cycle",
                position: "insideBottom",
                offset: -25,
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              domain={[300000, 370000]}
              tickFormatter={(value) => value.toLocaleString()}
              label={{
                value: "Quantity (Kg)",
                angle: -90,
                position: "insideLeft",
                offset: -40,
                style: { textAnchor: "middle" },
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar dataKey="quantity" fill="var(--color-quantity)" radius={4}>
              <LabelList
                dataKey="quantity"
                position="top"
                offset={8}
                className="fill-foreground"
                fontSize={12}
                formatter={(value: number) => value.toLocaleString()}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
