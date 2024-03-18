import { Link } from 'react-router-dom';

export default function AdoptNew() {

return (
    <div className='adoptContainer'>
        <div className='adoptContent'>
            <p className='white-text' style={{textAlign: 'center'}}>
                Oh no! Your pet flew away. Adopt a new one?
            </p>
            <Link to='/petcreation' className='btn'>Adopt</Link>
        </div>
    </div>
)
}