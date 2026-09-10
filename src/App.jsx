import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Contributions from './components/Contributions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumePdfModal from './components/ResumePdfModal';

export default function App() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const handleOpenPdfModal = () => {
    setIsPdfModalOpen(true);
  };

  const handleClosePdfModal = () => {
    setIsPdfModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
      <Navbar onDownloadPdf={handleOpenPdfModal} />
      
      <main className="flex-1">
        <Hero onDownloadPdf={handleOpenPdfModal} />
        <About />
        <Timeline />
        <Certifications />
        <Contributions />
        <Contact />
      </main>

      <Footer />

      {/* Interactive PDF Resume Export & Preview Modal */}
      <ResumePdfModal
        isOpen={isPdfModalOpen}
        onClose={handleClosePdfModal}
      />
    </div>
  );
}
