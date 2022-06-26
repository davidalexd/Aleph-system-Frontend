import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { messages } from '../../helper/calendarMessage'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { uiOpenModal } from '../../actions/ui'
import './calendarScreen.css'
import CalendarEvent from './CalendarEvent'
import PermissionModalAdministator from '../permisos/tablas/PermissionModalAdministator'
import { eventClearActive, eventSetActive, getPermissions } from 'src/actions/permissions'
moment.locale('es')

const localizer = momentLocalizer(moment)

const CalendarScreen = () => {
  const dispatch = useDispatch()
  const { permissions } = useSelector((state) => state.permission);
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')
  useEffect(() => {
    dispatch(getPermissions());
  }, [dispatch])
  const onDoubleClick = (e) => {
    dispatch(uiOpenModal())
  }

  const onViewChange = (e) => {
    setLastView(e)
    localStorage.setItem('lastView', e)
  }
  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e))
  }
  const onSelectSlot = (e) => {
    dispatch(uiCloseModal())
    dispatch(eventClearActive())
  }
  const eventStyleGetter = () => {
    const style = {
      backgroundColor: '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white',
    }
    return {
      style,
    }
  }
  return (
    <div>
      <div className="calendar-screen">
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          events={permissions}
          messages={messages}
          onDoubleClickEvent={onDoubleClick}
          selectable={true}
          components={{ event: CalendarEvent }}
          eventPropGetter={eventStyleGetter}
          onSelectSlot={onSelectSlot}
          onView={onViewChange}
          view={lastView}
          onSelectEvent={onSelectEvent}
        />
        <PermissionModalAdministator />
      </div>
    </div>
  )
}

export default CalendarScreen
