const express = require('express');
const ping = require('ping');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

let devices = [
  { id: "1", name: "Router1", ip: "192.168.1.1", status: "unknown" },
  { id: "2", name: "Switch1", ip: "192.168.1.2", status: "unknown" },
  { id: "3", name: "PC1", ip: "192.168.1.3", status: "unknown" }
];

// Function to ping devices and update their status
function updateDeviceStatus() {
  devices.forEach(device => {
    ping.sys.probe(device.ip, isAlive => {
      device.status = isAlive ? "online" : "offline";
    });
  });
}

setInterval(updateDeviceStatus, 5000); // Every 5 seconds

app.get('/api/devices', (req, res) => {
  res.json(devices);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});