import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import CalendarPicker from '@mui/lab/CalendarPicker';
import moment from 'moment';
export default function DatePicker(props) {
    const { onDateChange } = props;
  // const [value, setValue] = React.useState(new Date());
  // const [date, setDate] = React.useState(new Date());

  const handleOnChange = (newDate) => {
      // setDate(newDate);
    onDateChange(newDate);
  }

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
    <div className="calendar" style={{ backgroundColor: "white"}}>
      <CalendarPicker date={moment(props.date)} onChange={handleOnChange} />
      </div>
    </LocalizationProvider>
  );
}