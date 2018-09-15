import React from 'react';
import { connect } from 'react-redux';
import { editBpm, resetSettings } from '../actions/settings';
import { startBleep, stopBleep, startAmbient, stopAmbient, startMartian, stopMartian, startFan, stopFan, resetTracks } from '../actions/tracks';

const Controls = (props) => {
  const onStartBleepSequence = () => {
    if (!props.tracks.bleep) {
      props.startBleep();
    };
  };
  const onStopBleepSequence = () => {
    if (props.tracks.bleep) {
      props.stopBleep();
    };
  };
  const onStartAmbient = () => {
    if (!props.tracks.ambient) {
      props.startAmbient();
    }
  };
  const onStopAmbient = () => {
    if (props.tracks.ambient) {
      props.stopAmbient();
    }
  };
  const onStartMartian = () => {
    if (!props.tracks.martian) {
      props.startMartian();
    }
  };
  const onStopMartian = () => {
    if (props.tracks.martian) {
      props.stopMartian();
    }
  };
  const onEditBpm = (e) => {
    e.preventDefault();
    const bpm = parseInt(e.target.value);
    props.editBpm(bpm);
  };
  const onReset = () => {
    props.resetSettings();
    props.resetTracks();
  };

  return (
    <div>
      {
        props.tracks.ambient ?
          <button className="button-pressed" onClick={onStopAmbient}>◼ 🌊</button> :
          <button className="button" onClick={onStartAmbient}>▶ 🌊</button>
      }
      {
        props.tracks.bleep ?
          <button className="button-pressed" onClick={onStopBleepSequence}>◼ 🌱</button> :
          <button className="button" onClick={onStartBleepSequence}>▶ 🌱</button>
      }
      {
        props.tracks.martian ?
          <button className="button-pressed" onClick={onStopMartian}>◼ 🌿</button> :
          <button className="button" onClick={onStartMartian}>▶ 🌿</button>
      }
      <button className="button-reset" onClick={onReset}>♲</button>
      <input
        className="input"
        type="range"
        value={props.settings.bpm}
        min="10"
        max="120"
        onChange={onEditBpm}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  settings: state.settings
});

const mapDispatchToProps = (dispatch) => ({
  startBleep: () => dispatch(startBleep()),
  stopBleep: () => dispatch(stopBleep()),
  startAmbient: () => dispatch(startAmbient()),
  stopAmbient: () => dispatch(stopAmbient()),
  startMartian: () => dispatch(startMartian()),
  stopMartian: () => dispatch(stopMartian()),
  startFan: () => dispatch(startFan()),
  stopFan: () => dispatch(stopFan()),
  resetTracks: () => dispatch(resetTracks()),
  editBpm: (bpm) => dispatch(editBpm(bpm)),
  resetSettings: () => dispatch(resetSettings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);