const os = require('os');
const fs = require('fs');

function getLocalIp() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return '127.0.0.1';
}

const ip = getLocalIp();
const expoUrl = `exp://${ip}:8081`;

const html = `
<!DOCTYPE html>
<html>
<head>
  <title>LYNC Expo QR Code</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
  <style>
    body { font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: #f8f9fa; margin: 0; }
    #qrcode { padding: 20px; background: white; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); margin-top: 20px; }
    h1 { color: #121212; }
    p { color: #666; margin-bottom: 20px; text-align: center; max-width: 400px; }
    code { background: #eee; padding: 4px 8px; border-radius: 4px; font-size: 1.1em; color: #ff6b00; }
  </style>
</head>
<body>
  <h1>📱 LYNC App</h1>
  <p>Scan this QR code with the <strong>Expo Go</strong> app on your phone, or open the camera app on iOS.</p>
  <p>Local URL: <code>${expoUrl}</code></p>
  <div id="qrcode"></div>
  <p style="margin-top: 20px; font-size: 0.9em;">(Ensure your phone and PC are on the same Wi-Fi network)</p>
  <script>
    new QRCode(document.getElementById("qrcode"), {
      text: "${expoUrl}",
      width: 256,
      height: 256,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
  </script>
</body>
</html>
`;

fs.writeFileSync('qrcode.html', html);
console.log('QR Code HTML generated as qrcode.html');
