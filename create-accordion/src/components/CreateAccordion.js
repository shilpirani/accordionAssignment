import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Button, Container, Grid, Typography, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import './accordionStyles.css';

function CreateAccordion() {
    const [create, setCreate] = React.useState(false)
    const [expanded, setExpanded] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
    const [heading, setHeading] = React.useState('Title 1')
    const [heading2, setHeading2] = React.useState('Title 2')
    const [heading3, setHeading3] = React.useState('Title 3')
    const [addSubAccor, setAddSubAccor] = React.useState(false)
    const [addSubAccor2, setAddSubAccor2] = React.useState(false)

    const initialObj = { id: '', title: '', description: '' }
    const [accArray, setAccArray] = React.useState([initialObj])

    const addSubAccordion2 = () => {
        return (<div>
            <Accordion expanded={expanded3}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header"
                    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} onClick={() => setExpanded3(!expanded3)} />}
                >
                    <Grid container spacing={1}>
                        <Grid item xs={10}>
                            <TextField id="standard-basic" variant="standard"

                                value={heading3}
                                onChange={e => setHeading3(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => {
                                setAddSubAccor2(false)
                            }} >
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Hello hello hello !!!!!
                    </Typography>

                </AccordionDetails>
            </Accordion>
        </div>)
    }

    const addSubAccordion = () => {
        return (<div>
            <Accordion expanded={expanded2}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header"
                    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} onClick={() => {setExpanded2(!expanded2)}} />}
                >
                    <Grid container spacing={1}>
                        <Grid item xs={10}>
                            <TextField id="standard-basic" variant="standard"

                                value={heading2}
                                onChange={e => setHeading2(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => {
                                setAddSubAccor(false)
                            }} >
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={1}>
                        <Grid item xs={10}>
                            <Typography>
                                Hello block 2!!!!!!
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Button size="small" variant="outlined" color="primary" onClick={() => setAddSubAccor2(true)}
                            >Add</Button>
                        </Grid>
                    </Grid>
                    {addSubAccor2 && addSubAccordion2()}
                </AccordionDetails>
            </Accordion>
        </div>)
    }

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
    }));

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor:
            theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, .05)'
                : 'rgba(0, 0, 0, .03)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
        '& MuiAccordionSummary-root Mui-expanded':{
            backgroundColor : 'blue'
        }
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" style={{ padding: '20px' }}>
                <Button variant="contained" onClick={() => setCreate(true)} style={{ margin: '20px' }}>Create</Button>
                {create && <Accordion
                    expanded={expanded}
                >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"
                        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} onClick={() => setExpanded(!expanded)} />}>
                        <Grid container spacing={1}>
                            <Grid item xs={10}>
                                <TextField id="standard-basic" variant="standard"
                                    value={heading}
                                    onChange={e => setHeading(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => { 
                                    setCreate(false); setExpanded(false);setExpanded2(false);setExpanded3(false);setAddSubAccor(false) ;setAddSubAccor2(false)}} >
                                    Delete
                                </Button>
                            </Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={1}>
                            <Grid item xs={10}>
                                <Typography>
                                    Hello block 1
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Button size="small" variant="outlined" color="primary" onClick={() => setAddSubAccor(true)}
                                >Add</Button>
                            </Grid>
                        </Grid>
                        {addSubAccor && addSubAccordion()}
                    </AccordionDetails>
                </Accordion>
                }

            </Container>
        </React.Fragment>
    );
}

export default CreateAccordion;