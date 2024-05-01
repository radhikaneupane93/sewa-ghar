import { PureComponent } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

export default class DataChart extends PureComponent {

  render() {
    return (
      <div className="flex justify-center">
        <div className="w-1/2 p-4">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data01}
                cx="50%"
                cy="50%"
                outerRadius={124}
                fill="#F57F49"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-1/2 p-4 mt-24">
          <h1 className="text-3xl font-semibold text-red-600">
            Our Donors Contributions
          </h1>
          <p className="mt-8 text-xl md:text-xlxl leading-6 text-gray-700 max-w-2xl text-justify">
            These are the impactful contributions made through our cloth banks.
            Each item donated represents a gesture of kindness and solidarity
            toward those less fortunate. From gently worn garments to brand new
            apparel, every donation plays a vital role in supporting individuals
            and families in need.
          </p>
        </div>
      </div>
    );
  }
}
