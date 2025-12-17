import { useState } from 'react';
import Panel from './Panel';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Panel
        title="Panel 1"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Đi học
      </Panel>

      <Panel
        title="Panel 2"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Đi ngủ
      </Panel>
    </div>
  );
}

export default Accordion;
