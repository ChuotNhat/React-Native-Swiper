/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Alert,
	TouchableHighlight,
	Dimensions,
	Image
} from 'react-native'
import Swiper from 'react-native-swiper'


const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height
const img1 = require('./src/images/piggy-bank.png');
const img2 = require('./src/images/bg-start-2.jpg');
const img3 = require('./src/images/bg-start-3.png');

export default class App extends Component {
	_onPressButton() {
		Alert.alert('You tapped the button!')
	}

	render() {
		return (
			<View style={styles.boxContainer}>
				<View style={styles.groupContent}>
					<Swiper style={styles.wrapper} autoplay={false} paginationStyle={styles.pagination} activeDotColor='#f67a56' dotColor='#fff'>
						<View style={styles.slide1}>
							<View style={[styles.wrapper, styles.screen1]}>
								<View style={styles.circle}>
									<Text style={styles.textLarge}>WELLCOME TO</Text>
									<View style={styles.wrapLogo}>
										<Image source={img1} alt="icon" style={styles.iconApp}/>
										<Text style={styles.textLogo}>MANAGE MONEY</Text>
									</View>
								</View>
								<View style={styles.intro}>
									<Text style={styles.textCenter}>Mẹo đầu tiên: đăng nhập để truy cập vào dữ liệu của bạn trên tất cả các thiết bị </Text>
								</View>
							</View>
						</View>

						<View style={styles.slide2}>
							<View style={[styles.wrapper, styles.screen1]}>
								<View>
									<Image source={img2} alt="background" style={styles.iconBg}/>
								</View>
								<View style={styles.intro}>
									<Text style={styles.textCenter}>Quản lý chi tiêu cá nhân và hoàn thiện mục tiêu tài chính</Text>
								</View>
							</View>
						</View>

						<View style={styles.slide3}>
							<View style={[styles.wrapper, styles.screen1]}>
								<View>
									<Image source={img3} alt="background" style={styles.iconBg}/>
								</View>
								<View style={styles.intro}>
									<Text style={styles.textCenter}>Lên kế hoạch tài chính thông minh và từng bước tiết kiệm để thực hiện hóa ước mơ</Text>
								</View>
							</View>
						</View>
					</Swiper>
				</View>

				<View style={styles.groupButton}>
					<TouchableHighlight onPress={this._onPressButton} underlayColor="#d0d0d0" style={styles.button}>
						<Text style={styles.btn1} >LẦN ĐẦU SỬ DỤNG MANAGE MONEY</Text>
					</TouchableHighlight>
					<TouchableHighlight onPress={this._onPressButton} underlayColor="#d0d0d0"  style={[styles.button, styles.button2]}>
						<Text style={styles.btn2} >ĐÃ SỬ DỤNG MANAGE MONEY</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	groupButton: {
		position: 'absolute',
		bottom: 40,
		left: 0,
		right: 0,
		width: width,
	},

	groupContent: {
		flex: 1,
	},

	boxContainer: {
		flex: 1
	},

	wrapper: {
		height: height,
		width: width
	},

	intro: {
		paddingHorizontal: 20,
		paddingVertical: 40
	},

	textCenter: {
		textAlign: 'center',
		lineHeight: 20
	},

	textLogo: {
		color: 'white',
		fontSize: 14,
		paddingLeft: 5
	},

	textLarge: {
		color: '#fff',
		fontSize: 24,
		textAlign: 'center',
		paddingBottom: 10
	},

	iconApp: {
		width: 30,
		height: 30
	},

	iconBg: {
		width: width - 40,
		height: 190
	},

	screen1: {
		alignItems: 'center',
		paddingTop: 80
	},

	circle: {
		height:width/2,
		width: width/2,
		borderRadius: width/2,
		backgroundColor: '#f67a56',
		alignItems: 'center',
		justifyContent: 'center'
	},

	wrapLogo: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},

	pagination: {
		bottom: 180
	},

	button: {
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		height: 40,
		marginHorizontal: 20,
		shadowColor: '#000',
		shadowOffset: {width: 5, height: 5},
		shadowOpacity: 0.6,
		elevation: 1,
	},

	button2: {
		backgroundColor: '#f67a56',
	},

	btn1: {
		color: '#f67a56'
	},

	btn2: {
		color: '#fff'
	},

	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#a8e9f4'
	},

	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#92deda'
	},

	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#95baa8'
	}
});
