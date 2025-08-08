import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import casual_dog from './assets/casual_dog.png';
import Google from './assets/Google.png';
 
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={casual_dog} />
 
      <Text style={styles.title}>Ótimo dia!</Text>
      <Text style={styles.subtitle}>Como deseja acessar?</Text>
 
      <TouchableOpacity style={styles.button}>
        <Image source={Google} style={styles.icon}/>
        <Text style={styles.buttonText}>Como deseja acessar?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText2}>Outras opções</Text>
      </TouchableOpacity>
 
 
      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#43d38d',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#43d38d',
    width: 300,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    flexDirection: 'row',
    marginBottom: 10
  },
  button2: {
    backgroundColor: '#fffff',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#43d38d',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  buttonText2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6d6d6d',
    textAlign: 'center',
    marginLeft: 10
  },
  icon: {
    width: 20,  
    height: 20,
    flexDirection: 'row',
    resizeMode: 'contain',
  },
});