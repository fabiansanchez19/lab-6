var GAME_LEVELS = [
  ["                                                                                ",
   "                                    o           x x x xxx     o                    ",
   "                    xx   x x   xx  x x     xyx            x       x                ",
   "                xxx                   x!!x        o        xy  yx               ",
   "            xx                        x!!x                                      ",
   "       xx                             x!!x                                      ",
   "           xx  xxx  yx                xxxx                        x x           ",
   "                  xx                             xxx      xx    xx!xx          ",
   "                   xxx              o o      xx                  x!!!x          ",
   "                      xx                                         xx!xx          ",
   "                         xx          xxxxx                        xvx           ",
   "                     xx!!                                                       xx  ",
   "  xx               xxx !!                      o o                                x  ",
   "  x               xx   !!  o                                                    x  ",
   "  x            xxx     !!  xxx                   xxxxx                             o x  ",
   "  x          xx      o !!                                                   x  ",
   "  x  @       x  x      !!                                          xxxxx       x  ",
   "  xxxxxxxxxxxx  xxxxxxx!!xxxxxx   xxxxxxx      xxxxx       xxxxxxx   xxxxxxxxx  ",
   "                      x!!x      x   x   x     x          x     x                    ",
   "                      x!!x      x!!!x  x    o   x         x!!!!!x                    ",
   "                              x!!!x   xx        xx       x!!!!!x                    ",
   "                              xxxxx  xxx  xyx   xxx       xxxxxxx                    ",
   "                                      xx        xx  o                              ",
   "                                       x !!!!!! x     x                            "],
  ["                                      x!!xxxxxxx    xx            xxxxxxx                                    x!x  ",
   "                                      x!!x                     xxxx     xxxx                                 x!x  ",
   "                                      x!!xxxxxxxxxx           xx           xx                                x!x  ",
   "                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ",
   "             xx                         xxxxxxxxxx!!xxyyxx                                             o   o   o  x!x  ",
   "       xx         xx             xx             xx!x              o   o                                    xx!x  ",
   "      xxx         xxx      x            x       x!x                                         xxxxxxxxxx  xxx!!x  ",
   "      xxx         xxx      xx           xx       xvx    xx    x     y   x           yyy          !!!!!!!!!!!!!!xx  ",
   "       xx    o    xx       xxx    o    xxx                      xx  |   |   |  xx            xxxxxxxx!!!!!xxxxxxxxx   ",
   "        x         x         xx         xx                       xx!!!!!!!!!!!xx            v         x!!!x            ",
   "         xx     xx            x       x                       xxxx!!!!!xxxx                          x!!!x         ",
   "                                               x     x            xxxxxxx        xxx         xxx     x!!!x         ",
   "                                               x     x                           x x         x x      x!x          ",
   "                                 yyy           x     x                             x         x        x!x          ",
   "                                               x     x                             xx        x                    ",
   "                                               xx    x                             x                              ",
   "                                               x     x      o  o     x   x         x         xx                   ",
   "               xx  xx        xxx   xxx        x     x               x   x         x         x  xxx        o       ",
   "              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x   xxx     x  x     ",
   "             xx       xx        x o x          x    xx               x   x   x               x     xx  xx    x    ",
   "     o       x         x        x   x          x     x               x   x   x               x      x!!x       x  ",
   "    x x      x         x        x   x          x     x               x   xxxxx   xxxxxx      x      x!!x     xx   ",
   "    x x      x    o     x       xx o xx         x     x               x     o     x x         x     x!!x    x     ",
   "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!x x!!!!!!     x     =     x x         x      x!!x   xx     ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!x x!!xx!     xxxxxxxxxxxxx xx  o o  xx      x!!x  x       ",
   "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!x x!!xx!                    xx     xx       x!!x          ",
   "!!!!x x!!!!!!x         x!!!!!x  x  xxx             xx!!!!xyx!!xx!                   xxxxxxx                      ",
   "!!!!x x!!!!!!x         x!!!!!xx       x xx x xxxxxx!!!!!!xx   !                                       xxxx       ",
   "!!!!x x!!!!!!x         x!!!!!!xxx!!!xxxx!!!!!!!!!!!!!!!!!!xx    !                                     x            ",
   "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "    xxx                                                                                                       ",
   "                 xyx                                                                                          ",
   "                                                                             x   xx   xxxx   xxxxxxx          ",
   "                                        o                                   xx                                ",
   "        xx                                 xx                               xxx                      xxxx       ",
   "          xxx                       xx  xx                              xxxx                                   ",
   "              x x                xx   x                                                                       ",
   "                             xx        x                       xx x  xxx                                      ",
   "                                        x                                                                     ",
   "                   ooo    xxx          xxx                                                                    ",
   "                x xxxxx x              x x                 !!!x      x!!!  xxx                                ",
   "             o                          x x                 !x!x      x!x!                                     ",
   "             o                            xxx                x          x                                      ",
   "             o                            x                 x   oooo   x       xxx                            ",
   "             o                            x                 x          x      x!!!x                           ",
   "             o                            x                 xxxx    xxxx       xxx                            ",
   "                                        xx      x   x      x   yy                                           ",
   "         xxx  xxx                    x   xxxxxxxxx   xxxxxxxx              x x                               ",
   "                                      x   x           x                    x!!!x                              ",
   "           xxx                        x   x           x                     xxx                               ",
   "             xx                      xx   xx          x                                                       ",
   "               xx                     x   x= = = =    x            xxx                                        ",
   "                 xx                   x   x           x           x!!!x                                       ",
   "                  xx                  x   x    = = = =x     o      xxx       xxx                              ",
   "                   xx                xx   xx          x                     x!!!x                             ",
   "                     x xx x xx  o   o   x   x           x     x                xxv        xxx                   ",
   "                                      x   x           x              x                 x!!!x                  ",
   "                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
   "                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
   "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
   "                             xx           xx                                         xxx                      ",
   "  xxx                         x     x     x                                         x!!!x                xxx  ",
   "  x x                         x    xxx    x                                          xxx                 x x  ",
   "  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
   "  x                           x           x                              x   x                             x  ",
   "  x                           xx          x                              x x x                             x  ",
   "  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ",
   "  x                xxx             o o    x                              x         xxx                     x  ",
   "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
   "  x               oxxxo       x    xxx    x                             x x        xxx          xxx        x  ",
   "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ",
   "  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx           o        x         x  ",
   "  xxx  xxxxxx   xxxxxxxxx  xxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxx  xx  x x x   x xxxxxxxxxxxxxx  ",
   "                                                                                  x   x   x   x                ",
   "                                                                                  x           x                "],
  ["                                                                                  x     x     x    xxx x       ",
   "                                                                                   x         x         x       ",
   "                                                                                    x   o   x      xxxxx       ",
   "                                                                                     x     x       x           ",
   "                                                                                       xxx        x xxx       ",
   "                          o                                                                       x x x       ",
   "                                                                                             o o oxxx x       ",
   "                   xxx                                                  o            o    o            x       ",
   "       !  o  !    x     x                                       xx xx!xx!xx!x  xx!x x x!xx xx!x  xx!xxxxx       ",
   "       x     x   x       x                                  xx  x!o!x!x ! x!x   x!x   x!x   x!x o x!x           ",
   "       x= o  x    x       xx x                           xxx    xx x!xxx x!xxx x!xxx x!xxx x!xxx x!xxxxx       ",
   "       x     x      x          xx                       xxxx    !!  !x x!!!x x!x x x!  x x!  x x!  x x!    x       ",
   "       !  o  !        x   o    x                x  x            xx x x!x!x!x xxxxx!xxxxx!xxxxx!x  xx!x           ",
   "                        x   x   xx           x      x                                                         ",
   "          o              xxx   x  xx  xxx  x    o    x     xx                                                ",
   "                                              x     x                                                         ",
   "                                               x   x                                                          ",
   "                                                      xx                                                      ",
   "                   xxx         xxx                                                                            ",
   "                                                 o                                                            ",
   " o                         o                                                     x      x                      ",
   "                                                          xx     xx                                           ",
   " y         xxx         xxx         xxx                                 x                  x                 ",
   "   xx                                                                                                          ",
   "     x                                           o               ||                                           ",
   "  xxxxxxxxxxx                                                                                                 ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
   "  x         x   x       x   x       x   x                 ||                  x     x     x xx                ",
   "  x  o      xxxxx   o   xxxxx   o   xxxxx        o                                       x     x              ",
   "  xxxxxxx         x  xx  x     x    x           xx xx       xx     xx     xxx   xx xx     xx      x  o          ",
   "        x=!! !!xx  ! x!!x !   =  !!           =x   x                     xxx         x xx         xx  xx x x   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
