import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

const ImagePreview = ({ imageData, handleClose }) => {
  return (
    <Modal show={!!imageData.src} onHide={handleClose} centered size="xl">
      <Modal.Header closeButton>
        <Modal.Title>{imageData.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={imageData.src}
          alt={imageData.title}
          width={1000}
          height={1000}
          className="w-full h-[80vh] object-cover"
        />
      </Modal.Body>
    </Modal>
  );
};

ImagePreview.propTypes = {
  imageData: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ImagePreview;
