
import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ReferralPage from './pages/ReferralPage';
import InstallGuidePage from './pages/InstallGuidePage';
import BlogPage from './pages/BlogPage';
import BackToTopButton from './components/BackToTopButton';
import ScrollProgressBar from './components/ScrollProgressBar';
import FreeTrialModal from './components/FreeTrialModal';
import SpinWheelModal from './components/SpinWheelModal';

const App: React.FC = () => {
    const [isTrialModalOpen, setTrialModalOpen] = useState(false);
    const [isSpinWheelModalOpen, setSpinWheelModalOpen] = useState(false);

    return (
        <ReactRouterDOM.HashRouter>
            <div className="relative bg-brand-black">
                <ScrollProgressBar />
                <Header 
                    onTrialClick={() => setTrialModalOpen(true)} 
                    onSpinWheelClick={() => setSpinWheelModalOpen(true)} 
                />
                <main>
                    <ReactRouterDOM.Routes>
                        <ReactRouterDOM.Route path="/" element={
                            <HomePage 
                                onTrialClick={() => setTrialModalOpen(true)} 
                                onSpinWheelClick={() => setSpinWheelModalOpen(true)}
                            />
                        } />
                        <ReactRouterDOM.Route path="/referral" element={<ReferralPage />} />
                        <ReactRouterDOM.Route path="/install" element={<InstallGuidePage />} />
                        <ReactRouterDOM.Route path="/blog" element={<BlogPage />} />
                    </ReactRouterDOM.Routes>
                </main>
                <Footer />
                <BackToTopButton />
                <FreeTrialModal isOpen={isTrialModalOpen} onClose={() => setTrialModalOpen(false)} />
                <SpinWheelModal isOpen={isSpinWheelModalOpen} onClose={() => setSpinWheelModalOpen(false)} />
            </div>
        </ReactRouterDOM.HashRouter>
    );
};

export default App;
