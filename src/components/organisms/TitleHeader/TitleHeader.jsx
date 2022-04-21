import './style.css'
import Title from '../../atoms/Title/Title'

const TitleHeader = ({ title, subtitle }) => {
    return (
        <header>
            <Title level="h2" text={title}>{title}</Title>
            {subtitle && <p>{subtitle}</p>}
        </header>
    )
}

export default TitleHeader