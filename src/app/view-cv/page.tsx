'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaDownload, FaArrowLeft } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function ViewCV() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const basePath = pathname.startsWith('/profiles') ? '/profiles' : '';

  return (
    <main className="min-h-screen bg-gray-100 py-16">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <Link href={`${basePath}/`} className="flex items-center text-primary hover:underline">
            <FaArrowLeft className="mr-2" /> Quay lại trang chủ
          </Link>
          <a 
            href={`${basePath}/[Data_Engineer] - Tran_Minh_Duc.pdf`}
            download 
            className="btn-primary inline-flex items-center"
          >
            <FaDownload className="mr-2" /> Tải xuống CV
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 bg-primary text-white">
            <h1 className="text-xl font-bold">CV - Tran Minh Duc (Data Engineer)</h1>
          </div>
          
          {isLoading && (
            <div className="flex justify-center items-center py-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          )}
          
          <iframe
            src={`${basePath}/[Data_Engineer] - Tran_Minh_Duc.pdf`}
            className="w-full h-screen"
            onLoad={() => setIsLoading(false)}
            style={{ display: isLoading ? 'none' : 'block' }}
          />
        </div>
      </div>
    </main>
  );
} 