import { StatusBar } from 'expo-status-bar';
import React from "react"
import { StyleSheet, Image, Text, View, TextInput } from 'react-native';

export default function Login(){
    return(
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source = { require('../Images/Loading/Logo.png')}/>
        </View>
        <View style={styles.loginContainer}>
            <Text style={styles.id} >아이디</Text>
            <TextInput style={styles.idInput} placeholder={"아이디를 입력하세요."}></TextInput>
            <Text style={styles.id}>비밀번호</Text>
            <TextInput style={styles.idInput} placeholder={"비밀번호를 입력하세요."} secureTextEntry={true}></TextInput>
        </View>
        <View>
            <View>
                <Text>자동로그인</Text>
            </View>
            <View>
                <Text>아이디 | 비밀번호 찾기</Text>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:"center"
    },
    logoContainer:{
        flex:1,
        alignItems: "center"
    },
    logo:{
        marginTop:92,
        alignItems:"center"
    },
    loginContainer:{
        flex:1
    },
    id:{
        marginTop:22,
        color:"#333333",
        fontSize:17,
        paddingHorizontal:20,
        alignItems :"flex-start"
    },
    idInput:{
        paddingLeft:17,
        paddingVertical: 8,
        marginTop: 8,
        marginLeft:20,
        height:43,
        width:374,
        borderColor:"#DEDEDE",
        borderWidth:1,
        borderRadius:30
    }
})