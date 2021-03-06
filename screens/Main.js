import {
  Body,
  Button,
  Container,
  Header,
  Left,
  Right,
  ScrollableTab,
  Tab,
  TabHeading,
  Tabs,
  View,
} from "native-base";
import React from "react";
import { Image, StyleSheet, Text, Dimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { MaterialIcons } from "@expo/vector-icons";

import {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Hundred,
  Thousand,
  TenThousand,
  Yen,
  Mouth,
  Eye,
} from "../lessons/Lesson1";
import {
  Day,
  Month,
  Fire,
  Water,
  Tree,
  Gold,
  Soil,
  Weekday,
  Book,
  Person,
  Now,
  Temple,
  Time,
  Half,
  Sword,
  Minute,
} from "../lessons/Lesson2";
import {
  Up,
  Down,
  Middle,
  Outside,
  RightKanji,
  LeftKanji,
  Before,
  Back,
  Noon,
  Gate,
  Between,
  East,
  West,
  South,
  North,
} from "../lessons/Lesson3";
import {
  RiceField,
  Power,
  Man,
  Woman,
  Child,
  Learning,
  Birth,
  Ahead,
  What,
  Father,
  Mother,
  Year,
  Past,
  Every,
  King,
  Country,
} from "../lessons/Lesson4";
import {
  See,
  Go,
  Rice,
  Come,
  Good,
  Eat,
  Drink,
  Meet,
  Ear,
  Listen,
  Say,
  Speak,
  Stand,
  Wait,
  Week,
} from "../lessons/Lesson5";
import {
  Big,
  Small,
  High,
  Cheap,
  New,
  Old,
  Origin,
  Spirit,
  Many,
  Little,
  Spacious,
  Early,
  Long,
  Bright,
  Like,
  Friend,
} from "../lessons/Lesson6";
import {
  Enter,
  Exit,
  City,
  Town,
  Village,
  Rain,
  Electricity,
  Car,
  Horse,
  Station,
  Company,
  School,
  Shop,
  Silver,
  Sick,
  Institution,
} from "../lessons/Lesson7";
import {
  Rest,
  Run,
  GetUp,
  Shellfish,
  Buy,
  Sell,
  Read,
  Write,
  Return,
  MakeEfforts,
  Bow,
  Insect,
  Strong,
  Hold,
  Name,
  Word,
} from "../lessons/Lesson8";
import {
  Spring,
  Summer,
  Autumn,
  Winter,
  Morning,
  Daytime,
  EarlyEvening,
  Direction,
  Evening,
  Night,
  Heart,
  Hand,
  Foot,
  BodyKanji,
  Neck,
  Road,
} from "../lessons/Lesson9";
import {
  Mountain,
  River,
  SmallForest,
  Forest,
  Sky,
  Sea,
  Change,
  Flower,
  Heaven,
  Red,
  Blue,
  White,
  Black,
  Color,
  Fish,
  Dog,
} from "../lessons/Lesson10";

const dimension = Dimensions.get("window");

export const MeaningComponent = () => {
  return (
    <View>
      <Text style={styles.desTitleStyle}>Meaning:</Text>
    </View>
  );
};

export const meaning = "Meaning:";
export const onyomi = "Onyomi:";
export const kunyomi = "Kunyomi:";
export const strokeCount = "Stroke Count:";
export const vocabulary = "Vocabulary:";

export const meaningTab = "\t\t\t\t\t\t\t\t\t\t";
export const onyomiTab = "\t\t\t\t\t\t\t\t\t\t\t";
export const kunyomiTab = "\t\t\t\t\t\t\t\t\t\t";
export const strokeCountTab = "\t\t\t\t\t";
export const vocabularyTab = "\t\t\t\t\t\t\t";

// export const onyomi = "Onyomi:";
// export const kunyomi = "Kunyomi:";

export const StrokeAndExampleComponent = () => {
  return (
    <View style={styles.desTitleContainer}>
      <Text style={styles.desTitleStyle}>Stroke Count:</Text>
      <Text style={styles.desTitleStyle}>Vocabulary:</Text>
    </View>
  );
};

function Main({ navigation }) {
  return (
    <Container>
      <Header style={styles.header} hasTabs>
        <Left style={styles.headerLeft}>
          <Svg width="100" height="50">
            <Circle
              cx="20"
              cy="25"
              r="17"
              stroke="#bf00ff"
              fill="transparent"
            />
            <Text style={styles.watermark}>;M;</Text>
          </Svg>
        </Left>
        <Body>
          <Text style={styles.title}>Kanji</Text>
          <Text style={[styles.title, { fontSize: 15 }]}>N5</Text>
        </Body>
        <Right>
          <Button
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              width: 80,
            }}
            rounded
            onPress={() => navigation.navigate("Draw")}
          >
            <Text style={styles.tryText}>Draw????</Text>
          </Button>
        </Right>
      </Header>
      <Tabs tabBarPosition="bottom" renderTabBar={() => <ScrollableTab />}>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <One />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Two />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Three />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Four />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Five />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Six />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Seven />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Eight />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Nine />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Ten />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Hundred />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Thousand />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <TenThousand />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Yen />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Mouth />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Eye />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Day />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Month />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Fire />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Water />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Tree />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Gold />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Soil />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Weekday />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Book />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Person />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Now />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Temple />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Time />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Half />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Sword />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Minute />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Up />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Down />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Middle />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Outside />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <RightKanji />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <LeftKanji />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Before />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Back />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Noon />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Gate />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Between />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <East />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <West />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <South />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <North />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <RiceField />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Power />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Man />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Woman />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Child />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Learning />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Birth />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Ahead />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <What />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Father />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Mother />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Year />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Past />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Every />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <King />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Country />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <See />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Go />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Rice />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Come />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Good />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Eat />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Drink />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Meet />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Ear />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Listen />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Say />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Speak />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Stand />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Wait />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Week />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Big />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Small />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <High />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Cheap />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <New />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Old />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Origin />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Spirit />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Many />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Little />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Spacious />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Early />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Long />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Bright />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Like />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Friend />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Enter />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Exit />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <City />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Town />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Village />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Rain />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Electricity />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Car />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Horse />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Station />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Company />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <School />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Shop />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Silver />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Sick />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Institution />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Rest />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Run />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <GetUp />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Shellfish />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Buy />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Sell />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Read />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Write />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Return />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <MakeEfforts />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Bow />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Insect />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Strong />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Hold />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Name />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Word />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Spring />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Summer />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Autumn />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Winter />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Morning />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Daytime />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <EarlyEvening />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Direction />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Evening />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Night />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Heart />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Hand />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Foot />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <BodyKanji />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Neck />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Road />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Mountain />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <River />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <SmallForest />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Forest />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Sky />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Sea />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Change />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Flower />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Heaven />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Red />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Blue />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <White />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Black />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Color />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Fish />
        </Tab>
        <Tab
          heading="???"
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}
        >
          <Dog />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#616161" }}>
              <MaterialIcons name="feedback" size={24} color="#ffe600" />
            </TabHeading>
          }
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 250,
                height: 250,
              }}
            >
              <Image
                source={require("../assets/N5Kanji/Feedback.gif")}
                style={styles.image}
              />
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: 200,
              justifyContent: "center",
            }}
          >
            <Text style={[styles.title, { textAlign: "center" }]}>
              If you have any feedback for this app, please send it to
              "myomyatmin01@gmail.com"
            </Text>
          </View>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Main;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#ffe600",
    height: 65,
  },
  title: {
    color: "#616161",
    fontSize: 20,
    fontWeight: "bold",
  },
  watermark: {
    color: "#bf00ff",
    fontSize: 15,
    top: 15,
    left: 10,
  },
  headerLeft: {
    margin: 0,
  },
  tryButton: {
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  tryText: {
    fontSize: 15,
    color: "#616161",
  },
  image: {
    width: "98%",
    height: "98%",
  },
  tabStyle: {
    backgroundColor: "#fff",
  },
  activeTabStyle: {
    backgroundColor: "#ffe600",
  },
  textStyle: {
    color: "#000",
  },
  activeTextStyle: {
    color: "#000",
  },
  imageContainer: {
    backgroundColor: "#bfbfbf",
    width: 200,
    height: 200,
    alignSelf: "center",
    top: 30,
  },
  descriptionContainer: {
    width: "100%",
    height: dimension.height - 400,
    // backgroundColor: "#fcdbff",
    position: "absolute",
    bottom: 0,
    paddingLeft: 35,
  },
  desTitleContainer: {
    flex: 0.6,
    // backgroundColor: "#a8ffb0",
    alignItems: "flex-end",
  },
  desTitleStyle: {
    marginBottom: 12,
    marginRight: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "#4f4f4f",
  },
  desContentStyle: {
    marginTop: 2,
    marginBottom: 12,
    marginLeft: 15,
    fontWeight: "normal",
    fontSize: 17,
    color: "#000",
  },
});
