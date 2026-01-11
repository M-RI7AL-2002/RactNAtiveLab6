import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

const menuItemsToDisplay = [
  {
    title: 'Sandwichs & Snacks',
    data: [
      { name: 'Bocadillo Poulet', price: '15 DH', isSpecial: true },
      { name: 'Bocadillo Thon', price: '12 DH' },
      { name: 'Tortilla Omelette', price: '8 DH' },
      { name: 'Tacos Viande', price: '20 DH', isSpecial: true },
      { name: 'Sandwich Kefta', price: '18 DH' },
      { name: 'Panini Fromage', price: '10 DH' },
    ],
  },
  {
    title: 'Spécialités Marocaines',
    data: [
      { name: 'Khobz & Kefta', price: '10 DH', isSpecial: true },
      { name: 'Msemen Farci', price: '12 DH' },
      { name: 'Harcha', price: '5 DH' },
      { name: 'Batbout Poulet', price: '14 DH' },
      { name: 'Maakouda Sandwich', price: '7 DH' },
    ],
  },
  {
    title: 'Accompagnements',
    data: [
      { name: 'Frites Maison', price: '5 DH' },
      { name: 'Salade Marocaine', price: '6 DH' },
      { name: 'Olives Assaisonnées', price: '4 DH' },
      { name: 'Khobz Chaud', price: '2 DH' },
    ],
  },
  {
    title: 'Desserts & Douceurs',
    data: [
      { name: 'Chebakia', price: '5 DH', isSpecial: true },
      { name: 'Baghrir', price: '4 DH' },
      { name: 'Sellou', price: '6 DH' },
      { name: 'Msemen Sucré', price: '5 DH' },
    ],
  },
];

const Item = ({ name, price, isSpecial }) => (
  <View style={[styles.itemRow, isSpecial && styles.specialItem]}>
    <Text style={styles.itemText}>{name}</Text>
    <Text style={styles.itemPrice}>{price}</Text>
    {isSpecial && <View style={styles.badge}><Text style={styles.badgeText}>⭐ Populaire</Text></View>}
  </View>
);

export default function MenuItems() {
  const renderItem = ({ item }) => (
    <Item name={item.name} price={item.price} isSpecial={item.isSpecial} />
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  const Separator = () => <View style={styles.separator} />;

  const ListFooter = () => (
    <Text style={styles.listFooterText}>
      © 2026 My Restaurant · Tous droits réservés
    </Text>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={ListFooter}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F0',
    paddingHorizontal: 12,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: '700',
    color: '#B45309',
    backgroundColor: '#FFE8C0',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#FFF8E7',
    marginVertical: 4,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    position: 'relative',
  },
  specialItem: {
    backgroundColor: '#FFF3C4',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#D97706',
  },
  badge: {
    marginLeft: 8,
    backgroundColor: '#FFD580',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#B45309',
  },
  separator: {
    height: 0,
  },
  listFooterText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginTop: 20,
    marginBottom: 30,
  },
});
