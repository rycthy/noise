import Tone from 'tone';

const settingsReducerDefaultState = {
  bpm: 120
}

export default (state = settingsReducerDefaultState, action) => {
  switch (action.type) {
    case 'EDIT_BPM':
      Tone.Transport.bpm.value = action.bpm;
      return {
        ...state,
        bpm: action.bpm
      };
    case 'RESET_SETTINGS':
      Tone.Transport.bpm.value = settingsReducerDefaultState.bpm;
      return {
        ...state,
        bpm: settingsReducerDefaultState.bpm
      }
    default:
      Tone.Transport.loop = true;
      Tone.Transport.loopStart = 0;
      Tone.Transport.loopEnd = 8;
      Tone.Transport.start('+0.1');
      return state;
  }
}