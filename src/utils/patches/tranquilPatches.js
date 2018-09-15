import Tone from 'tone';

export const scale = ['G4', 'A4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5'];

// effects & analysers
const freeverb = new Tone.PitchShift({
  pitch: 0,
  windowSize: 0.5,
  delayTime: 0,
  feedback: .9
});
export const chorus = new Tone.Chorus(2, 2.5, 0.7);
export const pingPong = new Tone.PingPongDelay("16n", 0.2).toMaster();
export const vibrato = new Tone.Vibrato({
  maxDelay: 0.005,
  frequency: 0,
  depth: 0.1,
  type: 'sine'
});
export const waveform = new Tone.Analyser('waveform');

// patches

export const martianB = new Tone.MembraneSynth({
  "pitchDecay": 0.008,
  "octaves": 2,
  "envelope": {
    "attack": 0.006,
    "decay": 0.5,
    "sustain": 0
  },
  volume: -5
}).toMaster();
export const martianA = new Tone.MembraneSynth({
  "pitchDecay": 0.008,
  "octaves": 2,
  "envelope": {
    "attack": 0.006,
    "decay": 0.5,
    "sustain": 0
  },
  volume: -5
}).connect(pingPong);
export const lead = new Tone.Synth({
  oscillator: {
    type: 'triangle'
  },
  envelope: {
    attack: .5,
    decay: .7,
    sustain: .7,
    release: 1
  },
  volume: -25
}).chain(freeverb, waveform, chorus, vibrato, Tone.Master).toMaster();
export const water = new Tone.Player({
  url: './audio/river.mp3',
  loop: true,
  volume: -12
}).toMaster();