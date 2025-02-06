import React from "react";
import Layout from "../components/layout/layout";

const GalleryPage2: React.FC = () => {
  const images = import.meta.glob<{ default: string }>(
    "/src/assets/gallery/image/*",
    {
      eager: true,
    }
  );

  const imagePaths = Object.values(images).map((img: any) => img.default);

  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mb-2 mt-16">
          {imagePaths.map((path, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={path}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage2;
