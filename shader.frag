void main() {
cogl_color_out*=0.0;
	for (float j=0;++j<4;){
	for (float k=0;++k<4;){
    vec3 cameraOrigin = vec3(16.0, 0.0, 4.0);
    vec3 cameraDirection=normalize(cameraOrigin+cameraOrigin.xyx*(cogl_tex_coord_in[0]*2.0-1.0+0.001*j).x*0.08 + cameraOrigin.zxy*cameraOrigin.yxy*(cogl_tex_coord_in[0]*2.0-1.0+0.001*k).y*0.004);

    for (cogl_color_out.w = 0; ++cogl_color_out.w < 300;) {
        cameraOrigin=cameraOrigin-cameraDirection*(length(vec3(
        asin(sin(atan(normalize(cameraOrigin).y/normalize(cameraOrigin).x)-acos(normalize(cameraOrigin).z)*9.0))/9.0 //distance to coils on surface of sphere
        ,length(cameraOrigin)-1.0,0)) //distance to surface of sphere
        -0.05);
    }
    if(length(cameraOrigin)<4)cogl_color_out.xyz+=sin((sin(length(cameraOrigin)*35)+1.4)*(cameraOrigin*0.4+.6))/16;
  }
}
}
