import React from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';

class Draggable extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Draggable';
        this._initiateDrag = this._initiateDrag.bind(this);
    }

    static contextTypes = {
      dragContext: React.PropTypes.any
    }

    static propTypes = {
      dragOn: React.PropTypes.oneOf(['onLongPress', 'onPressIn'])
    }

    _initiateDrag() {
      if (!this.props.disabled) this.context.dragContext.onDrag(this.refs.wrapper, this.props.children, this.props.data);
    }

    static defaultProps = {
      dragOn: 'onLongPress'
    }

    render() {

        let isDragging = this.context.dragContext.dragging && this.context.dragContext.dragging.ref;
        isDragging = isDragging && isDragging === this.refs.wrapper;
        const onLongPress = this.props.dragOn === 'onLongPress' ? this._initiateDrag : null
        const onPressIn  = this.props.dragOn === 'onPressIn' ? this._initiateDrag : null
        return <TouchableOpacity activeOpacity={this.props.activeOpacity} style={this.props.style} onLongPress={onLongPress}  onPress={this.props.onPress} onPressIn={onPressIn} ref="wrapper">
        {
          React.Children.map(this.props.children, child => {
            let childClone = Object.assign({}, child) //unfreeze
            let childType = childClone.type.displayName
            const clickables =  [
              "TouchableOpacity",
              "TouchableHighlight",
              "TouchableWithoutFeedback"
            ]
            if( clickables.indexOf(childType) > -1 ){ //if child has onLongPress and onPressIn props
              childClone.props = Object.assign({}, childClone.props, { //give it the parent props
                onLongPress,
                onPressIn
              })
            }
          return React.cloneElement(childClone, {ghost: isDragging})
        })
        }
      </TouchableOpacity>;
    }
}

export default Draggable;
