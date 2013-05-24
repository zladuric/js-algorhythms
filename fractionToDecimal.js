function solution ( A,B ) {
    var r = 0, q = '', p = 0;
    if (B == 1) return '' + A;
    if (B == A) return '1';
    if (B == 0) return ' ' + undefined;
    if (A%B == 0) return '' + A/B;
    var min  = (A<B)?A:B;
    var max =(A<B)?B:A; 
    var rem = min;
    var last  = min;
   while (rem != 0) {
     console.log("start with: " + min + " and " + max + ".\nLooping with " + min + " for min")
     last = rem;
     rem = max%min;
     max = min;
     min = rem;
   } 
    console.log("GCD is " + last);
    A = A/last;
    B = B/last;
    // sort out the int part
    if (A > B) {
        r = Math.floor(A/B);
    }
    // lets' divide now.
    var top = A%B;
    var part;
    var bottom = B;
    var reps = {};
    var rptInc = 0;
    var infinite = false;
    while (!(part == 0)) {
        console.log("--- Division start ---");
        console.log("The top: " + reps[top])
        if (reps[top] !== undefined) {
           console.log("top match, not going further");
           infinite = true;
           break;
        };
        console.log(top + " * 10 mod " + bottom);
        part = (top * 10)%bottom;
        quot = Math.floor(top*10/bottom);
        console.log("modulo res: " +  part);
        q = q + quot ;
        console.log("the q so far: " + q);
        reps[top] = [rptInc++, quot];
        top = (top*10)%bottom;
        console.log("New top: " + top);
        console.log("The top: " + reps[top])
   }
   console.log(" --== calc done ==-- ");
   console.log(reps, rptInc);
   var string = r;
   if (q !== '') string = string + '.' + q;
   if (!infinite) {
       return string;
   }
   var arr = [];
   var val;
   for (val in reps) {
     console.log("going");
     arr[reps[val][0]] = reps[val][1];
   }
   return string + '(' + arr.join('') + ')'; 
}


console.log(solution(412,54))
