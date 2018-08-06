import Tone from 'tone';
import {martianA, martianB, bleep, fan, ambient} from '../patches/tranquilPatches';

// sequences

export const fanSequence = new Tone.Part((time, event) => {
  fan.triggerAttackRelease(event.note, .15, time, event.vel);
}, [
  { time: 0.00, note: 'C2', vel: .5 },
  { time: 0.25, note: 'C2', vel: .5 },
  { time: 0.50, note: 'C2', vel: .5 },
  { time: 0.75, note: 'C2', vel: .5 },
  { time: 1.00, note: 'C2', vel: .5 },
  { time: 1.25, note: 'C2', vel: .5 },
  { time: 1.50, note: 'C2', vel: .5 },
  { time: 1.75, note: 'C2', vel: .5 },
]);


export const martianBase = new Tone.Part((time, event) => {
  martianB.triggerAttackRelease(event.note, '16n', time, event.vel);
}, [
    { time: 0.00, note: 'C4', vel: .5 },
    { time: 0.25, note: 'G4', vel: .5 },
    { time: 2.00, note: 'C4', vel: .5 },
    { time: 2.25, note: 'G4', vel: .5 },
    { time: 4.00, note: 'C4', vel: .5 },
    { time: 4.25, note: 'G4', vel: .5 },
    { time: 6.00, note: 'C4', vel: .5 },
    { time: 6.25, note: 'G4', vel: .5 },

    { time: 8.00, note: 'F4', vel: .5 },
    { time: 8.25, note: 'C5', vel: .5 },
    { time: 10.00, note: 'F4', vel: .5 },
    { time: 10.25, note: 'C5', vel: .5 },
    { time: 12.00, note: 'F4', vel: .5 },
    { time: 12.25, note: 'C5', vel: .5 },
    { time: 14.00, note: 'F4', vel: .5 },
    { time: 14.25, note: 'C5', vel: .5 }
  ]);
export const martianArp = new Tone.Part((time, event) => {
  martianA.triggerAttackRelease(event.note, '16n', time, event.vel);
}, [
    // 1/1
    { time: 0.00, note: 'C4', vel: .5 },
    { time: 0.25, note: 'D4', vel: .5 },
    { time: 0.50, note: 'G4', vel: .5 },
    { time: 0.75, note: 'E4', vel: .5 },
    { time: 1.00, note: 'C4', vel: .5 },
    { time: 1.25, note: 'D4', vel: .5 },
    { time: 1.50, note: 'G4', vel: .5 },
    { time: 1.75, note: 'E4', vel: .5 },
    { time: 2.00, note: 'C4', vel: .5 },
    { time: 2.25, note: 'D4', vel: .5 },
    { time: 2.50, note: 'G4', vel: .5 },
    { time: 2.75, note: 'E4', vel: .5 },
    { time: 3.00, note: 'C4', vel: .5 },
    { time: 3.25, note: 'D4', vel: .5 },
    { time: 3.50, note: 'G4', vel: .5 },
    { time: 3.75, note: 'E4', vel: .5 },
    { time: 4.00, note: 'C4', vel: .5 },
    { time: 4.25, note: 'D4', vel: .5 },
    { time: 4.50, note: 'G4', vel: .5 },
    { time: 4.75, note: 'E4', vel: .5 },
    { time: 5.00, note: 'C4', vel: .5 },
    { time: 5.25, note: 'D4', vel: .5 },
    { time: 5.50, note: 'G4', vel: .5 },
    { time: 5.75, note: 'E4', vel: .5 },
    { time: 6.00, note: 'C4', vel: .5 },
    { time: 6.25, note: 'D4', vel: .5 },
    { time: 6.50, note: 'G4', vel: .5 },
    { time: 6.75, note: 'E4', vel: .5 },
    { time: 7.00, note: 'C4', vel: .5 },
    { time: 7.25, note: 'D4', vel: .5 },
    { time: 7.50, note: 'G4', vel: .5 },
    { time: 7.75, note: 'E4', vel: .5 },
    // 2/2
    { time: 8.00, note: 'F4', vel: .5 },
    { time: 8.25, note: 'G4', vel: .5 },
    { time: 8.50, note: 'C5', vel: .5 },
    { time: 8.75, note: 'A4', vel: .5 },
    { time: 9.00, note: 'F4', vel: .5 },
    { time: 9.25, note: 'G4', vel: .5 },
    { time: 9.50, note: 'C5', vel: .5 },
    { time: 9.75, note: 'A4', vel: .5 },
    { time: 10.00, note: 'F4', vel: .5 },
    { time: 10.25, note: 'G4', vel: .5 },
    { time: 10.50, note: 'C5', vel: .5 },
    { time: 10.75, note: 'A4', vel: .5 },
    { time: 11.00, note: 'F4', vel: .5 },
    { time: 11.25, note: 'G4', vel: .5 },
    { time: 11.50, note: 'C5', vel: .5 },
    { time: 11.75, note: 'A4', vel: .5 },
    { time: 12.00, note: 'F4', vel: .5 },
    { time: 12.25, note: 'G4', vel: .5 },
    { time: 12.50, note: 'C5', vel: .5 },
    { time: 12.75, note: 'A4', vel: .5 },
    { time: 13.00, note: 'F4', vel: .5 },
    { time: 13.25, note: 'G4', vel: .5 },
    { time: 13.50, note: 'C5', vel: .5 },
    { time: 13.75, note: 'A4', vel: .5 },
    { time: 14.00, note: 'F4', vel: .5 },
    { time: 14.25, note: 'G4', vel: .5 },
    { time: 14.50, note: 'C5', vel: .5 },
    { time: 14.75, note: 'A4', vel: .5 },
    { time: 15.00, note: 'F4', vel: .5 },
    { time: 15.25, note: 'G4', vel: .5 },
    { time: 15.50, note: 'C5', vel: .5 },
    { time: 15.75, note: 'A4', vel: .5 }
  ]);
  //old Base
  // { time: 0.00, note: 'C4', vel: .5 },
  //   { time: 0.15, note: 'D4', vel: .5 },
  //   { time: 0.25, note: 'C4', vel: .5 },
  //   { time: 0.40, note: 'D4', vel: .5 },
  //   { time: 1.00, note: 'C4', vel: .5 },
  //   { time: 1.15, note: 'D4', vel: .5 },
  //   { time: 1.25, note: 'C4', vel: .5 },
  //   { time: 1.40, note: 'D4', vel: .5 }

  //old Arp:
  // { time: 0.00, note: 'C4', vel: .5 },
  // { time: 0.25, note: 'G4', vel: .5 },
  // { time: 0.50, note: 'E4', vel: .5 },
  // { time: 0.75, note: 'G4', vel: .5 },
  // { time: 1.00, note: 'C4', vel: .5 },
  // { time: 1.25, note: 'G4', vel: .5 },
  // { time: 1.50, note: 'E4', vel: .5 },
  // { time: 1.75, note: 'G4', vel: .5 },
  // { time: 2.00, note: 'C4', vel: .5 }

export const bleepSequence = new Tone.Part((time, event) => {
  bleep.triggerAttackRelease(event.note, .15, time, event.vel);
}, [
  { time: 0.00, note: 'C3', vel: .5 },
  { time: 0.50, note: 'C4', vel: .5 },
  { time: 1.00, note: 'C5', vel: .5 },
  { time: 1.50, note: 'C6', vel: .5 },
]);

// export const bleepSequence = new Tone.Sequence((time, note) => {
//   bleep.triggerAttackRelease(note, .15);
// }, ["C3", "C4", "C5", "C6"]);
export const transport = Tone.Transport;
// bleep.volume.value = -100;
// ambient.volume.value = -100;
