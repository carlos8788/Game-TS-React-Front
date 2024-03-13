import generateCode from "@/helpers/generateCode";
import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT: string = "http://localhost:3000";

interface Data {

  bienvenida: string;
  message: string;
}

const Moderator = () => {
  const [title, setTitle] = useState<string>('')
  console.log(generateCode())
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('bienvenida', (msg: string) => {
      setTitle(msg);
    })
    socket.emit('chat message', '(data: Data)');

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className="text-gray-900">
      <h1>{title}</h1>
    </div>
  )
}

export default Moderator