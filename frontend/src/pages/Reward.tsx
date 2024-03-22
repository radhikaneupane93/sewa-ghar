import React from 'react';
import { Icon } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface RewardPageProps {
    points: number;
    personName: string;
}

const Reward: React.FC<RewardPageProps> = ({ points, personName }) => {
    return (
        <div className="flex items-center justify-center h-screen bg-orange">
            <div className="border-20 w-full h-2/4 max-w-screen-xl mx-auto bg-orange-400 rounded-lg p-8 shadow-lg flex flex-col items-center justify-center text-center">
                <div className="mb-4">
                    <Icon component={EmojiEventsIcon} sx={{ fontSize: 64, color: 'white', marginBottom: 4 }} />
                    <h1 className="text-4xl font-semibold text-white">Congratulations!</h1>
                </div>
                <h1 className="text-4xl font-semibold mb-4 text-white">{personName}</h1>
                <p className="text-3xl mb-8 text-white">You have been awarded {points} points.</p>
            </div>
        </div>
    );
};

const MyComponent = () => {
    return (
        <Reward points={100} personName="Ram" />
    );
};

export default MyComponent;
