void main() {
    for (float j = 0; j < 9; ++j) {
    vec3 cameraOrigin = vec3(3.0, 0.0, 0.0);
    vec3 cameraDirection=normalize(vec3(0.0,cogl_tex_coord_in[0]*2.0-1.0+fract(vec4(vec2(.755,.57),0.0,0.0)*j)/250)*vec3(0.0,1.25,1) + cameraOrigin);
    for (float i = 0; i < 500; ++i) {
        cameraOrigin -= (length(vec2(
        asin(sin(atan(normalize(cameraOrigin).z/length(normalize(cameraOrigin).xy))*9.0+atan(normalize(cameraOrigin).y/normalize(cameraOrigin).x)))/9.0 //distance to coils on surface of sphere
        ,length(cameraOrigin)-1.0)) //distance to surface of sphere
        -0.05)*cameraDirection;
    }
        cogl_color_out+=clamp(fract(vec4(length(cameraOrigin))*9+.5),0,1)/9
        ;
}
cogl_color_out.w=1.0;
}