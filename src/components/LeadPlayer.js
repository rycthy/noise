import React from 'react';
import { RegularPolygon } from 'react-konva';
import { lead } from '../utils/patches/tranquilPatches';
import { scale } from '../utils/patches/tranquilPatches';

const LeadPlayer = () => {
  const dragBoundFunc = (pos) => {
    const newX = pos.x > 799 ? 799 : pos.x < 50 ? 50 : pos.x;
    const newY = pos.y > 50 ? 50 : pos.y < 50 ? 50 : pos.y;
    return {
      x: newX,
      y: newY
    };
  };
  const onMouseEnter = () => {
    document.body.style.cursor = 'grab';
  };
  const onMouseLeave = () => {
    document.body.style.cursor = 'default';
  };
  const onDrag = (e) => {
    const noteIndex = Math.floor(e.target.attrs.x / 100);
    lead.setNote(scale[noteIndex]);
  };
  const onMouseDown = (e) => {
    document.body.style.cursor = 'grabbing';
    const noteIndex = Math.floor(e.target.attrs.x / 100);
    lead.triggerAttack(scale[noteIndex]);
  };
  const onMouseUp = (e) => {
    document.body.style.cursor = 'grab';
    lead.triggerRelease();
  };
  return (
    <RegularPolygon
      x={400}
      y={50}
      sides={4}
      radius={25}
      fill={'#F1B255'}
      strokeWidth={1}
      draggable={true}
      dragBoundFunc={dragBoundFunc}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onDragMove={onDrag}
    />
  );
}

export default LeadPlayer;