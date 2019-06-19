#!/bin/sh
sed 1,2d $0|zcat 2>&0|python3;exit
