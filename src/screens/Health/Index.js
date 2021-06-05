/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CHeaderPage from '../../components/CHeaderPage';
import listFunctionHealth from '../../dataFunction/dataFunctionHealth';
import { Colors } from '../../themes/index';
import CFunctionHealth from '../../components/CFunctionHealth';
import DisplayedText from '../../components/displayedText';

export default function Health() {
  return (
    <View>
      <CHeaderPage />
      <ScrollView>
        <View style={styles.contentPageHealth}>
          <View style={styles.functionsContainer}>
            {listFunctionHealth.map((item) => (
              <CFunctionHealth
                index={item.id}
                title={item.title}
                icon={item.icon}
                colorBackground={item.backgroundColor}
                i18nKey = {item.i18nKey}
              />
            ))}
          </View>
          <View style={styles.content}>
            <View style={styles.headerPost}>
              <Image
                source={require('../../assets/image/doctor.jpeg')}
                style={styles.imageBackgroundItem}
              />
              <DisplayedText i18nKey='Start-checking-your-health' styleText={styles.textImage} />
            </View>
            <View style={styles.contentPost}>
              <View style={[styles.post, { borderRightWidth: 1 }]}>
                <DisplayedText i18nKey={'General-check-up'} styleText={styles.titlePost} />
                <DisplayedText i18nKey={'Monitor-your-health'} styleText={styles.subTitlePost} />
                <View style={{ alignItems: 'center', marginRight: 8 }}>
                  <TouchableOpacity style={styles.functionPost}>
                    <DisplayedText i18nKey={'start'} styleText={{ marginTop: 5, color: Colors.white }} />
                    {/* <Text style={{ marginTop: 5, color: Colors.white }}> Bắt đầu </Text> */}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.post, { marginLeft: 5 }]}>
                <DisplayedText i18nKey={'Check-for-symptoms'} styleText={styles.titlePost} />
                <DisplayedText i18nKey={'Press-the-start-button-for-advice'} styleText={styles.subTitlePost} />
                <View style={{ alignItems: 'center', marginRight: 8 }}>
                  <TouchableOpacity style={styles.functionPost}>
                    <DisplayedText i18nKey={'start'} styleText={{ marginTop: 5, color: Colors.white }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.content, { marginBottom: 100 }]}>
            <View style={styles.headerPost}>
              <Image
                source={require('../../assets/image/health.jpeg')}
                style={styles.imageBackgroundItem}
              />
              <DisplayedText i18nKey='Start-checking-your-health' styleText={styles.textImage} />
            </View>
            <View style={styles.contentPost}>
              <View style={[styles.post, { borderRightWidth: 1 }]}>
                <DisplayedText i18nKey={'General-check-up'} styleText={styles.titlePost} />
                <DisplayedText i18nKey={'Monitor-your-health'} styleText={styles.subTitlePost} />
                <View style={{ alignItems: 'center', marginRight: 8 }}>
                  <TouchableOpacity style={styles.functionPost}>
                    <DisplayedText i18nKey={'start'} styleText={{ marginTop: 5, color: Colors.white }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.post, { marginLeft: 5 }]}>
                <DisplayedText i18nKey={'Check-for-symptoms'} styleText={styles.titlePost} />
                <DisplayedText i18nKey={'Press-the-start-button-for-advice'} styleText={styles.subTitlePost} />
                <View style={{ alignItems: 'center', marginRight: 8 }}>
                  <TouchableOpacity style={styles.functionPost}>
                    <DisplayedText i18nKey={'start'} styleText={{ marginTop: 5, color: Colors.white }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  contentPageHealth: {
    marginLeft: 15,
    marginRight: 15,
  },
  functionsContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    marginTop: 20,
    backgroundColor: '#DEE9F0',
    borderRadius: 10,
  },
  headerPost: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  imageBackgroundItem: {
    height: 140,
    width: Dimensions.get('window').width - 50,
    borderRadius: 10,
  },
  textImage: {
    position: 'absolute',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    top: 50,
    left: 35,
    right: 35,
    height: 80,
    fontSize: 20,
    color: Colors.white,
  },
  contentPost: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  post: {
    width: Dimensions.get('window').width / 2 - 30,
  },
  titlePost: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.black,
  },
  subTitlePost: {
    marginTop: 10,
    fontSize: 13,
  },
  functionPost: {
    marginTop: 25,
    height: 35,
    width: 100,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
});
