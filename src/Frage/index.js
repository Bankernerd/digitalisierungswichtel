import React from 'react';

import { Card } from './Card';

function Frage() {
  const [current, setCurrent] = React.useState(0);

  const fragen = [];

  return (
    <div className="frage">
      <div className="question-pane">
        <Card
          frage={'Was verkaufst du so?'}
          answers={['Essen', 'Services', 'mich', 'Klopapier']}
          setCurrent={setCurrent}
        />
      </div>
    </div>
  );
}

export default Frage;
