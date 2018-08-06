import Tone from 'tone';

// effects & analysers
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
export const fan = new Tone.FMSynth({
  "harmonicity": 3.01,
  "modulationIndex": 14,
  "oscillator": {
    "type": "triangle"
  },
  "envelope": {
    "attack": 0.2,
    "decay": 0.3,
    "sustain": 0.1,
    "release": .2
  },
  "modulation": {
    "type": "square"
  },
  "modulationEnvelope": {
    "attack": 0.01,
    "decay": 0.5,
    "sustain": 0.2,
    "release": 0.1
  }
}).toMaster();

export const ambient = new Tone.DuoSynth({
  vibratoAmount: 0,
  vibratoRate: 0,
  portamento: .1,
  harmonicity: 1.5,
  voice0: {
    volume: -15,
    portamento: 0,
    oscillator: {
      type: 'sine'
    },
    filterEnvelope: {
      attack: 5,
      decay: 1,
      sustain: 1,
      release: 5
    },
    envelope: {
      attack: 2,
      decay: 1,
      sustain: 1,
      release: 1
    }
  },
  voice1: {
    volume: -10,
    portamento: 0,
    oscillator: {
      type: 'sine'
    },
    filterEnvelope: {
      attack: 5,
      decay: 1,
      sustain: 5,
      release: 1
    },
    envelope: {
      attack: 2,
      decay: 1,
      sustain: 1,
      release: .1
    }
  }
}
).chain(waveform).connect(pingPong);

ambient.volume.value = -10

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
export const lead = new Tone.Synth()
  .chain(chorus, vibrato, Tone.Master)
  .set("envelope.attack", 0.04).toMaster();
export const water = new Tone.Player({
  url: './audio/river.mp3',
  loop: true,
  volume: -12
}).toMaster();