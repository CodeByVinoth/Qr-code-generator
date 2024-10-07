import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export const Qrcode = () => {
  const [link, setLink] = useState('');
  const [size, setSize] = useState(200);
  const [qrCode, setQrCode] = useState('');

  function gqrcode() {
    setQrCode(link);
  }

  function downloadQrCode() {
    const canvas = document.getElementById("qrCodeCanvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return (
    <div className="head">
      <h4>QR CODE GENERATOR</h4>
      <div className="qr-container">
        {qrCode ? (
          <QRCodeCanvas
            id="qrCodeCanvas"
            value={qrCode}
            size={parseInt(size) || 200}
            className="qr"
          />
        ) : (
          <img src="qrcode.png" alt="QR Code" className="qr" width={200} height={200} />
        )}
      </div>
      <div className="input-section">
        <label htmlFor="datainput" className="datatext">
          Link For QR Code
        </label>
        <input
          type="text"
          id="box"
          placeholder="Enter Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <label htmlFor="size" className="datatext">Enter Image Size</label>
        <input
          type="text"
          id="box"
          placeholder="Enter Size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <br />
        <button className="gbutton" onClick={gqrcode}>
          Generate QR
        </button>
        <button className="dbutton" onClick={downloadQrCode}>
          Download QR
        </button>
      </div>
      <p className="footer">
        Designed By <a href="https://github.com/CodeByVinoth">VK</a>
      </p>
    </div>
  );
};
