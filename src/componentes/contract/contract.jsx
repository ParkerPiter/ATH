import simbolo from '../../assets/MSDOS.jpeg'
import '../../../windows-95-ui-kit/css/w95.css'
import './contract.css'

//iconos:
import Aa from '../../assets/artage-io-48128_1701290399.png'
import Tt from '../../assets/artage-io-48126_1701290405.png'
import carpeta from '../../assets/artage-io-48145_1701290413.png'
import save from '../../assets/artage-io-48132_1701290409.png'

import Draggable from 'react-draggable';

const Contract = ({closeHandler}) =>{

    //Terminos editables del contrato:
    const terminos_Contract= 'Terminos y condiciones del contrato: Curabitur interdum eu mi a sollicitudin. Nulla tristique hendrerit pretium. Integer tempus sagittis enim at finibus. Vestibulum sed ultricies turpis, a iaculis ante. Praesent aliquet aliquam ante eu mattis. Donec molestie, odio vel lobortis auctor, nunc diam ultricies augue, molestie porta sem arcu ac dui. Pellentesque in ultrices enim, ut vehicula ante. Nullam in condimentum nisi estoy al limite del contrato'

    return(
        <Draggable>
        <div className='card card-tertiary container'>
            <div className='card-header' style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginRight:'2px', padding:'0px 4px'}}>
                <h2 style={{fontSize:'12px'}}>CONTRACT</h2>
                <div>
                    <button className="btn btn-primary" style={{marginRight:'-2px', padding:'5px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                    </svg>
                    </button>
                    <button className="btn btn-primary" style={{marginRight:'-2px', padding:'5px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-window-fullscreen" viewBox="0 0 16 16">
                        <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                        <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM1 5V2h14v3zm0 1h14v8H1z"/>
                    </svg>
                    </button>
                    <button onClick={closeHandler} className="btn btn-primary" style={{marginRight:'-2px', padding:'5px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                    </button>
                </div>
            </div>
            <div className='navbar navbar-expand-lg navbar-dark justify-content-between mb-3 aling-item'>
                <select className='select' name="option" id="op">Auto
                    <option value=""><p>Auto</p></option>
                </select>
                <img className='icon-contract' src={save} alt="" />
                <img className='icon-contract' src={Aa} alt="" />
                <img className='icon-contract' src={Tt} alt="" />
                <img className='icon-contract' src={carpeta} alt="" />
            </div>
            <div className='card-body bg-custom mediaCardBody'>
                <p className='text'>Microsoft(R) Windows 95 <br /> (C)Copyright Microsoft Corp 1981-1996 <br /> C:\WIN95 f:</p>
                <p className='text'>{terminos_Contract}</p>
            </div>
        </div>
        </Draggable>
    )
}

export default Contract;
