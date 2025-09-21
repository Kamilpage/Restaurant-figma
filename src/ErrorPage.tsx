import {Link} from "react-router-dom";
import './styles/main.css'

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <h1>THIS PAGE DOES NOT EXISTS!</h1>
            <h1>please, press a button below </h1>
            <Link className='btn dark-orange-btn' to="/Pages">Main Page</Link>
        </div>
    );
};

export default ErrorPage;