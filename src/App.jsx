import './App.css'

function App() {

  return (
    <>
      < Text/>
      < Text/>
      < Something display="Sayuru"/>
    </> 
    
  )
}

function Text(){
  return (
    <div>
      <p>hello world!</p>
    </div>
  );
}

function Something({display}){
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App
