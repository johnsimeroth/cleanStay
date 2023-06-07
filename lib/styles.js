import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  // generic container-y things
  safe: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paddedView: {
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height: 80,
  },
  gridCol: {
    flex: 1,
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  gridRow: {
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 50,
    paddingTop: 10,
  },
  scrollView: {
    marginHorizontal: 0,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomColor: '#5e5e5e',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginTop: 10,
  },
  bottomCenterFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  // text
  big1: {
    color: '#fff',
    fontFamily: 'Helvetica Neue',
    fontSize: 90,
    fontWeight: '900',
  },
  big2: {
    color: '#fff',
    fontFamily: 'Helvetica Neue',
    fontSize: 26,
    fontWeight: '700',
  },
  big3: {
    color: '#fff',
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '200',
    textAlign: 'center',
  },
  big4: {
    color: '#fff',
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    paddingBottom: 20,
  },
  big5: {
    color: '#fff',
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '400',
  },
  small1: {
    color: '#d5d5d5',
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '300',
  },
  // visual elements
  navBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '0%',
    height: '10%',
    width: '100%',
    backgroundColor: 'rgba(0, 30, 44, .95)'
  },
  timelineBar: {
    height: 5,
    backgroundColor: '#929292',
    width: '100%',
  },
  priorityCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  modal: {
    padding: 20,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 40,
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white',
    borderColor: '#a9a9a9',
    backgroundColor: '#1a1a1a',
  },
  focus: {
    borderColor: '#00a2ff',
    borderRadius: 5,
  },
});


// {
//   "colors": {
//     "primary": "rgb(0, 98, 157)",
//     "onPrimary": "rgb(255, 255, 255)",
//     "primaryContainer": "rgb(207, 229, 255)",
//     "onPrimaryContainer": "rgb(0, 29, 52)",
//     "secondary": "rgb(82, 96, 112)",
//     "onSecondary": "rgb(255, 255, 255)",
//     "secondaryContainer": "rgb(213, 228, 247)",
//     "onSecondaryContainer": "rgb(14, 29, 42)",
//     "tertiary": "rgb(105, 87, 121)",
//     "onTertiary": "rgb(255, 255, 255)",
//     "tertiaryContainer": "rgb(240, 219, 255)",
//     "onTertiaryContainer": "rgb(35, 21, 50)",
//     "error": "rgb(186, 26, 26)",
//     "onError": "rgb(255, 255, 255)",
//     "errorContainer": "rgb(255, 218, 214)",
//     "onErrorContainer": "rgb(65, 0, 2)",
//     "background": "rgb(252, 252, 255)",
//     "onBackground": "rgb(26, 28, 30)",
//     "surface": "rgb(252, 252, 255)",
//     "onSurface": "rgb(26, 28, 30)",
//     "surfaceVariant": "rgb(222, 227, 235)",
//     "onSurfaceVariant": "rgb(66, 71, 78)",
//     "outline": "rgb(114, 119, 127)",
//     "outlineVariant": "rgb(194, 199, 207)",
//     "shadow": "rgb(0, 0, 0)",
//     "scrim": "rgb(0, 0, 0)",
//     "inverseSurface": "rgb(47, 48, 51)",
//     "inverseOnSurface": "rgb(241, 240, 244)",
//     "inversePrimary": "rgb(153, 203, 255)",
//     "elevation": {
//       "level0": "transparent",
//       "level1": "rgb(239, 244, 250)",
//       "level2": "rgb(232, 240, 247)",
//       "level3": "rgb(224, 235, 244)",
//       "level4": "rgb(222, 234, 243)",
//       "level5": "rgb(217, 230, 241)"
//     },
//     "surfaceDisabled": "rgba(26, 28, 30, 0.12)",
//     "onSurfaceDisabled": "rgba(26, 28, 30, 0.38)",
//     "backdrop": "rgba(44, 49, 55, 0.4)"
//   }
// }

// {
//   "colors": {
//     "primary": "rgb(153, 203, 255)",
//     "onPrimary": "rgb(0, 51, 85)",
//     "primaryContainer": "rgb(0, 74, 120)",
//     "onPrimaryContainer": "rgb(207, 229, 255)",
//     "secondary": "rgb(185, 200, 218)",
//     "onSecondary": "rgb(36, 50, 64)",
//     "secondaryContainer": "rgb(58, 72, 87)",
//     "onSecondaryContainer": "rgb(213, 228, 247)",
//     "tertiary": "rgb(212, 190, 230)",
//     "onTertiary": "rgb(57, 42, 73)",
//     "tertiaryContainer": "rgb(80, 64, 96)",
//     "onTertiaryContainer": "rgb(240, 219, 255)",
//     "error": "rgb(255, 180, 171)",
//     "onError": "rgb(105, 0, 5)",
//     "errorContainer": "rgb(147, 0, 10)",
//     "onErrorContainer": "rgb(255, 180, 171)",
//     "background": "rgb(26, 28, 30)",
//     "onBackground": "rgb(226, 226, 229)",
//     "surface": "rgb(26, 28, 30)",
//     "onSurface": "rgb(226, 226, 229)",
//     "surfaceVariant": "rgb(66, 71, 78)",
//     "onSurfaceVariant": "rgb(194, 199, 207)",
//     "outline": "rgb(140, 145, 153)",
//     "outlineVariant": "rgb(66, 71, 78)",
//     "shadow": "rgb(0, 0, 0)",
//     "scrim": "rgb(0, 0, 0)",
//     "inverseSurface": "rgb(226, 226, 229)",
//     "inverseOnSurface": "rgb(47, 48, 51)",
//     "inversePrimary": "rgb(0, 98, 157)",
//     "elevation": {
//       "level0": "transparent",
//       "level1": "rgb(32, 37, 41)",
//       "level2": "rgb(36, 42, 48)",
//       "level3": "rgb(40, 47, 55)",
//       "level4": "rgb(41, 49, 57)",
//       "level5": "rgb(44, 53, 62)"
//     },
//     "surfaceDisabled": "rgba(226, 226, 229, 0.12)",
//     "onSurfaceDisabled": "rgba(226, 226, 229, 0.38)",
//     "backdrop": "rgba(44, 49, 55, 0.4)"
//   }
// }


// {
//   "primary": {
//     "50": "#bfe8ff",
//     "100": "#8fd6ff",
//     "200": "#5fc5ff",
//     "300": "#30b3ff",
//     "400": "#00a2ff",
//     "500": "#088ddb",
//     "600": "#0e7ab8",
//     "700": "#126798",
//     "800": "#14547a",
//     "900": "#14435d"
//   }
// }
