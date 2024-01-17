
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Cargar la información de usuarios desde el archivo JSON
    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            // Buscar el usuario en la base de datos
            let user = users.find(user => user.username === username && user.password === password);

            if (user) {

                localStorage.setItem('username', username);

                updateStatusMessage('Inicio de sesión exitoso', 'success');
            } else {

                updateStatusMessage('Usuario o contraseña incorrectos', 'error');
            }
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);

            
            updateStatusMessage('Error al cargar la base de datos de usuarios', 'error');
        });
}

// Función para actualizar el mensaje de estado
function updateStatusMessage(message, type) {
    let statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = message;

    
    if (type === 'success') {
        statusMessage.style.color = '#4caf50'; 
    } else if (type === 'error') {
        statusMessage.style.color = '#f44336'; 
    }

}


