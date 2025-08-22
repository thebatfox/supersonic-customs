"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <div className="antialiased relative">
      {/* Fixed Background Logo Watermark */}
      <div
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
        style={{
          zIndex: 1,
          backgroundColor: 'rgba(255, 0, 0, 0.3)'
        }}
      >
        <div
          className="w-[80vmin] h-[80vmin] bg-blue-500 border-4 border-white"
          style={{
            backgroundImage: 'url(/watermark-logo.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 1.0
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative" style={{ zIndex: 10 }}>
        {children}
      </div>
    </div>
  );
}
