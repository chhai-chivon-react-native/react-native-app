import React, {Component} from 'react';
import {View} from 'react-native';
class ShowStudentListActivity extends Component {

    constructor(props) { 
 
        super(props);
     
        this.state = {
     
          isLoading: true
     
        }
      }
     
      static navigationOptions =
      {
         title: 'ShowStudentListActivity',
      };


    return(){
        this.render(
            <View>

                <Text>Hello</Text>

            </View>
        );
    }
}