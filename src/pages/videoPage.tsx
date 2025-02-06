import React from "react";
import Layout from "../components/layout/layout";

const VideoPage: React.FC = () => {
  const videos = import.meta.glob<{ default: string }>("/src/assets/gallery/video/*.{mp4,webm}", {
    eager: true,
  });

  const videoPaths = Object.values(videos).map((vid) => vid.default);

  return (
    <Layout>
      <div className="container">
        <h1 className="text-2xl font-bold text-center mb-8">Video Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mb-2">
          {videoPaths.map((path, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <video
                src={path}
                controls
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default VideoPage;
