spring.zip : spring screenshot.png readme.txt
	zip $@ $^

spring : dropper.sh spring.py.gz
	cat $^ > $@
	chmod +x $@
	wc -c $@

dropper.sh : build_dropper.sh
	./build_dropper.sh

shader.frag.min : shader.frag
	mono ./shader_minifier.exe $< -o $@ --format none
	sed -i 's/\([0-9]\+\)\.\([^0-9]\)/\1\2/g' $@

spring.py.gz : spring.py shader.frag.min Makefile
	cat $< | head -c -1 > $<.m1
	awk 'BEGIN{getline l < "shader.frag.min"}/___MY_SHADER___/{gsub("___MY_SHADER___",l)}1' $<.m1 > $<.m2
	mv $<.m2 $<.m1
	zopfli --i1000 -c $<.m1 | tail -c +11 > $@
	truncate -s -9 $@
	rm $<.m1

.PHONY: clean

clean :
	rm *.gz spring
