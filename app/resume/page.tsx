'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PDFDocument } from 'pdf-lib';

export default function ResumePage() {
  const router = useRouter();
  const [mergedUrl, setMergedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const resumeSrc = '/pdf/JeongJun_Resume_V42.pdf';
  const recSrc = '/pdf/Recommendation.pdf';

  const fetchArrayBuffer = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}`);
    return await res.arrayBuffer();
  };

  useEffect(() => {
    let isCancelled = false;
    (async () => {
      try {
        const [resumeBuf, recBuf] = await Promise.all([
          fetchArrayBuffer(resumeSrc),
          fetchArrayBuffer(recSrc),
        ]);
        const merged = await PDFDocument.create();
        const resumePdf = await PDFDocument.load(resumeBuf);
        const recPdf = await PDFDocument.load(recBuf);
        const resumePages = await merged.copyPages(
          resumePdf,
          resumePdf.getPageIndices(),
        );
        resumePages.forEach((p) => merged.addPage(p));
        const recPages = await merged.copyPages(
          recPdf,
          recPdf.getPageIndices(),
        );
        recPages.forEach((p) => merged.addPage(p));
        const mergedBytes = await merged.save();
        const blob = new Blob([mergedBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        if (!isCancelled) setMergedUrl(url);
      } catch (e: unknown) {
        if (!isCancelled)
          setError(
            'Could not merge PDFs automatically. Showing side-by-side view.',
          );
      }
    })();
    return () => {
      isCancelled = true;
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-t from-purple-950 via-violet-950 via-indigo-950 to-blue-950 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-blue-900/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/30 via-transparent to-indigo-950/30 pointer-events-none"></div>

      <div className="relative z-10 px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => router.push('/')}
            className="bg-white shadow-lg rounded-[1.5vw] px-4 py-2 hover:shadow-xl transition-shadow duration-300 border border-blue-200 text-blue-600 font-semibold"
          >
            Back
          </button>
          <h1 className="text-white text-2xl font-extrabold">
            Resume & Recommendation
          </h1>
          <div />
        </div>

        {mergedUrl ? (
          <div className="card-base card-secondary p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-white font-bold">Combined PDF</h2>
              <a
                href={mergedUrl}
                download="Jun_Song_Resume_and_Recommendation.pdf"
                className="text-blue-200 underline hover:text-white"
              >
                Download
              </a>
            </div>
            <div className="aspect-[8.5/11] w-full bg-white rounded-xl overflow-hidden">
              <iframe
                title="Combined"
                src={mergedUrl}
                className="w-full h-full"
              />
            </div>
          </div>
        ) : (
          <>
            {error && (
              <div className="card-base card-primary p-4 text-white mb-4">
                {error}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-base card-secondary p-4">
                <h2 className="text-white font-bold mb-2">Resume</h2>
                <div className="aspect-[8.5/11] w-full bg-white rounded-xl overflow-hidden">
                  <iframe
                    title="Resume"
                    src={resumeSrc}
                    className="w-full h-full"
                  />
                </div>
                <a
                  href={resumeSrc}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-200 underline hover:text-white mt-2 inline-block"
                >
                  Open in new tab
                </a>
              </div>
              <div className="card-base card-secondary p-4">
                <h2 className="text-white font-bold mb-2">Recommendation</h2>
                <div className="aspect-[8.5/11] w-full bg-white rounded-xl overflow-hidden">
                  <iframe
                    title="Recommendation"
                    src={recSrc}
                    className="w-full h-full"
                  />
                </div>
                <a
                  href={recSrc}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-200 underline hover:text-white mt-2 inline-block"
                >
                  Open in new tab
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
