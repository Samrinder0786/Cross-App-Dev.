import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to CPAN 213</Text>
          <Text style={styles.subtitle}>Cross-Platform Mobile App Development</Text>
        </View>

        <View style={styles.profileSection}>
          <Image
            source={{uri: 'https://via.placeholder.com/150/3498db/ffffff?text=SS'}}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.greeting}>Hello, I'm Samrinder Singh!</Text>
            <Text style={styles.info}>Student ID: [N01725645]</Text>
            <Text style={styles.info}>Program: Computer Programming and Analysis</Text>
          </View>
        </View>

        <View style={styles.courseInfo}>
          <Text style={styles.sectionTitle}>About This Course</Text>
          <Text style={styles.courseDescription}>
            CPAN 213 focuses on building cross-platform mobile applications using React Native. 
            Students learn to develop apps that work on both iOS and Android with a single codebase.
          </Text>
        </View>

        <View style={styles.goals}>
          <Text style={styles.sectionTitle}>My Course Goals:</Text>
          <View style={styles.goalItem}>
            <Text style={styles.goalIcon}>📱</Text>
            <Text style={styles.goal}>Learn React Native fundamentals</Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalIcon}>🔀</Text>
            <Text style={styles.goal}>Build cross-platform mobile apps</Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalIcon}>🔄</Text>
            <Text style={styles.goal}>Master state management with Redux</Text>
          </View>
          <View style={styles.goalItem}>
            <Text style={styles.goalIcon}>🚀</Text>
            <Text style={styles.goal}>Deploy apps to app stores</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    backgroundColor: '#3498db',
    padding: 25,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
    marginBottom: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#3498db',
  },
  profileInfo: {
    marginLeft: 15,
    flex: 1,
  },
  greeting: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 3,
  },
  courseInfo: {
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseDescription: {
    fontSize: 16,
    color: '#34495e',
    lineHeight: 22,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  goals: {
    padding: 20,
    marginHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
    paddingBottom: 8,
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
  },
  goalIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  goal: {
    fontSize: 16,
    color: '#34495e',
    flex: 1,
  },
});

export default App;