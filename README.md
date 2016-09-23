#Example implementation of Drag and Drop in React Native

The implementation provides three components, `DragContainer`, `Draggable`, and `DropZone`.

##DragContainer
This component must be higher up the react tree than the other two components. It's size is not important, it just provides the context by which everything communicates.
- **`onDragStart`** _(Function)_ Is called when dragging begins. It is passed a summary of the dragged element.
- **`onDragEnd`** _(Function)_ Is called when dragging ends. It is passed two arguments, the same summary as onDragStart, and array of zones that were dropped on.

##DropZone
This is a wrapper component for an area where a Draggable element can be dropped.
- **`onEnter`** _(Function)_ Is called when an item is dragged over the zone.
- **`onLeave`** _(Function)_ Is called when an item is dragged off of the zone.
- **`onDrop`** _(Function)_ Is called when an item is dropped. The `data` property of the draggable is passed through as an argument.

The children of the DropZone are passed the following props also;
- **`dragOver`** _(Boolean)_ Is true when there is an item being dragged over the zone.

##Draggable
This is a wrapper component that makes it's children draggable.
- **`data`** _(Any)_ Whatever is passed in the data prop will be given to the DropZone on drop.
- **`dragOn`** _(String)_ Expects either onLongPress (default) or onPressIn. Determines when dragging begins.

The children of the Draggable componnent are passed the following props also;
- **`dragging`** _(Boolean)_ The component is being dragged.
- **`ghost`** _(string)_ The component is the ghost left in place of the item being dragged.


###This code is up for adoption! If you want to develop it further / support it, just let me know (@dean_mcpherson).