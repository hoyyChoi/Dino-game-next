import { useRouter } from "next/router"

export default function Home() {

  const router = useRouter()
  const startgame = ()=>{
    router.push('/game')
  }

  

  return (
    <div>
      <div className="container">
        <h1>GDSC 공룡게임 하러 가기</h1>
        <button onClick={()=>startgame()}>시작</button>
      </div>

      <style jsx>{`
          .container{
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
            positon:relative; 
          }
          button{
            font-size:30px;
            color: white;
            border:3px solid black;
            background-color:black;
            border-radius:10px ;
            padding:10px;
            width: 100px;
            position: absolute;
            top: 60%; 
          }
          button:hover{
            cursor:pointer;
            color: black;
            background-color:white;
          }
      `}</style>
    </div>
  )
}
