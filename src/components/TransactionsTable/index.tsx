import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento WEB</td>
            <td className="deposit">R$10.000</td>
            <td>Desenvolvimento</td>
            <td>02/03/2023</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdrawn">- R$1.000</td>
            <td>Desenvolvimento</td>
            <td>02/02/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}