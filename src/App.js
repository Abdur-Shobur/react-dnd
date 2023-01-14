import Items from './component/Items'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState } from 'react'
const items = [
  {
    id: '1',
    title: 'items one',
    color: { bg: 'bg-blue-200', text: 'text-blue-900' },
  },
  {
    id: '2',
    title: 'items one',
    color: { bg: 'bg-sky-200', text: 'text-sky-900' },
  },
  {
    id: '3',
    title: 'items one',
    color: { bg: 'bg-green-200', text: 'text-green-900' },
  },
]
function App() {
  const [characters, updateCharacters] = useState(items)

  function handleOnDragEnd(result) {
    if (!result.destination) return

    const items = Array.from(characters)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    updateCharacters(items)
  }

  return (
    <div className="App px-20">
      <div className="flex justify-center gap-4 mt-10 ">
        <div className="shadow w-2/4 p-4 rounded">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul
                  className="characters"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {characters.map((e, i) => (
                    <Draggable draggableId={e.id} key={e.id} index={i}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Items item={e}></Items>
                          {provided.placeholder}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div className="shadow w-2/4 p-4 rounded">
          <ul>
            <li className="py-2 shadow p-2">List </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
