import { useState } from "react";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Location {
  id: number;
  name: string;
  description: string;
  x: number; // percentage position
  y: number; // percentage position
}

const locations: Location[] = [
  {
    id: 1,
    name: "Dyer Observatory",
    description: "Historic astronomical observatory featuring state-of-the-art telescopes and educational programs since 1953.",
    x: 35,
    y: 40,
  },
  {
    id: 2,
    name: "Ravenswood Mansion",
    description: "Antebellum mansion built in 1825, showcasing Federal and Greek Revival architecture with rich Tennessee history.",
    x: 65,
    y: 55,
  },
  {
    id: 3,
    name: "Historic Downtown",
    description: "Charming downtown area with local shops, restaurants, and community gathering spaces.",
    x: 50,
    y: 30,
  },
];

export function InteractiveMap() {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="aspect-video bg-gradient-to-br from-green-100 via-blue-50 to-green-50 rounded-2xl shadow-xl relative overflow-hidden border-4 border-[#d4af37]/30">
        {/* Decorative map elements */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <path
            d="M 100 200 Q 300 100 500 250 T 900 200"
            stroke="#6B7280"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
          <circle cx="200" cy="150" r="80" fill="#34D399" opacity="0.2" />
          <circle cx="600" cy="300" r="100" fill="#3B82F6" opacity="0.2" />
        </svg>

        {/* Map title */}
        <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
            Brentwood Attractions
          </h3>
        </div>

        {/* Location pins */}
        {locations.map((location) => (
          <div
            key={location.id}
            className="absolute"
            style={{
              left: `${location.x}%`,
              top: `${location.y}%`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <button
              onClick={() =>
                setActiveLocation(
                  activeLocation === location.id ? null : location.id
                )
              }
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-colors ${
                  activeLocation === location.id
                    ? "text-[#d4af37]"
                    : "text-red-500 hover:text-[#d4af37]"
                }`}
              >
                <MapPin className="w-10 h-10 drop-shadow-lg" fill="currentColor" />
              </motion.div>

              <AnimatePresence>
                {activeLocation === location.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 bg-white rounded-lg shadow-2xl p-4 border-2 border-[#d4af37] z-10"
                  >
                    <h4 className="font-bold text-gray-800 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {location.name}
                    </h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {location.description}
                    </p>
                    {/* Arrow pointer */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-[#d4af37] transform rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Click on the map pins to learn more about each location
        </p>
      </div>
    </div>
  );
}
