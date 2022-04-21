import HeaderBar from './../organisms/HeaderBar/HeaderBar'
import FooterBar from './../organisms/FooterBar/FooterBar'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <HeaderBar search />
      {children}
      <FooterBar fixed />
    </>
  )
}

export default DefaultLayout