import classnames from 'classnames'
import Icon from '../../atoms/Icon/Icon'
import SearchBar from '../../molecules/SearchBar/SearchBar'
import './style.css'

const HeaderBar = ({ variant = 'light', search }) => {

    const headerClasses = classnames('headerBar', {
        dark: variant === 'dark',
        light: variant === 'light',
        search: search
    })

    return (
        <header className={headerClasses}>
            <Icon type="logo" />
            {search && <SearchBar />}
        </header>
    )
}

export default HeaderBar