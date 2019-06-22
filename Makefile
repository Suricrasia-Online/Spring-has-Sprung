spring.zip : spring_linux spring_mac screenshot.png readme.txt
	zip $@ $^

spring_% : dropper.sh spring.py.shader.%.gz
	cat $^ > $@
	chmod +x $@
	truncate --size=-9 $@
	wc -c $@

dropper.sh : build_dropper.sh
	./build_dropper.sh

shader.frag.min : shader.frag
	mono ./shader_minifier.exe $< -o $@ --format none
	sed -i 's/\([0-9]\+\)\.\([^0-9]\)/\1\2/g' $@

spring.py.shader : spring.py shader.frag.min Makefile
	cat $< | head -c -1 > $<.m1
	awk 'BEGIN{getline l < "shader.frag.min"}/___MY_SHADER___/{gsub("___MY_SHADER___",l)}1' $<.m1 > $@

spring.py.shader.mac : spring.py.shader
	sed 's/___EXT___/dylib/' $< > $@

spring.py.shader.linux : spring.py.shader
	sed 's/___EXT___/so.0/' $< > $@

%.gz : %
	zopfli --i1000 -c $< | tail -c +11 > $@

.PHONY: clean

clean :
	rm *.gz spring
