// Функция для регистрации нового пользователя
function register() {
    const fio = document.getElementById('fio').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const password = document.getElementById('pass').value;
    const login = document.getElementById('login').value;
    const errorField = document.getElementById('registerError');

    // Проверка на наличие пользователя с таким логином
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.login === login);

    if (userExists) {
        errorField.textContent = "Пользователь с таким логином уже существует!";
        return;
    }

    // Создаем объект нового пользователя
    const newUser = {
        fio,
        phone,
        email,
        dob,
        password,
        login
    };

    // Добавляем нового пользователя в localStorage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Очистка полей формы
    document.getElementById('fio').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('pass').value = '';
    document.getElementById('login').value = '';

    errorField.textContent = "Регистрация прошла успешно!";
    
    setTimeout(() => {
        errorField.textContent = '';
        window.location.href = 'login.html'; // Перенаправляем на страницу входа
    }, 1500);
};

// Функция для входа
function loginn() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('pass').value;
    const errorField = document.getElementById('loginError');

    // Получение пользователей из LocalStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Поиск пользователя с введенными данными
    const user = users.find(user => user.login === login && user.password === password);

    if (user) {
        // Устанавливаем флаг успешного входа
        localStorage.setItem('loggedIn', 'true');
        
        // Если пользователь найден, перенаправление на защищенную страницу
        errorField.textContent = "Успешный вход!";
        setTimeout(() => {
            window.location.href = 'index.html'; // Перенаправляем на защищенную страницу (замени на нужную)
        }, 1500);
    } else {
        // Если пользователь не найден, выводим ошибку
        errorField.textContent = "Неверный логин или пароль!";
    }
}

