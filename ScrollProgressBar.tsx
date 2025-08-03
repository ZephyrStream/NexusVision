
import React, { useState, useEffect } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

const ScrollProgressBar: React.FC = () => {
    const scrollProgress = useScrollProgress();

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
            <div
                className="h-full bg-brand-red transition-all duration-100 ease-linear"
                style={{ width: `${scrollProgress}%` }}
            ></div>
        </div>
    );
};

export default ScrollProgressBar;
