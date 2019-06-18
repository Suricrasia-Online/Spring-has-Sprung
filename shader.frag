void main() {
    vec4 uv = cogl_tex_coord_in[0]*2.0-1.0;
    
	vec3 cameraOrigin = vec3(16.0, 0.0, 4.0);
    vec3 cameraDirection=normalize(cameraOrigin.xyx*uv.x*0.08 + cameraOrigin.zxy*cameraOrigin.yxy*0.004*uv.y + cameraOrigin);

   	for (int i = 0; i < 500; i++) {
        vec3 norm = normalize(cameraOrigin);
        cameraOrigin -= (length(vec2(
            asin(sin(atan(norm.z/length(norm.xy))*9.0+atan(norm.y/norm.x)))/9.0 //distance to coils on surface of sphere
            ,length(cameraOrigin)-1.0)) //distance to surface of sphere
        -0.05)*cameraDirection;
        cogl_color_out = vec4(
            vec3(sqrt(cos(length(cameraOrigin)*35)*0.4+0.5))
        , 1.0);
    }
}