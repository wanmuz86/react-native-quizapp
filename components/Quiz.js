import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function Quiz() {
const [questions, setQuestions] = useState([]);
const [options, setOptions] = useState([]);
const [score, setScore] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [isRunning, setisRunning] = useState(true);
const randomizeOptions = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
}
    useEffect(()=>{

        fetch('https://opentdb.com/api.php?amount=10')
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setQuestions(json.results);
            let options = randomizeOptions([...json.results[currentQuestion].incorrect_answers, 
            json.results[currentQuestion].correct_answer])
            setOptions(options)
        })
        .catch((error) => { console.error(error); });
    },
    [])
return (
<View style={styles.container}>
{
    isRunning ?
    questions[currentQuestion] ?
    <View>
    <Text style={styles.questionStyle}>{questions[currentQuestion].question}</Text>
    <FlatList
    data={options}
    renderItem={({item})=>
    <TouchableOpacity onPress={() => {
        if (item  === questions[currentQuestion].correct_answer){
            console.log("User is correct")
            setScore(score+1);
        }
        let newQuestion = currentQuestion+1
        if (newQuestion == 10){
            setisRunning(false);
        }
        else {
        setCurrentQuestion(newQuestion);
        let options = randomizeOptions([...questions[newQuestion].incorrect_answers, 
            questions[newQuestion].correct_answer])
            setOptions(options);
        }
    }

    }>
    <View style={styles.optionButton}>
        <Text style={{color:'white'}}>{item}</Text>
        </View>
    </TouchableOpacity>
}
    />
    </View>
    :
    <View><Text>Loading...</Text></View>
    :
    <View><Text>Game ended! Your score is {score}</Text></View>
}

</View>)
}

const styles = StyleSheet.create({
    container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    },
    questionStyle:{
        fontSize:20,
        textAlign:'center'
    },

    optionButton:{
        backgroundColor:'#f00',
        color:'#fff',
        padding:20,
        textAlign:'center',
        marginVertical:10
    },

});
  
