# 📡 Network Monitoring Dashboard (Real-time)

A simple full-stack project using **Node.js** and **vanilla HTML/CSS/JS** to simulate a basic **network monitoring dashboard**. It shows the online/offline status of devices in real-time using IP ping checks.

## 🔧 Features

- Real-time device status checking via ICMP ping
- Auto-refreshing frontend every 5 seconds
- Status color coding: 🟢 Online / 🔴 Offline / ⚪ Unknown
- Built using:
  - Node.js + Express
  - `ping` npm module
  - Static HTML/CSS/JavaScript (no frameworks)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/network-monitoring-dashboard.git
cd network-monitoring-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
node server.js
```

### 4. View the Dashboard

Open your browser and navigate to: [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── public/
│   └── index.html       # Frontend UI
├── server.js            # Backend server with ping logic
└── README.md            # Project description
```

## 🧠 Future Improvements

- Add login/authentication system
- Store device info in MongoDB or JSON file
- Add charts and logs of uptime/downtime history
- Improve frontend with a modern UI framework

## 📜 License

This project is open-source and free to use for learning purposes.