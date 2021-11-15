import './styles/index.css'

import logo from './assets/img/header/logo.png'
import mouse from './assets/img/main-section1/mouse.png'
import FadeSlider from '../src/component/Slider'
import Page from './page'

const App = () => {
  return (
    <div className="App">
      <div className="absolute z-10 flex justify-center w-screen ">
        <div className="flex w-[80vw] items-center justify-between  mt-[2.8vw]">
          <img className="w-[10vw]" src={logo} alt="" />
        </div>
      </div>
      <div className="w-screen  h-[49.4vw]">
        <FadeSlider />
        <div className=" absolute animate-bounce-2s z-10 top-[45vw] left-[49vw]">
          <img className="w-[1.4vw]" src={mouse} alt="" />
        </div>
      </div>
      <Page />
    </div>
  )
}

export default App
