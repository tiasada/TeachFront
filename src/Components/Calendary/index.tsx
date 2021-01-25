import React from 'react'
import { CalendarNav } from './CalendaryNavigation'
import Daybox from './Daybox'
import { DivOfCalendary } from './style'
import Weekbox from './WeeksBox'

const Calendary = () => (
    <DivOfCalendary>
        <CalendarNav />
        <Weekbox />
        <Daybox />
    </DivOfCalendary>
)
export default Calendary