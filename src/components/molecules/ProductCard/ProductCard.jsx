import classnames from "classnames"
import Title from "../../atoms/Title/Title"
import Text from "../../atoms/Text/Text"
import IconSpec from '../IconSpec/IconSpec'
import Image from "../../atoms/Image/Image"
import './style.css'

const ProductCard = ({ alt, image, name, description, stock, price }) => {

    const cardClassNames = classnames('card', {
        hasImage: image
    })

    return (
        <article className={cardClassNames}>
            {image && <Image source={image} altText={alt} />}
            <div className="details">
                <Title level="h3" text={name} />
                <Text text={description} />
                <footer>
                    <IconSpec icon="flag">{stock} uds.</IconSpec>
                    <IconSpec icon="info">{price} €</IconSpec>
                </footer>
            </div>
        </article>
    )
}

export default ProductCard