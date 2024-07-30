import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import { moderateScale, verticalScale } from "../../../utils/Mertics";
import { isiPad } from "../../../utils/CommonFun";
import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
  yAxisSides,
} from "react-native-gifted-charts";
import { AllTimeGraphData, MonthlyGraphdata } from "../../../utils/Data";
const AllTimeProgressGraph = ({}: any) => {
  return (
    <View>
      <LineChart
        data={AllTimeGraphData}
        // width={screenWidth - 40}
        width={isiPad ? windowWidth / 1.2 : windowWidth / 1.3}
        height={isiPad ? verticalScale(200) : 180}
        yAxisSide={yAxisSides.RIGHT}
        isAnimated
        yAxisTextStyle={{ color: "#8E8E8E" }}
        xAxisLabelTextStyle={{ color: "#8E8E8E" }}
        initialSpacing={0}
        yAxisLabelSuffix=""
        // yAxisLabelWidth={40}
        adjustToWidth={true}
        thickness={4}
        xAxisColor={"#b0b0b0"}
        // hideAxesAndRules
        hideOrigin
        // hideYAxisText
        curved
        yAxisColor="transparent"
        rulesType="solid"
        yAxisLabelTexts={["365", "365", "600"]}
        noOfSections={2}
        color="#FFB300"
        dataPointsColor1="transparent"
        startFillColor="rgba(255, 179, 0, 0.3)"
        endFillColor="rgba(255, 179, 0, 0.1)"
        startOpacity={0.3}
        endOpacity={0.1}
        showStrip={true}
        pointerConfig={{
          pointerStripHeight: 160,
          pointerStripWidth: 2,
          pointerStripUptoDataPoint: true,
          pointerColor: "rgba(0,0,0,0.3)",
        }}
        areaChart
        gradientFill
        gradientColor={["#FFB300", "rgba(255, 179, 0, 0.1)"]}
      />
    </View>
  );
};

export default AllTimeProgressGraph;

const styles = StyleSheet.create({});
