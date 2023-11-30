import '../../../windows-95-ui-kit/css/w95.css'
import './meme.css'
import Draggable from 'react-draggable'

//Memes importados:
import meme1 from '../../assets/meme1.jpg'
import meme2 from '../../assets/meme2.jpg'
import meme3 from '../../assets/meme3.jpg'
const Memes = ({handleCloseMemeModal}) =>{

    const memes = [
        meme1,
        meme2,
        meme3,
      ]

    return(
        <Draggable>
            <div className='card card-tertiary container-memes' >
            <div className='card-header scroll' style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginRight:'2px', padding:'0px 4px'}}>
                    <h2>MEMES</h2>
                    <div>
                        <button className="btn btn-primary" style={{marginRight:'-2px', padding:'5px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                        </svg>
                        </button>
                        <button className="btn btn-primary" style={{marginRight:'-2px', padding:'5px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window-fullscreen" viewBox="0 0 16 16">
                            <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                            <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM1 5V2h14v3zm0 1h14v8H1z"/>
                        </svg>
                        </button>
                        <button onClick={handleCloseMemeModal} className="btn btn-primary" style={{marginRight:'-2px', padding:'5px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                        </button>
                    </div>
                </div>
                <div className="card-body bg-custom ">
                {memes.map((meme, index) => (
                    <img className='img-memes' key={index} src={meme} alt={`Meme ${index + 1}`} />
                ))}
                </div>
            </div>
        </Draggable>
    )
}
export default Memes;
