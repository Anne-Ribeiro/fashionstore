import '../css/Home.css'
import sobreimg from '../img/sobre-img.jpg'
 
function ComponenteHome() {
    return (
        <>
        <div className='div-home'>
            <img src={sobreimg} alt=""  height={500} width={350}/>

            <div className='div-texto'>

        <h1>Sobre Nós</h1>

        <p>
        Na Fashion Store, nossa paixão pela moda é evidente em tudo o que fazemos. Desde o momento em que abrimos nossas portas virtuais, nossa missão tem sido proporcionar a todos os amantes da moda uma experiência de compras excepcional e acesso a roupas incríveis que refletem seu estilo único.
        </p>

        <p>
        A moda é mais do que apenas roupas; é uma forma de expressão, uma maneira de contar sua história e mostrar ao mundo quem você é. Na Fashion Store, acreditamos que todos devem ter a oportunidade de se destacar e se sentir confiantes em suas escolhas de estilo. É por isso que trabalhamos incansavelmente para trazer até você as últimas tendências, peças atemporais e uma ampla gama de estilos que se adaptam a qualquer personalidade.
        </p>

        <p>
        Valorizamos a qualidade acima de tudo. Cada peça em nossa loja é cuidadosamente selecionada e submetida a rigorosos padrões de qualidade para garantir que você esteja investindo em roupas que durarão. Além disso, estamos comprometidos com a sustentabilidade e fazemos parcerias com marcas e designers que compartilham nossos valores de responsabilidade ambiental.
        </p>

        <p>
        A equipe da Fashion Store é composta por especialistas em moda que estão sempre à disposição para ajudar você a encontrar as peças perfeitas para qualquer ocasião. Estamos aqui para fornecer orientações, dicas de estilo e um atendimento excepcional para tornar sua experiência de compra ainda mais especial.
        </p>

        </div>
        </div>
        </>
  )
}

export default ComponenteHome;