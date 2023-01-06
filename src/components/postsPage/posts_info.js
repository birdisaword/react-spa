import './posts_style.css';

import Photo1 from '../../assets/photo1.png';
import Photo2 from '../../assets/photo2.png';

const PROFILE_IMAGE1 = Photo1;
const PROFILE_IMAGE2 = Photo2;

export const user1 = {
 author: {
   photo: PROFILE_IMAGE1,
   name: 'Lee Billings',
   nickname: "@lee_bill"
  },
  date: new Date(),
  content: 'The Mermin-Peres magic square (MPMS) game is the sort of competition one can win only by not playing. This dismal relative of Sudoku involves two participants taking turns adding the value of either +1 or –1 to cells in a three-by-three grid to collaboratively fulfill a win condition. Although the players must coordinate their actions to succeed, they are not allowed to communicate. And even if each correctly guesses the other’s move, the pair can still only win eight out of the game’s nine rounds—unless, that is, they play a quantum version. If qubits (which can swap values between +1 and –1) are used to fill each cell, two players can, in theory, pull off a perfect run by avoiding conflicting moves for all nine rounds. In practice, however, the odds of guessing each move correctly are vanishingly slim. Yet by carefully leveraging entanglement between the qubits, during each turn, the players can surmise each other’s actions without actually communicating—a vexing technique known as quantum pseudotelepathy. In July researchers published a paper reporting their successful real-world demonstration of this strategy to achieve flawless performance. This isn’t all fun and games, either: such work probes the fundamental limits of how information can be shared between entangled particles.',
};

export const user2 = {
  author: {
    photo: PROFILE_IMAGE2,
    name: 'Jon Kelvey',
    nickname: "@jkelvey"
   },
   date: new Date(),
   content: "Astrophysicists believe dark matter and dark energy shape the structures of entire universes—and drive the accelerated expansion of ours. But experts don’t understand much about these enigmatic phenomena. ESA’s Euclid space telescope, scheduled to launch sometime in 2023, will measure the effects of these dark forces on the cosmos over time to try and discern their properties.After launch, Euclid will make its way to the same operational location as JWST, entering an orbit around Lagrangian Point 2, about 1 million miles behind Earth. From there, Euclid will use its nearly 4-foot diameter mirror, visible light imaging system, and near-infrared spectrometer to survey a third of the sky out to a distance of about 15 billion light years. That will give a view  some 10 billion years into the past. By studying how galaxies and galaxy clusters change over eons and across much of the sky, Euclid scientists hope to grasp how dark matter and dark energy shape galactic formation and the evolution of the entire universe.",
 }; 
