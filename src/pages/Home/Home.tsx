import { useNavigate } from "react-router-dom";


const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleClickPlayer = () => navigate('/player');
  const handleClickModerator = () => navigate('/moderator');

  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <button className="px-2 py-3 my-2 bg-blue-800 w-40 rounded-md hover:bg-blue-600 transition-all text-xl" onClick={handleClickPlayer}>Jugador</button>
      <button className="px-2 py-3 my-2 bg-black w-40 rounded-md hover:bg-slate-800 transition-all text-xl" onClick={handleClickModerator}>Moderador</button>
    </div>
  )
  }

  export default Home