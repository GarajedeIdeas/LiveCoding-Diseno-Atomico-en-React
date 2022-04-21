import Button from './components/atoms/Button/Button'
import Icon from './components/atoms/Icon/Icon'
import Input from './components/atoms/Input/Input'
import Title from './components/atoms/Title/Title'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Button variant={'light'} text="Soy oscuro" icon="search" />
      <Title level="h1" text={'hola garaje'} />
      <Input type={'text'} placeholder={'escribe aqui yauy'} />
      <Input type={'password'} placeholder={'escribe aqui yauy'} />
      <Icon type="heart" />
    </>
  )
}

export default App