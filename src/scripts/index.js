// import { events } from './storage.js'
import { renderTable, checkCurrentDay } from './days.js'
import { getTimesBlocks } from './times.js'
import { renderEvents } from './renderEvent.js'
import { renderTimeList } from './popup.js'
import { addEvent } from './addEvent.js'
import { deleteEvent } from './deleteEvent.js'
import { updateEvent } from './updateEvent.js'




renderEvents()
setInterval(checkCurrentDay, 1000)
renderTimeList()