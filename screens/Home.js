import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Search from './searchbar';
import Svg, { Path, Circle, Polygon, Rect, Ellipse } from 'react-native-svg';

export default function Home({navigation}) {

  return (
    <View style={globalStyles.container}>
    <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={globalStyles.row}></View>
      <View style={styles.header}>
        <View style={styles.text}>
          <Text style={{color:'white',fontSize:10,}}>Hi </Text>
          <Text style={{color:'white',fontSize:18,}}>Praveen Sharma</Text>
        </View>
        <View style={styles.userimage}>
        <Image source={require('../assets/jelly.jpg')}  style={{width: 40, height: 40, borderRadius: 40/ 2}} />
        </View>
      </View>
      <View style={globalStyles.boxLarge}>
        <Search/>
        <View style={globalStyles.row}></View>
        <Text style={globalStyles.text}>What are you looking for</Text>
        <Text style={{color:'white',fontSize:22,marginBottom:10,}}>Start Growing with Us</Text>
        <Svg height="300" width="300" viewBox="0 0 826 600">
         <Path d="M266.56473,572.513l-1.30115-1.51825c11.00915-9.43521,24.7108-21.17709,29.83928-36.69659,5.0555-15.29892,1.25254-33.7688-9.92482-48.20211-9.51229-12.28383-24.20053-21.95671-42.47664-27.97352-3.60489-1.18686-7.34772-2.241-10.96747-3.26081-8.74923-2.46423-17.79646-5.01294-25.80868-9.67057-11.03532-6.41528-21.05875-19.01629-18.57493-32.706a23.85568,23.85568,0,0,1,17.15589-18.50774l.532,1.92821a21.8606,21.8606,0,0,0-15.72264,16.95071c-2.30809,12.72161,7.18337,24.54137,17.61492,30.606,7.7931,4.53013,16.71634,7.04369,25.34567,9.47438,3.64019,1.02537,7.40461,2.08584,11.0509,3.28624,18.65633,6.142,33.675,16.04819,43.43219,28.64827,11.57926,14.95243,15.50414,34.13231,10.24266,50.0547C291.69857,550.97374,277.76271,562.91709,266.56473,572.513Z" transform="translate(-186.96827 -282.49498)" fill="#f1f1f1"/><Ellipse cx="217.32716" cy="393.29557" rx="17.5" ry="8.5" transform="translate(-265.12435 -227.72882) rotate(-12.19172)" fill="#f1f1f1"/><Ellipse cx="242.83769" cy="445.076" rx="17.5" ry="8.5" transform="translate(-275.48417 -221.17357) rotate(-12.19172)" fill="#f1f1f1"/><Ellipse cx="213.46006" cy="460.63089" rx="17.5" ry="8.5" transform="translate(-279.43168 -227.02683) rotate(-12.19172)" fill="#f1f1f1"/><Rect x="272.22557" y="178.20395" width="2" height="6" fill="#e5e5e5"/><Path d="M461.19384,594.53878h-2V581.7546h2Zm0-25.56787h-2V556.18673h2Zm0-25.56836h-2V530.61886h2Zm0-25.56787h-2V505.0505h2Zm0-25.56787h-2V479.48263h2Z" transform="translate(-186.96827 -282.49498)" fill="#e5e5e5"/><Rect x="272.22557" y="324.82798" width="2" height="6" fill="#e5e5e5"/><Rect x="491.22557" y="178.20395" width="2" height="6" fill="#e5e5e5"/><Path d="M680.19384,594.53878h-2V581.7546h2Zm0-25.56787h-2V556.18673h2Zm0-25.56836h-2V530.61886h2Zm0-25.56787h-2V505.0505h2Zm0-25.56787h-2V479.48263h2Z" transform="translate(-186.96827 -282.49498)" fill="#e5e5e5"/><Rect x="491.22557" y="324.82798" width="2" height="6" fill="#e5e5e5"/><Rect x="601.69529" y="60.82798" width="2" height="6" fill="#e5e5e5"/><Path d="M790.66356,595.03732h-2V582.75167h2Zm0-24.57129h-2V558.17989h2Zm0-24.57178h-2V533.6086h2Zm0-24.57129h-2V509.03732h2Zm0-24.57129h-2V484.46554h2Zm0-24.57178h-2V459.89425h2Zm0-24.57129h-2V435.323h2Zm0-24.57128h-2V410.75167h2Zm0-24.57178h-2V386.17989h2Zm0-24.57129h-2V361.6086h2Z" transform="translate(-186.96827 -282.49498)" fill="#e5e5e5"/><Rect x="601.69529" y="324.82798" width="2" height="6" fill="#e5e5e5"/><Rect x="711.06346" y="12.82798" width="2" height="6" fill="#e5e5e5"/><Path d="M900.03173,595.08321h-2V582.843h2Zm0-24.48h-2V558.363h2Zm0-24.48h-2V533.883h2Zm0-24.48h-2V509.403h2Zm0-24.48h-2V484.92306h2Zm0-24.48h-2V460.44308h2Zm0-24.48h-2V435.9631h2Zm0-24.48h-2V411.48312h2Zm0-24.48h-2V387.00314h2Zm0-24.48h-2V362.52316h2Zm0-24.48h-2V338.04317h2Zm0-24.48h-2V313.56319h2Z" transform="translate(-186.96827 -282.49498)" fill="#e5e5e5"/><Rect x="711.06346" y="324.82798" width="2" height="6" fill="#e5e5e5"/><Rect x="382.22557" y="97.82798" width="2" height="6" fill="#e5e5e5"/><Path d="M571.19384,595.69161h-2V584.06026h2Zm0-23.26318h-2V560.79708h2Zm0-23.26318h-2V537.5339h2Zm0-23.26319h-2V514.27071h2Zm0-23.26318h-2V491.00753h2Zm0-23.26319h-2V467.74435h2Zm0-23.26318h-2V444.48116h2Zm0-23.26318h-2V421.218h2Zm0-23.26319h-2V397.9548h2Z" transform="translate(-186.96827 -282.49498)" fill="#e5e5e5"/><Rect x="382.22557" y="324.82798" width="2" height="6" fill="#e5e5e5"/><Path d="M1010.95959,616.10888H348.83879a2.07224,2.07224,0,0,1-2.07214-2.07214V296.68223a2.07214,2.07214,0,0,1,4.14427,0V611.96461h660.04867a2.07214,2.07214,0,1,1,0,4.14427Z" transform="translate(-186.96827 -282.49498)" fill="#3f3d56"/><Polygon points="493.134 180.989 383.049 98.534 274.468 179.862 271.983 176.545 383.049 93.355 492.61 175.418 601.484 56.274 601.921 56.097 711.744 11.848 713.293 15.693 603.907 59.765 493.134 180.989" fill="#3f3d56"/><Circle cx="273.22566" cy="178.2037" r="12.43282" fill="skyblue"/><Circle cx="383.04887" cy="97.39039" r="12.43282" fill="skyblue"/><Circle cx="492.87208" cy="178.2037" r="12.43282" fill="#e5e5e5"/><Circle cx="489.87208" cy="222.2037" r="12.43282" fill="skyblue"/><Circle cx="602.69529" cy="58.01981" r="12.43282" fill="skyblue"/><Circle cx="712.51849" cy="12.43282" r="12.43282" fill="skyblue"/><Ellipse cx="339.07659" cy="523.38032" rx="21.53369" ry="6.76007" transform="translate(-457.83786 370.75274) rotate(-69.08217)" fill="#2f2e41"/><Circle cx="112.30113" cy="273.40747" r="43.06735" fill="#2f2e41"/><Rect x="92.67552" y="307.20707" width="13.08374" height="23.44171" fill="#2f2e41"/><Rect x="118.84299" y="307.20707" width="13.08374" height="23.44171" fill="#2f2e41"/><Ellipse cx="103.57867" cy="330.92135" rx="10.90314" ry="4.08868" fill="#2f2e41"/><Ellipse cx="129.74615" cy="330.3762" rx="10.90314" ry="4.08868" fill="#2f2e41"/><Circle cx="113.39147" cy="262.50425" r="14.71921" fill="#fff"/><Circle cx="113.39146" cy="262.50425" r="4.90643" fill="#3f3d56"/><Path d="M257.49267,515.85093c-3.47748-15.57379,7.63867-31.31042,24.82861-35.1488s33.94422,5.67511,37.4217,21.24884-7.91492,21.31763-25.10486,25.156S260.97015,531.42479,257.49267,515.85093Z" transform="translate(-186.96827 -282.49498)" fill="#e6e6e6"/><Ellipse cx="250.76125" cy="535.91894" rx="6.76007" ry="21.53369" transform="translate(-527.88327 250.3368) rotate(-64.62574)" fill="#2f2e41"/><Path d="M278.11489,571.43931c0,4.21515,10.85328,12.53858,22.89658,12.53858s23.33514-11.867,23.33514-16.08209-11.29193.81774-23.33514.81774S278.11489,567.22416,278.11489,571.43931Z" transform="translate(-186.96827 -282.49498)" fill="#fff"/><Circle cx="437.43059" cy="266.55376" r="43.06733" fill="#2f2e41"/><Rect x="417.80497" y="300.35345" width="13.08374" height="23.44171" fill="#2f2e41"/><Rect x="443.97246" y="300.35345" width="13.08373" height="23.44171" fill="#2f2e41"/><Ellipse cx="614.67632" cy="609.56272" rx="4.08868" ry="10.90314" transform="translate(-380.98869 635.94194) rotate(-65.66457)" fill="#2f2e41"/><Ellipse cx="639.84386" cy="608.01756" rx="4.08868" ry="10.90314" transform="translate(-373.54441 635.54758) rotate(-64.10219)" fill="#2f2e41"/><Path d="M582.62211,508.99744c-3.47748-15.57379,7.63865-31.31042,24.82866-35.1488s33.94421,5.67511,37.42169,21.2489-7.91492,21.31769-25.10486,25.156S586.0996,524.57124,582.62211,508.99744Z" transform="translate(-186.96827 -282.49498)" fill="skyblue"/><Ellipse cx="665.50252" cy="524.92757" rx="23.89244" ry="7.50055" transform="translate(-363.18854 342.1587) rotate(-45.0221)" fill="#2f2e41"/><Ellipse cx="581.79716" cy="564.92757" rx="23.89244" ry="7.50055" transform="translate(-300.4362 699.8503) rotate(-75.1366)" fill="#2f2e41"/>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'#000000',
    borderRadius: 20,
    padding: 15,
    marginHorizontal:15,
  },
  userimage:{
    borderWidth:3,
    borderColor:'skyblue',
    borderRadius:30,
  },
});