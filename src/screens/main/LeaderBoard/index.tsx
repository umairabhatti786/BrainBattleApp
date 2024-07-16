import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { appStyles } from "../../../utils/appStyles";
import { colors } from "../../../utils/colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utils/Mertics";
import { images } from "../../../assets";
import CustomText from "../../../components/CustomText";
import { useRef, useState } from "react";
import CustomButton from "../../../components/CustomButton";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { isiPad } from "../../../utils/CommonFun";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import Rank1 from "../../../../assets/rank1.svg";
import Rank2 from "../../../../assets/rank2.svg";
import Rank3 from "../../../../assets/rank3.svg";
import Leaderboard1 from "../../../../assets/leaderboard1.svg";
import { FindFriends, leaderBoardUserData } from "../../../utils/Data";
import FindFriendsContainer from "../Friends/FindFriendsContainer";
import LeaderBoadUserCard from "./LeaderBoadUserCard";
import CountryDropDown from "../../../components/CountryDropDown";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const LeaderBoard = ({ navigation }: any) => {
  const [seletedLeaderboard, setSeletedLeaderboard] = useState(1);
  const [selectedLeaderBoardUser, setSelectedLeaderBoardUser] = useState(2);
  const swiperRef = useRef<SwiperFlatList>(null);

  const [selectedCountry, setSelectedCountry] = useState({
    name: "United States",
    image: images.unitedState,
  });
  const [isCountryDropDown, setIsCountryDropDown] = useState(false);

  const rankingData = [
    {
      dayButtonColor: colors.blue200,
      isMapRanking: true,
      map: images.blueMap,
      rankingBackground: images.rankBack,
    },
    {
      dayButtonColor: colors.purple100,
      isMapRanking: true,
      map: images.map2,
      rankingBackground: images.rank2Back,
    },
    {
      dayButtonColor: "#FF4F4F70",
      isMapRanking: false,
      rankingBackground: images.rank3Back,
    },
  ];

  const LeaderUserRakingCard = ({
    image,
    name,
    points,
    madel,
    rightImage,
  }: any) => {
    return (
      <View
        style={{
          gap: verticalScale(10),
          width: "100%",
          alignSelf: "center",
        }}
      >
        <View>
          <View
            style={{
              width: moderateScale(60),
              height: moderateScale(60),
              borderRadius: moderateScale(65),

              overflow: "hidden",
              alignSelf: "center",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
              source={image}
            />
          </View>

          <Image
            style={{
              width: moderateScale(30),
              height: moderateScale(30),
              position: "absolute",
              top: horizontalScale(isiPad ? -15 : -20),
              left: horizontalScale(isiPad ? 25 : 35),
            }}
            resizeMode="contain"
            source={madel}
          />

          <Image
            style={{
              width: moderateScale(30),
              height: moderateScale(30),
              position: "absolute",
              right: horizontalScale(10),
              bottom: verticalScale(-2),
            }}
            resizeMode="contain"
            source={rightImage}
          />
        </View>

        <CustomText
          fontFam={"ClashDisplay-Semibold"}
          fontWeight="bold"
          label={name}
          style={{ textAlign: "center" }}
          size={15}
          color={colors.black}
        />
        <View
          style={{
            width: "80%",
            alignSelf: "center",

            paddingVertical: verticalScale(10),
            backgroundColor: "#F0F0F0",
            borderRadius: moderateScale(10),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomText
            fontFam={"ClashDisplay-Semibold"}
            fontWeight="600"
            label={points}
            style={{ textAlign: "center" }}
            size={12}
            color={colors.black}
          />
        </View>
      </View>
    );
  };

  const renderFindFriendsList = ({ item, index }: any) => {
    return (
      <>
        <View>
          <LeaderBoadUserCard
            index={index}
            selectedLeaderBoardUser={selectedLeaderBoardUser}
            setSelectedLeaderBoardUser={setSelectedLeaderBoardUser}
            item={item}
          />
        </View>
      </>
    );
  };

  // Function to handle index change on swipe
  const handleIndexChange = ({ index }: any) => {
    setSeletedLeaderboard(index + 1);
  };
  return (
    <>
      <View
        style={{
          backgroundColor: colors.white,
          alignItems: "center",
          flex: 1,
        }}
      >
        <ScrollView
          scrollEnabled={isCountryDropDown == false}
          contentContainerStyle={{
            paddingBottom: 0,
            width: "100%",
            paddingTop: verticalScale(isiPad ? 40 : 60),
          }}
        >
          <View
            style={{
              ...appStyles.row,
              width: "100%",
              justifyContent: "space-between",
              paddingHorizontal: "15%",
            }}
          >
            <TouchableOpacity
              style={{
                width: moderateScale(40),
                height: moderateScale(40),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: moderateScale(20), height: moderateScale(20) }}
                source={images.back}
              />
            </TouchableOpacity>
            <View style={appStyles.row}>
              <View style={{ gap: verticalScale(5) }}>
                <View style={{ ...appStyles.row, gap: moderateScale(5) }}>
                  <CustomText
                    fontFam={"ClashDisplay-Semibold"}
                    label="USA"
                    size={18}
                    color={colors.black}
                  />
                  <CustomText
                    fontFam={"ClashDisplay-Medium"}
                    fontWeight="600"
                    label="- SAT/ACT"
                    size={18}
                    color={colors.black}
                  />
                </View>
                <CustomText
                  fontFam={"ClashDisplay-Medium"}
                  fontWeight="600"
                  label="Leaderboard"
                  size={18}
                  color={colors.black}
                />
              </View>
              <TouchableOpacity
                style={{ ...appStyles.row, gap: 20 }}
                activeOpacity={0.5}
                onPress={() => setIsCountryDropDown(!isCountryDropDown)}
              >
                <Image
                  style={{
                    width: moderateScale(50),
                    height: moderateScale(50),
                  }}
                  source={selectedCountry.image}
                />
                <Image
                  resizeMode="contain"
                  style={{
                    width: moderateScale(20),
                    height: moderateScale(20),
                  }}
                  source={images.dropdown}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              alignItems: "center",
              gap: moderateScale(10),
              marginVertical: verticalScale(15),
            }}
          >
            <TouchableOpacity
              onPress={() => {
                swiperRef.current.scrollToIndex({ index: 1 - 1 });
                setSeletedLeaderboard(1);
              }}
              style={{
                width:
                  seletedLeaderboard == 1
                    ? moderateScale(16)
                    : moderateScale(14),
                height:
                  seletedLeaderboard == 1
                    ? moderateScale(16)
                    : moderateScale(14),
                borderRadius:
                  seletedLeaderboard == 1
                    ? moderateScale(16)
                    : moderateScale(14),
                backgroundColor:
                  seletedLeaderboard == 1 ? colors.blue100 : colors.gray100,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                swiperRef.current.scrollToIndex({ index: 2 - 1 });
                setSeletedLeaderboard(2);
              }}
              style={{
                width:
                  seletedLeaderboard == 2
                    ? moderateScale(16)
                    : moderateScale(14),
                height:
                  seletedLeaderboard == 2
                    ? moderateScale(16)
                    : moderateScale(14),
                borderRadius:
                  seletedLeaderboard == 2
                    ? moderateScale(16)
                    : moderateScale(14),
                backgroundColor:
                  seletedLeaderboard == 2 ? colors.purple100 : colors.gray100,
              }}
            />

            <TouchableOpacity
              onPress={() => {
                swiperRef.current.scrollToIndex({ index: 3 - 1 });
                setSeletedLeaderboard(3);
              }}
              style={{
                width:
                  seletedLeaderboard == 3
                    ? moderateScale(16)
                    : moderateScale(14),
                height:
                  seletedLeaderboard == 3
                    ? moderateScale(16)
                    : moderateScale(14),
                borderRadius:
                  seletedLeaderboard == 3
                    ? moderateScale(16)
                    : moderateScale(14),
                backgroundColor:
                  seletedLeaderboard == 3 ? colors.red100 : colors.gray100,
              }}
            />
          </View>
          <SwiperFlatList
            ref={swiperRef}
            index={seletedLeaderboard}
            data={rankingData}
            onChangeIndex={handleIndexChange} // Callback when index changes
            renderItem={({ item, index }) => {
              return (
                <>
                  <View style={{ width: windowWidth, height: windowHeight }}>
                    <View
                      style={{
                        width: "70%",
                        alignSelf: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        alignContent: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <CustomButton
                        bgColor={item.dayButtonColor}
                        fontFam={"ClashDisplay-Medium"}
                        fontWeight="600"
                        text="Weekly"
                        textColor={colors.black}
                        width={"40%"}
                      />

                      <CustomButton
                        text="All Time"
                        bgColor={colors.white}
                        textColor={"#B9B4E4"}
                        width={"48%"}
                      />
                    </View>

                    {item.isMapRanking && (
                      <View
                        style={{
                          width: "80%",
                          borderRadius: moderateScale(15),
                          backgroundColor: "#80BAFF15",
                          flexDirection: "row",
                          alignItems: "center",
                          padding: moderateScale(20),
                          alignSelf: "center",
                          marginTop: verticalScale(20),

                          justifyContent: "space-between",
                        }}
                      >
                        <View style={{ width: "60%" }}>
                          <CustomText
                            fontFam={"ClashDisplay-Medium"}
                            fontWeight="600"
                            lineHeight={isiPad ? 40 : 22}
                            label="You are the 890th ranked player in the USA!"
                            size={18}
                            color={colors.black}
                          />
                        </View>

                        <Image
                          style={{
                            width: moderateScale(110),
                            height: moderateScale(80),
                          }}
                          source={item?.map}
                          resizeMode="contain"
                        />
                      </View>
                    )}

                    <View style={{ marginTop: verticalScale(40) }}>
                      <View
                        style={{
                          marginHorizontal: moderateScale(20),
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <View
                          style={{
                            marginRight: moderateScale(-4),
                            height: verticalScale(300),
                            alignItems: "center",
                          }}
                        >
                          <LeaderUserRakingCard
                            name="Clare Rich"
                            points="1,469 ELO"
                            image={images.user18}
                            rightImage={images.athletics}
                          />

                          <Rank2
                            width={moderateScale(110)}
                            height={verticalScale(isiPad ? 230 : 200)}
                          />
                        </View>
                        <View
                          style={{
                            marginBottom: verticalScale(50),
                            height: verticalScale(300),
                            alignItems: "center",
                          }}
                        >
                          <LeaderUserRakingCard
                            name="Jon Garcia"
                            points="2,569 ELO"
                            image={images.user19}
                            rightImage={images.highSchoolMedal}
                            madel={images.medal}
                          />

                          <Rank1
                            width={moderateScale(100)}
                            height={verticalScale(isiPad ? 190 : 170)}
                          />
                        </View>
                        <View
                          style={{
                            marginTop: verticalScale(50),
                            height: verticalScale(300),
                            alignItems: "center",
                          }}
                        >
                          <LeaderUserRakingCard
                            name="Craig Gouse"
                            points="1,053 ELO"
                            image={images.user20}
                            rightImage={images.roosevelt}
                          />

                          <Rank3
                            width={moderateScale(100)}
                            height={verticalScale(isiPad ? 210 : 180)}
                          />
                        </View>

                        <View></View>
                      </View>
                      <View
                        style={{
                          position: "absolute",
                          top: verticalScale(isiPad ? 290 : 260),
                        }}
                      >
                        <ImageBackground
                          resizeMode="cover"
                          style={{
                            width: windowWidth,
                            height: windowHeight,
                            paddingTop: verticalScale(10),
                          }}
                          source={item.rankingBackground}
                        >
                          <FlatList
                            data={leaderBoardUserData}
                            style={{
                              paddingTop: verticalScale(isiPad ? 30 : 20),
                              marginTop: verticalScale(isiPad ? 30 : 20),
                            }}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={{
                              marginHorizontal: moderateScale(20),
                            }}
                            renderItem={renderFindFriendsList}
                          />
                        </ImageBackground>
                      </View>
                    </View>
                  </View>
                </>
              );
            }}
          />
        </ScrollView>
      </View>
      {isCountryDropDown && (
        <CountryDropDown
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      )}
    </>
  );
};
export default LeaderBoard;

const styles = StyleSheet.create({});
