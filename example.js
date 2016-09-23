import React from 'react';
import {
  Text,
  View,
  LayoutAnimation,
  Alert,
  ScrollView
} from 'react-native';


import {
  DragContainer,
  Draggable,
  DropZone
} from './index'


class MyDropZoneContent extends React.Component {
  componentWillReceiveProps({dragOver}) {
    if (dragOver !== this.props.dragOver) LayoutAnimation.easeInEaseOut();
  }
  render() {
    return <View style={{width: this.props.dragOver ? 110 : 100, height:  this.props.dragOver ? 110 : 100, backgroundColor: '#ddd', alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text>{"LET GO"}</Text>
      </View>
    </View>
  }
}


class DeleteZone extends React.Component {
  componentWillReceiveProps({dragOver}) {
    if (dragOver !== this.props.dragOver) LayoutAnimation.easeInEaseOut();
  }
  render() {
    return <View style={{top: this.props.dragOver ? 0: -100, height: 100, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text>{'DELETE'}</Text>
      </View>
    </View>
  }
}

class DraggyInner extends React.Component {
  render() {
    if (this.props.dragOver && !this.props.ghost && !this.props.dragging) {
      return <View style={{height: 100, width: 100, backgroundColor: 'green'}} />
    }
    let shadows = {shadowColor: 'black', shadowOffset: {width: 0, height: 20}, shadowOpacity: .5, shadowRadius: 20, opacity: .5};
    return <View style={[{height: 100, width: 100, backgroundColor: this.props.ghost ? '#777' : '#777'}, this.props.dragging ? shadows : null]} />
  }
}


class Draggy extends React.Component {
  render() {
    return <Draggable data="Whatevs" style={{margin: 7.5}}>
        <DropZone>
          <DraggyInner />
        </DropZone>
    </Draggable>
  }
}

class DragDropTest extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'DragDropTest';
    }
    render() {
        return <DragContainer>
        <DropZone style={{position: 'absolute', top: 0, left: 0, right: 0, height: 100}} onDrop={() => Alert.alert('DELETE!!!')}>
          <DeleteZone />
        </DropZone>
        <View style={{flex: 1, padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
             <DropZone onDrop={e => Alert.alert("Dropped it on area 1")}>
              <MyDropZoneContent />
            </DropZone>
            <DropZone onDrop={e => Alert.alert("Dropped it on area 2")}>
              <MyDropZoneContent />
            </DropZone>
          </View>
            <View style={{height: 115}}>
              <ScrollView horizontal={true}>
              <View style={{justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row'}}>
                <Draggy />
                <Draggy />
                <Draggy />
                <Draggy />
                <Draggy />
                <Draggy />
                <Draggy />
              </View>
              </ScrollView>
            </View>
        </DragContainer>
    }
}

export default DragDropTest;
