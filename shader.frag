void main() {
    vec2 uv = cogl_tex_coord_in[0].xy*2.0-1.0;
    
	vec3 cameraOrigin = vec3(16.0, 0.0, 4.0);
	// vec3 cameraDirection = -cameraOrigin;

    vec3 cameraDirection=normalize((-cameraOrigin.xyx * uv.x - cameraOrigin.zxy*cameraOrigin.yxy*0.05 * uv.y)*0.08 - cameraOrigin);

   	for (int i = 0; i < 500; i++) {
        vec3 norm = normalize(cameraOrigin);
        float lam = atan(norm.z/length(norm.xy))+atan(norm.y/norm.x)*0.111;
        lam=asin(sin(lam*9.0))/9.0;
        cameraOrigin += (length(vec2(lam,length(cameraOrigin)-1.0))-0.05)*cameraDirection;
        cogl_color_out = vec4(
            vec3(sqrt(cos(length(cameraOrigin)*64.0)*0.4+0.5))
        , 1.0);
    }
}