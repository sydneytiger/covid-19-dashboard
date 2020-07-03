import React from 'react'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area} from "recharts";

const ColorCode = {
  Cases: "#D0021B",
  Deaths: "#4A4A4A",
  Recovered: "#09C79C",
}

function HistoryChart({dataKey, data, lastDays, onLastDaysChange }) {
  const color = ColorCode[dataKey];
  
  return (
    <div>
      <AreaChart
        width={400}
        height={150}
        data={data.slice(-lastDays)}
        margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
      >
        <defs>
          <linearGradient id={dataKey} x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor={color} stopOpacity={0.8} />
            <stop offset='95%' stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey='time' />
        <YAxis />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='number'
          stroke={color}
          fillOpacity={1}
          fill={`url(#${dataKey})`}
        />
      </AreaChart>
      <div style={{width: '300px', textAlign:'center', margin:'auto'}}>
        <Slider
          defaultValue={30}
          aria-labelledby="lastDays-slider"
          valueLabelDisplay="auto"
          step={1}
          min={1}
          max={30}
          value={lastDays}
          onChange={onLastDaysChange}
        />
        <Typography id="lastDays-slider" gutterBottom>
          {dataKey} of last {lastDays} days
        </Typography>
      </div>
    </div>
  )
}

export default HistoryChart
