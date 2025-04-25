import { useParams } from 'react-router';

function SuccessPage(props) {
    const {id} = useParams();
    
    return (
        <div>
            <div>
                <h1>Saved Successfully!</h1>
                <div>Record ID: {id}</div>
            </div>
        </div>
    )
}

export default SuccessPage;