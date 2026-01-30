import React from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumePage: React.FC = () => {
    return (
        <div style={{ minHeight: '100vh', background: '#F5F7FA', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Header */}
            <div className="container" style={{ maxWidth: '1000px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <Link to="/" className="btn btn-soft" style={{ gap: '8px' }}>
                    <ArrowLeft size={20} /> Back to Home
                </Link>
                <a href="/Resume Rofi.pdf" download className="btn btn-primary" style={{ gap: '8px' }}>
                    <Download size={20} /> Download PDF
                </a>
            </div>

            {/* PDF Viewer Container */}
            <div className="bento-card" style={{ maxWidth: '1000px', width: '100%', height: '80vh', padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <iframe
                    src="/Resume Rofi.pdf"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title="Resume Rofi"
                />
            </div>
        </div>
    );
};

export default ResumePage;
