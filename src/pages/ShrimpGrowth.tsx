
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
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const chartData = [
  { age: 55, quantity: 16500 },
  { age: 62, quantity: 19800 },
  { age: 69, quantity: 18150 },
  { age: 76, quantity: 18150 },
  { age: 85, quantity: 18150 },
  { age: 95, quantity: 18150 },
];

const chartConfig = {
  quantity: {
    label: "Quantity (Pcs)",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const ShrimpGrowth = () => {
  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Button asChild variant="ghost" className="mb-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <Card>
          <CardHeader className="items-center text-center">
            <div className="text-6xl mb-4">🦐</div>
            <CardTitle className="text-3xl">Vaname Crustacea Growth</CardTitle>
            <CardDescription>Quantity (Pcs) based on Age (Days)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
              <BarChart
                data={chartData}
                margin={{ top: 30, right: 30, bottom: 40, left: 40 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="age"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  label={{
                    value: "Age (Days)",
                    position: "insideBottom",
                    offset: -25,
                  }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  domain={[14000, 21000]}
                  label={{
                    value: "Quantity (Pcs)",
                    angle: -90,
                    position: "insideLeft",
                    offset: -20,
                    style: { textAnchor: "middle" },
                  }}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar
                  dataKey="quantity"
                  fill="var(--color-quantity)"
                  radius={4}
                >
                  <LabelList
                    dataKey="quantity"
                    position="top"
                    offset={8}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShrimpGrowth;

