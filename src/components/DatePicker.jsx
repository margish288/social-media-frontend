import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "../css/DatePicker.css";
import { useTheme, Button } from "@mui/material";

function DatePicker({ onChange, value, toggleScheduleMenu }) {
  const { palette } = useTheme();

  // checking whether the selected date is a future date
  const selectedDate = new Date(value);
  const currentDate = new Date();
  const isFutureDate = selectedDate > currentDate;
  return (
    <div className="mt-05">
      <DateTimePicker
        className={"custome-design"}
        onChange={onChange}
        value={value}
        disableClock
      />
      <Button
        disabled={!isFutureDate && value !== null}
        onClick={toggleScheduleMenu}
        sx={{
          padding: "0.5rem 1rem",
          color: palette.background.alt,
          backgroundColor: palette.primary.main,
          borderRadius: "50px",
          cursor: "pointer",
        }}
      >
        ok
      </Button>
    </div>
  );
}

export default DatePicker;
