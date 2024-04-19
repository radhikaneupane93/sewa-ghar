import React, { useEffect, useState } from "react";

interface LeaderboardEntry {
  name: string;
  points: number;
  address: string;
}

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/users/api/leaderboard/");
        if (response.ok) {
          const data = await response.json();
          setLeaderboardData(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-32">
      <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">Our Leading Donors</h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
        <div className="flex bg-orange-500 py-3 px-5 font-bold text-white">
          <div className="w-1/3 text-center">Rank</div>
          <div className="w-1/3 text-center">Full Name</div>
          <div className="w-1/3 text-center">Points</div>
        </div>
        {leaderboardData.map((entry, index) => (
          <div key={index} className={`px-6 py-4 flex items-center justify-between ${index % 2 === 0 ? "bg-gray-100" : ""} border-b border-gray-200 transition-all duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-105`}>
            <div className="w-1/3 text-center">{index + 1}</div>
            <div className="w-1/3 text-center">{entry.name}</div>
            <div className="w-1/3 text-center">{entry.points} points</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;