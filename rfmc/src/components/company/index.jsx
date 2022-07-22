import styles from './Company.module.scss';
import OurCompany from 'assets/headerBg.jpg';

export default function Company() {
  return (
    <section className={styles.company}>
      <div className={styles.company__container}>
        <img src={OurCompany} className={styles.company__container___img}/>
        <div className={styles.company__container___descriptionBox}>
          {/* container */}
          <span>Quem é a RFCM?</span>
          <h2 className={styles.company__container___descriptionBox____title}>Companhia</h2>
          <p className={styles.company__container___descriptionBox____content}>
            Somos uma corretora comercial, com sede em São Paulo, Brasil,
            trabalhando diligentemente no fornecimento de commodities
            específicas ou na busca de um mercado para seus produtos, onde
            estendemos nossa experiência de 30 anos para fornecer as soluções
            necessárias por meio de nossa rede global.
          </p>
          <p className={styles.company__container___descriptionBox____content}>
            Nossa principal prioridade é estabelecer e manter um
            relacionamento comercial positivo e de longo prazo com nossos
            clientes e fornecedores.
          </p>
          <p className={styles.company__container___descriptionBox____content}>
            A RFMC firmou parceria de sucesso com fabricantes renomados e
            conceituados em todo o mundo, garantindo aos nossos clientes nossa
            capacidade de fornecer produtos de alta qualidade a preços
            competitivos, respaldados pelo suporte técnico e metalúrgico
            necessário.
          </p>
          <p className={styles.company__container___descriptionBox____content}>
            Ao mesmo tempo, estamos comprometidos com nossos fornecedores em
            fornecer a eles um suporte consistente de mercado.
          </p>
        </div>
      </div>
    </section>
  );
}