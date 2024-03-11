import Header from "@/components/Header/Header"
import Home from "./pages/Home/Home"


const App: React.FC = () => {
  return (
    <div className="dark:text-white  dark:bg-gray-600 h-screen">
      <Header />
      <Home/>
    </div>
  )
}

export default App
