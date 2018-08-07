import React from 'react';
import Konva from 'konva';
import { RegularPolygon } from 'react-konva';
import { lead } from '../utils/patches/tranquilPatches';

const scale = ['G4', 'A4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5'];

class LeadPlayer extends React.Component {
  orange() {
    rgba(243,179,75,0);
  }
  dragBoundFunc = (pos) => {
    const newX = pos.x > 799 ? 799 : pos.x < 50 ? 50 : pos.x;
    const newY = pos.y > 50 ? 50 : pos.y < 50 ? 50 : pos.y;
    return {
      x: newX,
      y: newY
    };
  };
  onMouseEnter = () => {
    document.body.style.cursor = 'grab';
  };
  onMouseLeave = () => {
    document.body.style.cursor = 'default';
  };
  onDrag = (e) => {
    const noteIndex = Math.floor(e.target.attrs.x / 100);
    lead.setNote(scale[noteIndex]);
  };
  onMouseDown = (e) => {
    document.body.style.cursor = 'grabbing';
    const noteIndex = Math.floor(e.target.attrs.x / 100);
    lead.triggerAttack(scale[noteIndex]);
  };
  onMouseUp = (e) => {
    document.body.style.cursor = 'grab';
    lead.triggerRelease();
  };
  render() {
    return (
      <RegularPolygon
        x={400}
        y={50}
        sides={4}
        radius={25}
        fill={'#F1B255'}
        strokeWidth={1}
        draggable={true}
        dragBoundFunc={this.dragBoundFunc}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onDragMove={this.onDrag}
      />
    );
  }
}

export default LeadPlayer;