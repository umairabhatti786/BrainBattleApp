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
import { windowHeight } from "../../../utils/Dimensions";
import { colors } from "../../../utils/colors";
import { moderateScale, verticalScale } from "../../../utils/Mertics";
import CustomText from "../../../components/CustomText";
import { isiPad } from "../../../utils/CommonFun";
import { images } from "../../../assets";
import UncommanBadage from "../../../../assets/uncommanBadage.svg";
import UniqueBadage from "../../../../assets/uniqueBadage.svg";
import RareBadage from "../../../../assets/rareBadage.svg";
import CommanBadage from "../../../../assets/commanBadage.svg";

import { appStyles } from "../../../utils/appStyles";
const CustomModal = ({
  modalVisible,
  setModalVisible,
  selectectedRewarsRank,

  width,
}: any) => {
  const badgeData = [
    {
      bedageImage: <UniqueBadage />,
      name: "Unique Badge",
      nameColor: "#9E00FF",
      value: "6%",
    },
    {
      bedageImage: <RareBadage />,
      name: "Rare Badge",
      nameColor: "#A20000",

      value: "12%",
    },

    {
      bedageImage: <UncommanBadage />,
      name: "Uncommon Badge",
      nameColor: "#007CD6",
      value: "40%",
    },

    {
      bedageImage: <CommanBadage />,
      name: "Common Badge",
      nameColor: colors.black,
      value: "42%",
    },
  ];

  console.log("selectectedRewarsRank", selectectedRewarsRank);
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={setModalVisible}
      backdropColor="transparent"
      style={{ flex: 1 }}
    >
      <View
        style={{
          width: width || "99%",
          height: isiPad ? windowHeight / 1.1 : windowHeight / 1.2,
          backgroundColor: colors.white,
          borderRadius: moderateScale(25),
          elevation: 10,
          shadowColor: colors.black,
          shadowOffset: { width: 2, height: 2 },
          alignSelf: "center",
          shadowOpacity: 0.5,
          shadowRadius: 10,
          padding: moderateScale(20),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => setModalVisible(false)}
          style={{
            width: moderateScale(20),
            height: moderateScale(20),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: "70%", height: "70%" }}
            source={images.cross}
          />
        </TouchableOpacity>
        <View
          style={{
            marginHorizontal: moderateScale(10),
            marginVertical: verticalScale(20),
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "#D9D9D940",
              borderRadius: moderateScale(40),
              shadowColor: "#00000025",
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 1,
              paddingHorizontal: moderateScale(20),
              paddingTop: verticalScale(10),
              paddingBottom: verticalScale(15),

              //   padding: moderateScale(20),
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CustomText
              text={`${selectectedRewarsRank?.name} Reward Box`}
              size={16}
              fontFam={"ClashDisplay-Bold"}
              color={"#737373"}
            />

            <View
              style={{
                width: moderateScale(160),
                height: moderateScale(120),

                alignItems: "center",
                justifyContent: "center",
                // backgroundColor: "#D9D9D940",

                // elevation: 10,
                // shadowColor:"#C0F0FA",
                // shadowOffset: { width: -2, height:40},
                // shadowOpacity: 3,
                // shadowRadius: 3,
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                resizeMode="contain"
                source={selectectedRewarsRank?.image}
              />
            </View>

            <CustomText
              label="In each reward box you are guaranteed a badge or title to add to your collection!"
              size={13}
              fontFam={"ClashDisplay-Medium"}
              style={{ textAlign: "center" }}
              // fontWeight="600"
              lineHeight={isiPad ? 30 : 20}
              color={"#737373"}
            />
          </View>

          <CustomText
            label="Odds"
            size={16}
            style={{ alignSelf: "flex-end", marginVertical: verticalScale(20) }}
            fontFam={"ClashDisplay-Medium"}
            color={"#8E8E8E"}
          />

          {selectectedRewarsRank?.data?.map((item: any, index: any) => {
            return (
              <View
                key={index}
                style={{
                  ...appStyles.rowjustify,
                  elevation: 10,
                  shadowColor: colors.black,
                  shadowOffset: { width: 0, height: 2 },
                  alignSelf: "center",
                  shadowOpacity: 0.5,
                  shadowRadius: 3,
                  width: "100%",
                  backgroundColor: colors.white,
                  marginVertical: verticalScale(7),
                  borderRadius: moderateScale(15),
                  paddingRight: moderateScale(10),
                  paddingVertical:verticalScale(5)
                }}
              >
                <View style={appStyles.row}>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: verticalScale(5),
                        width:isiPad ? verticalScale(50) : verticalScale(30),
                      height: isiPad ? verticalScale(50) : verticalScale(30),
                    }}
                  >
                    <Image
                    style={{width:"100%",height:"100%"}}
                    source={item.bedageImage}
                    />
                    {/* {item.bedageImage} */}
                    <View
                      style={{
                        position: "absolute",
                        bottom: verticalScale(17),
                      }}
                    >
                      <CustomText
                        label="Title"
                        size={11}
                        // style={{ alignSelf: "flex-end", marginVertical: verticalScale(20) }}
                        fontFam={"ClashDisplay-Medium"}
                        color={"#4E4E4E"}
                      />
                    </View>
                  </View>

                  {/* 
                  <UncommanBadage
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: verticalScale(5),
                    }}
                    width={isiPad ? verticalScale(50) : verticalScale(45)}
                    height={isiPad ? verticalScale(50) : verticalScale(45)}
                  /> */}
                  <CustomText
                    label={item.name}
                    size={13}
                    // style={{
                    //   marginTop: verticalScale(-5),
                    // }}
                    fontFam={"ClashDisplay-Medium"}
                    color={item.nameColor}
                  />
                </View>

                <CustomText
                  label={item.value}
                  size={13}
                  style={{
                    marginTop: verticalScale(-5),
                  }}
                  fontFam={"ClashDisplay-Medium"}
                  color={colors.black}
                />
              </View>
            );
          })}
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({});
