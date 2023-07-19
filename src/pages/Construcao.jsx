import { Container } from "reactstrap"
import background from "../assets/backgroundConstrucao.png"


export function Construcao() {
  return (
      <Container className="m-0 p-0">
        <div className="background-construcao">
        <img src={background} className="imagem" alt="Imagem de Fundo da Página de Construção" />
        <h1 className="screen-xs">TESTE DE TEXTO</h1>
        </div>
      </Container>
  )
}

