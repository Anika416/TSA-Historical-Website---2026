import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Timeline, TimelineItem } from "@/app/components/Timeline";
import { Chapter } from "@/app/components/Chapter";
import { ArticleCard } from "@/app/components/ArticleCard";
import { InteractiveMap } from "@/app/components/InteractiveMap";
import { Music, BookOpen, Landmark, Map } from "lucide-react";

const timelineData: TimelineItem[] = [
  { id: 1, title: "Native American Era", year: "Pre-1800s" },
  { id: 2, title: "Early Settlement", year: "1800-1850" },
  { id: 3, title: "Civil War Period", year: "1850-1870" },
  { id: 4, title: "Modern Growth", year: "1870-1950" },
  { id: 5, title: "Pop Culture", year: "1950-2000" },
  { id: 6, title: "Education", year: "2000-Present" },
  { id: 7, title: "Local Attractions", year: "Today" },
];

function App() {
  const [activeChapter, setActiveChapter] = useState(1);

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Timeline
        items={timelineData}
        activeChapter={activeChapter}
        onChapterChange={setActiveChapter}
      />

      <AnimatePresence mode="wait">
        {activeChapter === 1 && (
          <Chapter
            key="chapter1"
            title="Native American Heritage"
            subtitle="The Original Inhabitants of Brentwood"
            theme="theme-native"
          >
            <ArticleCard
              title="The Land Before Brentwood"
              image="https://images.unsplash.com/photo-1684596739487-ad2ffb821c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXRpdmUlMjBhbWVyaWNhbiUyMGxhbmRzY2FwZSUyMHRlbm5lc3NlZXxlbnwxfHx8fDE3Njg1Mjk4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              imagePosition="left"
            >
              <p>
                Long before European settlers arrived, the land that would become Brentwood was home
                to various Native American tribes, including the Cherokee and Creek nations. These
                indigenous peoples lived in harmony with the rich Tennessee landscape, utilizing the
                abundant natural resources for sustenance and shelter.
              </p>
              <p>
                The area's rolling hills, dense forests, and waterways provided excellent hunting
                grounds and fertile soil for agriculture. Archaeological evidence suggests Native
                American presence in the region dating back thousands of years, with artifacts and
                burial mounds discovered throughout Middle Tennessee.
              </p>
              <p>
                The Cherokee people, in particular, had established villages and trading routes
                throughout the area. Their deep connection to the land and sophisticated agricultural
                practices laid the foundation for the region's future development, even as their own
                displacement became an inevitable tragedy of American expansion.
              </p>
            </ArticleCard>
          </Chapter>
        )}

        {activeChapter === 2 && (
          <Chapter
            key="chapter2"
            title="Early Settlement"
            subtitle="Pioneers and the Birth of a Community"
            theme="theme-heritage"
          >
            <ArticleCard title="The Founding Years" imagePosition="right">
              <p>
                In the early 1800s, European settlers began arriving in what is now Brentwood,
                attracted by the fertile farmland and strategic location near Nashville. The area
                was originally part of Davidson County and remained largely agricultural throughout
                the antebellum period.
              </p>
              <p>
                The community grew slowly but steadily, with families establishing farms and small
                businesses. The construction of roads and the development of trade routes helped
                connect these isolated homesteads, fostering a sense of community among the early
                settlers.
              </p>
            </ArticleCard>
          </Chapter>
        )}

        {activeChapter === 3 && (
          <Chapter
            key="chapter3"
            title="Civil War Era"
            subtitle="A Region Divided"
            theme="theme-heritage"
          >
            <ArticleCard title="War Comes to Brentwood">
              <p>
                The Civil War brought unprecedented turmoil to the Brentwood area. Located near
                Nashville, a strategic Union stronghold, the region saw frequent skirmishes and
                military movements. Several battles and raids occurred in and around Brentwood,
                leaving lasting impacts on the community.
              </p>
              <p>
                The aftermath of the war left the area economically devastated, with many farms
                destroyed and the social fabric of the community torn apart. Reconstruction was
                a slow and difficult process, but the resilient spirit of Brentwood's residents
                eventually led to recovery and renewed growth.
              </p>
            </ArticleCard>
          </Chapter>
        )}

        {activeChapter === 4 && (
          <Chapter
            key="chapter4"
            title="Modern Development"
            subtitle="From Farmland to Suburb"
            theme="theme-heritage"
          >
            <ArticleCard title="The Transformation of Brentwood">
              <p>
                The late 19th and early 20th centuries saw Brentwood slowly transition from a
                rural agricultural community to a more developed suburb. The arrival of the
                railroad and improved roads connected Brentwood more closely to Nashville,
                facilitating commerce and population growth.
              </p>
              <p>
                By the mid-20th century, Brentwood began to attract families seeking a quieter
                lifestyle within reach of Nashville's urban amenities. This period laid the
                groundwork for the explosive growth that would come in later decades.
              </p>
            </ArticleCard>
          </Chapter>
        )}

        {activeChapter === 5 && (
          <Chapter
            key="chapter5"
            title="Pop Culture & Music"
            subtitle="Brentwood's Creative Legacy"
            theme="theme-popculture"
          >
            <ArticleCard
              title="A Hub for Music and Entertainment"
              image="https://images.unsplash.com/photo-1693066867835-970840dad310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbXVzaWMlMjBtaWNyb3Bob25lJTIwcGlua3xlbnwxfHx8fDE3Njg1Mjk4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              imagePosition="left"
            >
              <p>
                Thanks to its proximity to Nashville, "Music City USA," Brentwood has become home
                to numerous musicians, entertainers, and creative professionals. Many country music
                stars and industry executives have chosen Brentwood as their residence, drawn by
                its affluent neighborhoods and excellent schools.
              </p>
              <p>
                The city's connection to the music industry has shaped its cultural identity,
                with recording studios, entertainment companies, and music-related businesses
                contributing to the local economy. Brentwood has hosted countless celebrities
                and continues to be a preferred location for those in the entertainment industry.
              </p>
            </ArticleCard>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/95 p-6 rounded-xl shadow-lg">
                <Music className="w-12 h-12 text-[#FF1493] mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Music Legends
                </h3>
                <p className="text-gray-700">
                  Home to numerous Grammy winners and country music Hall of Famers
                </p>
              </div>
              <div className="bg-white/95 p-6 rounded-xl shadow-lg">
                <Music className="w-12 h-12 text-[#FF1493] mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Entertainment Hub
                </h3>
                <p className="text-gray-700">
                  Recording studios and entertainment companies call Brentwood home
                </p>
              </div>
              <div className="bg-white/95 p-6 rounded-xl shadow-lg">
                <Music className="w-12 h-12 text-[#FF1493] mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Cultural Impact
                </h3>
                <p className="text-gray-700">
                  A vibrant arts and culture scene influenced by music industry
                </p>
              </div>
            </div>
          </Chapter>
        )}

        {activeChapter === 6 && (
          <Chapter
            key="chapter6"
            title="Education Excellence"
            subtitle="Investing in the Future"
            theme="theme-education"
          >
            <ArticleCard
              title="A Commitment to Learning"
              image="https://images.unsplash.com/photo-1542725752-e9f7259b3881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBlZHVjYXRpb24lMjBib29rc3xlbnwxfHx8fDE3Njg0OTExMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              imagePosition="right"
            >
              <p>
                Brentwood is renowned for its exceptional public school system, consistently
                ranking among the top districts in Tennessee and the nation. The Williamson County
                School District's commitment to academic excellence has made Brentwood a highly
                desirable location for families prioritizing education.
              </p>
              <p>
                The city's schools boast impressive graduation rates, advanced placement programs,
                and comprehensive extracurricular offerings. State-of-the-art facilities, dedicated
                teachers, and strong community support have created an educational environment
                that prepares students for success in college and beyond.
              </p>
            </ArticleCard>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/95 p-8 rounded-xl shadow-lg">
                <BookOpen className="w-16 h-16 text-[#4A90E2] mb-4" />
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Top-Ranked Schools
                </h3>
                <p className="text-gray-700 text-lg">
                  Multiple schools recognized nationally for academic achievement and innovation
                </p>
              </div>
              <div className="bg-white/95 p-8 rounded-xl shadow-lg">
                <BookOpen className="w-16 h-16 text-[#4A90E2] mb-4" />
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  College Preparation
                </h3>
                <p className="text-gray-700 text-lg">
                  High college acceptance rates and scholarship opportunities for graduates
                </p>
              </div>
            </div>
          </Chapter>
        )}

        {activeChapter === 7 && (
          <Chapter
            key="chapter7"
            title="Local Attractions"
            subtitle="Discover Brentwood's Hidden Gems"
            theme="theme-attractions"
          >
            <ArticleCard title="Historic Landmarks and Modern Attractions">
              <p>
                Brentwood offers a unique blend of historic sites and modern amenities. From
                antebellum mansions to cutting-edge recreational facilities, the city provides
                residents and visitors with diverse experiences that celebrate both its past
                and its present.
              </p>
              <p>
                The community takes pride in preserving its historical heritage while embracing
                progress and innovation. This balance is evident in the careful restoration of
                historic properties and the thoughtful development of new attractions.
              </p>
            </ArticleCard>

            <div className="my-12">
              <InteractiveMap />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/95 p-6 rounded-xl shadow-lg">
                <Landmark className="w-12 h-12 text-[#2E7D32] mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ravenswood Mansion
                </h3>
                <p className="text-gray-700">
                  A beautifully preserved antebellum home showcasing 19th-century architecture
                </p>
              </div>
              <div className="bg-white/95 p-6 rounded-xl shadow-lg">
                <Map className="w-12 h-12 text-[#2E7D32] mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Dyer Observatory
                </h3>
                <p className="text-gray-700">
                  Explore the cosmos at this historic astronomical research facility
                </p>
              </div>
              <div className="bg-white/95 p-6 rounded-xl shadow-lg">
                <Map className="w-12 h-12 text-[#2E7D32] mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Parks & Recreation
                </h3>
                <p className="text-gray-700">
                  Beautiful parks, trails, and recreational facilities for all ages
                </p>
              </div>
            </div>
          </Chapter>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
