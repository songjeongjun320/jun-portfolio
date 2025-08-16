import React from 'react';
import { Info } from 'lucide-react';

interface HoverTooltipProps {
  content: string;
  position: { x: number; y: number };
  visible: boolean;
}

const HoverTooltip: React.FC<HoverTooltipProps> = ({
  content,
  position,
  visible
}) => {
  if (!visible) {
    return null;
  }

  // When the cursor is near the left edge, move the tooltip to the right.
  const leftThreshold = 400; // Switch position if cursor is within 400px of the left edge
  const transform =
    position.x < leftThreshold
      ? 'translate(20px, -120%)' // Show on the top-right
      : 'translate(-100%, -120%)'; // Show on the top-left

  return (
    <div
      className="pointer-events-none fixed z-50 flex items-center space-x-2 whitespace-nowrap rounded-xl border border-cyan-400/30 bg-black/60 px-4 py-3 text-white shadow-2xl shadow-cyan-500/10 backdrop-blur-lg"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: transform
      }}
    >
      <Info size={20} className="text-cyan-400" />
      <span className="text-base font-medium text-gray-200">{content}</span>
    </div>
  );
};

export default HoverTooltip;
