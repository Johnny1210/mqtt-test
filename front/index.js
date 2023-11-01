const socket = io("http://localhost:8080");

socket.on('connect', () => {
    console.log('Connected to server');

    socket.on('randomNumber', (msg) => {
        console.log('Received message:', msg);
    });
});


socket.emit('font-end-channel',{'title':'Helllo world'})



window.addEventListener('beforeunload', () => {
    socket.disconnect();
    console.log('Socket connection closed.');
});