clutter : dropper.sh clutter.py.xz
	cat $^ > $@
	chmod +x $@
	wc -c $@

%.py.xz : %.py
	cat $< | head -c -1 > $<.m1
	lzma --format=lzma -9 --extreme --lzma1=preset=9,lc=0,lp=0,pb=0,nice=273,depth=1000 --keep --stdout $<.m1 > $@
	rm $<.m1

.PHONY: clean

clean :
	rm *.xz clutter
