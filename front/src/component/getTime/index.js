import "./index.css";

const date = new Date();
const showTime = date.getHours() 
    + ':' + date.getMinutes();

export default function Component() {
    return (
    <div className="time-show">
        <div align="left">{showTime}</div>
        
        <div class='clear' />
    </div>
);
}
