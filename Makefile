clutter : dropper.sh clutter.py.xz
	cat $^ > $@
	chmod +x $@
	wc -c $@

shader.frag.min : shader.frag
	mono ./shader_minifier.exe $< -o $@ --format none

clutter.py.xz : clutter.py shader.frag.min
	cat $< | head -c -1 > $<.m1
	awk 'BEGIN{getline l < "shader.frag.min"}/___MY_SHADER___/{gsub("___MY_SHADER___",l)}1' $<.m1 > $<.m2
	mv $<.m2 $<.m1
	lzma --format=lzma -9 --extreme --lzma1=preset=9,lc=0,lp=0,pb=0,nice=273,depth=1000 --keep --stdout $<.m1 > $@
	rm $<.m1

.PHONY: clean

clean :
	rm *.xz clutter
