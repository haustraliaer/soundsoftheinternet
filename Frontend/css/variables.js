var vars = {}

// font family - update these when external fonts are setup
vars['sans'] = 'sans-serif'
vars['serif'] = 'serif'

// font sizes generally used on the html element and some mixins
vars['base_font_size'] = '16px'
vars['base_line_height'] = '1.3'

// font weights should be descriptive
vars['light'] = 300
vars['roman'] = 400
vars['regular'] = vars['roman']
vars['normal'] = vars['roman']
vars['medium'] = 500
vars['semibold'] = 600
vars['bold'] = 700

// Breakpoints
vars['portrait'] = '48em'    // based on ipad ~ 768px
vars['landscape'] = '64em'   // based on ipad ~ 1024px
vars['brand'] = '82em'
vars['laptop'] = '70em'

// literal colours
vars['green'] = '#C3F3BF'
vars['orange'] = '#F3CFA3'
vars['blue'] = '#61BEE6'
vars['light_grey'] = '#F8F7F7'
vars['medium_grey'] = '#b4b2ac'
vars['dark_grey'] = '#93918c'
vars['bronze'] = '#b89d7a'
vars['bronze_light'] = '#d9bea3'

// cool colours
vars['daves_green'] = '#80cf53'
vars['daves_orange'] = '#F6A83D'

// abstract colours
vars['foreground'] = vars['dark_grey']
vars['background'] = 'white'
vars['focus_color'] = vars['daves_green']
vars['alert_color'] = vars['daves_orange']
vars['positive_highlight'] = vars['bronze_light']



module.exports = vars
