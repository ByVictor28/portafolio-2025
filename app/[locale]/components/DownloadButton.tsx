"use client";
import { Download } from "lucide-react";
import React from "react";

export default function DownloadButton({ text }: { text: string }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/VICTOR DELFIN - 2025.pdf";
    link.download = "VICTOR DELFIN - 2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="btn-primary" onClick={handleDownload}>
      <Download className="w-5 h-5 inline-block mr-3 " />
      {text}
    </button>
  );
}
