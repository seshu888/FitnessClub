import './join.css'
const Join=()=>{
    return(
        <div className='join'>  
        <hr/>
            <div className='j-left'>
                <div>
                    <span className="stroke-text">READY TO </span>
                    <span> Level up</span>
                </div>
                <div>
                    <span>Your body </span>
                    <span className="stroke-text"> With us ?</span>
                </div>
            </div>
            <div className='j-right'>
                <div className='input-div'>
                    <input placeholder='enter your mail' />
                    <button className='btn-j'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}
export default Join