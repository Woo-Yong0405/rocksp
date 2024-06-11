// pages/flutter.js
import React from 'react';

const FlutterApp = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <iframe
        src="/index.html"
        style={{ border: 'none', height: '100%', width: '100%' }}
        title="Flutter Web App"
      />
    </div>
  );
};

export default FlutterApp;
