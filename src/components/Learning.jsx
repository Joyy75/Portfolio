import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import backendLogo from "../assets/php.png";
import awsLogo from "../assets/aws-logo.png";
import sqlLogo from "../assets/mySQL.png";

// Chart colors
const COLORS = ["#00C49F", "#1f2937"]; // Green + dark slate background

// Custom Tooltip with background and styling
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 text-white px-4 py-2 rounded-md shadow-md border border-slate-600">
        <p className="font-semibold">{payload[0].name}</p>
        <p>{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

// Learning items
const learningItems = [
  {
    name: "Backend Programming",
    logo: backendLogo,
    progress: 30,
    category: "Server-side",
  },
  {
    name: "AWS",
    logo: awsLogo,
    progress: 50,
    category: "Cloud",
  },
  {
    name: "MySQL",
    logo: sqlLogo,
    progress: 80,
    category: "Database",
  },
];

const Learning = () => {
  return (
    <section className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          What I'm Learning Now 🚀
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {learningItems.map((item, index) => {
            const chartData = [
              { name: "Progress", value: item.progress },
              { name: "Remaining", value: 100 - item.progress },
            ];

            return (
              <div
                key={index}
                className=" p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className="rounded-lg mb-4 w-20 h-20 object-contain bg-white p-2"
                  />
                  <h3 className="text-2xl font-semibold mb-1 text-center">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 text-center">
                    {item.category}
                  </p>

                  <div className="w-40 h-40">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Tooltip content={<CustomTooltip />} />
                        <Pie
                          data={chartData}
                          innerRadius={50}
                          outerRadius={70}
                          dataKey="value"
                          stroke="none"
                        >
                          {chartData.map((entry, idx) => (
                            <Cell
                              key={`cell-${idx}`}
                              fill={COLORS[idx % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="mt-2 text-sm text-gray-300">
                    {item.progress}% complete
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Learning;
