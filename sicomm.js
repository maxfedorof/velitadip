   if (rc1 < rc) {
     // Draw an arc if the inner radius is smaller than the outer radius
     context.arc(t0.cx, t0.cy, rc1, atan2$1(t0.y01, t0.x01), atan2$1(t1.y01, t1.x01), !cw);
   }
   