import "./gallery.css";

const productData = [
  {
    src: "images/gallery/designerMirror.png",
    title: "Designer Mirror",
  },
  {
    src: "images/gallery/glassRailing.png",
    title: "Glass Railing",
  },
  {
    src: "images/gallery/ledMirror.png",
    title: "LED Mirror",
  },
  {
    src: "images/gallery/toughenGlassCanopy.png",
    title: "Toughen Glass Canopy",
  },
  {
    src: "images/gallery/toughenPartition.png",
    title: "Toughen Partition",
  },
  {
    src: "images/gallery/upvcWindow.png",
    title: "UPVC Window",
  },
  {
    src: "images/gallery/aluminumGlassBlazing.png",
    title: "Aluminum Glass Blazing",
  },
  {
    src: "images/gallery/aluminumModularKitchen.png",
    title: "Modular Kitchen",
  },
  {
    src: "images/gallery/aluminumPartition.png",
    title: "Aluminum Partition",
  },
  {
    src: "images/gallery/profileGlassPartition.png",
    title: "Profile Glass Partition",
  },
  {
    src: "images/gallery/steelRailing.png",
    title: "Steel Railing",
  },
  {
    src: "images/gallery/toughenGlassSpiderFitting.png",
    title: "Toughen Glass Spider Fitting",
  },

  {
    src: "images/gallery/aluminumModularKitchen.png",
    title: "Modular Kitchen",
  },
];

const Gallery = () => {
  return (
    <div className="home-content">
      <div className="gallery-section">
        <div className="container">
          <div className="home-product-grid">
            {productData.map((product, idx) => (
              <div key={idx} className={`home-product-box`}>
                <div className="home-product-box-cover">
                  <img src={product.src} alt={product.title} />
                </div>
                <h4 className="truncate">{product.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
