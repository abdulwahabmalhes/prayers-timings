import { Grid, Divider, Stack, Select, FormControl, InputLabel, MenuItem } from '@mui/material'
import Prayer from './Prayer'
import axios from 'axios';


axios.get("")
export default function MainConttent() {
    const handleChange = (event) => {
        console.log(event.target.value)
      };
  return (
    <>
    {/* Top Row start */}
    <Grid container>
        <Grid xs={6}>
            <div>
                <h2>سبتمبر 9 2023 | 4:20</h2>
                <h1>مكة المكرمة</h1>
            </div>
        </Grid>

        <Grid xs={6}>
            <div>
                <h2>متبقي حتى صلاة</h2>
                <h1>00:10:20</h1>
            </div>
        </Grid>
    </Grid>
    {/* Top Row end */}

    <Divider style={{borderColor:"white", opacity:".1"}} /> 

    {/* Prayers timer start */}
    <Stack direction="row" justifyContent="space-around" style={{marginTop:"50px"}}>
        <Prayer name="الفجر" time="04:10" image="src\assets\img\fajr-prayer.png" />
        <Prayer name="الظهر" time="04:10" image="src\assets\img\dhhr-prayer-mosque.png" />
        <Prayer name="العصر" time="04:10" image="src\assets\img\asr-prayer-mosque.png" />
        <Prayer name="المغرب" time="04:10" image="src\assets\img\sunset-prayer-mosque.png" />
        <Prayer name="العشاء" time="04:10" image="src\assets\img\night-prayer-mosque.png" />
    </Stack>
    {/* Prayers timer end */}


    {/* Select City start */}
    <Stack direction="row" justifyContent={"center"} style={{marginTop:'50px'}}>
    <FormControl style={{width:"20%"}}>
        <InputLabel id="demo-simple-select-label">
            <span style={{color:'white'}}>المدينة</span>
            </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>
    {/* Select City end */}
    </>
    
  )
}
