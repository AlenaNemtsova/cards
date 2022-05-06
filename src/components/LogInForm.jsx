
function LogInForm (props) {
    return (
        <form>
            <input placeholder="Введите логин"/>
            <input placeholder="Введите пароль"/>
            <button autorized={props.isAutorized}>Зарегистрироваться</button>
        </form>
        );
}

export default LogInForm;