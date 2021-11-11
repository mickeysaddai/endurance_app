import * as React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import CalendarPicker from '@mui/lab/CalendarPicker';

export default function DatePicker(props) {
    const { onDateChange } = props;
  // const [value, setValue] = React.useState(new Date());
  // const [date, setDate] = React.useState(new Date());

  const handleOnChange = (newDate) => {
      // setDate(newDate);
    onDateChange(newDate);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="calendar" style={{ backgroundColor: "white"}}>
      <CalendarPicker date={props.date} onChange={handleOnChange} />
      </div>
    </LocalizationProvider>
  );
}