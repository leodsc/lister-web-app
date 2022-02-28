import { ReactComponent as SignupSVG } from '../assets/signup-image.svg';

function Signup() {
  return (
    <main className='signup-page flex'>
      <h1 className='signup-page--title'>Nova Conta</h1>
      <SignupSVG />
      <form className='signup-page--form form__style-1'>
        <label for="name">
          <input className="input__style-1" name="name" placeholder="Nome" />
        </label>
        <label for="email">
          <input className="input__style-1" name="email" placeholder="Email" />
        </label>
        <label for="password">
          <input className="input__style-1" name="password" placeholder="Senha" />
        </label>
        <label for="repeat-password">
          <input className="input__style-1" name="repeat-password" placeholder="Repetir senha" />
        </label>
        <button className="button-info button-info__style-1" type="submit">Cadastrar</button>
      </form>
    </main>
  )
}

export default Signup;