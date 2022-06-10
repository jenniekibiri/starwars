import { Link } from 'react-router-dom';
import './css/people.css'

const people = Array.from({
    length: 12
}, (_, index: number) => ({
    id: index,
    image: 'https://i.pravatar.cc/150?u=' + index,
    name: Date.now().toString(32) + ' ' + Date.now().toString(21),
    homeworld: Date.now().toString(32)
}));

const People = () => {
    return (
        <div className="container">
            <div className='header'>
                <div className='page-title'>
                    <h1 className="title">People</h1>
                    <span className='subtitle'>Showing 1 of 20 storm troopers</span>
                </div>
                <ul className="pagination">
                    <li className="page-item previous disabled">
                        <a href="#" className="page-link">&lt;</a>
                    </li>
                    <li className="page-item">
                        <a href="#" className="page-link">1</a>
                    </li>
                    <li className="page-item active">
                        <a href="#" className="page-link">2</a>
                    </li>
                    <li className="page-item">
                        <a href="#" className="page-link">3</a>
                    </li>
                    <li className="page-item">
                        <a href="#" className="page-link">4</a>
                    </li>
                    <li className="page-item next">
                        <a href="#" className="page-link">&gt;</a>
                    </li>
                </ul>
            </div>
            <div className="people">
                {people.map(x => (
                    <Link to={`${x.id}`} className="person-card">
                        <img src={x.image} alt={x.name} className='person-card-image' />
                        <div>
                            <h4 className='person-card-name'>{x.name}</h4>
                            <span className='person-card-homeworld'>{x.homeworld}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default People;