import React from 'react';
import './Training.css'

const Training = (props) => {
    const {img, service, cost, duration} = props.training;
    return (
        <div className="container my-3 p-3 rounded shadow">
            <div class="col">
                <div className="card h-100">
                    <img className="card-img-top pictures" src={img} alt="..."/>
                    <div className="card-body card footer bg-dark text-white">
                        <h5 className="card-title">{service}</h5>
                        <p className="card-title">Duration: {duration}</p>
                        <p className="card-title">Price: {cost} $</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;