import { motion } from "motion/react";

export interface TimelineItem {
  id: number;
  title: string;
  year: string;
}

interface TimelineProps {
  items: TimelineItem[];
  activeChapter: number;
  onChapterChange: (id: number) => void;
}

export function Timeline({ items, activeChapter, onChapterChange }: TimelineProps) {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg">
      <div className="flex items-center gap-2">
        {items.map((item, index) => (
          <div key={item.id} className="flex items-center">
            <button
              onClick={() => onChapterChange(item.id)}
              className="group relative flex flex-col items-center"
            >
              <div
                className={`w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                  activeChapter === item.id
                    ? "border-[#d4af37] bg-[#d4af37] scale-110"
                    : "border-gray-300 bg-white hover:border-[#d4af37] hover:scale-105"
                }`}
              >
                <span
                  className={`text-sm font-semibold ${
                    activeChapter === item.id ? "text-white" : "text-gray-600"
                  }`}
                >
                  {item.id}
                </span>
              </div>
              <div className="absolute top-14 w-32 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black/80 text-white text-xs py-1 px-2 rounded">
                  {item.title}
                  <div className="text-[10px] text-gray-300">{item.year}</div>
                </div>
              </div>
              {activeChapter === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 w-2 h-2 bg-[#d4af37] rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
            {index < items.length - 1 && (
              <div className="w-8 h-0.5 bg-gray-300 mx-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
