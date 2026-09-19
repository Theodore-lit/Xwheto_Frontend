import { Button, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '@/app/navigation/types';
import { useSessionStore } from '@/shared/store/sessionStore';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  const setTokens = useSessionStore((s) => s.setTokens);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <Text style={styles.subtitle}>Écran provisoire</Text>

      <Button title="Créer un compte" onPress={() => navigation.navigate('Register')} />

      {/* TEMPORAIRE : simule une connexion pour tester la bascule vers l'app.
          À supprimer quand le vrai formulaire (React Hook Form + Zod) sera en place. */}
      <View style={styles.gap}>
        <Button title="[DEV] Simuler connexion" onPress={() => setTokens('fake-access', 'fake-refresh')} />
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