import styles from './AppViewer.module.css'
//Camada de Compilação de Serviços

const AppViewer = () => {
  //Retorno no display
  const professores=[
    {id: 1, nome: "Lucas Banchini", idade: 31, formação: "Engenheiro Mecânico", titulação: "Pleno"} ,
    {id: 2, nome: "Maria Santos", idade: 28, formação: "Engenheira Civil", titulação: "Júnior"},
    {id: 3, nome: "João Pereira", idade: 35, formação: "Médico", titulação: "Residente"},
    {id: 4, nome: "Ana Oliveira", idade: 27, formação: "Advogada", titulação: "Pleno"},
    {id: 5, nome: "Pedro Souza", idade: 24, formação: "Arquiteto", titulação: "Júnior"},
    {id: 6, nome: "Carla Rodrigues", idade: 32, formação: "Psicóloga", titulação: "Sênior"},
    {id: 7, nome: "Mariana Almeida", idade: 29, formação: "Engenheira Elétrica", titulação: "Pleno"},
    {id: 8, nome: "Rafael Lima", idade: 26, formação: "Designer Gráfico", titulação: "Júnior"},
    {id: 9, nome: "Paula Costa", idade: 33, formação: "Economista", titulação: "Sênior"} 
  ]

  return (
    <>
      <h2>Lista de Professores</h2>
      <table>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Idade</th>
          <th>Formação</th>
          <th>Titulação</th>
        </tr>
      </table>
    {
      professores.map((professor)=>{
        return(
            <tr className={professor.id % 2 == 0 ? styles.linhaCinza : null} key={professor.id}>
              <td>{professor.id}</td>
              <td>{professor.nome}</td>
              <td>{professor.idade}</td>
              <td>{professor.formação}</td>
              <td className={professor.titulação == "Senior" || professor.titulação == "Pleno" ? styles.superTitulo : styles.normalTitulo}>{professor.titulação}</td>
            </tr>
          // <div key={professor.id}>
          //   <ul>
          //     <li><strong>Nome: </strong>{professor.nome} </li>
          //     <li><strong>Idade: </strong>{professor.idade} </li>
          //     <li><strong>Formação: </strong>{professor.formação} </li>
          //     <li><strong>Tituação: </strong>{professor.titulação} </li>
          //   </ul>
          // </div>
        )
      })
    }
    </>
  )
}

export default AppViewer