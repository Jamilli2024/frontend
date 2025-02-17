function Texto1() {
  return <p>Um outro parágrafo de texto!</p>
}
function Texto2(){
  return <p>Isso é um teste de parágrafo!</p>
}


export default function Home( ) {
  const aula =3;
  return (
    <div>


      <h1> Olá turma !!!</h1>
      <p>Essa é a nossa {aula}ª aula de React!</p>
      <Texto1 />
      <Texto1 />
      <Texto2 />
    </div>
  );
}

