// svgs
import { ReactComponent as LoginSVG } from '../assets/login-image.svg';

import "../styles/form.css";
import "../styles/flex.css"

function Login() {
  return (
    <main className='login-page flex'>
      <h1 className='login-page--title'>Entrar</h1>
      <LoginSVG />
      <form className='login-page--form form__style-1'>
        <label className='label__style-1' for="email">
          <input className='input__style-1' name="email" type="email"
            placeholder="Email" />
        </label>
        <label className='label__style-1' for="password">
          <input className='input__style-1' name="password" type="password"
            placeholder="Senha" />
        </label>
        <button className='button-info button-info__style-1' type="submit">Entrar</button>
        <button className='button-info button-info__style-2' type="submit">Cadastrar</button>
      </form>
    </main>
  )
}

export default Login;