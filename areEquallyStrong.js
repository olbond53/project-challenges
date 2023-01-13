/* Call two people equally strong if their strongest arms are equally
 strong (the strongest arm can be both the right and the left), and so 
 are their weakest arms.*/
function areEquallyStrong(yL, yR, fL, fR) {
  return ( yL == fL || yL == fR) && (yR == fL || yR == fR);  
}
