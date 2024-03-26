import React, { useEffect, useState } from "react";

interface LeaderboardEntry {
  id: number;
  name: string;
  points: number;
  month: string;
  address: string;
  rank: string;
}

const Leaderboard: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data: LeaderboardEntry[] = [
        { id: 1, name: "John Doe", points: 100, month: "March", address: "123 Main St", rank: "1st" },
        { id: 2, name: "Jane Doe", points: 95, month: "March", address: "456 Elm St", rank: "2nd" },
        { id: 3, name: "Alice Smith", points: 90, month: "February", address: "789 Oak St", rank: "3rd" },
        { id: 4, name: "Hari Bahadur Shrestha", points: 90, month: "January", address: "789 Oak St", rank: "3rd" },
        { id: 5, name: "Michael Johnson", points: 85, month: "April", address: "987 Pine St", rank: "5th" },
        { id: 6, name: "Emma Watson", points: 80, month: "May", address: "654 Birch St", rank: "6th" },
      ];
      const sortedData = data.sort((a, b) => b.points - a.points);
      const rankedData = sortedData.map((entry, index) => ({
        ...entry,
        rank: `${index + 1}${index === 0 ? "st" : index === 1 ? "nd" : index === 2 ? "rd" : "th"}`,
      }));
      setLeaderboardData(rankedData);
    };

    fetchData();
  }, []);

  const topUsers = leaderboardData.slice(0, 3);
  const otherUsers = leaderboardData.slice(3);

  return (
    <div className="max-w-4xl mx-auto mt-32">
      <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">Our Leading Donors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topUsers.map((user) => (
          <div key={user.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="bg-orange-500 py-3 px-5 font-bold text-white text-center">{user.rank} Place</div>
            <div className="px-6 py-4">
              <div className="text-xl font-bold mb-2">{user.name}</div>
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold">{user.points} points</div>
                <div className="text-sm text-gray-500">{user.month}</div>
              </div>
              <div className="text-sm text-gray-500 mt-1">{user.address}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
        <div className="flex bg-orange-500 py-3 px-5 font-bold text-white">
          <div className="w-1/6 text-center">S.N.</div>
          <div className="w-2/6 text-center">Full Name</div>
          <div className="w-1/6 text-center">Points</div>
          <div className="w-1/6 text-center">Month</div>
          <div className="w-1/6 text-center">Address</div>
        </div>
        {otherUsers.map((entry, index) => (
          <div key={entry.id} className={`px-6 py-4 flex items-center justify-between ${index % 2 === 0 ? "bg-gray-100" : ""} border-b border-gray-200 transition-all duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-105`}>
            <div className="w-1/6 text-center">{entry.rank}</div>
            <div className="w-2/6 text-center">{entry.name}</div>
            <div className="w-1/6 text-center">{entry.points} points</div>
            <div className="w-1/6 text-center">{entry.month}</div>
            <div className="w-1/6 text-center">{entry.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;