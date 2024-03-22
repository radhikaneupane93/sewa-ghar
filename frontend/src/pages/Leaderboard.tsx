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
    <div className="mt-32">
      <div className="mt-10 max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-600">Our Leaderboard</h2>

        <div className="flex justify-center gap-10 p-4">                                                                                                                                                                      
          {topUsers.map((user) => (
            <div key={user.id} className="bg-white shadow-lg rounded-lg overflow-hidden mx-4 max-w-full max-                                                                                                    h-full">
              <div className="bg-orange-400 py-3 px-5 font-bold text-white text-center">
                {user.rank} Place
              </div>
              <div className="px-6 py-4 w-64">
                <div className="items-center justify-between">
                  <div className="text-xl font-bold">{user.name}</div>
                  <div className="flex gap-2">
                    <div className="text-xl font-bold">{user.points}</div>
                    
                    <div className="text-xl font-bold"> points</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mt-2">{user.month}</div>
                <div className="text-sm text-gray-500 mt-2">{user.address}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
          <div className="flex bg-orange-400 py-3 px-5 font-bold text-white">
            <div className="w-1/6 text-center">S.N.</div>
            <div className="w-2/6 text-center">Full Name</div>
            <div className="w-1/6 text-center">Points</div>
            <div className="w-1/6 text-center">Month</div>
            <div className="w-1/6 text-center">Address</div>
          </div>
          {otherUsers.map((entry, index) => (
            <div
              key={entry.id}
              className={`px-6 py-4 flex items-center justify-between ${
                index % 2 === 0 ? "bg-gray-100" : ""
              } border-b border-gray-200`}
            >
              <div className="w-1/6 text-center">{entry.rank}</div>
              <div className="w-2/6 text-center">{entry.name}</div>
              <div className="w-1/6 text-center">{entry.points} points</div>
              <div className="w-1/6 text-center">{entry.month}</div>
              <div className="w-1/6 text-center">{entry.address}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;