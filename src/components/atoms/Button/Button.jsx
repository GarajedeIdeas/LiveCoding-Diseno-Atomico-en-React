import classnames from "classnames"
import Icon from '../Icon/Icon'
import './style.css'

const Button = ({ variant, text, icon }) => {

  const buttonClasses = classnames('button', {
    dark: variant === 'dark',
    light: variant === 'light',
    warning: variant === 'warn',
    hasIcon: icon
  })

  return (
    <button className={buttonClasses}>
      {icon && <Icon type={icon} />}
      {text}
    </button>
  )
}

export default Button