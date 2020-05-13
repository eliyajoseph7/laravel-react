import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">G-Morning</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item has-treeview menu-open">
            <a href="/admin" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Widgets
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-copy" />
              <p>
                Layout Options
                <i className="fas fa-angle-left right" />
                <span className="badge badge-info right">6</span>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/layout/top-nav.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Top Navigation</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Top Navigation + Sidebar</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/boxed.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Boxed</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Fixed Sidebar</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/fixed-topnav.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Fixed Navbar</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/fixed-footer.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Fixed Footer</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Collapsed Sidebar</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-chart-pie" />
              <p>
                Charts
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="/admin/sales" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Product Sales</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/charts/flot.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Flot</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/charts/inline.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Inline</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
