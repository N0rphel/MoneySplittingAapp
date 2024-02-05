
import { StyleSheet, View } from 'react-native';
import Hero from './pages/Hero';

export default function App() {
  return (
    <View style={styles.container}>
      <Hero/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5FA',
    padding: 0,
    marginTop: 30,
  },
});
