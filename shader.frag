
void main() {
    for (float j=0.; j++ < 16 ; ){
            vec3 C = vec3(16,0,4);
            vec3 D = normalize( C + C.xyx*      (cogl_tex_coord_in[0]*2.0-1.0+ceil(j/4)/1e3).x*.08 
                                  + C.zxy*C.yxy*(cogl_tex_coord_in[0]*2.0-1.0+mod( j,4)/8e2).y*.004 );

            for ( cogl_color_out.w = 0. ; cogl_color_out.w++ < 3e2 ; )
                C -= D* ( length( vec2( asin(sin(atan(C.y,C.x)
                                                 -acos(normalize(C).z)*9.))/9.,
                                        length(C)-1. ) )
                          -.05 );

            cogl_color_out.xyz += max( sin( (sin(length(C)*35.)+1.4) * (C*.4+.6) ),0. ) /16;
        }
}
