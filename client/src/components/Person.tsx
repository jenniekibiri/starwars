import { Link } from 'react-router-dom';
import './css/person.css';

const Person = () => {
    return (
        <div className="container">
            <div className="person">
                <div className="person-profile">
                    <h4>
                        <Link to='/' className='back-link'>&lt; Back home</Link>
                    </h4>
                    <img src="https://i.pravatar.cc/250" alt="Luke Skywalker" className='person-image' />
                    <div className='person-details'>
                        <h1 className='person-name'>Luke Skywalker</h1>
                        <h4 className='person-homeworld'>Tatooine</h4>
                        <div className="person-desc">
                            <p>
                                <b>Gender</b>
                                <span>Male</span>
                            </p>
                            <p>
                                <b>Birth Year</b>
                                <span>1985</span>
                            </p>
                            <p>
                                <b>Height</b>
                                <span>172</span>
                            </p>
                        </div>
                        <div className="person-desc">
                            <p>
                                <b>Hair</b>
                                <span>Blond</span>
                            </p>
                            <p>
                                <b>Skin</b>
                                <span>Fair</span>
                            </p>
                            <p>
                                <b>Eye</b>
                                <span>Blue</span>
                            </p>
                            <p>
                                <b>Mass</b>
                                <span>77</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div  className='person-films'>
                    <h2>
                        <b>Films</b>
                        <small>Appeared 12 films</small>
                    </h2>
                    <div className="person-film-list">
                        {Array.from({
                            length: 12
                        }, (_, index: number) => ({
                            title: Date.now().toString(16),
                            date: new Date().toLocaleDateString(),
                            director: Date.now().toString(17) + ' ' + Date.now().toString(22),
                            producer: Date.now().toString(21) + ' ' + Date.now().toString(32)
                        })).map(x => (
                            <div className="person-film-card">
                                <div>
                                    <div className="person-film-date">{x.date}</div>
                                    <h4 className="person-film-title">{x.title}</h4>
                                </div>
                                <div>
                                    <p className="person-film-director">
                                        Director - {x.director}
                                    </p>
                                    <p className="person-film-producer">
                                        Producer - {x.producer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Person;