import React from 'react';
import { Stage, Layer } from 'react-konva';
import Controls from './Controls';
import LeadPlayer from './LeadPlayer';
import { P5Wrapper } from './P5Wrapper';
import sketch from '../utils/sketch.js';

const Main = () => {
  return (
    <div>
      <h1 className="header">calm corner.</h1>
      <a href="https://github.com/cephscope/noise" className="header">github</a>
      <div className="content-container">
        <Controls />
        <Stage container="app" height={100} width={850}>
          <Layer>
            <LeadPlayer />
          </Layer>
        </Stage>
      </div>
      <P5Wrapper sketch={sketch} />
    </div>
  );
}

export default Main;
