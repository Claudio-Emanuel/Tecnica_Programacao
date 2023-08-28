import { Text, View, StyleSheet} from 'react-native';

function ExibirInfo({nome,curso,disciplina}){
  return(
    <View>
      <View style={styles.box}>
        <Text>
          <Text style={styles.container}>Nome:</Text>{nome}<div/>
          <Text style={styles.container}>Curso:</Text>{curso}<div/>
          <Text style={styles.container}>Disciplinas:</Text>{disciplina}
        </Text>
      </View>
      <Text style={styles.margem}/>
    </View>
  )
}

function App(){
  return(
    <View>
    <Text style={styles.titulo}>Aluno</Text>
    <ExibirInfo nome='Cláudio' curso='Informática' disciplina='Tecnica de programação'/>
    <ExibirInfo nome='Cláudio' curso='Informática' disciplina='Tecnica de programação'/>
    </View>
  )
}

const styles=StyleSheet.create({

  titulo:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:30,
    color:'red',
    padding:10
  },
  container:{
    fontWeight:'bold',
    marginLeft:8,
  },
  box:{
    borderWidth:1,
    backgroundColor:'#87CEFA',
    borderRadius:10,
    borderColor:'gray'
  },
  margem:{
    marginBottom:5
  }
})


export default App;
