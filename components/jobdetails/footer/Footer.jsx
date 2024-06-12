import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Linking, ToastAndroid } from "react-native";
import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
  const [like, setLike] = useState(false);

  const handleSave = () => {
    setLike(!like);
    ToastAndroid.showWithGravity(
      like ? "Removed from bookmarks" : "Bookmarked",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn} onPress={handleSave}>
        <Image
          source={like ? icons.heart : icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.applyBtn} onPress={() => Linking.openURL(url)}>
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
