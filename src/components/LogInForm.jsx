
function LogInForm (props) {
    return (
        <form>
            <input name={props.isAutorized} placeholder="Введите логин"/>
            <input placeholder="Введите пароль"/>
            <button>Зарегистрироваться</button>
        </form>
        );
}

export default LogInForm;