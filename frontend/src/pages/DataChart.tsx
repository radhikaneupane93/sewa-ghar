import React, { useState, useEffect } from "react";
import axios from "axios";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

interface ClothBank {
  id: number;
  title: string;
  total_numberOfclothes: number;
}

const DataChart: React.FC = () => {
  const [clothData, setClothData] = useState<ClothBank[]>([]);

  useEffect(() => {
    const fetchClothBanks = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/donation/getallclothbanks/"
        );
        setClothData(response.data);
      } catch (error) {
        console.error("Error fetching cloth banks:", error);
      }
    };

    fetchClothBanks();
  }, []);

 


  return (
    <div className="flex justify-center">
      <div className="w-1/2 p-4">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={clothData.map((bank) => ({
                name: bank.title,
                value: bank.total_numberOfclothes,
              }))}
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
        <h1 className="text-4xl font-semibold text-red-600 mb-6">
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
};

export default DataChart;
