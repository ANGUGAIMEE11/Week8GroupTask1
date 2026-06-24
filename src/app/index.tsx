import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const menuItems = [
  { id: '1', category: 'Hot Drinks', name: 'Americano' },
  { id: '2', category: 'Hot Drinks', name: 'Cappuccino' },
  { id: '3', category: 'Hot Drinks', name: 'Latte' },
  { id: '4', category: 'Cold Drinks', name: 'Iced Coffee' },
  { id: '5', category: 'Cold Drinks', name: 'Frappuccino' },
  // Added 3 new items to the menu and 1 new category
  { id: '6', category: 'Pastries', name: 'Cheesecake' },
  { id: '7', category: 'Pastries', name: 'Brownie' },
  { id: '8', category: 'Pastries', name: 'Croissant' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>☕ My Café Menu</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Pressable
              style={styles.button}
              onPress={() => console.log(`Viewed: ${item.name} (${item.category})`)}
            >
              <Text style={styles.buttonText}>View Item</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 }, 
  heading: { fontSize: 24, marginBottom: 20 }, 
  item: { marginBottom: 16, borderBottomWidth: 1, borderBottomColor: '#333', paddingBottom: 12 },
  category: { fontSize: 12, color: '#888' },
  name: { fontSize: 18, marginBottom: 8 },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  buttonText: { color: '#000', fontWeight: '600' },
});