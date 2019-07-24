import React, { useContext } from 'react';

import { GraphContext } from '../GraphContext';
import { setNodesSelection } from '../state/actions';

export default () => {
  const graphContext = useContext(GraphContext);
  const { state, dispatch } = graphContext;

  return (
    <div
      className="react-graph__nodesselection"
      style={{
        transform: `translate(${state.transform[0]}px,${state.transform[1]}px) scale(${state.transform[2]})`
      }}
      onClick={() => dispatch(setNodesSelection({ isActive: false }))}
    >
      <div
        className="react-graph__nodesselection-rect"
        style={{
          width: state.selectedNodesBbox.width,
          height: state.selectedNodesBbox.height,
          top: state.selectedNodesBbox.y,
          left: state.selectedNodesBbox.x
        }}
      />
    </div>
  );
};