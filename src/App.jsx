import { QRCodeSVG } from "qrcode.react";
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

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      let value = event.target.value.trim();
      if (value !== "") {
        let qrCode = (
          <QRCodeSVG
            value={value}
            level="H"
            size={350}
          />
        );
        setQRCode(qrCode);
      }
    }
  };
  return (
    <div>
      <h1 className="absolute left-0 right-0 top-14 mx-auto flex justify-center text-5xl font-bold text-white drop-shadow-lg">
        Create QR Code
      </h1>
      <img
        className="h-96 w-full object-cover"
        src={background}
        alt=""
      />
      <div className="absolute top-36 left-0 right-0 mx-auto flex justify-center">
        <div className="rounded-xl border bg-white px-5 pb-5 pt-5">
          {QRCode ? QRCode : dummyImage}
        </div>
      </div>

      <div className="text-center">
        <input
          className="mt-44 w-96 rounded border py-4 px-4 focus:outline-none"
          onKeyDown={handleKeyPress}
          placeholder="Enter some value here..."
          type="text"
        />
      </div>
    </div>
  );
}

export default App;
