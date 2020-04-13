import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NotFoundPage extends Component {
    render () {
        return (
            <div>
                <div id="layoutError">
                    <div id="layoutError_content">
                        <main>
                        <div className="container">
                            <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="text-center mt-4">
                                <img className="mb-4 img-error" src="/images/error-404-monochrome.svg" />
                                <p className="lead">This requested URL was not found on this server.</p>
                                <Link to="/"><svg className="svg-inline--fa fa-arrow-left fa-w-14 mr-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" /></svg>{/* <i class="fas fa-arrow-left mr-1"></i> */}Return to Dashboard</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        </main>
                    </div>
                </div>

            </div>
        )
    }
}

export default NotFoundPage;