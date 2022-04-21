import './style.css'

const Input = ({ type, placeholder = "" }) => {
  return <input type={type} placeholder={placeholder} />
}

export default Input