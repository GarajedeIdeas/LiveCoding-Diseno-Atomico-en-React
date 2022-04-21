import Icon from './../../atoms/Icon/Icon'
import './style.css'

const IconSpec = ({ children, icon }) => {
    return (
        <span className='specification'>
            <Icon type={icon} /> {children}
        </span >
    )
}

export default IconSpec