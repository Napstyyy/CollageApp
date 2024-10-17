import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const Card: React.FC = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImage}>
        <Image
          source={require('@/assets/images/pruebaHorizontal.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.cardText}>
        <Text style={styles.text}>Evento semana cultural</Text>
        <Text style={styles.text}>Para los grados decimo y once</Text>
      </View>

      <View style={styles.cardFooter1}>
        <View style={styles.leftIcons}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={22} color={Colors.icons.default} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.commentIcon}>
            <FontAwesome5 name="comment-alt" size={20} color={Colors.icons.default} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <SimpleLineIcons name="options-vertical" size={22} color={Colors.icons.default} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 0.4,
    width: '100%',
    backgroundColor: Colors.background.main,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  cardImage: {
    paddingTop: 8,
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cardText: {
    flex: 0.2,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B4B2B2',
  },
  cardFooter1: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  leftIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentIcon: {
    marginLeft: 16,
  },
});

export default Card;
