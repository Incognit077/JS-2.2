var time = +prompt('Введите время в цифрах')

switch (time){
    case (time >= 0 && time <=6):
        alert(time + 'часа ночи')
        break;

    case (time >= 7 && time <= 10):
        alert(time + 'часа утра')
        break;

    case (time >= 11 && time <= 17):
        alert(time + 'часа дня')
        break;

    case (time >= 18 && time <= 23):
        alert(time + 'часа вечера')
        break;
    default:
    alert('Введено некорректное время ')
}