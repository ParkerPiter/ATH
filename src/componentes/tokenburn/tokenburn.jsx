import '../../../windows-95-ui-kit/css/w95.css'
import './token.css'
import Draggable from 'react-draggable'

const Tokenburn =({closeHandler})=>{

    //Editable en caso de cambiar de addres:
    const token_address = '7234HS7DHJWSEDH37DJ2';

    return(
        <Draggable defaultPosition={{x: 170, y: -250}}>
            <div className='card card-tertiary container-token'>
                <div className='card-header' style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginRight:'2px', padding:'0px 4px'}}>
                    <h2 style={{fontSize:'12px'}}>BURN TOKENS</h2>
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
                <div className="card-body bg-custom token-body">
                    <h2 className='text-token' >Send your tokens:</h2>
                    <h3 className='text-token' >{token_address}</h3>
                </div>
            </div>
        </Draggable>
    )
}
export default Tokenburn;
