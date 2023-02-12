// step:1 add event handler in submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const getEmail = emailField.value
    const passwordField = document.getElementById('user-password');
    const getPassword = passwordField.value
    if(getEmail === 'ami@nai.com' && getPassword === '1234')
        window.location.href = 'bank.html';
    else
        alert('Invalid user & password ');
});