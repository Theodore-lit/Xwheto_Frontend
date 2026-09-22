import { Button, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '@/app/navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

export function RegisterScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <Text style={styles.subtitle}>Écran provisoire</Text>

      <Button
        title="Continuer vers l'OTP"
        onPress={() => navigation.navigate('Otp', { identifier: '+22900000000' })}
      />
      <View style={styles.gap}>
        <Button title="Retour à la connexion" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: '700' },
  subtitle: { marginBottom: 24, color: '#666' },
  gap: { marginTop: 16 },
});


