import React from 'react';
import LogInForm from './LogInForm'

function LogIn(props) {
    return (
        <div className="login">
            {props.isAutorized ? <div className='user-name'>Привет, {props.name}!</div> : <LogInForm isAutorized={props.isAutorized} />}
        </div>
    );
}
export default LogIn;


//переписано через КЛАССОВЫЙ компонент:

// class LogIn extends React.Component {
//     render() {
//         const { name, isAutorized } = this.props;

//         return (
//             <div className="login">
//                 {isAutorized ? <div className='user-name'>Привет, {name}!</div> : <LogInForm />}
//             </div>
//         );
//     }
// }

// export default LogIn;