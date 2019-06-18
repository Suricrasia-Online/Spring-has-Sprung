void main() {
    vec4 uv = cogl_tex_coord_in[0]*2.0-1.0;
    
	vec3 cameraOrigin = vec3(16.0, 0.0, 4.0);
    vec3 cameraDirection=normalize(cameraOrigin+cameraOrigin.xyx*uv.x*0.08 + cameraOrigin.zxy*cameraOrigin.yxy*uv.y*0.004);

   	for (int i = 0; i < 500; i++) {
        cameraOrigin -= (length(vec2(
            asin(sin(atan(normalize(cameraOrigin).z/length(normalize(cameraOrigin).xy))*9.0+atan(normalize(cameraOrigin).y/normalize(cameraOrigin).x)))/9.0 //distance to coils on surface of sphere
            ,length(cameraOrigin)-1.0)) //distance to surface of sphere
        -0.05)*cameraDirection;
        cogl_color_out = 
            vec4(sin((sin(length(cameraOrigin)*35)+1.4)*(cameraOrigin*0.4+.6)),1.0)
        ;
    }
}