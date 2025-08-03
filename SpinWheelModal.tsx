
import React, { useState } from 'react';

interface SpinWheelModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const prizes = [
    { text: "10% OFF", color: "#6366F1" },
    { text: "TRY AGAIN", color: "#4B5563" },
    { text: "20% OFF", color: "#EC4899" },
    { text: "1 MONTH FREE", color: "#F59E0B" },
    { text: "15% OFF", color: "#10B981" },
    { text: "TRY AGAIN", color: "#4B5563" },
    { text: "5% OFF", color: "#3B82F6" },
    { text: "3 DAYS FREE", color: "#8B5CF6" },
];

const SpinWheelModal: React.FC<SpinWheelModalProps> = ({ isOpen, onClose }) => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [finalAngle, setFinalAngle] = useState(0);
    const [result, setResult] = useState<string | null>(null);

    const spin = () => {
        if (isSpinning || result) return;
        setIsSpinning(true);
        setResult(null);

        const spins = Math.floor(Math.random() * 5) + 5; // 5 to 9 full spins
        const winningSegment = Math.floor(Math.random() * prizes.length);
        const segmentAngle = 360 / prizes.length;
        const randomOffset = (Math.random() * segmentAngle) - (segmentAngle / 2);
        const newFinalAngle = (spins * 360) + (winningSegment * segmentAngle) + randomOffset;
        
        setFinalAngle(newFinalAngle);

        setTimeout(() => {
            setIsSpinning(false);
            setResult(prizes[prizes.length - 1 - winningSegment].text);
        }, 5000); // Corresponds to animation duration
    };

    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-brand-gray rounded-xl shadow-2xl shadow-purple-500/20 border border-brand-light-gray w-full max-w-md relative text-center" onClick={e => e.stopPropagation()}>
                 <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white z-20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="p-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Spin to Win!</h2>
                    <p className="text-gray-300 mb-6">Feeling lucky? Spin the wheel for a chance to win an exclusive discount on your plan!</p>
                    
                    <div className="relative w-72 h-72 mx-auto mb-6">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10" style={{'filter': 'drop-shadow(0 4px 3px rgba(0,0,0,0.5))'}}>
                            <svg width="40" height="50" viewBox="0 0 40 50">
                                <path d="M20 0 L40 25 L20 50 L0 25 Z" fill="#ffffff"/>
                                <circle cx="20" cy="25" r="5" fill="#1F2937"/>
                            </svg>
                        </div>
                        <div
                            className="w-full h-full rounded-full border-8 border-yellow-400 shadow-xl overflow-hidden transition-transform duration-[5000ms] ease-out"
                            style={{ transform: `rotate(${finalAngle}deg)` }}
                        >
                            {prizes.map((prize, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1/2 h-1/2 origin-bottom-right"
                                    style={{
                                        transform: `rotate(${i * (360 / prizes.length)}deg)`,
                                        clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                                    }}
                                >
                                    <div className="w-full h-full flex items-start justify-center pt-4" style={{ background: prize.color, transform: `rotate(${ (360 / prizes.length) / 2 }deg)` }}>
                                        <span className="font-bold text-white text-sm transform -rotate-90 origin-center translate-y-10 -translate-x-1/2">{prize.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {result ? (
                         <div className="h-20 flex flex-col items-center justify-center">
                            <p className="text-xl text-gray-300">Congratulations! You won:</p>
                            <p className="text-3xl font-bold text-yellow-400 mt-1">{result}</p>
                        </div>
                    ) : (
                        <div className="h-20">
                            <button
                                onClick={spin}
                                disabled={isSpinning}
                                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-10 rounded-lg text-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                            >
                                {isSpinning ? 'Spinning...' : 'SPIN NOW!'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SpinWheelModal;
