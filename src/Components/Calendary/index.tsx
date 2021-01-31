import React from 'react'
import { CalendarNav } from './CalendaryNavigation'
import Daybox from './Daybox'
import { DivOfCalendary } from './style'
import Weekbox from './WeeksBox'

const Calendary = () => (
    <DivOfCalendary>
        <CalendarNav color='terciary' />
        <Weekbox />
        <Daybox color='terciary'/>
    </DivOfCalendary>
)
export default Calendary
