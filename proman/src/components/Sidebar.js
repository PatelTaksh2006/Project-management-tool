import React from 'react'

export default function Sidebar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: 240, minHeight: '100vh'}}>
<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
<span className="fs-5 fw-semibold">Navigation</span>
</a>
<hr />
<ul className="nav nav-pills flex-column mb-auto">
<li className="nav-item">
<a href="/dashboard" className="nav-link active">Dashboard</a>
</li>
<li>
<a href="/projects" className="nav-link link-dark">Projects</a>
</li>
<li>
<a href="/tasks" className="nav-link link-dark">Tasks</a>
</li>
    
<li>
<a href="/reports" className="nav-link link-dark">Reports</a>
</li>

</ul>
</div>
);
}