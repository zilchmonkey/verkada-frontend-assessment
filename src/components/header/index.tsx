import s from "./scss/index.module.scss"
import header from "./img/header.png"

const Header = () => {
  return (
    <div
      className={`${s.header} p-8 content-center flex items-center justify-center pt-16`}
    >
      <img className={`max-w-4xl w-full`} src={header} alt="header image" />
    </div>
  )
}

export default Header
