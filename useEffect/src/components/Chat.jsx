export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  // console.log('render connec')
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}
