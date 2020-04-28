import React from 'react'

function DataTable() {
    return (
        <div>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>DataTables</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">DataTables</li>
                        </ol>
                    </div>
                    </div>
                </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                <div className="row">
                    <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                        <h3 className="card-title">DataTable with default features</h3>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                        <table id="example1" className="table table-bordered table-striped table-hover">
                            <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                    this.state.news.map((info)=>
                                        
                                            <tr key={info.id}>
                                                <td>1</td>
                                                <td>{info.title}</td>
                                                <td>{info.updates}</td>
                                                <td className="btn btn-primary">update</td>
                                            </tr>
                                        
                                    )
                                }
                            
                            </tbody>
                            <tfoot>
                            <tr>
                                <th>Picture</th>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Action</th>
                            </tr>
                            </tfoot>
                        </table>
                        </div>
                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
                </section>
                {/* /.content */}
            </div>
        </div>
    )
}

export default DataTable
