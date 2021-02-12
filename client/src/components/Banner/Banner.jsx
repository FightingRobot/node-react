import React from 'react'

const Banner = () => (
    <section className="row p-2 mb-3">
        <div className="col-md-12">
            <div className="jumbotron bg-dark text-white border border-white p-4 rounded">
                <h2 className="display-4">Hello!</h2>
                <p className="lead">This is the best cat shop in the world. All kinds of cat stuff can be found here.</p>
                <hr className="my-4" />
                <p>To watch our best deals just press the big red buttton!</p>
                <p className="lead">
                    <a className="btn btn-danger btn-lg" href="/catalog" role="button">BIG RED BUTTON</a>
                </p>
            </div>
        </div>
    </section>
)

export default Banner