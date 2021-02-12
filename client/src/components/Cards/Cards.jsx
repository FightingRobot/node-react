import React from 'react'

const Cards = () => (
    <section className="row">
        <div className="col-md-12 d-flex flex-wrap card-container justify-content-between">
            <div style={{ width: "30%" }} className="card m-2 bg-dark text-white border rounded border-white">
                <img class="card-img-top" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1927&q=80" alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Open</a>
                </div>
            </div>
            <div style={{ width: "30%" }} className="card m-2 bg-dark text-white border rounded border-white">
                <img class="card-img-top" src="https://images.unsplash.com/photo-1567170578400-9d182981f2a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Open</a>
                </div>
            </div>
            <div style={{ width: "30%" }} className="card m-2 bg-dark text-white border rounded border-white">
                <img class="card-img-top" src="https://images.unsplash.com/photo-1535696588143-945e1379f1b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Open</a>
                </div>
            </div>
        </div>
    </section >
)

export default Cards