import { ReactComponent as Search } from './search.svg'
import { ReactComponent as Heart } from './heart.svg'
import { ReactComponent as ArrowRight } from './arrowRight.svg'
import { ReactComponent as Info } from './info.svg'
import { ReactComponent as Flag } from './flag.svg'
import { ReactComponent as Logo } from './logo.svg'

const Icon = ({ type }) => {
    return (
        <>
            {type === 'search' && <Search />}
            {type === 'heart' && <Heart />}
            {type === 'arrowRight' && <ArrowRight />}
            {type === 'info' && <Info />}
            {type === 'flag' && <Flag />}
            {type === 'logo' && <Logo />}
        </>
    )
}

export default Icon