import React from 'react';
import { connect } from 'react-redux';
import { editBpm, resetSettings } from '../actions/settings';
import { startBleep, stopBleep, startAmbient, stopAmbient, startMartian, stopMartian, startFan, stopFan, resetTracks } from '../actions/tracks';

class Controls extends React.Component {
  onStartBleepSequence = () => {
    if (!this.props.tracks.bleep) {
      this.props.startBleep();
    };
  };
  onStopBleepSequence = () => {
    if (this.props.tracks.bleep) {
      this.props.stopBleep();
    };
  };
  onStartAmbient = () => {
    if (!this.props.tracks.ambient) {
      this.props.startAmbient();
    }
  };
  onStopAmbient = () => {
    if (this.props.tracks.ambient) {
      this.props.stopAmbient();
    }
  };
  onStartMartian = () => {
    if (!this.props.tracks.martian) {
      this.props.startMartian();
    }
  };
  onStopMartian = () => {
    if (this.props.tracks.martian) {
      this.props.stopMartian();
    }
  };
  onEditBpm = (e) => {
    e.preventDefault();
    const bpm = parseInt(e.target.value);
    this.props.editBpm(bpm);
  };
  onReset = () => {
    this.props.resetSettings();
    this.props.resetTracks();
  };

  render() {
    return (
      <div>
        {
          this.props.tracks.ambient ?
            <button className="button-pressed" onClick={this.onStopAmbient}>◼ 🌊</button> :
            <button className="button" onClick={this.onStartAmbient}>▶ 🌊</button>
        }
        {
          this.props.tracks.bleep ?
            <button className="button-pressed" onClick={this.onStopBleepSequence}>◼ 🌱</button> :
            <button className="button" onClick={this.onStartBleepSequence}>▶ 🌱</button>
        }
        {
          this.props.tracks.martian ?
            <button className="button-pressed" onClick={this.onStopMartian}>◼ 🌿</button> :
            <button className="button" onClick={this.onStartMartian}>▶ 🌿</button>
        }
        <button className="button-reset" onClick={this.onReset}>♲</button>
        <input
          className="input"
          type="range"
          value={this.props.settings.bpm}
          min="10"
          max="120"
          onChange={this.onEditBpm}
        />
      </div>
    );
  }
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