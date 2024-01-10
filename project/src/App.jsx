import Button from '@mui/material/Button';
import './App.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
function App() {

  return (
   <>
       <Button variant="contained" color="error">Contained</Button>
       <Button variant="contained"  disabled size="small">Contained</Button>
       <Button>Click me</Button>
       <Button variant="outlined" variant="contained" size="large" startIcon={<DeleteIcon />}>
           Delete
       </Button>
       <Alert severity="warning">This is a warning Alert.</Alert>
   </>
  )
}

export default App
