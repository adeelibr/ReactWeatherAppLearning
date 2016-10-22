import React from 'react';
import {Link} from 'react-router';

let ExamplesPage = () => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few examples for you to try out.</p>
      <ol>
        <li><Link to="/?location=Lahore">Lahore, Pk</Link></li>
        <li><Link to="/?location=Karachi">Karachi, Pk</Link></li>
        <li><Link to="/?location=Miami">Miami, Fl</Link></li>
      </ol>
    </div>
  );
};

export default ExamplesPage;
