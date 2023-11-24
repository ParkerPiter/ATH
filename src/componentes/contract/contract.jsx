import simbolo from '../../assets/MSDOS.jpeg'
import style from './contract.module.css'

const Contract = () =>{
    return(
        <div className={style.container}>
            <img src={simbolo} alt="" />
            <p className={style.messageM}>Microsoft(R) Windows 95 <br /> (C)Copyright Microsoft Corp 1981-1996 <br /> C:\WIN95 f:</p>
            <p className={style.messageM}> Terminos y condiciones del contrato: Curabitur interdum eu mi a sollicitudin. Nulla tristique hendrerit pretium. Integer tempus sagittis enim at finibus. Vestibulum sed ultricies turpis, a iaculis ante. Praesent aliquet aliquam ante eu mattis. Donec molestie, odio vel lobortis auctor, nunc diam ultricies augue, molestie porta sem arcu ac dui. Pellentesque in ultrices enim, ut vehicula ante. Nullam in condimentum nisi estoy al limite del contrato</p>
        </div>
    )
}

export default Contract;