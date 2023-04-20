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
});