// --- Setup PeerJS (Photon-style P2P) ---
let peer = new Peer(); // random ID
let connections = [];

peer.on('open', id => {
  console.log('Connected with ID:', id);
});

// Connect to other peers manually if you want static IDs or share the link
peer.on('connection', conn => {
  connections.push(conn);
  conn.on('data', handleData);
});

// Handle incoming updates
function handleData(data) {
  if (data.type === 'toggle') {
    const audio = document.getElementById('audio'+data.station);
    if (audio.paused) audio.play();
    else audio.pause();
  }
}

// --- Station toggling ---
function toggleStation(id) {
  const audio = document.getElementById('audio'+id);
  if (audio.paused) audio.play();
  else audio.pause();

  // Broadcast to other peers
  connections.forEach(conn => conn.send({type:'toggle', station:id}));
}
