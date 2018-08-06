import React from 'react';
import Konva from 'konva';
import { RegularPolygon, Stage } from 'react-konva';
import { lead, vibrato, ambient } from '../utils/patches/tranquilPatches';

const scale = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'C5', 'D5'];

class LeadPlayer extends React.Component {
  orange() {
    rgba(243,179,75,0);
  }
  dragBoundFunc = (pos) => {
    const newX = pos.x > 750 ? 750 : pos.x < 50 ? 50 : pos.x;
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
    ambient.setNote(scale[noteIndex]);
  };
  onMouseDown = (e) => {
    document.body.style.cursor = 'grabbing';
    const noteIndex = Math.floor(e.target.attrs.x / 100);
    ambient.triggerAttack(scale[noteIndex]);
  };
  onMouseUp = (e) => {
    document.body.style.cursor = 'grab';
    // const val = (Math.floor(e.evt.clientY / 100));
    ambient.triggerRelease();
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