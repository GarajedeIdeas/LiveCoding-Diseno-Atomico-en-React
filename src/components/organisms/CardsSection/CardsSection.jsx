import classnames from "classnames"
import ProductCard from "./../../molecules/ProductCard/ProductCard"
import TitleHeader from "../TitleHeader/TitleHeader"
import './style.css'

const CardsSection = ({
    title,
    subtitle,
    items = [],
    highlighted = false
}) => {

    const cardsSliderClassnames = classnames('cards-slider', {
        special: highlighted
    })

    return (
        <section className={cardsSliderClassnames}>
            <TitleHeader title={title} subtitle={subtitle} />
            <div className="slider">
                {items.map((item, idx) => <ProductCard key={idx} {...item} />)}
            </div>
        </section>
    )
}

export default CardsSection