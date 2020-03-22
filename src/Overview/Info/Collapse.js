import React from 'react';

export function Collapse(props) {
  const [collapsed, setCollapsed] = React.useState(true);

  return (
    <div className="collapse card mb-3">
      <h2>{props.title}</h2>
      <button
        className="btn btn-collapse"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? 'Anzeigen' : 'Verbergen'}
      </button>
      <div className={collapsed ? 'hide-body' : 'show-body'}>
        <div>{props.body}</div>
      </div>
    </div>
  );
}
