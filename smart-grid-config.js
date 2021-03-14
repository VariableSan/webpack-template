const smartgrid = require('smart-grid')

/* It's principal settings in smart grid project */
const settings = {
  outputStyle: 'scss',
  /* less || scss || sass || styl */
  columns: 12,
  /* number of grid columns */
  offset: '30px',
  /* gutter width px || % || rem */
  mobileFirst: false,
  /* mobileFirst ? 'min-width' : 'max-width' */
  container: {
    maxWidth: '1200px',
    /* max-width оn very large screen */
    fields: '15px' /* side fields */
  },
  breakPoints: {
    xl: {
      width: '1200px'
      /* -> @media (max-width: 1200px) */
    },
    lg: {
      width: '992px'
    },
    md: {
      width: '768px'
    },
    sm: {
      width: '576px'
    },
    xs: {
      width: '320px'
    }
    /*
		We can create any quantity of break points.

		some_name: {
			width: 'Npx',
			fields: 'N(px|%|rem)',
			offset: 'N(px|%|rem)'
		}
		*/
  },
  mixinNames: {
    container: 'container'
  }
}

smartgrid('./src/assets/sass/utils', settings)
