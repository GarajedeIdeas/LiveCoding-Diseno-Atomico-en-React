import DefaultLayout from "../../components/templates/DefaultLayout"
import CardsSection from "../../components/organisms/CardsSection/CardsSection"
import { useEffect, useState } from "react"

import './style.css'

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://multiapi-app.herokuapp.com/products/selection/furniture')
      .then(res => res.json())
      .then(respo => setProducts(respo))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <DefaultLayout>
        <CardsSection items={products} title="Últimos productos" subtitle="Novedades primavera 2022" />
        <CardsSection items={[...products].reverse()} highlighted title="Destacados" subtitle="Best sellers y ofertas" />
        <CardsSection items={products} title="Ofertas" subtitle="Productos rebajados por temporadas" />
      </DefaultLayout>
    </>
  )
}

export default Home