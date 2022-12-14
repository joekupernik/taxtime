import Jumbotron from "./Jumbotron";
//import ContactForm from "./ContactForm";
import Grid from "@mui/material/Grid";
import ContactCard from "./ContactCard";

export default function Contact() {
    return(
        <>
        <Jumbotron/>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={{ xs: 1, sm: 2, md: 3 }} justifyContent='center'>
        <Grid item xs={12} sm={6} >
            <ContactCard/>
        </Grid>
        </Grid>
        </>
    );
}