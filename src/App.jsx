import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import background from "./assets/background.jpg";
import chill from "./assets/chill.jpg";
function App() {
  const [QRCode, setQRCode] = useState(null);
  let dummyImage = (
    <img
      className="rounded-xl object-cover"
      src={chill}
      width={350}
      height={350}
    />
  );

  const downloadCanvas = () => {
    if (QRCode) {
      let canvas = document.getElementsByTagName("canvas")[0];
      let image = canvas.toDataURL("image/png");
      window.location.href = image;
    }
  };

  const handleKeyPress = (event) => {
    let value = event.target.value;
    if (value !== "") {
      let qrCode = (
        <QRCodeCanvas
          value={value}
          level="H"
          size={350}
        />
      );
      setQRCode(qrCode);
    } else {
      setQRCode(null);
    }
  };
  return (
    <div>
      <img
        className="h-96 w-full object-cover duration-200"
        src={background}
        alt=""
      />
      <div className="absolute top-36 left-0 right-0 mx-auto flex justify-center duration-200">
        <div className="rounded-xl border bg-white px-5 pb-5 pt-5 duration-200">
          {QRCode ? QRCode : dummyImage}
        </div>
      </div>

      {QRCode ? (
        <div className="mt-44 text-center duration-200">
          <input
            className="w-80 rounded-xl border px-4 py-1 text-lg duration-200 focus:outline-none"
            onChange={handleKeyPress}
            placeholder="Enter some value here..."
            type="text"
          />
          <button
            onClick={downloadCanvas}
            className="ml-1 rounded-xl bg-green-500 py-1 px-6 duration-200 active:bg-green-600"
          >
            <i className="fa fa-download text-xl text-white duration-200"></i>
          </button>
        </div>
      ) : (
        <div className="mt-44 text-center duration-200">
          <input
            className="w-96 rounded-xl border px-4 text-lg duration-200 hover:py-1 focus:py-1 focus:outline-none"
            onChange={handleKeyPress}
            placeholder="Enter some value here..."
            type="text"
          />
        </div>
      )}
    </div>
  );
}

export default App;
